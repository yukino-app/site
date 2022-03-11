import { exec } from "child_process";
import { copyFile, ensureDir, stat, rm } from "fs-extra";
import path from "path";
import readdirp, { EntryInfo } from "readdirp";
import { Readable, Transform } from "stream";

export type AsyncVoidCallback = () => Promise<void>;

export const executeCommand = async (
    command: string,
    { cwd }: { cwd?: string } = {}
) =>
    new Promise((resolve, reject) => {
        exec(command, { cwd: cwd }, (err, stdout) => {
            if (err !== null) return reject(err);
            return resolve(stdout);
        });
    });

export const removePath = async (path: string) =>
    rm(path, {
        recursive: true,
        force: true,
    });

export interface ReadDirStream extends AsyncIterable<string> {}

export const readDirStream = (path: string) =>
    readdirp(path, {
        type: "files",
    }).pipe(
        new Transform({
            objectMode: true,
            transform: (chunk: EntryInfo, _, done) => {
                done(null, chunk.fullPath);
            },
        })
    ) as ReadDirStream;

export const copyPath = async (from: string, to: string) => {
    const stats = await stat(from);

    const files = stats.isFile()
        ? (Readable.from([from]) as ReadDirStream)
        : readDirStream(from);

    for await (const file of files) {
        const dest = path.resolve(to, path.relative(from, file));
        await ensureDir(path.dirname(dest));
        await copyFile(file, dest);
    }
};
