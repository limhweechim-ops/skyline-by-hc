import type { Metadata } from "next";
import Link from "next/link";
import { Shell } from "../../components";

const title = "Once You Take Over the Ship, You Own the Storm";
const description =
  "Reflections on inheriting construction projects midway—and why ownership begins with understanding the technical, relational, decision and regulatory debt already on board.";
const canonical = "/articles/once-you-take-over-the-ship-own-the-storm";

export const metadata: Metadata = {
  title: `${title} | Skyline by HC`,
  description,
  alternates: { canonical },
  openGraph: {
    title,
    description,
    type: "article",
    publishedTime: "2026-03-10",
    authors: ["Lim Hwee Chim"],
  },
};

export default function OwnTheStormArticle() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    datePublished: "2026-03-10",
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
          <p className="standfirst">Reflections on inheriting construction projects midway.</p>
          <div className="byline">
            <span>By Lim Hwee Chim</span>
            <span>10 March 2026 · 7 min read</span>
          </div>
        </header>

        <div className="article-body">
          <h2>The First Storm I Inherited</h2>
          <p className="lead">On my first day as an Assistant Project Manager, I reported to a construction site already halfway through delivery. I was young, energized, convinced I could make a positive impact.</p>
          <p>Reality corrected me quickly.</p>
          <p>The project was behind programme. Meetings were sharp. Decisions had been made long before I arrived—and not all of them were clean.</p>
          <p>Only near completion did I discover that several team members had placed bets on how long the new APM would last. Many before me had left midway.</p>
          <p>I lasted. Not because I was exceptional. Because I stayed.</p>
          <p>When the project neared completion, a consultant laughed and told me about the bet. I had unknowingly made him lose.</p>
          <p>We laughed.</p>
          <p>But privately, I understood something important. The betting wasn’t cynicism. It was pattern recognition. Halfway projects are the hardest to inherit. Complexity is already embedded. Time is compressed. Cost is tightening. Goodwill has often been partially spent.</p>
          <p>That experience didn’t make me dramatic. It made me quieter. It taught me that survival in project management is rarely about brilliance. It is about endurance.</p>

          <h2>2021: Three Projects, Mid-Pandemic</h2>
          <p>In 2021, when I joined SHG, I stepped into three residential projects already under construction—in the middle of a pandemic. Manpower instability. Supply disruptions. Cashflow stress. And inherited decisions made under pressure long before I arrived.</p>
          <p>A senior colleague once told me early in my career: “Once you take over the ship, you own the storm.”</p>
          <p>At the time, I thought he meant authority. It took years to understand he meant composure.</p>

          <h2>Half-Working Projects Are Fragile</h2>
          <p>Most project managers enter a takeover with the instinct to correct. Identify what went wrong. Establish authority. Start fixing.</p>
          <p>That instinct is understandable—especially when projects are visibly failing. But most projects that change hands are not failing. They are half-working.</p>
          <p>And half-working projects are fragile.</p>
          <p>They carry invisible friction: technical compromises made under earlier time or cost pressure; relational fatigue between consultants and contractors; decisions that were reasonable in context, even if uncomfortable in hindsight.</p>
          <p>The assumption that a new PM must immediately redesign anything imperfect is one of the fastest ways to destabilize what is quietly holding together.</p>
          <p>In construction, momentum is rarely visible until it is lost.</p>

          <h2>The Three Debts of Every Ongoing Project</h2>
          <p>Over time, I’ve come to see takeover projects as carrying three forms of inherited debt.</p>
          <p><strong>Technical Debt</strong>—compliant but suboptimal details, value-engineered substitutions, scope adjustments made under pressure.</p>
          <p><strong>Relational Debt</strong>—fatigue between teams, consultants who feel unheard, contractors who stopped escalating issues because escalation once led nowhere.</p>
          <p><strong>Decision Debt</strong>—the gradual narrowing of future options until only certain paths remain viable.</p>
          <p>None of these debts were mine to create. All of them were mine to manage.</p>
          <blockquote>Ownership does not mean rewriting history. It means taking responsibility for trajectory.</blockquote>
          <p>On one takeover, the first significant issue I identified was a design detail that was technically compliant but operationally fragile—a likely path to defects. Changing it would cost time and money. Not changing it meant consciously accepting the risk.</p>
          <p>Neither option was comfortable. But the difficulty wasn’t technical. The architect had defended that solution for months. The contractor had priced around it. Management had approved the baseline. Reopening it meant disturbing settled ground.</p>
          <p>Earlier in my career, I once asked in a review meeting: “Why was this done this way?”</p>
          <p>The room didn’t close. But it stiffened. People who had fought hard for those decisions heard judgment.</p>
          <p>I learned to ask differently: “What constraints made this the best decision at that time?”</p>
          <p>That shift assumes good faith. It surfaces risk history faster than audits. And it builds trust with teams who have no reason to extend it to someone new.</p>

          <h2>A Fourth Debt: Regulatory Inheritance</h2>
          <p>There is a fourth debt I have learned to check for immediately—one that doesn’t show up in the programme or the cost report.</p>
          <p>Regulatory debt.</p>
          <p>Not every takeover project arrives with a clean compliance position. On more than one occasion, I have stepped into projects carrying unresolved BCA submissions, outstanding conditions on structural plans, or Temporary Occupation Permit prerequisites that were not properly tracked across team transitions.</p>
          <p>These gaps are nobody’s fault in a straightforward sense. Submissions move slowly. Teams change. Approval conditions get logged and then quietly deprioritised under delivery pressure. But once you are the named developer representative, the authority doesn’t ask who was responsible before you arrived. They ask when you will resolve it.</p>
          <p>The first thing I do on any takeover now is map the approval trail—not just what has been approved, but what has been approved with conditions, what was submitted and not yet responded to, and what was assumed to have been resolved but has no written confirmation. That exercise almost always surfaces something.</p>
          <p>Regulatory debt compounds quietly. Left unmanaged, it becomes a late-stage constraint with no good options.</p>

          <h2>The Biggest Risk Remains Human</h2>
          <p>The greatest takeover risk is rarely technical or regulatory. It is human.</p>
          <p>Team anxiety. Consultant defensiveness. Contractor resistance that doesn’t appear in formal meetings but surfaces as slower information flow, or RFIs that arrive just late enough to create downstream impact.</p>
          <p>If trust was weak before you arrived, you rebuild slowly. If trust was strong, you earn your place without disrupting it. Both require restraint.</p>
          <p>Listening first is not passive leadership. It is the fastest way to understand where the project truly stands—not where the programme says it should be.</p>
          <p>Momentum does not return because a new PM declares it. It returns when people feel stability. And calm is contagious—in both directions.</p>

          <h2>Navigating, Not Redesigning</h2>
          <p>Most project managers will inherit a project they did not start. We step into drawings we did not conceive, contracts we did not negotiate, working relationships we did not build.</p>
          <p>Projects do not remember who initiated decisions. They remember who delivered the ending.</p>
          <p>Sometimes growth does not come from redesigning the ship. It comes from steering it steadily through waters you did not choose—and arriving somewhere you can stand behind, technically, commercially, and ethically.</p>
          <p>I am still navigating active projects. Still inheriting complexity. Still learning.</p>
          <p>But one lesson stays constant:</p>
          <blockquote>Once you take over the ship, you own the storm.</blockquote>

          <p className="original-note">Originally published on <a href="https://www.linkedin.com/pulse/once-you-take-over-ship-own-storm-hwee-chim-lim-jkjdc/" target="_blank" rel="noreferrer">LinkedIn</a> on 10 March 2026. This version is slightly amended from an essay first published on Medium on 22 February 2026.</p>
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
