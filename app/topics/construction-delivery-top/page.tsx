import type { Metadata } from "next";
import { ArticleCard, Shell } from "../../components";
import { articles } from "../../content";

const title = "Construction Delivery & TOP";
const description =
  "Developer-side articles on construction coordination, quality, commissioning, authority clearances, maintainability and the decisions that shape successful completion.";
const primaryTopic = "Construction Delivery & TOP";
const relatedSlugs = ["once-you-take-over-the-ship-own-the-storm","substation-went-underground","building-built-before-reached-site"];

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/topics/construction-delivery-top" },
  openGraph: {
    title,
    description,
    type: "website",
    url: "/topics/construction-delivery-top",
  },
};

export default function ConstructionDeliveryTopic() {
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
    url: "https://limhweechim.com/topics/construction-delivery-top",
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
          <p>Completion problems rarely begin at completion. They accumulate through unresolved interfaces, late decisions, weak quality gates and information that reaches the site too slowly.</p>
          <p><strong>Developer-side question:</strong> What information, interfaces and quality gates must be resolved before completion pressure turns them into rework?</p>
        </div>
      </section>
      <section className="archive" aria-label="Construction delivery and TOP articles">
        {primaryArticles.map((article, index) => (
          <ArticleCard key={article.slug} article={article} index={index + 1} />
        ))}
      </section>
      <section className="latest section-pad" aria-labelledby="construction-delivery-top-related">
        <div className="section-head">
          <div>
            <p className="eyebrow">Across the interfaces</p>
            <h2 id="construction-delivery-top-related">Related articles</h2>
            <p className="section-intro">Delivery outcomes are shaped by leadership, regulation and manufacturing decisions made before the final construction push.</p>
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
