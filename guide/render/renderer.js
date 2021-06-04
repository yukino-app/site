module.exports = (template, data) => {
    template = template.replace(/{{ ?.*? ?}}/g, (rv) => eval(rv));
    return template;
};
