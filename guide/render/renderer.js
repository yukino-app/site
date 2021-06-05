module.exports = (template, data) => {
    template = template.replace(/{{.*?}}/gs, (rv) => eval(rv));
    return template;
};
