"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

type Heading = { id: string; text: string };
export default function ReadingTools() {
  const pathname = usePathname();
  const [headings, setHeadings] = useState<Heading[]>([]);
  const [progress, setProgress] = useState(0);
  const [message, setMessage] = useState("");
  const isEssay = pathname.startsWith("/articles/");
  useEffect(() => {
    if (!isEssay) return;
    const article = document.querySelector<HTMLElement>(".article-body");
    if (!article) return;
    const assigned: HTMLElement[] = [];
    const items = Array.from(article.querySelectorAll<HTMLElement>("h2")).map((heading, index) => {
      if (!heading.id) { heading.id = `essay-section-${index + 1}`; assigned.push(heading); }
      return { id: heading.id, text: heading.textContent || "" };
    }).filter(heading => heading.text);
    const initialFrame = requestAnimationFrame(() => { setHeadings(items); measure(); });
    let frame = 0;
    const measure = () => {
      const rect = article.getBoundingClientRect();
      const start = window.scrollY + rect.top;
      const distance = Math.max(1, article.offsetHeight - window.innerHeight + 120);
      setProgress(Math.min(100, Math.max(0, (window.scrollY - start + 120) / distance * 100)));
    };
    const update = () => { cancelAnimationFrame(frame); frame = requestAnimationFrame(measure); };
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    const observer = new ResizeObserver(update); observer.observe(article);
    return () => { cancelAnimationFrame(initialFrame); cancelAnimationFrame(frame); window.removeEventListener("scroll", update); window.removeEventListener("resize", update); observer.disconnect(); assigned.forEach(h => h.removeAttribute("id")); };
  }, [pathname, isEssay]);
  if (!isEssay) return null;
  async function copyLink() {
    try { await navigator.clipboard.writeText(window.location.href); setMessage("Link copied"); }
    catch { setMessage("Copy the link from your browser’s address bar."); }
  }
  return <div className="reading-tools">
    <div className="reading-progress" aria-hidden="true"><span style={{ transform: `scaleX(${progress / 100})` }} /></div>
    <div className="reading-tools-inner">
      {headings.length > 0 && <details className="essay-contents"><summary>In this essay</summary><nav aria-label="Essay sections">{headings.map(h => <a key={h.id} href={`#${h.id}`} onClick={event => { const details = event.currentTarget.closest("details"); if (details) details.open = false; document.getElementById(h.id)?.setAttribute("tabindex", "-1"); document.getElementById(h.id)?.focus({ preventScroll: true }); }}>{h.text}</a>)}</nav></details>}
      <button className="copy-essay" onClick={copyLink}>Copy essay link</button><span className="copy-status" role="status">{message}</span>
    </div>
  </div>;
}
