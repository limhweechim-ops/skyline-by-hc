import Image from "next/image";
import Link from "next/link";
import { articles } from "./content";
import Navigation from "./Navigation";
import ReadingTools from "./ReadingTools";

export function Header() {
  return <header className="site-header"><Link className="brand" href="/"><span>Lim Hwee Chim</span><small>Skyline by HC</small></Link><Navigation/></header>;
}
export function Footer() {
  return <footer><div><p className="footer-title">Skyline by HC</p><p>Practitioner writing on the decisions that shape Singapore’s built environment.</p></div><div className="footer-links"><Link href="/articles">Articles</Link><Link href="/about">About</Link><Link href="/connect">Connect</Link></div><p className="copyright">© 2026 Lim Hwee Chim</p></footer>;
}
export function Shell({children}: {children: React.ReactNode}) { return <><a className="skip-link" href="#main-content">Skip to content</a><Header/><ReadingTools/><main id="main-content" tabIndex={-1}>{children}</main><Footer/></>; }
export function ArticleCard({article, index, showThumbnail = false}: {article: typeof articles[number], index?: number, showThumbnail?: boolean}) {
  const hasThumbnail = Boolean(showThumbnail && article.thumbnail);
  return <article className={`article-card${hasThumbnail ? " has-thumbnail" : ""}`}>
    {hasThumbnail && <Link className="article-thumbnail" href={`/articles/${article.slug}`} aria-label={`Read ${article.title}`}><Image unoptimized src={`${article.thumbnail}?v=${article.publishAt}`} alt={article.thumbnailAlt || article.title} fill sizes="(max-width: 800px) 90vw, 40vw" style={{objectFit:"cover"}} /></Link>}
    <div className="article-card-copy">
      <div className="article-meta"><span>{index ? String(index).padStart(2,"0") : article.topic}</span><time dateTime={article.publishAt}>{article.date}</time></div>
      <h3><Link href={`/articles/${article.slug}`}>{article.title}</Link></h3>
      <p>{article.dek}</p>
      <div className="card-end"><span>{article.read} read</span><Link className="arrow" href={`/articles/${article.slug}`} aria-label={`Read ${article.title}`}>↗</Link></div>
    </div>
  </article>;
}
