#!/usr/bin/env node

import glob from "glob";
import child_process from "child_process";
import { promisify } from "util";

const globpts = { nonull: true };
const parts = process.argv.slice(2);
const cmd = parts.map((pattern) => glob.sync(pattern, globpts)).flat();
const res = child_process.spawnSync(cmd[0], cmd.slice(1), {
  stdio: "inherit",
});
process.exitCode = res.status;
