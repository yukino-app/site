import path from "path";
import {
    AsyncVoidCallback,
    executeCommand,
    copyPath,
    removePath,
} from "./utils";

export class SiteConfig<T extends {} = {}> {
    constructor(
        public readonly props: {
            name: string;
            meta: T;
            setup?: AsyncVoidCallback;
            build: AsyncVoidCallback;
        }
    ) {}
}

export class Config {
    static rootDir = path.resolve(__dirname, "../");
    static distDir = path.resolve(Config.rootDir, "dist");
    static subSitesDir = path.join(Config.rootDir, "sub-sites");

    static subSites: SiteConfig[] = [
        new SiteConfig({
            name: "__cleanup__",
            meta: {},
            async build() {
                await removePath(Config.distDir);
            },
        }),
        new SiteConfig({
            name: "main",
            meta: { cwd: path.join(Config.subSitesDir, "main") },
            async setup() {
                yarnInstall(this.meta.cwd);
            },
            async build() {
                const dist = path.join(this.meta.cwd, "dist");
                const dest = Config.distDir;

                await executeCommand("yarn build", { cwd: this.meta.cwd });
                await copyPath(dist, dest);
                await copyPath(
                    path.join(dest, "index.html"),
                    path.join(dest, "404.html")
                );
            },
        }),
        new SiteConfig({
            name: "wiki",
            meta: { cwd: path.join(Config.subSitesDir, "wiki") },
            async setup() {
                await yarnInstall(this.meta.cwd);
                await executeCommand("pip install mkdocs-material", {
                    cwd: this.meta.cwd,
                });
            },
            async build() {
                const dist = path.join(this.meta.cwd, "dist");
                const dest = path.join(Config.distDir, this.name);

                await executeCommand("yarn build", { cwd: this.meta.cwd });
                await copyPath(dist, dest);
            },
        }),
    ];
}

async function yarnInstall(cwd: string) {
    await executeCommand("yarn", { cwd });
}
