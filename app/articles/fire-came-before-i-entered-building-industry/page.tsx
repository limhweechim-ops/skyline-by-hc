import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Shell } from "../../components";

const title = "Fire came before I entered the building industry";
const description =
  "A childhood shophouse fire, a modern high-rise disaster, and why fire-safety rules are not bureaucratic friction but society’s most basic promise.";
const canonical = "/articles/fire-came-before-i-entered-building-industry";
const imageRoot = "/images/articles/fire-came-before-i-entered-building-industry";

export const metadata: Metadata = {
  title: `${title} | Skyline by HC`,
  description,
  alternates: { canonical },
  openGraph: {
    title,
    description,
    type: "article",
    publishedTime: "2026-06-03",
    authors: ["Lim Hwee Chim"],
    images: [
      {
        url: `${imageRoot}/fire-night-cover.webp`,
        width: 720,
        height: 405,
        alt: "Wooden shophouses burning at night",
      },
    ],
  },
};

export default function FireBeforeIndustryArticle() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    datePublished: "2026-06-03",
    dateModified: "2026-08-25",
    mainEntityOfPage: `https://limhweechim.com${canonical}`,
    author: {
      "@type": "Person",
      name: "Lim Hwee Chim",
      url: "https://limhweechim.com/about",
    },
    publisher: {
      "@type": "Organization",
      name: "Skyline by HC",
      url: "https://limhweechim.com",
    },
    image: `https://limhweechim.com${imageRoot}/fire-night-cover.webp`,
  };

  return (
    <Shell>
      <article className="article-page">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
        />
        <header>
          <p className="eyebrow">Policy &amp; Regulation</p>
          <h1>{title}</h1>
          <p className="standfirst">When the night turned orange.</p>
          <div className="byline">
            <span>By Lim Hwee Chim</span>
            <span>3 June 2026 · 5 min read</span>
          </div>
        </header>

        <div className="article-body">
          <figure className="article-image article-image-wide">
            <Image
              unoptimized
              src={`${imageRoot}/fire-night-cover.webp`}
              alt="Wooden shophouses burning at night"
              width={720}
              height={405}
              sizes="(max-width: 800px) 90vw, 900px"
              priority
            />
            <figcaption>When the night turned orange.</figcaption>
          </figure>

          <h2>The fire I remember</h2>
          <p className="lead">I was six years old, living in a two-storey wooden shophouse in Pontian, Malaysia. That was 1984. I can&apos;t remember many details anymore, but I remember the colour of that night vividly.</p>
          <p>Woken up in the middle of the night. Adults shouting that it was on fire. We rushed outside the shophouse and stood on the street. As a child, my line of sight wasn&apos;t high, but I remember that fire was enormous. Orange flames lit up the entire street like an unreal neon light. The wind kept blowing. One after another, the second floors of the attached shophouses caught fire and opened. People were screaming. People were running. The speed at which a wooden structure spreads when it meets fire—I still remember it vividly today.</p>

          <figure className="article-image article-image-wide">
            <Image
              unoptimized
              src={`${imageRoot}/wooden-shophouse-fire.webp`}
              alt="A row of wooden shophouses engulfed in fire at night"
              width={720}
              height={700}
              sizes="(max-width: 800px) 90vw, 900px"
            />
            <figcaption>A similar fire involving wooden shophouses in Malaysia.</figcaption>
          </figure>

          <p>Then everything was gone.</p>
          <p>Later, we moved into a relative&apos;s house. In that era of small towns, relationships between people were close. When something happened to one family, the whole street would know. That fire was big news in Pontian because it burned an entire row of shophouses along the main road. But for my father, what burned was more than a building. It was his business. It was his livelihood. It was what the family depended on.</p>
          <p>I still remember how he looked standing in front of that fire. It wasn&apos;t dramatic collapse. It was the silence of an adult suddenly hollowed out.</p>
          <p>Many years later, I slowly realised that some things bury themselves quietly in your body when you&apos;re very young.</p>

          <h2>The alarm never left</h2>
          <p>Then, this past November, I saw the news about the Wang Fuk Court fire in Hong Kong. That was 26 November 2025, in the afternoon, in Hong Kong&apos;s Tai Po District. Not a 1984 story.</p>

          <figure className="article-image article-image-wide">
            <Image
              unoptimized
              src={`${imageRoot}/wang-fuk-court-fire.webp`}
              alt="High-rise residential towers at Wang Fuk Court burning at night"
              width={807}
              height={495}
              sizes="(max-width: 800px) 90vw, 900px"
            />
            <figcaption>Wang Fuk Court fire in Hong Kong, November 2025.</figcaption>
          </figure>

          <p>The complex housed about 4,800 people across eight towers and 1,984 flats. At the time, seven buildings were undergoing renovation, wrapped in bamboo scaffolding and protective netting. Investigators found cigarette ends near the suspected point of origin. The fire spread rapidly upwards along the scaffold nets and scaffolding, then into six adjacent buildings.</p>
          <p>The fire burned for more than 43 hours. Seven buildings were affected. The confirmed toll was 168 dead and 79 injured. Police later confirmed that all recovered remains had been identified and no missing persons remained unaccounted for.</p>
          <p>The deaths were classified as manslaughter. Arrests followed while investigations continued into the renovation works, the materials used and failures of oversight.</p>
          <p>In that moment, I understood: my sensitivity to fire was never just my personal trauma. It was an alarm—this is still happening. And every time it is the same story: we thought we could ignore these “tedious” rules, until they ignored us.</p>

          <h2>What fire codes carry</h2>
          <p>So I still consciously check the nearest emergency exit every time I check into a hotel. I calculate evacuation distances in my head. I notice the direction of fire doors. Even walking into unfamiliar buildings, I instinctively note the evacuation routes.</p>

          <figure className="article-image article-image-portrait">
            <Image
              unoptimized
              src={`${imageRoot}/hotel-fire-escape-plan.webp`}
              alt="Hotel fire escape plan mounted on a guestroom door"
              width={702}
              height={936}
              sizes="(max-width: 800px) 82vw, 520px"
            />
            <figcaption>Always checking the nearest fire exit in a new environment, including hotels.</figcaption>
          </figure>

          <p>Later, working on high-density residential projects in Singapore, I paid special attention to Singapore Civil Defence Force fire codes, evacuation distances, stairwell pressurisation systems, fire-engine access routes, refuge levels and fire compartmentation.</p>
          <p>Many people look at these things and see only compliance. Process. Bureaucratic friction.</p>
          <p>But I can&apos;t see it that way.</p>

          <figure className="article-image article-image-portrait">
            <Image
              unoptimized
              src={`${imageRoot}/firefighting-provision.webp`}
              alt="Firefighting breaching inlet and sprinkler system pipework"
              width={702}
              height={936}
              sizes="(max-width: 800px) 82vw, 520px"
            />
            <figcaption>Firefighting provisions are part of the building&apos;s life-safety system.</figcaption>
          </figure>

          <p>Because almost every one of these regulations is written on someone else&apos;s disaster. And often, it is because we had the rules but chose to ignore them through carelessness, cost-cutting or corruption.</p>
          <p>At Wang Fuk Court, the interim investigation found problems involving the external renovation materials and failures in checking and oversight. Residents had raised fire-safety concerns before the disaster. The rules did exist. The risks were not resolved.</p>
          <p>Evacuation distances exist because people were crushed to death on stairwells. Fire compartmentation exists because people were trapped in rooms where flames spread. Pressurised stairwells exist because people inhaled too much smoke and didn&apos;t make it out. Every fire disaster asks the same question: we have rules, but are we actually following them?</p>
          <p>These codes and standards are not artistic limitations on architects. They are not a cost burden on developers. They are the bottom line of life. They are trust. They are what allows a stranger to sleep safely in a space we built. And they were bought with blood.</p>

          <h2>That is care</h2>
          <p>I want to say this: the next time you see a fire code, notice an evacuation sign when you enter a building, or hear that a project was delayed because of a fire-safety review—stop for a moment.</p>
          <p>Don&apos;t just dismiss these as tedious.</p>
          <p>Try to think: how many fires does it take to write one rule? How many broken families to establish one safety distance?</p>
          <p>How many people are quietly working on these “boring” details, so that you can sleep safely?</p>
          <blockquote>That&apos;s not bureaucracy. That&apos;s care.</blockquote>
          <p>It is the most basic promise we make to each other as a society.</p>

          <p className="original-note">Originally published on <a href="https://www.linkedin.com/pulse/fire-came-before-i-entered-building-industry-hwee-chim-lim-ngnlc/" target="_blank" rel="noreferrer">LinkedIn</a> on 3 June 2026. Factual references to the Wang Fuk Court fire have been updated against official investigation records available in August 2026.</p>
          <p className="author-note">Lim Hwee Chim is a Singapore property development leader and the founder of Skyline by HC, where she writes about how upstream developer decisions shape construction outcomes.</p>
        </div>
      </article>

      <section className="next-read">
        <p className="eyebrow">Continue reading</p>
        <Link href="/articles">Explore the full article library <span>→</span></Link>
      </section>
    </Shell>
  );
}
