const path = require("path");
const fs = require("fs");

const base = path.resolve(__dirname, "..", "template");
const read = (p) => fs.readFileSync(p).toString();

module.exports = Object.entries({
    index: "index.html",
}).reduce((pv, [key, val]) => {
    const p = path.isAbsolute(val) ? val : path.join(base, val);
    pv[key] = read(p);
    return pv;
}, {});
