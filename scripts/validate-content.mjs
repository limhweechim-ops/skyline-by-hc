import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

const source = await readFile(new URL("../app/content.ts", import.meta.url), "utf8");
const registryStart = source.indexOf("const articleRegistry");
assert.notEqual(registryStart, -1, "Article registry not found");

const registry = source.slice(registryStart);
const entries = [...registry.matchAll(/\{\s*slug:\s*"([^"]+)"([\s\S]*?)\n\s*\},?/g)];
assert.ok(entries.length > 0, "No article entries found");

const canonicalTopics = new Set([
  "development-strategy-procurement",
  "developer-leadership",
  "construction-delivery-top",
  "ppvc-dfma-productivity",
  "technology-ai-digital-delivery",
  "policy-regulation-sustainability",
]);

const todayInSingapore = new Intl.DateTimeFormat("en-CA", {
  timeZone: "Asia/Singapore",
  year: "numeric",
  month: "2-digit",
  day: "2-digit",
}).format(new Date());

const slugs = new Set();
const value = (body, field) =>
  body.match(new RegExp(`\\b${field}:\\s*"([^"]*)"`))?.[1];
const booleanValue = (body, field) =>
  body.match(new RegExp(`\\b${field}:\\s*(true|false)`))?.[1] === "true";

for (const [, slug, body] of entries) {
  assert.ok(!slugs.has(slug), `Duplicate article slug: ${slug}`);
  slugs.add(slug);

  for (const field of ["title", "dek", "date", "publishAt", "status", "primaryTopic", "read"]) {
    assert.ok(value(body, field)?.trim(), `Missing ${field}: ${slug}`);
  }

  const primaryTopic = value(body, "primaryTopic");
  assert.ok(
    canonicalTopics.has(primaryTopic),
    `Invalid primaryTopic: ${slug} -> ${primaryTopic}`,
  );
  assert.ok(/\btags:\s*\[[\s\S]*?\]/.test(body), `Missing tags: ${slug}`);

  const publishAt = value(body, "publishAt");
  const status = value(body, "status");
  assert.match(publishAt, /^\d{4}-\d{2}-\d{2}$/, `Invalid publishAt: ${slug}`);
  assert.ok(
    ["draft", "scheduled", "published"].includes(status),
    `Invalid status: ${slug}`,
  );

  if (status === "published") {
    assert.ok(
      publishAt <= todayInSingapore,
      `Published article has a future date: ${slug}`,
    );
    assert.ok(booleanValue(body, "contentReady"), `Published article is incomplete: ${slug}`);
  }

  if (status === "scheduled") {
    assert.ok(booleanValue(body, "contentReady"), `Scheduled article is incomplete: ${slug}`);
  }
}

console.log(`Validated ${entries.length} article records for ${todayInSingapore} Singapore time.`);
