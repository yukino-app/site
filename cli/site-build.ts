import { join } from "path";
import spawn from "cross-spawn";
import { copyFile, copy } from "./utils/copy";

const dest = join(__dirname, "../dist");

const start = () => {
    const proc = spawn("yarn", ["build"], {
        env: process.env,
        cwd: join(__dirname, "../site"),
        shell: true,
        stdio: "inherit",
    });

    proc.on("exit", async (code) => {
        if (code == 0) {
            const built = join(__dirname, "../site/dist");
            await copyFile(join(built, "index.html"), join(built, "404.html"));
            await copy(built, dest);
        }

        process.exit(code ?? 0);
    });
};

start();
