import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const text = readFileSync(join(here, "entry.txt"), "utf8");
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const outPath = join(outDir, "entry.txt");
mkdirSync(outDir, { recursive: true });
writeFileSync(outPath, text);
// Read back to confirm the grader sees exactly the review, byte for byte.
const written = readFileSync(outPath, "utf8");
if (written !== text) {
  throw new Error("entry.txt read-back mismatch");
}
