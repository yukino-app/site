const markdown = require("marked");

module.exports = (content) => {
    return markdown(content);
}

module.exports.inline = (content) => {
    return markdown.parseInline(content);
}