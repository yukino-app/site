import { dirname, join } from "path";
import { copyFile as _copyFile, ensureDir } from "fs-extra";
import readdirp from "readdirp";

export const copyFile = async (from: string, to: string) => {
    await ensureDir(dirname(to));
    await _copyFile(from, to);
};

export const copy = async (from: string, to: string) => {
    await ensureDir(to);
    for await (const entry of readdirp(from)) {
        const { fullPath, path } = entry;
        const fullOutPath = join(to, path);
        await ensureDir(dirname(fullOutPath));
        await copyFile(fullPath, fullOutPath);
    }
};
