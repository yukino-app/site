export const scrollToDownloads = () => {
    const downloads = document.getElementById("download");
    if (downloads) {
        window.scrollTo({
            top: downloads.offsetTop - 100,
            behavior: "smooth",
        });
    }
};

export const constants = {
	urls: {
		guides: "https://zyrouge.github.io/yukino-app/guides"
	}
}
