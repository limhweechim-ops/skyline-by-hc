import Link from "next/link";
import { Shell } from "../components";
import { topics } from "../content";

export default function Topics() {
  return (
    <Shell>
      <section className="page-hero">
        <p className="eyebrow">Topics</p>
        <h1>Construction is a connected system.</h1>
      </section>
      <section className="topic-index">
        {topics.map((topic, index) => {
          const isPublishedHub = [
            "development-strategy-procurement",
            "construction-delivery-top",
            "ppvc-dfma-productivity",
            "policy-regulation",
          ].includes(topic.slug);
          return (
            <article id={topic.slug} key={topic.slug}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <div>
                <h2>
                  {isPublishedHub ? (
                    <Link href={`/topics/${topic.slug}`}>{topic.title}</Link>
                  ) : (
                    topic.title
                  )}
                </h2>
                <p>{topic.description}</p>
              </div>
              {isPublishedHub ? (
                <Link
                  className="arrow"
                  href={`/topics/${topic.slug}`}
                  aria-label={`Explore ${topic.title}`}
                >
                  ↗
                </Link>
              ) : (
                <i aria-hidden="true">↘</i>
              )}
            </article>
          );
        })}
      </section>
    </Shell>
  );
}
