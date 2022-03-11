import { ThemeManager } from "./theme";

export enum LifecycleEvents {
    ready,
}

export type LifecycleListener = () => void;

export class Lifecycle {
    static __completed: Partial<Record<LifecycleEvents, boolean>> = {};

    static __pending: Partial<Record<LifecycleEvents, LifecycleListener[]>> =
        {};

    static init() {
        document.addEventListener("DOMContentLoaded", () => {
            this.__complete(LifecycleEvents.ready);
        });

        this.__addDefaultListeners();
    }

    static onReady = this.__addListener.bind(this, LifecycleEvents.ready);

    static __addListener(event: LifecycleEvents, listener: LifecycleListener) {
        if (this.__completed[event]) return listener();

        if (!this.__pending[event]) this.__pending[event] = [];
        this.__pending[event]!.push(listener);
    }

    static __complete(event: LifecycleEvents) {
        this.__pending[event]?.forEach((x) => x());
        delete this.__pending[event];
    }

    static __addDefaultListeners() {
        this.onReady(ThemeManager.init.bind(ThemeManager));
    }
}
