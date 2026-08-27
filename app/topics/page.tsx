import type { Metadata } from "next";
import Link from "next/link";
import { Shell } from "../components";
import { topics } from "../content";

export const metadata: Metadata = {
  title: "Topics",
  description:
    "Five connected lenses for exploring Lim Hwee Chim’s developer-side writing on strategy, leadership, construction delivery, technology, productivity, policy and sustainability.",
  alternates: { canonical: "/topics" },
};

export default function Topics() {
  return (
    <Shell>
      <section className="page-hero">
        <p className="eyebrow">Topics</p>
        <h1>Five lenses. One connected system.</h1>
        <p>
          Each article has one primary home, while related reading follows the
          interfaces between strategy, leadership, delivery, technology and policy.
        </p>
      </section>
      <section className="topic-index">
        {topics.map((topic, index) => (
          <article id={topic.slug} key={topic.slug}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <div>
              <h2>
                <Link href={`/topics/${topic.slug}`}>{topic.title}</Link>
              </h2>
              <p>{topic.description}</p>
              <p><strong>Developer-side question:</strong> {topic.question}</p>
            </div>
            <Link
              className="arrow"
              href={`/topics/${topic.slug}`}
              aria-label={`Explore ${topic.title}`}
            >
              ↗
            </Link>
          </article>
        ))}
      </section>
    </Shell>
  );
}
