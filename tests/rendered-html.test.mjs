import assert from "node:assert/strict";
import { access } from "node:fs/promises";
import path from "node:path";
import test from "node:test";
import { fileURLToPath } from "node:url";

const developmentPreviewMeta =
  /<meta(?=[^>]*\bname=["']codex-preview["'])(?=[^>]*\bcontent=["']development["'])[^>]*>/i;

const rootDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const articleSlugs = [
  "bet-is-expiring",
  "top-90-day-stress-test",
  "champagne-lasts-ten-minutes",
  "substation-went-underground",
  "household-shelter-on-the-road",
  "robotic-dog",
  "whole-of-government-top",
];
const publicRoutes = [
  "/",
  "/about",
  "/articles",
  ...articleSlugs.map((slug) => `/articles/${slug}`),
  "/topics",
  "/speaking",
  "/contact",
];

async function loadWorker() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}-${Math.random()}`);
  return (await import(workerUrl.href)).default;
}

async function render(worker, pathname) {
  return worker.fetch(
    new Request(new URL(pathname, "http://localhost"), {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}

test("renders development preview metadata", async () => {
  const worker = await loadWorker();
  const response = await render(worker, "/");

  assert.equal(response.status, 200);
  assert.match(
    response.headers.get("content-type") ?? "",
    /^text\/html\b/i,
  );
  assert.match(await response.text(), developmentPreviewMeta);
});

test("all public pages and article routes render successfully", async () => {
  const worker = await loadWorker();

  for (const route of publicRoutes) {
    const response = await render(worker, route);
    assert.equal(response.status, 200, `${route} returned ${response.status}`);
    assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);
    assert.match(await response.text(), /<main[\s>]/i, `${route} has no main content`);
  }
});

test("every internal page link resolves and every local image exists", async () => {
  const worker = await loadWorker();
  const links = new Set();
  const images = new Set();

  for (const route of publicRoutes) {
    const html = await (await render(worker, route)).text();

    for (const match of html.matchAll(/\bhref=["']([^"']+)["']/gi)) {
      const url = new URL(match[1], "http://localhost");
      if (
        url.origin === "http://localhost" &&
        !url.pathname.startsWith("/assets/") &&
        !url.pathname.startsWith("/_next/")
      ) {
        links.add(url.pathname);
      }
      if (url.origin === "http://localhost" && url.pathname.startsWith("/assets/")) {
        images.add(url.pathname);
      }
    }
    for (const match of html.matchAll(/\bsrc=["']([^"']+)["']/gi)) {
      const url = new URL(match[1], "http://localhost");
      if (url.origin === "http://localhost" && !url.pathname.startsWith("/_next/")) {
        images.add(url.pathname);
      }
    }
  }

  for (const pathname of links) {
    const response = await render(worker, pathname);
    assert.equal(response.status, 200, `Internal link ${pathname} returned ${response.status}`);
  }
  for (const pathname of images) {
    const baseDir = pathname.startsWith("/assets/") ? "dist/client" : "public";
    await access(path.join(rootDir, baseDir, pathname.replace(/^\//, "")));
  }
});

test("unknown article routes return not found", async () => {
  const worker = await loadWorker();
  const response = await render(worker, "/articles/not-a-real-article");
  assert.equal(response.status, 404);
});
