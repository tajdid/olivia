import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

test("server-renders Olivia's portfolio", async () => {
  const html = await readFile(new URL("../.next/server/app/index.html", import.meta.url), "utf8");
  assert.match(html, /<title>Olivia Blackett — PR &amp; Communications<\/title>/i);
  assert.match(html, /PR that earns/);
  assert.match(html, /livy\.blackett@gmail\.com/);
  assert.match(html, /Olivia-Blackett-CV-2026\.pdf/);
  assert.match(html, /linkedin\.com\/in\/olivia-blackett-55094a19b/);
  assert.match(html, /og\.png/);
  assert.doesNotMatch(html, /codex-preview|Your site is taking shape|SkeletonPreview/i);
});
