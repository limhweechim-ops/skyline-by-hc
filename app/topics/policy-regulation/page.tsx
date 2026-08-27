import type { Metadata } from "next";
import { ArticleCard, Shell } from "../../components";
import { articles } from "../../content";

const title = "Policy, Regulation & Sustainability";
const description =
  "A developer-side view of Singapore’s planning rules, authority requirements, transformation incentives, sustainability and long-term built-environment outcomes.";
const primaryTopic = "Policy, Regulation & Sustainability";
const relatedSlugs = ["champagne-lasts-ten-minutes","aluminium-finish-survive-twice","speed-vs-certainty"];

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/topics/policy-regulation" },
  openGraph: {
    title,
    description,
    type: "website",
    url: "/topics/policy-regulation",
  },
};

export default function PolicyRegulationTopic() {
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
    url: "https://limhweechim.com/topics/policy-regulation",
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
          <p>Policy and regulation do more than define what a project may build. They shape incentives, approval pathways, sustainability expectations and the coordination conditions within which the industry works.</p>
          <p><strong>Developer-side question:</strong> How can regulatory intent, commercial feasibility, sustainability and project delivery be reconciled in practice?</p>
        </div>
      </section>
      <section className="archive" aria-label="Policy, regulation and sustainability articles">
        {primaryArticles.map((article, index) => (
          <ArticleCard key={article.slug} article={article} index={index + 1} />
        ))}
      </section>
      <section className="latest section-pad" aria-labelledby="policy-regulation-related">
        <div className="section-head">
          <div>
            <p className="eyebrow">Across the interfaces</p>
            <h2 id="policy-regulation-related">Related articles</h2>
            <p className="section-intro">Policy intent is tested through feasibility, long-term maintainability and the delivery systems available to real projects.</p>
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
