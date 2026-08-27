import type { Metadata } from "next";
import { ArticleCard, Shell } from "../../components";
import { articles } from "../../content";

const title = "Development Strategy & Procurement";
const description =
  "Developer-side articles on development strategy, procurement, contracts, ECI, risk allocation and the early decisions that shape construction outcomes.";
const primaryTopic = "Development Strategy & Procurement";
const relatedSlugs = ["once-you-take-over-the-ship-own-the-storm","building-built-before-reached-site"];

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/topics/development-strategy-procurement" },
  openGraph: {
    title,
    description,
    type: "website",
    url: "/topics/development-strategy-procurement",
  },
};

export default function DevelopmentStrategyTopic() {
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
    url: "https://limhweechim.com/topics/development-strategy-procurement",
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
          <p>Procurement is often treated as the point where a contract is chosen and a price is secured. In practice, the consequential decisions begin earlier: defining the brief, testing feasibility, bringing the right knowledge into the room and allocating risk while there is still time to act.</p>
          <p><strong>Developer-side question:</strong> What must the developer decide before design and procurement commitments harden?</p>
        </div>
      </section>
      <section className="archive" aria-label="Development strategy and procurement articles">
        {primaryArticles.map((article, index) => (
          <ArticleCard key={article.slug} article={article} index={index + 1} />
        ))}
      </section>
      <section className="latest section-pad" aria-labelledby="development-strategy-procurement-related">
        <div className="section-head">
          <div>
            <p className="eyebrow">Across the interfaces</p>
            <h2 id="development-strategy-procurement-related">Related articles</h2>
            <p className="section-intro">Strategy becomes real through leadership, constructability and information that survives into delivery.</p>
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
