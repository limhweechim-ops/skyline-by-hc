import type { Metadata } from "next";
import { ArticleCard, Shell } from "../../components";
import { articles } from "../../content";

const title = "Development Strategy & Procurement";
const description =
  "Developer-side articles on development strategy, procurement, contracts, ECI, risk allocation and the early decisions that shape construction outcomes.";

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
  const relatedArticles = articles.filter(
    (article) => article.topic === "Development Strategy & Procurement",
  );
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
          Procurement is often treated as the point where a contract is chosen
          and a price is secured. In practice, the more consequential decisions
          begin earlier: defining the development brief, testing feasibility,
          bringing the right knowledge into the room and allocating risk while
          there is still time to act. These articles examine how those upstream
          developer decisions shape delivery long before construction starts.
        </p>
      </section>
      <section
        className="archive"
        aria-label="Development strategy and procurement articles"
      >
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
