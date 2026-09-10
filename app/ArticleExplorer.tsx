"use client";

import { useMemo, useState } from "react";
import { ArticleCard } from "./components";
import { articles, topics } from "./content";

export default function ArticleExplorer() {
  const [query, setQuery] = useState("");
  const [topic, setTopic] = useState("all");
  const [order, setOrder] = useState("newest");
  const results = useMemo(() => articles.filter(article => {
    const matchesTopic = topic === "all" || article.topic === topic;
    const text = [article.title, article.dek, article.topic, ...article.tags].join(" ").toLocaleLowerCase();
    return matchesTopic && query.toLocaleLowerCase().trim().split(/\s+/).every(word => text.includes(word));
  }).sort((a, b) => order === "shortest" ? parseInt(a.read) - parseInt(b.read) : b.publishAt.localeCompare(a.publishAt)), [query, topic, order]);
  function reset() { setQuery(""); setTopic("all"); setOrder("newest"); }
  return <section className="article-explorer" aria-label="Explore writing">
    <div className="explorer-controls">
      <label className="search-field" htmlFor="article-search">Search the writing<input id="article-search" type="search" placeholder="Try ECI, project memory or TOP…" value={query} onChange={e => setQuery(e.target.value)} /></label>
      <label htmlFor="article-topic">Topic<select id="article-topic" value={topic} onChange={e => setTopic(e.target.value)}><option value="all">All topics</option>{topics.map(t => <option key={t.slug} value={t.title}>{t.title}</option>)}</select></label>
      <label htmlFor="article-order">Reading order<select id="article-order" value={order} onChange={e => setOrder(e.target.value)}><option value="newest">Newest first</option><option value="shortest">Shortest reads</option></select></label>
    </div>
    <div className="explorer-summary"><p role="status" aria-live="polite">{results.length} {results.length === 1 ? "piece" : "pieces"}{query.trim() ? ` matching “${query.trim()}”` : " to explore"}</p>{(query || topic !== "all" || order !== "newest") && <button className="reset-filters" onClick={reset}>Reset filters</button>}</div>
    {results.length ? <div className="archive">{results.map(article => <ArticleCard key={article.slug} article={article} showThumbnail />)}</div> : <div className="explorer-empty"><h2>No writing found.</h2><p>Try a broader phrase or choose another topic.</p><button className="button" onClick={reset}>Show all writing</button></div>}
  </section>;
}
