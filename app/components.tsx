import Image from "next/image";
import Link from "next/link";
import { articles } from "./content";

export function Header() {
  return <header className="site-header"><Link className="brand" href="/"><span>Lim Hwee Chim</span><small>Skyline by HC</small></Link><nav aria-label="Main navigation"><Link href="/about">About</Link><Link href="/articles">Articles</Link><Link href="/topics">Topics</Link><Link href="/connect">Connect</Link></nav></header>;
}
export function Footer() {
  return <footer><div><p className="footer-title">Skyline by HC</p><p>Practitioner writing on the decisions that shape Singapore’s built environment.</p></div><div className="footer-links"><Link href="/articles">Articles</Link><Link href="/about">About</Link><Link href="/connect">Connect</Link></div><p className="copyright">© 2026 Lim Hwee Chim</p></footer>;
}
export function Shell({children}: {children: React.ReactNode}) { return <><Header/><main>{children}</main><Footer/></>; }
export function ArticleCard({article, index, showThumbnail = false}: {article: typeof articles[number], index?: number, showThumbnail?: boolean}) {
  const hasThumbnail = Boolean(showThumbnail && article.thumbnail);
  return <article className="article-card" style={hasThumbnail ? {display:"grid",gridTemplateColumns:"140px 1fr",gap:"24px",alignItems:"start",minHeight:"220px"} : undefined}>
    {hasThumbnail ? <Link href={`/articles/${article.slug}`} aria-label={`Read ${article.title}`} style={{display:"block",position:"relative",width:"140px",height:"95px",overflow:"hidden"}}><Image unoptimized src={article.thumbnail!} alt={article.thumbnailAlt} fill sizes="140px" style={{objectFit:"cover"}} /></Link> : null}
    <div style={hasThumbnail ? {display:"flex",flexDirection:"column",minHeight:"100%"} : undefined}>
      <div className="article-meta"><span>{index ? String(index).padStart(2,"0") : article.topic}</span><span>{article.date}</span></div>
      <h3 style={hasThumbnail ? {margin:"22px 0 14px",fontSize:"24px"} : undefined}><Link href={`/articles/${article.slug}`}>{article.title}</Link></h3>
      <p style={hasThumbnail ? {font:"14px/1.55 Georgia,serif",color:"#53605b",marginTop:0} : undefined}>{article.dek}</p>
      <div className="card-end"><span>{article.read} read</span><Link className="arrow" href={`/articles/${article.slug}`} aria-label={`Read ${article.title}`}>↗</Link></div>
    </div>
  </article>;
}
