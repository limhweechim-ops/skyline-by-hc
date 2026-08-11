import type { Metadata } from "next";
import { ArticleCard, Shell } from "../../components";
import { articles } from "../../content";

const title = "PPVC, DfMA & Construction Productivity";
const description =
  "Developer-side articles on PPVC, DfMA, design coordination, manufacturing, logistics, digital delivery and construction productivity in Singapore.";

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
  const relatedArticles = articles.filter(
    (article) => article.topic === "PPVC, DfMA & Productivity",
  );
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
          PPVC is often presented as a manufacturing solution. In practice, its
          success depends on early design decisions, information continuity,
          logistics and interface coordination. These articles examine the
          developer-side conditions that turn DfMA and construction technology
          into reliable productivity.
        </p>
      </section>
      <section className="archive" aria-label="PPVC, DfMA and productivity articles">
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
