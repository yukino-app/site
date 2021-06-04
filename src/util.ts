export const scrollToDownloads = () => {
    const downloads = document.getElementById("download");
    if (downloads) {
        window.scrollTo({
            top: downloads.offsetTop - 100,
            behavior: "smooth",
        });
    }
};
