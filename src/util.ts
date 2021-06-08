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
        baseUrl: import.meta.env.BASE_URL,
        guides: `${import.meta.env.BASE_URL}guides/index.html`,
        discord: `${import.meta.env.BASE_URL}discord.html`,
    },
};
