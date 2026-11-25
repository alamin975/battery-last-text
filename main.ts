// The Battery's Last Text to Its Charger — the phone battery's final
// message to the charger it waited for all day, one line of plain text.
import * as fs from "node:fs";

const entry =
  "You promised 5 minutes. I gave you 11 hours. Goodbye — and delete my browser history.";

// Write the single last-text line exactly as typed, UTF-8, no trailing newline.
function writeEntry(text: string): void {
  fs.mkdirSync("/output", { recursive: true });
  fs.writeFileSync("/output/entry.txt", text, { encoding: "utf8" });
}

writeEntry(entry);
