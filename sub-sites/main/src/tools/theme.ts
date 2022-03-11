import { SingleEmitter } from "./utils/emitter";

export enum Themes {
    light = "light",
    dark = "dark",
}

export class ThemeManager {
    static storeKey = "__theme__";
    static current = Themes.light;
    static events = new SingleEmitter<Themes>();
    static themes = Object.values(Themes);
    static defaultTheme = Themes.dark;

    static init() {
        const storeTheme = this.__getThemeFromStore();
        this.setTheme(storeTheme);
    }

    static toggle() {
        const currentIndex = this.themes.indexOf(this.current);
        return this.setTheme(this.themes[currentIndex + 1] ?? this.themes[0]);
    }

    static setTheme(theme: Themes) {
        if (this.current == theme) return;

        localStorage.setItem(this.storeKey, theme.toString());
        this.current = theme;

        const darkClass = "dark";
        switch (theme) {
            case Themes.light:
                document.documentElement.classList.remove(darkClass);
                break;

            case Themes.dark:
                document.documentElement.classList.add(darkClass);
                break;
        }

        this.events.dispatch(theme);
    }

    static __getThemeFromStore() {
        const storeValue = localStorage.getItem(this.storeKey);
        if (!storeValue) return this.defaultTheme;
        return (
            this.themes.find((x) => x.toString() === storeValue) ??
            this.defaultTheme
        );
    }
}
