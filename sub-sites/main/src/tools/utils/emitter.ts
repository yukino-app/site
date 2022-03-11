export type EmitterListener<T> = (value: T) => void;

export class SingleEmitter<T> {
    listeners: EmitterListener<T>[] = [];

    dispatch(value: T) {
        this.listeners.forEach((x) => x(value));
    }

    listen(listener: EmitterListener<T>) {
        this.listeners.push(listener);
        return () => {
            this.listeners = this.listeners.filter((x) => x !== listener);
        };
    }
}
