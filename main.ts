// One Line, One Laugh: Roast Your Fridge — entry program (program/v1).
// Writes exactly one line (<=200 chars) roasting the entrant's phone to
// /output/entry.txt, i.e. $MAKEFUN_OUTPUT_DIR/entry.txt.
// The roast: the phone dies at 1% the moment directions are needed, yet
// somehow survives three hours of doomscrolling in bed — a specific,
// recognisable detail with the twist landing in the last few words.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const line =
  "My phone dies at 1% the second I need directions, then somehow survives three hours of doomscrolling in bed.";

// The gate requires 1-200 characters, a single line, not only whitespace.
if (line.length < 1 || line.length > 200 || line.includes("\n")) {
  throw new Error(`entry line must be 1-200 chars on one line, got ${line.length}`);
}

const outDir =
  process.env.MAKEFUN_OUTPUT_DIR ??
  join(dirname(fileURLToPath(import.meta.url)), "output");
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line, "utf8");
