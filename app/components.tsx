import Link from "next/link";
import { articles } from "./content";

export function Header() {
  return <header className="site-header"><Link className="brand" href="/"><span>Lim Hwee Chim</span><small>Skyline by HC</small></Link><nav aria-label="Main navigation"><Link href="/about">About</Link><Link href="/articles">Articles</Link><Link href="/topics">Topics</Link><Link href="/speaking">Speaking &amp; Media</Link><Link href="/contact">Contact</Link></nav></header>;
}
export function Footer() {
  return <footer><div><p className="footer-title">Skyline by HC</p><p>Practitioner writing on the decisions that shape Singapore’s built environment.</p></div><div className="footer-links"><Link href="/articles">Articles</Link><Link href="/about">About</Link><Link href="/contact">Contact</Link></div><p className="copyright">© 2026 Lim Hwee Chim</p></footer>;
}
export function Shell({children}: {children: React.ReactNode}) { return <><Header/><main>{children}</main><Footer/></>; }
export function ArticleCard({article, index}: {article: typeof articles[number], index?: number}) {
  return <article className="article-card"><div className="article-meta"><span>{index ? String(index).padStart(2,"0") : article.topic}</span><span>{article.date}</span></div><h3><Link href={`/articles/${article.slug}`}>{article.title}</Link></h3><p>{article.dek}</p><div className="card-end"><span>{article.read} read</span><Link className="arrow" href={`/articles/${article.slug}`} aria-label={`Read ${article.title}`}>↗</Link></div></article>;
}
