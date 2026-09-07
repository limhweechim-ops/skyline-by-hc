import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArticleCard, Shell } from "./components";
import { articles, topics } from "./content";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

export default function Home() {
  return <Shell>
    <section className="hero"><p className="eyebrow">Skyline by HC · Singapore</p><h1>Developer decisions shape construction outcomes <em>long before work begins on site.</em></h1><div className="hero-bottom"><div><p>I’m Lim Hwee Chim, a Singapore property development leader. I write about the decisions, interfaces and human judgement behind the built environment.</p><p className="hero-mission">Hard-won project lessons, made useful for the next decision.</p></div><div className="hero-actions"><Link className="button primary" href="/articles">Start with selected articles <span>→</span></Link><Link className="text-link" href="/about">About Lim Hwee Chim <span>→</span></Link></div></div></section>
    <section className="feature"><div className="feature-label"><span>Featured essay</span><span>01</span></div><div className="feature-copy"><p className="eyebrow">{articles[0].topic} · {articles[0].read} read</p><h2><Link href={`/articles/${articles[0].slug}`}>{articles[0].title}</Link></h2><p>{articles[0].dek}</p><Link className="read-link" href={`/articles/${articles[0].slug}`}>Read the essay <span>↗</span></Link></div><Link className="feature-photo" href={`/articles/${articles[0].slug}`} aria-label={`Read ${articles[0].title}`}><Image unoptimized src="/images/articles/one-camera-many-agencies-one-project-reality/whole-of-government-site-coordination.webp" alt="Project and regulatory teams coordinating on site during virtual inspection" fill sizes="(max-width: 800px) 100vw, 38vw" style={{objectFit:"cover"}} /></Link></section>
    <section className="latest section-pad"><div className="section-head"><div><p className="eyebrow">Start here</p><h2>Three ways into the work.</h2><p className="section-intro">A selection across delivery, regulation and technology—the recurring places where upstream choices become visible downstream.</p></div><Link className="text-link" href="/articles">View all articles <span>→</span></Link></div><div className="article-grid">{[articles[1],articles[2],articles[4]].map((a,i)=><ArticleCard key={a.slug} article={a} index={i+1} showThumbnail/>)}</div></section>
    <section className="homepage-routing section-pad" aria-labelledby="homepage-routing-heading">
      <div className="routing-intro">
        <p className="eyebrow">Choose your next step</p>
        <h2 id="homepage-routing-heading">What brings you here?</h2>
        <p>Skyline can be entered through a project problem, an industry question or a conversation worth continuing.</p>
      </div>
      <div className="routing-grid">
        <article>
          <span>01</span>
          <h3>Explore developer-side lessons</h3>
          <p>Read practical essays on the decisions, interfaces and information that shape project outcomes.</p>
          <Link className="button" href="/topics">Explore the topics <span>→</span></Link>
        </article>
        <article>
          <span>02</span>
          <h3>Compare notes on a project problem</h3>
          <p>Share a difficult interface, PPVC issue, delivery constraint or experiment worth testing.</p>
          <Link className="button" href="/connect">Send HC a note <span>→</span></Link>
        </article>
        <article>
          <span>03</span>
          <h3>Speaking or media enquiry</h3>
          <p>Invite HC to contribute a practitioner perspective on development, construction delivery, technology or regulation.</p>
          <Link className="button" href="/connect?type=speaking">Start a conversation <span>→</span></Link>
        </article>
      </div>
    </section>
    <section className="topics-home section-pad"><div className="topics-intro"><p className="eyebrow">The body of work</p><h2>Five lenses.<br/>One connected system.</h2><p>Construction is often treated as a site problem. Skyline looks further upstream—at how developer intent travels through policy, procurement, design and delivery.</p></div><div className="topic-list">{topics.map((t,i)=><Link href={`/topics/${t.slug}`} key={t.slug}><span>{String(i+1).padStart(2,"0")}</span><strong>{t.title}</strong><i>→</i></Link>)}</div></section>
    <section className="beliefs section-pad" aria-labelledby="beliefs-heading"><div className="beliefs-intro"><p className="eyebrow">What guides Skyline by HC</p><h2 id="beliefs-heading">Three beliefs behind the work.</h2><p>Skyline by HC is shaped by three beliefs about how the built environment can be understood, improved and shared.</p></div><div className="belief-grid"><article><span>01</span><h3>Reveal the invisible work.</h3><p>Buildings are shaped long before construction becomes visible. Skyline traces outcomes back to the decisions, information, interfaces and people behind them—making often-unseen contributions easier to understand.</p></article><article><span>02</span><h3>Turn hard problems into disciplined experiments.</h3><p>Project difficulties can become questions to investigate: understand the system, test a practical intervention and examine what genuinely changes.</p></article><article><span>03</span><h3>Never waste a lesson.</h3><p>Hard-won experience should not disappear into archived emails or individual memory. Skyline turns project observations into reusable principles so future decisions—and other practitioners—can begin further ahead.</p></article></div><p className="beliefs-principle">Together, these beliefs support one central idea: better downstream outcomes begin with better upstream conditions.</p></section>
    <section className="quote"><blockquote>“Good developer interventions often create invisible value—in delays, disputes and variations that never occur.”</blockquote><p>— A recurring Skyline principle</p></section>
    <section className="dispatch section-pad"><div><p className="eyebrow">Connect</p><h2>Bring an interesting problem.</h2></div><p>If you are working through a construction issue, testing an idea, or see something worth discussing, feel free to get in touch.</p><Link className="button" href="/connect">Connect <span>→</span></Link></section>
  </Shell>;
}

