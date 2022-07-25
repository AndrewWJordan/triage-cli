import chalk from "chalk";
import { runProcess, rl } from "../utils/helpers.js";

export default async function nsLookup(name) {
    rl.question(
        chalk.yellow(`You entered ${name}, is that correct? (y, yes|n, no): `),
        (confirm) => {
            if (
                confirm.toLowerCase() === "y" ||
                confirm.toLowerCase() === "yes"
            ) {
                runProcess(name, `curl -SILv ${name}`, "curl");
            }
            rl.close();
        }
    );
}
