import type { Metadata } from "next";
import { ArticleCard, Shell } from "../../components";
import { articles } from "../../content";

const title = "Policy & Regulation";
const description =
  "A developer-side view of Singapore’s planning rules, incentives, authority requirements and built-environment transformation.";

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
  const relatedArticles = articles.filter(
    (article) => article.topic === "Policy & Regulation",
  );
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
          Policy and regulation do more than define what a project may build.
          They shape the incentives, approval pathways and coordination
          conditions within which the industry works. These articles examine
          Singapore’s planning rules, authority requirements and transformation
          policies from the developer side—where regulatory intent must
          ultimately become practical delivery.
        </p>
      </section>
      <section className="archive" aria-label="Policy and regulation articles">
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
