import type { Metadata } from "next";
import { ArticleCard, Shell } from "../../components";
import { articles } from "../../content";

const title = "Technology, AI & Digital Delivery";
const description =
  "Developer-side articles on construction technology, AI, digital delivery, reality capture, BIM, data platforms and information flow in Singapore’s built environment.";
const primaryTopic = "Technology, AI & Digital Delivery";
const relatedSlugs = ["one-camera-many-agencies-one-project-reality","building-built-before-reached-site","bet-is-expiring"];

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/topics/technology-ai-digital-delivery" },
  openGraph: {
    title,
    description,
    type: "website",
    url: "/topics/technology-ai-digital-delivery",
  },
};

export default function TechnologyAiDigitalDeliveryTopic() {
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
    url: "https://limhweechim.com/topics/technology-ai-digital-delivery",
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
          <p>Technology creates value only when it improves the project’s operating system: the speed, quality and traceability of information moving between developer, consultants, contractors, authorities and site teams.</p>
          <p><strong>Developer-side question:</strong> Where can technology reduce information latency, strengthen coordination and improve decisions without adding another disconnected layer?</p>
        </div>
      </section>
      <section className="archive" aria-label="Technology, AI and digital delivery articles">
        {primaryArticles.map((article, index) => (
          <ArticleCard key={article.slug} article={article} index={index + 1} />
        ))}
      </section>
      <section className="latest section-pad" aria-labelledby="technology-ai-digital-delivery-related">
        <div className="section-head">
          <div>
            <p className="eyebrow">Across the interfaces</p>
            <h2 id="technology-ai-digital-delivery-related">Related articles</h2>
            <p className="section-intro">Digital tools matter most when they connect with completion readiness, industrialised construction and the regulatory environment rather than operating as isolated technology layers.</p>
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
