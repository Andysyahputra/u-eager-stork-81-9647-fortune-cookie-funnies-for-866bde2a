import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY = "Your code compiles; the tests just filed a restraining order.";

// Gate guard: the entry must be 1-120 characters and not only whitespace.
// Fail loudly instead of writing an invalid entry.
if (ENTRY.length < 1 || ENTRY.length > 120) {
  throw new Error(
    `entry length ${ENTRY.length} is outside the 1-120 character gate`,
  );
}
if (ENTRY.trim().length === 0) {
  throw new Error("entry is only whitespace, failing the gate");
}
if (ENTRY.includes("\n") || ENTRY.includes("\r")) {
  throw new Error("entry must be a single line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
