import { join } from "path";
import spawn from "cross-spawn";

const start = () => {
    const proc = spawn("yarn", ["dev"], {
        env: process.env,
        cwd: join(__dirname, "../wiki"),
        shell: true,
        stdio: "inherit",
    });

    proc.on("exit", (code) => {
        process.exit(code || 0);
    });
};

start();
