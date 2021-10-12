export type ThemerListener = (isDark: boolean) => void | Promise<void>;

export class Themer {
    static key = "dark-theme";
    static className = "dark";
    static isDark = false;
    static listeners: ThemerListener[] = [];

    static update() {
        this.isDark = localStorage.getItem(this.key) !== null;
        if (this.isDark) {
            document.documentElement.classList.add(this.className);
        } else {
            document.documentElement.classList.remove(this.className);
        }
        this.listeners.forEach((x) => x(this.isDark));
    }

    static swap() {
        if (this.isDark) {
            localStorage.removeItem(this.key);
        } else {
            localStorage.setItem(this.key, "");
        }
        this.update();
    }
}
