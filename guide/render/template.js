const path = require("path");
const fs = require("fs");

const base = path.resolve(__dirname, "../template");
const read = (p) => fs.readFileSync(p).toString();

module.exports = Object.entries({
    page: "page.html",
    navbar: "navbar.html",
    head: "head.html",
    sidebar: "sidebar.html",
    footer: "footer.html",
    toc: "toc.html",
    admonition: "admonition.html",
}).reduce((pv, [key, val]) => {
    const p = path.isAbsolute(val) ? val : path.join(base, val);
    pv[key] = read(p);
    return pv;
}, {});
