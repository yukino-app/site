const path = require("path");
const fs = require("fs");
const marked = require("marked");
const graymatter = require("gray-matter");
const templates = require("./template");
const renderer = require("./renderer");
const glob = require("./glob");
const packageJson = require("../../package.json");
const config = require("../../guide.config");

const isDev = process.env.NODE_ENV === "development";
const routeName = "guides";
const root = path.resolve(__dirname, "..", "..");
const pages = path.resolve(__dirname, "..", "pages");
const outDir = path.resolve(__dirname, "..", "..", "dist", routeName);

const start = async () => {
    fs.rmSync(outDir, {
        recursive: true,
        force: true,
    });

    const baseUrlPrefix = isDev ? "http://localhost:5000" : "";
    config.computed_base_url = `${baseUrlPrefix}${config.base_url}${routeName}`;

    const data = {
        app_name: packageJson.productName,
        config,
        sidebarData: []
    };

    const files = glob(pages);
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

        if (["md", "html"].includes(ext)) {
            const raw = fs.readFileSync(file).toString();
            const opts = {
                template: null,
                out: `${outFile.slice(0, -ext.length)}html`,
                data: {
                    meta: {
						github_page_url: `${config.github_url}${file.replace(root, "").replace(/\\/g, "/")}`
					},
                    content: null
                }
            };

            if (ext === "html") {
                opts.data.content = raw;
                opts.data.meta.title = opts.data.content.match(/<h1>(.*?)<\/h1>/)[1];
            } else {
                const info = graymatter(raw);
                Object.assign(opts.data.meta, info.data);
                opts.template = info.data.template;
                opts.data.content = marked(info.content);
            }
			if (!opts.template) opts.template = "page";

            renderables.push(opts);
            data.sidebarData.push({
                title: opts.data.meta.title,
                url: `${config.computed_base_url}${opts.out.replace(outDir, "")}`.replace(/\\/g, "/")
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
			tocData: []
        };
		const parseTocTag = (cont, tag) => {
			for (const m of cont.matchAll(new RegExp(`<${tag}(.*?)>(.*?)</${tag}>`, "gm"))) {
				const id = m[1].match(/id="(.*?)"/)[1];
				const title = m[2];
				opts.tocData.push({
					title,
					id
				});
			}
		}
		["h1", "h2", "h3"].forEach((t) => {
			parseTocTag(opts.content, t);
		});
		opts.toc = renderer(templates.toc, opts);
		opts.content = renderer(opts.content, opts);
        const html = renderer(templates[file.template], opts);
		fs.writeFileSync(file.out, html);
    }

	fs.writeFileSync(path.join(outDir, "api.json"), JSON.stringify({
		posts: data.sidebarData,
		lastUpdated: Date.now()
	}, null, 4));
};

start();
