import type { Metadata } from "next";
import { ArticleCard, Shell } from "../../components";
import { articles } from "../../content";

const title = "Construction Delivery & TOP";
const description =
  "Developer-side articles on construction coordination, quality, commissioning, authority clearances, maintainability and the decisions that shape successful completion.";

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
  const relatedArticles = articles.filter(
    (article) => article.topic === "Construction Delivery & TOP",
  );
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
    hasPart: relatedArticles.map((article) => ({
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
        <p>
          Completion problems rarely begin at completion. They accumulate through
          unresolved interfaces, late decisions, weak quality gates and information
          that reaches the site too slowly. These articles examine the developer-side
          coordination needed to turn design intent into a durable, maintainable building.
        </p>
      </section>
      <section className="archive" aria-label="Construction delivery and TOP articles">
        {relatedArticles.map((article, index) => (
          <ArticleCard key={article.slug} article={article} index={index + 1} />
        ))}
      </section>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
    </Shell>
  );
}
