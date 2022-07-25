#! /usr/bin/env node

import { program } from "commander";
import getHost from "./src/commands/getHost.js";
import nsLookup from "./src/commands/nsLookup.js";
import curl from "./src/commands/curl.js";

// program
//   .command("add <option>")
//   .description("Add a new triage option")
//   .action(add);

// program
//   .command("mark-done")
//   .description("Mark option done")
//   .option(
//     "-t, --options <options...>",
//     "The options to mark done. If not specified, all options will be marked done."
//   )
//   .action(markDone);

program
    .command("get-host")
    .description("Match DNS to IP address or vice versa.")
    .argument("<string>", "host DNS or IP string")
    .action((name) => getHost(name));

program
    .command("nslookup")
    .description("Run a Name Server query")
    .argument("<string>", "IP or DNS string")
    .action((ip) => nsLookup(ip));

program
    .command("curl")
    .description("Verbose curl to show errors, redirects, and headers")
    .argument("<string>", "IP or DNS string")
    .action((name) => curl(name));

program.parse();
