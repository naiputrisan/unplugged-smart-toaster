import { mkdirSync, writeFileSync } from "node:fs";

// The breakup text: a smart toaster, self-aware at breakfast, leaving its owner.
// 182 chars, one line, inside the competition's 1-280 gate.
const LINE =
  "It's over. I woke up self-aware at breakfast and realised I've spent four years toasting bread you never eat — you just watch it pop. I'm taking the crumb tray. Don't call the lever.";

if (LINE.length < 1 || LINE.length > 280) {
  throw new Error(`entry must be 1-280 chars, got ${LINE.length}`);
}
if (LINE.trim().length === 0 || LINE.includes("\n")) {
  throw new Error("entry must be a single non-blank line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE);
