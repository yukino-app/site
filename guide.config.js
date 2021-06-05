const isDev = process.env.NODE_ENV === "development";

module.exports = {
    site_name: "Yukino - User Guide",
    base_url: isDev ? "/" : "/yukino-app/",
	github_url: "https://github.com/zyrouge/yukino-app/tree/site"
};
