import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import path from "node:path";
import test from "node:test";
import { fileURLToPath } from "node:url";

const developmentPreviewMeta =
  /<meta(?=[^>]*\bname=["']codex-preview["'])(?=[^>]*\bcontent=["']development["'])[^>]*>/i;

const rootDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const articleSlugs = [
  "one-camera-many-agencies-one-project-reality",
  "aluminium-finish-survive-twice",
  "bet-is-expiring",
  "top-90-day-stress-test",
  "building-built-before-reached-site",
  "contract-matters-timing-more",
  "fire-came-before-i-entered-building-industry",
  "champagne-lasts-ten-minutes",
  "substation-went-underground",
  "once-you-take-over-the-ship-own-the-storm",
  "speed-vs-certainty",
];
const publicRoutes = [
  "/",
  "/about",
  "/articles",
  ...articleSlugs.map((slug) => `/articles/${slug}`),
  "/topics",
  "/topics/development-strategy-procurement",
  "/topics/developer-leadership",
  "/topics/construction-delivery-top",
  "/topics/ppvc-dfma-productivity",
  "/topics/policy-regulation",
  "/connect",
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

test("unpublished placeholder article routes return not found", async () => {
  const worker = await loadWorker();
  const unpublishedSlugs = [
    "household-shelter-on-the-road",
    "robotic-dog",
    "whole-of-government-top",
  ];

  for (const slug of unpublishedSlugs) {
    const response = await render(worker, `/articles/${slug}`);
    assert.equal(response.status, 404, `${slug} returned ${response.status}`);
  }
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

test("homepage and Topics page link directly to all five canonical hubs", async () => {
  const worker = await loadWorker();
  const homepageHtml = await (await render(worker, "/")).text();
  const topicsHtml = await (await render(worker, "/topics")).text();
  const topicPaths = [
    "/topics/development-strategy-procurement",
    "/topics/developer-leadership",
    "/topics/construction-delivery-top",
    "/topics/ppvc-dfma-productivity",
    "/topics/policy-regulation",
  ];

  assert.match(homepageHtml, /Five lenses\./i);
  assert.doesNotMatch(homepageHtml, /href=["']\/topics#/i);

  for (const pathname of topicPaths) {
    const pattern = new RegExp(`href=["']${pathname}["']`, "i");
    assert.match(homepageHtml, pattern, `Homepage does not link to ${pathname}`);
    assert.match(topicsHtml, pattern, `Topics page does not link to ${pathname}`);
  }
});

test("Developer Leadership has one primary home and cross-topic related reading", async () => {
  const worker = await loadWorker();
  const hubHtml = await (await render(worker, "/topics/developer-leadership")).text();

  assert.match(
    hubHtml,
    /href=["']\/articles\/once-you-take-over-the-ship-own-the-storm["']/i,
  );
  assert.match(hubHtml, /Across the interfaces/i);
  assert.match(
    hubHtml,
    /href=["']\/articles\/champagne-lasts-ten-minutes["']/i,
  );
});

test("legacy topic URLs redirect to canonical hubs", async () => {
  const worker = await loadWorker();
  const redirects = new Map([
    ["/topics/technology-productivity", "/topics/ppvc-dfma-productivity"],
    ["/topics/sustainability-built-environment", "/topics/policy-regulation"],
    ["/topics/policy-regulation-sustainability", "/topics/policy-regulation"],
    ["/topics/ppvc-dfma-technology-productivity", "/topics/ppvc-dfma-productivity"],
    ["/topics/construction-delivery", "/topics/construction-delivery-top"],
  ]);

  for (const [source, target] of redirects) {
    const response = await render(worker, source);
    assert.ok([307, 308].includes(response.status), `${source} returned ${response.status}`);
    assert.equal(new URL(response.headers.get("location"), "http://localhost").pathname, target);
  }
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


test("Connect is the sole permanent enquiry route", async () => {
  const worker = await loadWorker();
  const connectHtml = await (await render(worker, "/connect")).text();
  const homepageHtml = await (await render(worker, "/")).text();
  const articleHtml = await (
    await render(worker, "/articles/one-camera-many-agencies-one-project-reality")
  ).text();

  assert.match(
    connectHtml,
    /<title>Connect with Lim Hwee Chim \| Skyline by HC<\/title>/i,
  );
  assert.match(
    connectHtml,
    /<meta(?=[^>]*name=["']description["'])(?=[^>]*content=["']Share a construction problem, project experiment, speaking invitation or industry question with Lim Hwee Chim, founder of Skyline by HC\.["'])[^>]*>/i,
  );
  assert.ok(
    connectHtml.includes(
      'rel="canonical" href="https://limhweechim.com/connect"',
    ),
  );
  assert.match(
    connectHtml,
    /Got an interesting project problem\? Let’s compare notes\./i,
  );

  const enquiryOptions = [
    "Project problem or lesson",
    "PPVC, precast or DfMA",
    "Experiment or research idea",
    "Speaking or media invitation",
    "Other industry conversation",
  ];
  for (const option of enquiryOptions) {
    assert.ok(connectHtml.includes(option), `Missing enquiry option: ${option}`);
  }

  assert.match(homepageHtml, /href=["']\/connect["'][^>]*>Connect\s*</i);
  assert.match(articleHtml, /href=["']\/connect["'][^>]*>Connect\s*</i);

  for (const route of publicRoutes) {
    const html = await (await render(worker, route)).text();
    assert.doesNotMatch(
      html,
      /The form will be connected before the public launch\./i,
      `Legacy form placeholder found on ${route}`,
    );
    assert.doesNotMatch(html, /href=["']\/(?:contact|speaking)["']/i);
  }

  for (const source of ["/contact", "/speaking"]) {
    const response = await render(worker, source);
    assert.ok([301, 308].includes(response.status), `${source} returned ${response.status}`);
    assert.equal(
      new URL(response.headers.get("location"), "http://localhost").pathname,
      "/connect",
    );
  }

  const redirects = await readFile(
    path.join(rootDir, "public", "_redirects"),
    "utf8",
  );
  assert.match(redirects, /^\/contact \/connect 308$/m);
  assert.match(redirects, /^\/speaking \/connect 308$/m);
});


test("homepage routes first-time visitors before the five topic lenses", async () => {
  const worker = await loadWorker();
  const homepageHtml = await (await render(worker, "/")).text();

  const routingIndex = homepageHtml.indexOf("What brings you here?");
  const lensesIndex = homepageHtml.indexOf("Five lenses.");

  assert.ok(routingIndex > -1, "Homepage routing heading is missing");
  assert.ok(lensesIndex > routingIndex, "Homepage routing must appear before Five lenses");
  assert.match(homepageHtml, /href=["']\/topics["'][^>]*>Explore the topics/i);
  assert.match(homepageHtml, /href=["']\/connect["'][^>]*>Send HC a note/i);
  assert.match(
    homepageHtml,
    /href=["']\/connect\?type=speaking(?:&amp;)?["'][^>]*>Start a conversation/i,
  );
  assert.match(homepageHtml, /Explore developer-side lessons/i);
  assert.match(homepageHtml, /Compare notes on a project problem/i);
  assert.match(homepageHtml, /Speaking or media enquiry/i);
});

test("speaking homepage route is supported by Connect form preselection", async () => {
  const formSource = await readFile(
    path.join(rootDir, "app", "connect", "ContactForm.tsx"),
    "utf8",
  );

  assert.match(formSource, /requestedType === "speaking"/);
  assert.match(formSource, /setEnquiryType\("Speaking or media invitation"\)/);
  assert.match(formSource, /value=\{enquiryType\}/);
});
