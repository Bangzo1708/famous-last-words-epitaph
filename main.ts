import { mkdirSync, writeFileSync } from "node:fs";

// The chosen epitaph: a dying person's last instruction, with one
// final absurd twist. 62 characters, one line, carved in stone.
const EPITAPH =
  "Please water the plants. Not the cactus. It knows what it did.";

const OUTPUT_PATH = "/output/entry.txt";

// The gate requires UTF-8 text of 1-150 characters, a single line,
// and more than whitespace. Fail loudly instead of shipping a
// broken entry.
if (EPITAPH.length < 1 || EPITAPH.length > 150) {
  throw new Error(
    `Epitaph must be 1-150 characters, got ${EPITAPH.length}.`,
  );
}
if (EPITAPH.trim().length === 0) {
  throw new Error("Epitaph must not be only whitespace.");
}
if (EPITAPH.includes("\n") || EPITAPH.includes("\r")) {
  throw new Error("Epitaph must be a single line.");
}

mkdirSync("/output", { recursive: true });
writeFileSync(OUTPUT_PATH, EPITAPH, "utf8");
