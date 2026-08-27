import type { Metadata } from "next";
import { ArticleCard, Shell } from "../../components";
import { articles } from "../../content";

const title = "PPVC, DfMA, Technology & Productivity";
const description =
  "Developer-side articles on PPVC, DfMA, technology, design coordination, manufacturing, logistics, digital delivery and construction productivity in Singapore.";
const primaryTopic = "PPVC, DfMA, Technology & Productivity";
const relatedSlugs = ["contract-matters-timing-more","one-camera-many-agencies-one-project-reality","bet-is-expiring"];

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/topics/ppvc-dfma-productivity" },
  openGraph: {
    title,
    description,
    type: "website",
    url: "/topics/ppvc-dfma-productivity",
  },
};

export default function PpvcTopic() {
  const primaryArticles = articles.filter(
    (article) => article.topic === primaryTopic,
  );
  const relatedArticles = relatedSlugs
    .map((slug) => articles.find((article) => article.slug === slug))
    .filter((article): article is (typeof articles)[number] => Boolean(article));

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: title,
    description,
    url: "https://limhweechim.com/topics/ppvc-dfma-productivity",
    author: {
      "@type": "Person",
      name: "Lim Hwee Chim",
      url: "https://limhweechim.com/about",
    },
    hasPart: primaryArticles.map((article) => ({
      "@type": "Article",
      headline: article.title,
      url: `https://limhweechim.com/articles/${article.slug}`,
    })),
  };

  return (
    <Shell>
      <section className="page-hero split">
        <div>
          <p className="eyebrow">Topic hub</p>
          <h1>{title}</h1>
        </div>
        <div>
          <p>PPVC and digital tools are often presented as technical solutions. In practice, they work only when design, procurement, manufacturing, logistics, information and site operations are integrated early enough.</p>
          <p><strong>Developer-side question:</strong> What must be integrated across design, manufacturing, logistics and digital delivery for technology to produce reliable productivity?</p>
        </div>
      </section>
      <section className="archive" aria-label="PPVC, DfMA, technology and productivity articles">
        {primaryArticles.map((article, index) => (
          <ArticleCard key={article.slug} article={article} index={index + 1} />
        ))}
      </section>
      <section className="latest section-pad" aria-labelledby="ppvc-dfma-productivity-related">
        <div className="section-head">
          <div>
            <p className="eyebrow">Across the interfaces</p>
            <h2 id="ppvc-dfma-productivity-related">Related articles</h2>
            <p className="section-intro">Technology depends on procurement timing, delivery behaviour and regulatory incentives—not the tool alone.</p>
          </div>
        </div>
        <div className="article-grid">
          {relatedArticles.map((article, index) => (
            <ArticleCard key={article.slug} article={article} index={index + 1} />
          ))}
        </div>
      </section>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
    </Shell>
  );
}
