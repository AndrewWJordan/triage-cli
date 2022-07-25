import chalk from "chalk";
import { runProcess, rl } from "../utils/helpers.js";

export default async function nsLookup(ip) {
    rl.question(
        chalk.yellow(`You entered ${ip}, is that correct? (y, yes|n, no): `),
        (confirm) => {
            if (
                confirm.toLowerCase() === "y" ||
                confirm.toLowerCase() === "yes"
            ) {
                runProcess(ip, `nslookup ${ip}`, "nsLookup");
            }
            rl.close();
        }
    );
}
