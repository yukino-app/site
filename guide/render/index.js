const templates = require("./template");
const renderer = require("./renderer");
const config = require("../../guide.config");

const start = async () => {
    console.log(renderer(templates.index, config));
};

start();
