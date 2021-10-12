import { join } from "path";
import spawn from "cross-spawn";
import { copy } from "./utils/copy";

const dest = join(__dirname, "../dist");

const start = () => {
    const proc = spawn("yarn", ["build"], {
        env: process.env,
        cwd: join(__dirname, "../site"),
        shell: true,
        stdio: "inherit",
    });

    proc.on("exit", async (code) => {
        if (code == 0) {
            await copy(join(__dirname, "../site/dist"), dest);
        }

        process.exit(code ?? 0);
    });
};

start();
