import type { Metadata } from "next";
import { Shell } from "../components";
import ArticleExplorer from "../ArticleExplorer";

export const metadata: Metadata = {
  alternates: { canonical: "/articles" },
};
export default function Articles(){return <Shell><section className="page-hero split"><div><p className="eyebrow">Article library</p><h1>Writing from the space between intent and delivery.</h1></div><p>Essays and field notes on developer leadership, construction systems, technology, productivity and regulation.</p></section><ArticleExplorer/></Shell>}

