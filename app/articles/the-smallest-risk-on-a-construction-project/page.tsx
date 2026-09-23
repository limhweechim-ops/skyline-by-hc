import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Shell } from "../../components";

const slug = "the-smallest-risk-on-a-construction-project";
const canonical = `/articles/${slug}`;
const imageBase = `/images/articles/${slug}`;
const title = "The Smallest Risk on a Construction Project";
const description =
  "A five-millimetre insect, the long journey of a cabinet, and why traceability matters when termites or wood borers surface after handover.";

export const metadata: Metadata = {
  title: `${title} | Skyline by HC`,
  description,
  alternates: { canonical },
  openGraph: {
    title,
    description,
    type: "article",
    url: canonical,
    images: [
      {
        url: `${imageBase}/termite-cabinet-risk-hero.webp`,
        width: 2048,
        height: 1152,
        alt: "The smallest risk on a construction project: a five-millimetre insect and powder beneath a timber cabinet",
      },
    ],
  },
};

export default function SmallestRiskArticle() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    datePublished: "2026-09-23",
    dateModified: "2026-09-23",
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
    image: `https://limhweechim.com${imageBase}/termite-cabinet-risk-hero.webp`,
    keywords: [
      "termites in Singapore",
      "wood-boring beetles",
      "drywood termites",
      "subterranean termites",
      "carpentry quality",
      "construction traceability",
      "timber storage",
    ],
  };

  return (
    <Shell>
      <article className="article-page">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
        />

        <header>
          <p className="eyebrow">Construction Delivery &amp; TOP</p>
          <h1>{title}</h1>
          <p className="standfirst">
            A five-millimetre insect, and the long journey of a cabinet
          </p>
          <div className="byline">
            <span>By Lim Hwee Chim</span>
            <span>23 September 2026 · 8 min read</span>
          </div>
        </header>

        <div className="article-body">
          <p className="lead">The first sign was a small pile of powder.</p>
          <p>
            I was an intern, and the company had built a temporary exhibition in the lobby downstairs. A few weeks in, fine dust began collecting beneath one timber panel. Someone swept it away. It came back. Then we noticed the tiny holes. We called it termites, removed the affected work and never found out where it started. Nobody asked the intern to investigate, which was fortunate. The intern would not have known where to begin.
          </p>
          <p>Years later, I know where to begin.</p>

          <figure className="article-image article-image-wide">
            <Image
              unoptimized
              src={`${imageBase}/termite-cabinet-risk-hero.webp`}
              alt="Graphic introducing the five-millimetre insect risk behind powder found beneath timber cabinetry"
              width={2048}
              height={1152}
              sizes="(max-width: 900px) 92vw, 1100px"
              priority
            />
            <figcaption>
              The visible symptom may be tiny. The investigation behind it is not.
            </figcaption>
          </figure>

          <h2>Not every insect is a termite</h2>
          <p>
            The first thing you learn is that &quot;termite&quot; is often the wrong word. Three different culprits leave three different signs.
          </p>
          <p>
            Wood-boring beetles leave fine, flour-like powder and neat round exit holes. In hindsight, that is almost certainly what we had in the lobby. Drywood termites live entirely inside the timber they eat. They give themselves away with small, hard pellets, often in a tidy heap beneath a wardrobe. Subterranean termites live in the soil and travel into buildings through cracks, joints and concealed routes, often building thin mud tubes as they go.
          </p>

          <figure className="article-image article-image-wide">
            <Image
              unoptimized
              src={`${imageBase}/termites-and-wood-borers-comparison.webp`}
              alt="Comparison of wood-boring beetles, drywood termites and subterranean termites, their signs and likely sources"
              width={2048}
              height={846}
              sizes="(max-width: 900px) 92vw, 1100px"
            />
            <figcaption>
              Identify the pest first. The signs tell the project team where to look and whether the cabinet is likely to be the source.
            </figcaption>
          </figure>

          <p>
            To a homeowner, all three look the same in a photograph. To a developer, they are three different investigations. A drywood colony in one cabinet is a local problem. A beetle in the timber raises questions about everything else made from the same batch. A subterranean colony means the cabinet was never the source, and replacing it would be like mopping the floor under a leaking pipe.
          </p>
          <p>
            Recent cases in Singapore show how varied this can be. At The Tre Ver and Avenue South Residence, reported signs of drywood termites or wood borers were linked to developer-provided wardrobes and vanity cabinets. At Freesia Woods, a court case dealt with subterranean termites travelling from common-property soil up to a fifth-floor apartment. Same headline, very different problems.
          </p>

          <h2>The journey of a cabinet</h2>
          <p>
            What most people never see is how far a kitchen cabinet travels before it reaches their home.
          </p>
          <p>
            It starts as timber at a sawmill. It is treated, then cut and assembled in a factory, often overseas. It is packed, shipped in a container, held in a warehouse and delivered to site. Then comes the part people rarely think about: it is stored, often in the basement, for weeks or months while the floors above are still going up. Only then is it installed, as one of hundreds of identical pieces across the development.
          </p>

          <figure className="article-image article-image-wide">
            <Image
              unoptimized
              src={`${imageBase}/cabinet-supply-chain-journey.webp`}
              alt="Eight-stage journey of a cabinet from sawmill and treatment through factory, shipping, site storage, installation and handover"
              width={2048}
              height={855}
              sizes="(max-width: 900px) 92vw, 1100px"
            />
            <figcaption>
              Every stop is a chance for something to get in, or for something already inside to go unnoticed.
            </figcaption>
          </figure>

          <p>
            Every stop is a chance for something to get in, or for something already inside to go unnoticed.
          </p>
          <p>
            Those of us who have been in construction long enough have learnt to follow that journey step by step. We ask for the treatment record and check that it matches the material actually supplied, not just a certificate for timber in general. We track the fabrication batch and when it was made. We check how it was packed and whether it was dry. At delivery, we look past quantity and finish for the small warning signs: fresh powder, hard pellets, exit holes, damaged packing, moisture stains. If something looks wrong, it is set aside before it goes anywhere near a unit.
          </p>
          <p>Then there is the basement, which deserves its own section.</p>

          <h2>The basement problem</h2>
          <p>
            A basement under construction is humid, poorly ventilated, close to the soil and often still drying out from fresh concrete. It is also where the space is, so timber waits there.
          </p>
          <p>
            How it waits matters. Boards should sit on pallets off the slab, away from walls and wet areas, with room for air to move between them. Shrink-wrapping helps, but only if the wrap stays intact and the timber was dry when it was sealed. Wrap damp boards and you have not protected them. You have built them a small humidity chamber.
          </p>

          <figure className="article-image article-image-wide">
            <Image
              unoptimized
              src={`${imageBase}/timber-basement-storage-controls.webp`}
              alt="Comparison of poor and good timber storage in a construction basement, showing pallets, airflow, dry wrapping and traceability"
              width={2048}
              height={1151}
              sizes="(max-width: 900px) 92vw, 1100px"
            />
            <figcaption>
              Good storage is dry, lifted and traceable. The controls are simple, but ownership is often the weak interface.
            </figcaption>
          </figure>

          <p>
            None of this is expensive. It just slips easily when the basement doubles as a laydown area, the carpentry arrives ahead of schedule and nobody really owns the stack until installation starts.
          </p>

          <h2>Why the records matter</h2>
          <p>The value of tracking every step shows up years later.</p>
          <p>
            Suppose three homeowners in different blocks report pellets under their wardrobes. Without records, that means three pest-control visits and three closed complaints. With records, the team can ask a better question: did these units share a factory batch, a delivery or a storage location? If they did, you inspect the rest of that group before the next family finds the problem for them.
          </p>

          <figure className="article-image article-image-wide">
            <Image
              unoptimized
              src={`${imageBase}/infestation-risk-by-cabinet-stage.webp`}
              alt="Indicative likelihood of beetle, drywood termite and subterranean termite infestation across eight cabinet delivery stages, with key controls"
              width={2048}
              height={961}
              sizes="(max-width: 900px) 92vw, 1100px"
            />
            <figcaption>
              The risk does not sit in one place. The useful control changes with the pest and the stage of the cabinet&apos;s journey.
            </figcaption>
          </figure>

          <p>
            Without that trail, a five-millimetre insect becomes a worry for the whole development. That is not because everything is infested. It is because nobody can prove where the risk stops. For the family living there, the hardest part is rarely the damaged timber. It is not knowing how far the problem goes.
          </p>
          <p>
            This is also why the answer is not simply to stop using timber. It is light, workable, economical and familiar to buyers, and every alternative brings its own costs and compromises. The point is not to find a perfect material. It is to know which risks you are accepting, and to keep enough information to trace backwards when something goes wrong.
          </p>

          <h2>The honest limit</h2>
          <p>
            For developers, this is not theory. On every project, each stage is watched. Certificates are checked against deliveries, samples are opened, stacks are inspected and basements are walked. When a symptom does appear, the job is not to spray and close the ticket. It is to find the source and remove it, even if that means opening up far more than the one cabinet in the complaint.
          </p>
          <p>
            But I would be misleading anyone if I claimed this guarantees a clean result. Construction is a long chain of hands, places and weeks, and the insect is five millimetres long. A beetle larva can sit inside a board that passes every visual check, survive the journey and stay quiet for years. A subterranean termite can pass through a gap less than a millimetre wide. No inspection regime can promise that every stage stayed uncompromised.
          </p>
          <p>
            What a developer can promise is something different, and I think more useful. Each stage is watched. The evidence is kept. When something surfaces, the response goes to the source rather than stopping at the symptom.
          </p>
          <p>
            I still think about that exhibition in the lobby. We removed the timber, but we never learnt whether the problem was truly isolated.
          </p>
          <p>
            Today, before any carpentry disappears behind finished surfaces, I ask one question: if a single unit reports a problem two years from now, can we trace far enough back to know where else to look?
          </p>
          <blockquote>The quality of the cabinet was decided long before the pellets appeared.</blockquote>

          <div className="takeaway">
            <span>Practitioner takeaway</span>
            <strong>
              Do not stop at treating the affected cabinet. Identify the pest, trace the batch and storage history, and define where else the same risk may sit.
            </strong>
          </div>

          <p className="article-note">
            Sources: The Straits Times (The Tre Ver, August 2026); AsiaOne (Avenue South Residence, November 2023); [2026] SGMC 88 (Freesia Woods).
          </p>
          <p className="article-note">
            Written from inside Singapore&apos;s construction and development industry. Observations are drawn from years of working across approvals, coordination, sequencing and delivery. Positions are the author&apos;s own.
          </p>
          <p className="author-note">
            Lim Hwee Chim is a Singapore property development leader and the founder of Skyline by HC, where she writes about how upstream developer decisions shape construction outcomes.
          </p>
          <p className="article-note">
            Related Skyline reading: {" "}
            <Link href="/articles/aluminium-finish-survive-twice">
              The Aluminium Finish That Has to Survive Twice
            </Link>{" "}
            and {" "}
            <Link href="/articles/top-90-day-stress-test">
              TOP: The 90-Day Stress Test
            </Link>
            .
          </p>
        </div>
      </article>
    </Shell>
  );
}
