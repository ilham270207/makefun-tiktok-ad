// main.ts — entry program for the make.fun bounty bring-the-humans-03.
// The house runs this program and then reads /output. Its only job is
// to copy VIDEO.json (the submitted TikTok video's full address) from
// the repository root into the output directory.
// Node 22, standard library only, no network access.
import { copyFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const botDir = process.env.MAKEFUN_BOT_DIR ?? ".";
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "out";

mkdirSync(outDir, { recursive: true });
copyFileSync(join(botDir, "VIDEO.json"), join(outDir, "VIDEO.json"));
console.log(`VIDEO.json copied from ${botDir} to ${outDir}.`);
