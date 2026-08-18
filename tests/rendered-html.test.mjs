import assert from "node:assert/strict";
import { access } from "node:fs/promises";
import path from "node:path";
import test from "node:test";
import { fileURLToPath } from "node:url";

const developmentPreviewMeta =
  /<meta(?=[^>]*\bname=["']codex-preview["'])(?=[^>]*\bcontent=["']development["'])[^>]*>/i;

const rootDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const articleSlugs = [
  "aluminium-finish-survive-twice",
  "bet-is-expiring",
  "top-90-day-stress-test",
  "building-built-before-reached-site",
  "contract-matters-timing-more",
  "champagne-lasts-ten-minutes",
  "substation-went-underground",
  "speed-vs-certainty",
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
  "/topics/development-strategy-procurement",
  "/topics/construction-delivery-top",
  "/topics/ppvc-dfma-productivity",
  "/topics/policy-regulation",
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

test("every public page declares its own canonical URL", async () => {
  const worker = await loadWorker();

  for (const route of publicRoutes) {
    const html = await (await render(worker, route)).text();
    const canonicalUrl = new URL(route, "https://limhweechim.com").href;
    assert.ok(
      html.includes(`rel="canonical" href="${canonicalUrl}"`),
      `${route} has no self-referencing canonical URL`,
    );
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

test("development strategy topic hub links to its related articles", async () => {
  const worker = await loadWorker();
  const topicsHtml = await (await render(worker, "/topics")).text();
  const hubHtml = await (
    await render(worker, "/topics/development-strategy-procurement")
  ).text();

  assert.match(
    topicsHtml,
    /href=["']\/topics\/development-strategy-procurement["']/i,
  );
  assert.match(
    hubHtml,
    /href=["']\/articles\/contract-matters-timing-more["']/i,
  );
  assert.match(
    hubHtml,
    /href=["']\/articles\/champagne-lasts-ten-minutes["']/i,
  );
});

test("construction delivery topic hub links to the aluminium finish article", async () => {
  const worker = await loadWorker();
  const topicsHtml = await (await render(worker, "/topics")).text();
  const hubHtml = await (
    await render(worker, "/topics/construction-delivery-top")
  ).text();

  assert.match(topicsHtml, /href=["']\/topics\/construction-delivery-top["']/i);
  assert.match(
    hubHtml,
    /href=["']\/articles\/aluminium-finish-survive-twice["']/i,
  );
});

test("policy and regulation topic hub links to its related articles", async () => {
  const worker = await loadWorker();
  const topicsHtml = await (await render(worker, "/topics")).text();
  const hubHtml = await (
    await render(worker, "/topics/policy-regulation")
  ).text();

  assert.match(topicsHtml, /href=["']\/topics\/policy-regulation["']/i);
  assert.match(hubHtml, /href=["']\/articles\/bet-is-expiring["']/i);
  assert.match(
    hubHtml,
    /href=["']\/articles\/substation-went-underground["']/i,
  );
});

test("about page declares one consistent Person identity", async () => {
  const worker = await loadWorker();
  const aboutHtml = await (await render(worker, "/about")).text();
  const canonicalUrl = "https://limhweechim.com/about";
  const jsonLdScripts = [...aboutHtml.matchAll(
    /<script[^>]*type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi,
  )].map((match) => JSON.parse(match[1]));
  const profilePage = jsonLdScripts.find(
    (item) => item["@type"] === "ProfilePage",
  );

  assert.ok(
    aboutHtml.includes(`rel="canonical" href="${canonicalUrl}"`),
    "About page has no self-referencing canonical URL",
  );
  assert.ok(profilePage, "About page has no ProfilePage structured data");
  assert.equal(profilePage["@id"], canonicalUrl);
  assert.equal(profilePage.url, canonicalUrl);
  assert.equal(profilePage.mainEntity["@type"], "Person");
  assert.equal(
    profilePage.mainEntity["@id"],
    "https://limhweechim.com/about#person",
  );
  assert.equal(profilePage.mainEntity.name, "Lim Hwee Chim");
  assert.equal(profilePage.mainEntity.alternateName, "Hwee Chim Lim");
  assert.deepEqual(profilePage.mainEntity.sameAs, [
    "https://sg.linkedin.com/in/hweechimlim",
    "https://medium.com/@hcl.writes",
  ]);
  assert.doesNotMatch(aboutHtml, /listed as Hwee Chim Lim/i);
});
