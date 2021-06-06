const markdown = require("./markdown");
const templates = require("../template");
const renderer = require("../renderer");

module.exports = (content) => {
    content = content.replace(/:::.*?:::/gs, (r) => {
        const [meta, ...content] = r.slice(3, -3).split("\n");
        const [, type, title] = meta.trim().match(/(.*?)"(.*?)"$/);

        return renderer(templates.admonition, {
            type: type.trim(),
            title: title.trim(),
            content: markdown(content.join("\n").trim()).trim()
        });
    });

    return content;
}