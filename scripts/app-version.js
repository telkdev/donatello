import { execSync } from "child_process";
import fs from "fs";

const commit = execSync("git describe --always").toString().trim();

fs.appendFileSync(".env", `VERSION=${commit}\n`);
