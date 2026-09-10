import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Shell } from "../../components";

const title = "One Project. One Shared Record.";
const description =
  "A field note from IBEW 2026 on what the Grand Dunman Whole-of-Government Virtual Inspection pilot revealed about shared project evidence and earlier issue resolution.";
const canonical = "/notes/one-project-one-shared-record";
const originalUrl =
  "https://www.linkedin.com/posts/hweechimlim_ibew2026-wogvi-virtualtop-share-7503819239179390978-PXq8/";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical },
  openGraph: {
    title,
    description,
    type: "article",
    url: canonical,
    images: [{
      url: "/images/notes/ibew-2026-wog-vi-stage.jpg",
      width: 800,
      height: 800,
      alt: "Lim Hwee Chim speaking about Whole-of-Government Virtual Inspection at IBEW 2026",
    }],
  },
};

export default function FieldNote() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: title,
    description,
    datePublished: "2026-09-10",
    author: {
      "@type": "Person",
      name: "Lim Hwee Chim",
      url: "https://limhweechim.com/about",
    },
    image: "https://limhweechim.com/images/notes/ibew-2026-wog-vi-stage.jpg",
    mainEntityOfPage: `https://limhweechim.com${canonical}`,
    about: ["IBEW 2026", "Whole-of-Government Virtual Inspection", "Grand Dunman"],
  };

  return (
    <Shell>
      <article className="article-page field-note-page">
        <header>
          <p className="eyebrow">Field note · IBEW 2026</p>
          <h1>{title}</h1>
          <p className="standfirst">
            A short reflection after sharing the Grand Dunman Whole-of-Government Virtual Inspection pilot with Han Wei at IBEW 2026.
          </p>
          <div className="byline">
            <span>By Lim Hwee Chim</span>
            <span>10 Sep 2026 · 2 min read</span>
          </div>
        </header>

        <div className="article-body">
          <p className="lead">“If you were the developer, would you volunteer for this at TOP?”</p>
          <p>We did. 😅</p>

          <figure className="article-image field-note-image">
            <Image
              unoptimized
              src="/images/notes/ibew-2026-wog-vi-stage.jpg"
              alt="Lim Hwee Chim speaking about Whole-of-Government Virtual Inspection at IBEW 2026"
              width={800}
              height={800}
              sizes="(max-width: 800px) 90vw, 760px"
              priority
            />
            <figcaption>
              Lim Hwee Chim and Han Wei sharing lessons from the Grand Dunman WOG Virtual Inspection pilot at IBEW 2026.
            </figcaption>
          </figure>

          <p>
            At IBEW 2026, Han Wei and I shared the honest story of piloting Whole-of-Government Virtual Inspection at Grand Dunman—including the 360° camera’s strong opinions about lighting, heat and uploading.
          </p>
          <p>
            The technology was only one part of it. The more important breakthrough was getting different parties to work from one shared project record, allowing issues to be seen and resolved earlier.
          </p>
          <p>
            The topic appeared to resonate. More than a dozen questions came through Pigeonhole during the session. Hopefully, the discussion will help unlock more value from WOG Virtual Inspection and encourage more project teams to push the innovation forward.
          </p>

          <blockquote>One project. One shared record. Many lessons—and thankfully, TOP achieved.</blockquote>

          <p>I will share the presentation notes separately once time permits. I have to admit, I have been rather tied up with many things lately. :P</p>

          <section className="field-note-links" aria-labelledby="related-reading">
            <h2 id="related-reading">Related reading</h2>
            <ul>
              <li><Link href="/articles/one-camera-many-agencies-one-project-reality">One Camera, Many Agencies, One Project Reality</Link></li>
              <li><Link href="/articles/before-construction-can-use-ai-it-has-to-remember">Before Construction Can Use AI, It Has to Remember</Link></li>
              <li><a href={originalUrl} target="_blank" rel="noreferrer">View the original LinkedIn post</a></li>
            </ul>
          </section>

          <p className="author-note">
            Lim Hwee Chim is a Singapore property development leader and the founder of Skyline by HC, where she writes about how upstream developer decisions shape construction outcomes.
          </p>
        </div>
      </article>
      <section className="next-read">
        <p className="eyebrow">Continue reading</p>
        <Link href="/articles">Explore essays and field notes <span>→</span></Link>
      </section>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
    </Shell>
  );
}
