import { exec } from "child_process";
import * as readline from "node:readline";
import * as fs from "fs";
import * as path from "path";

export const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function createSnapshot(id, data, processName) {
  try {
    fs.writeFileSync(path.resolve("src", "snapshots", `${id}-${processName}.txt`), data);
  } catch(e) {
    console.log(`Error while writing snapshot ${id}: ${e}`);
  }
    // console.log("TODO: Compare snapshot by command. Print diff.");
}

export function runProcess(identifier, command, processName) {
    exec(command, (error, stdout, stderr) => {
        if (error) {
            console.log(`error: ${error.message}`);
            return;
        }
        if (stderr) {
            console.log(`stderr: ${stderr}`);
            return;
        }
        // generate snapshot txt file for diffing later
        createSnapshot(identifier, stdout, processName);
        console.log(stdout);
    });
}
