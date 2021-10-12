const path = require("path");
const fs = require("fs");
const graymatter = require("gray-matter");
const minify = require("minify");
const templates = require("./template");
const renderer = require("./renderer");
const glob = require("./glob");
const admonition = require("./components/admonition");
const markdown = require("./components/markdown");
const packageJson = require("../package.json");
const config = require("../guide.config");

const isDev = process.env.NODE_ENV === "development";
const routeName = "guide";
const root = path.resolve(__dirname, "..");
const pages = path.resolve(__dirname, "../pages");
const outDir = path.resolve(__dirname, "../dist", routeName);

const start = async () => {
    fs.rmSync(outDir, {
        recursive: true,
        force: true,
    });

    const baseUrlPrefix = isDev ? "http://localhost:5000" : "";
    config.computed_base_url = `${baseUrlPrefix}${config.base_url}${routeName}`;

    const api = {
        posts: [],
        lastUpdated: Date.now(),
    };
    const data = {
        app_name: packageJson.productName,
        config,
        sidebarData: [],
    };

    const files = glob(pages).sort((a, b) => {
        const { birthtimeMs: at } = fs.lstatSync(a);
        const { birthtimeMs: bt } = fs.lstatSync(b);
        return at - bt;
    });

    const renderables = [];

    for (const file of files) {
        const outFile = file.replace(pages, outDir);
        const dir = path.dirname(outFile);
        try {
            fs.mkdirSync(dir, {
                recursive: true,
            });
        } catch (err) {}

        const ext = file.split(".").pop();

        if (["md", "html", "js", "css"].includes(ext)) {
            const raw = fs.readFileSync(file).toString();
            const fileInfo = fs.lstatSync(file);
            const opts = {
                template: null,
                out: `${outFile.slice(0, -ext.length)}html`,
                data: {
                    meta: {
                        github_page_url: `${config.github_url}${file
                            .replace(root, "")
                            .replace(/\\/g, "/")}`,
                    },
                    content: null,
                },
            };

            if (ext === "html") {
                opts.data.content = raw;
                opts.data.meta.title =
                    opts.data.content.match(/<h1>(.*?)<\/h1>/)[1];
            } else if (ext === "js") {
                fs.writeFileSync(outFile, await minify.js(renderer(raw, data)));
                continue;
            } else if (ext === "css") {
                fs.writeFileSync(outFile, await minify.css(raw));
                continue;
            } else if (ext === "md") {
                const info = graymatter(raw);
                opts.data.content = info.content;
                opts.template = info.data.template;
                Object.assign(opts.data.meta, info.data);

                [admonition, markdown].forEach((plugin) => {
                    opts.data.content = plugin(opts.data.content);
                });
            }
            if (!opts.template) opts.template = "page";
            opts.data.lastEdited = fileInfo.mtime;

            renderables.push(opts);
            data.sidebarData.push({
                title: opts.data.meta.title,
                url: `${config.computed_base_url}${opts.out.replace(
                    outDir,
                    ""
                )}`.replace(/\\/g, "/"),
            });
        } else {
            fs.copyFileSync(file, outFile);
        }
    }

    data.navbar = renderer(templates.navbar, data);
    data.head = renderer(templates.head, data);
    data.sidebar = renderer(templates.sidebar, data);
    data.footer = renderer(templates.footer, data);

    for (const file of renderables) {
        const opts = {
            ...data,
            ...file.data,
            tocData: [],
        };
        ["h1", "h2", "h3"].forEach((tag) => {
            for (const m of opts.content.matchAll(
                new RegExp(`<${tag}(.*?)>(.*?)</${tag}>`, "gm")
            )) {
                const id = m[1].match(/id="(.*?)"/)[1];
                const title = m[2];
                opts.tocData.push({
                    title,
                    id,
                });
            }
        });
        opts.toc = renderer(templates.toc, opts);
        opts.content = renderer(opts.content, opts);
        const html = renderer(templates[file.template], opts);
        fs.writeFileSync(file.out, await minify.html(html));
        const url = `${opts.config.computed_base_url}${file.out.replace(
            outDir,
            ""
        )}`.replace(/\\/g, "/");
        api.posts.push({
            title: opts.meta.title,
            url: url,
            toc: opts.tocData.map((x) => {
                x.url = `${url}#${x.id}`;
                return x;
            }),
        });
    }

    fs.writeFileSync(
        path.join(outDir, "api.json"),
        JSON.stringify(api, null, 4)
    );
};

start();
