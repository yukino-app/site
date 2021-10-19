export type ThemerListener = (isDark: boolean) => void | Promise<void>;

export class Themer {
    static key = "dark-theme";
    static className = "dark";
    static isDark = false;
    static listeners: ThemerListener[] = [];

    static update() {
        switch (localStorage.getItem(this.key)) {
            case "0":
                this.isDark = false;
                break;

            case "1":
                this.isDark = true;
                break;

            default:
                this.isDark = matchMedia(
                    "(prefers-color-scheme: dark)"
                ).matches;
                break;
        }

        if (this.isDark) {
            document.documentElement.classList.add(this.className);
        } else {
            document.documentElement.classList.remove(this.className);
        }
        this.listeners.forEach((x) => x(this.isDark));
    }

    static swap() {
        localStorage.setItem(this.key, this.isDark ? "0" : "1");
        this.update();
    }
}
