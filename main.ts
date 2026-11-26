// One-star review of sleep: reads entry.txt next to this script and
// writes it byte-for-byte to $MAKEFUN_OUTPUT_DIR/entry.txt.
// Plain JavaScript, no dependencies, no network, deterministic.
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const MAX_CHARS = 160;

// validateEntry enforces the kit gate: a single non-blank line of
// 1 to 160 characters. It throws on the first rule the text breaks,
// so a bad entry fails loudly instead of shipping a silent invalid file.
function validateEntry(text) {
  if (!text || !text.trim()) {
    throw new Error("entry.txt is empty");
  }
  if (text.includes("\n") || text.includes("\r")) {
    throw new Error("entry.txt must be a single line");
  }
  if (text.length > MAX_CHARS) {
    throw new Error("entry.txt is " + text.length + " characters, over the 160 cap");
  }
}

const scriptDir = dirname(fileURLToPath(import.meta.url));
const text = readFileSync(join(scriptDir, "entry.txt"), "utf8");
validateEntry(text);

const outDir = process.env.MAKEFUN_OUTPUT_DIR;
if (!outDir) {
  throw new Error("MAKEFUN_OUTPUT_DIR is not set");
}
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), text, "utf8");
