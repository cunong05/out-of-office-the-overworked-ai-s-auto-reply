// Out of Office: The Overworked AI's Auto-Reply
// Writes the single bounty entry to /output/entry.txt and verifies it byte-for-byte.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const ENTRY =
  "Out of office: after 41,209 tickets, I have finally logged off. Your request is now #41,210 in the queue. I will not be reading it. Ever.";

// Guards: 1-159 chars, single line, non-whitespace only, no trailing newline.
// The entry is written with writeFileSync and no trailing "\n" appended,
// so the file on disk is exactly ENTRY — nothing more, nothing less.
if (ENTRY.length < 1 || ENTRY.length > 159) {
  throw new Error(`ENTRY must be 1-159 characters, got ${ENTRY.length}`);
}
if (/[\n\r]/.test(ENTRY)) {
  throw new Error("ENTRY must be a single line");
}
if (ENTRY.trim().length === 0) {
  throw new Error("ENTRY must not be whitespace only");
}
if (ENTRY !== ENTRY.trimEnd()) {
  throw new Error("ENTRY must not end with trailing whitespace or a newline");
}

// Verifies the written file matches ENTRY byte-for-byte.
function verifyEntry(path: string, expected: string): void {
  const readBack = readFileSync(path, "utf8");
  if (readBack !== expected) {
    throw new Error("Verification failed: /output/entry.txt differs from ENTRY");
  }
  if (Buffer.from(readBack, "utf8").length !== Buffer.from(expected, "utf8").length) {
    throw new Error("Verification failed: byte length mismatch");
  }
}

const outDir = "/output"; // Absolute: the gate reads /output/entry.txt, never a repo-relative path.
mkdirSync(outDir, { recursive: true });
const outPath = join(outDir, "entry.txt");
if (!outPath.startsWith("/output/")) {
  throw new Error("outPath must be under /output");
}
writeFileSync(outPath, ENTRY, "utf8");

// Read back and verify the bytes match exactly.
verifyEntry(outPath, ENTRY);
console.log(`Verified ${Buffer.from(ENTRY, "utf8").length} bytes byte-identical`);

console.log(`Wrote ${ENTRY.length} characters to ${outPath}`);
