import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Shell } from "../../components";

const title = "The Contract Matters. The Timing Matters More.";
const description =
  "A developer-side view of SIA, REDAS, ECI and NEC4—and why construction outcomes depend on getting the right information into the room before decisions harden.";
const canonical = "/articles/contract-matters-timing-more";

export const metadata: Metadata = {
  title: `${title} | Skyline by HC`,
  description,
  alternates: { canonical },
  openGraph: {
    title,
    description,
    type: "article",
    publishedTime: "2026-06-14",
    authors: ["Lim Hwee Chim"],
    images: [
      {
        url: "/images/articles/contract-matters-timing-more/eci-site-workshop.webp",
        width: 627,
        height: 352,
        alt: "Project team reviewing construction interfaces together on site",
      },
    ],
  },
};

export default function ContractTimingArticle() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    datePublished: "2026-06-14",
    dateModified: "2026-08-06",
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
    image:
      "https://limhweechim.com/images/articles/contract-matters-timing-more/eci-site-workshop.webp",
  };

  return (
    <Shell>
      <article className="article-page">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
        />
        <header>
          <p className="eyebrow">Developer Leadership</p>
          <h1>{title}</h1>
          <p className="standfirst">On SIA, REDAS, ECI, NEC4, and the question nobody frames this way.</p>
          <div className="byline">
            <span>By Lim Hwee Chim</span>
            <span>14 June 2026 · 7 min read</span>
          </div>
        </header>

        <div className="article-body">
          <h2>When the Room Moves to a Different Problem</h2>
          <p className="lead">Collaborative contracting was mentioned again recently. In several BCA conferences and seminars.</p>
          <p>Which is fine. It should be mentioned. The direction is sensible. The intent is good. NEC4 is a genuinely thoughtful attempt to improve how projects deal with risk and information under pressure.</p>
          <p>But sitting in the room, I found myself thinking about a transfer slab.</p>
          <p>Not a contract. A transfer slab.</p>

          <h2>What One ECI Workshop Actually Looked Like</h2>
          <p>Years ago, during an ECI workshop under a REDAS Design and Build project, we were looking at what seemed like a straightforward structural arrangement. The architect was focused on unit efficiency above. The structural engineer was focused on load transfer logic. The contractor was focused on how the sequence would actually be built—which crane, which pour cycle, which access route, which trades in which order.</p>
          <p>Nobody was arguing. But everyone was looking at a different problem.</p>

          <figure className="article-image article-image-wide">
            <Image
              unoptimized
              src="/images/articles/contract-matters-timing-more/eci-site-workshop.webp"
              alt="Project team reviewing construction interfaces together on site"
              width={627}
              height={352}
              sizes="(max-width: 800px) 90vw, 900px"
              priority
            />
            <figcaption>The useful moment is not when every discipline agrees immediately. It is when their different constraints become visible early enough to coordinate.</figcaption>
          </figure>

          <p>By lunchtime, the conversation had quietly expanded. Tower crane positions. PPVC module sequencing and its relationship to the structural grid. Substation access—not just for commissioning, but for the years of maintenance after that. MDF room, switch room, Fire Engine Access placement, and how each one would affect construction vehicle routing in the first six months on site.</p>
          <p>The transfer slab itself didn&apos;t move very much in the end.</p>
          <p>But the project improved significantly.</p>
          <p>Not because the design changed. Because the information arrived early—while it was still cheap to act on. And because the contractor who surfaced those questions was the same contractor who would eventually be bound to deliver on the answers. That alignment, I have come to believe, is the point.</p>

          <h2>Our Biggest Problems Are Not Contractual</h2>
          <p>The longer I stay in this industry, the less I believe our biggest problems are contractual.</p>
          <p>Most of them are timing problems.</p>
          <p>Good information arriving too late. Construction knowledge arriving after design freezes. Operational logic arriving after approvals are sealed. Commercial reality arriving after budgets are set. Risk arriving after the options for managing it have quietly disappeared.</p>
          <p>When you look at Singapore&apos;s contract eras through that lens, the history reads differently.</p>

          <h2>Three Eras, One Question</h2>
          <p>The SIA lump sum was not a flawed contract. It was a contract designed for a world where knowledge could be sequenced cleanly—design first, then price, then build. It worked when that sequencing held. The problem was that construction knowledge rarely arrived on the schedule the design programme assumed. Contractors, specialist trades, PPVC manufacturers—they entered after the decisions had hardened. A gap discovered late doesn&apos;t stay as one gap.</p>
          <p>It becomes a variation, then a programme claim, then a disputed final account, then occasionally a legal file sitting on someone&apos;s desk three years after TOP.</p>

          <figure className="article-image article-image-portrait">
            <Image
              unoptimized
              src="/images/articles/contract-matters-timing-more/sia-lump-sum-contract.webp"
              alt="Orange Singapore Institute of Architects lump-sum building contract book"
              width={351}
              height={461}
              sizes="(max-width: 800px) 82vw, 520px"
            />
            <figcaption>The SIA lump-sum form brought order to a sequential model: design, price, then build. Its limits emerge when critical construction knowledge enters after design decisions have hardened.</figcaption>
          </figure>

          <p>REDAS Design and Build moved to fix that. Hand the design pen to the contractor. Place coordination responsibility with the party who actually understood construction sequencing. For PPVC projects especially, this was not just logical—it was necessary. Module dimensions affect floor plate efficiency. Factory schedules determine the critical path. Only the contractor holds that knowledge at the moment it needs to be applied. REDAS moved information earlier into the delivery chain.</p>

          <figure className="article-image article-image-wide">
            <Image
              unoptimized
              src="/images/articles/contract-matters-timing-more/redas-design-build-contract.webp"
              alt="REDAS Design and Build Conditions of Contract title"
              width={270}
              height={168}
              sizes="(max-width: 800px) 82vw, 520px"
            />
            <figcaption>REDAS Design and Build moves coordination responsibility toward the party that must turn design intent into an executable construction sequence.</figcaption>
          </figure>

          <p>ECI moved it earlier still. And this is where my own thinking has settled.</p>

          <h2>What I Actually Believe Should Happen</h2>
          <p>What I have come to believe—from running these processes across multiple projects—is that Early Contractor Involvement, properly structured as a formal pre-award exercise within REDAS Design and Build, may be the most practical and underutilised tool the private sector already has.</p>
          <p>Not ECI as an informal conversation. Not the contractor dropping by a few design meetings. But a deliberate, structured pre-contract engagement where the main contractor sits alongside the architect, structural engineer, M&amp;E consultant, and the developer&apos;s team before the contract is formalised—before anything is awarded.</p>
          <p>The point is not to give the contractor influence over design intent. The point is to ensure that by the time the contract is signed, every significant constructability question has been surfaced, tested, and answered. Tower crane positions agreed. PPVC module grid coordinated with the structural layout. Substation and M&amp;E rooms placed where they make operational sense, not just where they fit on an early plan. Temporary works access sequenced so the first six months on site flow rather than fight.</p>
          <p>When the contractor has participated in working through these decisions, the contract that follows is qualitatively different. It is not a document that transfers risk to a party who will spend the next three years finding the gaps. It is a document that reflects a shared understanding of how the project will actually be built—technically viable from the start, with all major factors accounted for and agreed upfront.</p>
          <p>And critically: when something goes wrong, no one can credibly claim they didn&apos;t know. The contractor was in the room. The questions were asked. The risks were visible. The accountability is shared not because the contract requires it, but because the process produced it.</p>
          <p>That, in my view, is what collaborative contracting actually looks like in the private residential context. Not a new form of contract. A more disciplined use of the process before the existing one begins.</p>

          <h2>What NEC4 Is Actually Trying to Solve</h2>
          <p>NEC4 is attempting something adjacent but different. It is not primarily about moving knowledge upstream. It is about keeping information moving after the contract is signed—during construction, when the instinct of every party under commercial pressure is to manage information rather than share it. Pain-gain sharing. Early warning obligations. Open-book cost visibility. Disallowed Cost for concealment.</p>
          <p>These mechanisms exist because the problem NEC4 is solving is the silence that descends when a project starts drifting and everyone quietly decides to wait and see who blinks first.</p>
          <p>That silence is expensive. I have seen what it costs.</p>

          <h2>When the Contract Sat in the Drawer</h2>
          <p>During COVID—around 2021 to 2022—we had a project that was tightening. Cash, materials, sequence, confidence. We chose to sit down and work out together what each party could carry, rather than hold the contract and watch everything slow into a standoff. It worked not because the contract permitted it, but because there was enough trust in the room for problems to surface before they became weapons. The contract sat in the drawer for a while. The people did the harder work.</p>
          <p>What NEC4 is trying to do is make that behaviour contractually expected rather than personally dependent. That is a legitimate ambition.</p>

          <h2>Where the Private Sector Friction Is Real</h2>
          <p>The honest difficulty for private residential development is structural, not ideological.</p>
          <p>Singapore&apos;s GLS model requires cost certainty at investment approval—land bid, board approval, financing terms, sales strategy, ABSD timeline. All of this happens before construction begins. NEC4 Option C offers a final cost known only at project completion. That logic works naturally in public infrastructure, where long-duration uncertainty is unavoidable. It sits less comfortably inside a private development where the numbers must close before the first buyer enters the sales gallery.</p>
          <p>There is also the quieter issue of readiness. A contract form is only as effective as the least-prepared party administering it. When one party encounters the form for the first time under pressure, what tends to emerge is not collaboration. It is hesitation about what the Early Warning obligation actually demands, and a slow drift back toward the behaviours the previous form trained into everyone. The form arrives before the capability does. This has been true of every contract reform cycle.</p>

          <h2>The More Executable Path</h2>
          <p>This is why I believe the more executable path—at least for mainstream private residential development in the near term—is not wholesale adoption of NEC4, but the deliberate formalisation of ECI within the REDAS framework. Bring the contractor in early, run a structured pre-award process, resolve the major constructability questions before contract signing, and let the resulting REDAS contract reflect a genuinely shared and technically validated position.</p>
          <p>Where NEC4-style behaviours are needed for high-risk packages—open-book reporting for PPVC, early warning obligations for façade or MEP integration—these can be drafted as supplementary conditions within the existing framework, without asking every party to learn a new contractual language from scratch on a project where the ABSD clock is already running.</p>
          <p>The spirit of what NEC4 is asking for can begin well before the form itself arrives.</p>

          <h2>The Same Question, Asked Four Different Ways</h2>
          <p>Seen this way, SIA, REDAS, ECI, and NEC4 are not competing ideas. They are sequential attempts to answer the same question.</p>
          <blockquote>How early can we discover a problem while it is still cheap to solve?</blockquote>
          <p>SIA brought order. REDAS brought integration. ECI brings construction knowledge forward into design—and when formalised properly before award, it also brings accountability forward with it. NEC4 is trying to keep information moving honestly after the contract is signed and the pressure is on.</p>
          <p>Each one is addressing a different point in the timeline where information tends to arrive too late.</p>
          <p>The contract matters.</p>
          <p>The timing matters more.</p>

          <p className="original-note">Originally published on <a href="https://www.linkedin.com/pulse/contract-matters-timing-more-hwee-chim-lim-ii3wc/" target="_blank" rel="noreferrer">LinkedIn</a> on 14 June 2026.</p>
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
