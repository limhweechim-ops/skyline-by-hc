import type { Metadata } from "next";
import { ArticleCard, Shell } from "../../components";
import { articles } from "../../content";

const title = "Developer Leadership";
const description =
  "Developer-side writing on ownership, governance, escalation, project takeover and the conditions leaders create for consultants, contractors and delivery teams.";
const primaryTopic = "Developer Leadership";
const relatedSlugs = ["champagne-lasts-ten-minutes","contract-matters-timing-more","one-camera-many-agencies-one-project-reality"];

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/topics/developer-leadership" },
  openGraph: {
    title,
    description,
    type: "website",
    url: "/topics/developer-leadership",
  },
};

export default function DeveloperLeadershipTopic() {
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
    url: "https://limhweechim.com/topics/developer-leadership",
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
          <p>Leadership is not only personal decisiveness. It is the design of ownership, information flow and escalation so that difficult truths reach the right people before options disappear.</p>
          <p><strong>Developer-side question:</strong> How should ownership and escalation be designed so problems surface while there is still time to act?</p>
        </div>
      </section>
      <section className="archive" aria-label="Developer leadership articles">
        {primaryArticles.map((article, index) => (
          <ArticleCard key={article.slug} article={article} index={index + 1} />
        ))}
      </section>
      <section className="latest section-pad" aria-labelledby="developer-leadership-related">
        <div className="section-head">
          <div>
            <p className="eyebrow">Across the interfaces</p>
            <h2 id="developer-leadership-related">Related articles</h2>
            <p className="section-intro">Leadership choices become visible in development strategy, procurement timing and how teams prepare for delivery.</p>
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
