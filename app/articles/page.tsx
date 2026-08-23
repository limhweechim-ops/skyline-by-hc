import type { Metadata } from "next";
import { ArticleCard, Shell } from "../components"; import { articles } from "../content";

export const metadata: Metadata = {
  alternates: { canonical: "/articles" },
};
export default function Articles(){return <Shell><section className="page-hero split"><div><p className="eyebrow">Article library</p><h1>Writing from the space between intent and delivery.</h1></div><p>Essays and field notes on developer leadership, construction systems, technology, productivity and regulation.</p></section><section className="archive">{articles.map((a,i)=><ArticleCard key={a.slug} article={a} index={i+1} showThumbnail />)}</section></Shell>}
