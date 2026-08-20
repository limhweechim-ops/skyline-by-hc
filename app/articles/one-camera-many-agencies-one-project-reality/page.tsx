import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Shell } from "../../components";

const title = "One Camera, Many Agencies, One Project Reality";
const description =
  "How better upstream information changed the way Grand Dunman prepared for TOP—and why the real innovation was integration, not the camera.";
const canonical = "/articles/one-camera-many-agencies-one-project-reality";
const originalUrl =
  "https://medium.com/@hcl.writes/one-camera-many-agencies-one-project-reality-0de26eb68a8d";
const imageBase = "/images/articles/one-camera-many-agencies-one-project-reality";

export const metadata: Metadata = {
  title: `${title} | Skyline by HC`,
  description,
  alternates: { canonical },
  keywords: [
    "Whole-of-Government Virtual Inspection",
    "Grand Dunman",
    "TOP",
    "CORENET X",
    "construction productivity",
    "information flow",
    "BCA",
  ],
  openGraph: {
    title,
    description,
    type: "article",
    publishedTime: "2026-08-20",
    authors: ["Lim Hwee Chim"],
    images: [
      {
        url: `${imageBase}/grand-dunman-completed-waterfront.webp`,
        width: 700,
        height: 525,
        alt: "Completed Grand Dunman development viewed across the waterfront",
      },
    ],
  },
};

export default function WholeOfGovernmentVirtualInspectionArticle() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    datePublished: "2026-08-20",
    dateModified: "2026-08-20",
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
    image: `https://limhweechim.com${imageBase}/grand-dunman-completed-waterfront.webp`,
    keywords: [
      "Whole-of-Government Virtual Inspection",
      "Grand Dunman",
      "TOP",
      "CORENET X",
      "construction productivity",
      "information flow",
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
            How better upstream information changed the way a project prepared for TOP
          </p>
          <div className="byline">
            <span>By Lim Hwee Chim</span>
            <span>20 August 2026 · 14 min read</span>
          </div>
        </header>

        <div className="article-body">
          <figure className="article-image article-image-wide">
            <Image
              unoptimized
              src={`${imageBase}/grand-dunman-completed-waterfront.webp`}
              alt="Completed Grand Dunman development viewed across the waterfront"
              width={700}
              height={525}
              sizes="(max-width: 800px) 90vw, 900px"
              priority
            />
            <figcaption>
              Grand Dunman completed—the finished development hides years of coordination, closure and authority interfaces.
            </figcaption>
          </figure>

          <p className="lead">
            When BCA invited Grand Dunman to join the Whole-of-Government Virtual Inspection pilot, my first reaction was not excitement.
          </p>
          <p>It was caution.</p>
          <p>
            That may sound strange from someone who writes often about construction innovation. But supporting innovation in principle differs from introducing a new process just as a project approaches Temporary Occupation Permit, or TOP.
          </p>
          <p>
            TOP is not the stage at which developers go looking for extra excitement. By then, years of planning, design and construction have converged into a few unforgiving weeks. Contractors are completing final works. Consultants are inspecting. Defects are being rectified. Clearances pursued. The handover team is preparing to receive the development.
          </p>
          <blockquote>Years of decisions. Thousands of interfaces. One fixed date.</blockquote>

          <figure className="article-image article-image-portrait">
            <Image
              unoptimized
              src={`${imageBase}/grand-dunman-construction-tower-cranes.webp`}
              alt="Grand Dunman during construction with multiple tower cranes"
              width={525}
              height={700}
              sizes="(max-width: 800px) 82vw, 520px"
            />
            <figcaption>
              Grand Dunman during construction. At this stage, the question was not whether innovation was interesting, but whether it could be introduced without destabilising TOP readiness.
            </figcaption>
          </figure>

          <p>
            Ask me then whether I&apos;d volunteer for a new inspection process at TOP, and my honest answer would have been: try it on the next one.
          </p>
          <p>
            But Grand Dunman became one of the pilot projects—and what I took away from it was not what I expected.
          </p>
          <p>
            The camera was useful. But the camera was not the innovation. The real innovation was different government agencies and the project team working from a shared representation of the same development—and thinking about readiness together.
          </p>
          <p>
            That distinction matters beyond virtual inspection. It goes to why construction projects struggle, why productivity problems keep surfacing on site, and what developers and government can do differently upstream.
          </p>

          <h2>What Whole-of-Government Virtual Inspection Actually Is</h2>
          <p>
            The term is still unfamiliar even inside the industry, so it&apos;s worth explaining plainly.
          </p>
          <p>
            Whole-of-Government Virtual Inspection is BCA&apos;s pilot letting a project submit one set of 360-degree captures of completed works for several regulatory agencies to review at once, instead of a separate physical inspection for each agency&apos;s TOP or CSC requirements. Rather than BCA inspecting first, then SCDF, then PUB—each working off its own site visit and its own read of what&apos;s ready—the agencies review one shared digital record of the same physical condition.
          </p>
          <p>
            That principle echoes CORENET X: BCA and URA&apos;s one-stop digital shopfront, meant to move consultants from dealing separately with agencies and different versions of plans toward coordinated design around a single common BIM model, with a collaboration platform spanning BCA, URA, SCDF, PUB and other public agencies.
          </p>
          <p>
            Whole-of-Government Virtual Inspection can be read as a completion-stage analogue of the same principle. Design-stage coordination establishes what should be built. Reality capture establishes a governed representation of what was actually built—a connection that runs through the rest of this piece.
          </p>

          <h2>We Notice the Technology Because It Is Visible</h2>
          <p>
            When people hear &quot;virtual inspection,&quot; they focus on the technology—360-degree cameras, photogrammetry, digital twins, AI-powered image processing—tangible enough to display the model, walk through captured spaces, and show an inspector reviewing a development remotely.
          </p>
          <p>Technology photographs well. Integration does not.</p>
          <p>
            Yet the most important words in the initiative were not &quot;Virtual Inspection.&quot; They were &quot;Whole-of-Government.&quot;
          </p>
          <p>
            Had we merely digitised one BCA inspection, it would still have been useful—less movement, better documentation—but still one inspection, within one regulatory lane.
          </p>
          <p>
            The real shift was different agencies referring to a common representation of the project, while the project team treated readiness as one integrated condition—not prepared sequentially, agency by agency, but brought to readiness together.
          </p>
          <blockquote>The camera made the project visible. Whole-of-Government made the project integrated.</blockquote>

          <figure className="article-image article-image-wide">
            <Image
              unoptimized
              src={`${imageBase}/virtual-inspection-platform-360-record.webp`}
              alt="Virtual inspection platform showing a shared 360-degree project record"
              width={700}
              height={438}
              sizes="(max-width: 800px) 90vw, 900px"
            />
            <figcaption>
              A shared digital project record makes the physical condition visible remotely. The deeper value is different parties referring to the same project reality.
            </figcaption>
          </figure>

          <h2>This Was Not an Isolated Experiment</h2>
          <p>
            The broader rollout of virtual inspection in Singapore suggests the mechanism at Grand Dunman was not a one-off.
          </p>
          <p>
            As of June 2026, BCA reported that more than 70 projects had completed virtual inspections, with productivity savings of up to 60%. The framework supports 360-degree capture for full or hybrid TOP and CSC inspections, subject to suitability and acceptance. Crucially, projects can submit completed phases for review while work continues elsewhere—comments on one phase get addressed, and the same feedback applied elsewhere, before the problem repeats.
          </p>
          <p>
            That is the real mechanism. Not simply remote inspection, but earlier information leading to earlier action.
          </p>

          <h2>One Project Does Not Mean One Objective</h2>
          <p>Whole-of-Government does not mean every agency suddenly has the same job. Nor should it.</p>
          <p>
            BCA safeguards structural requirements. SCDF protects fire safety. PUB protects drainage and water infrastructure. NEA protects environmental outcomes. Each has its own mandate, expertise and public responsibility, and none of that disappeared under virtual inspection.
          </p>
          <p>
            The challenge was never to make every agency think alike. It was to bring their different, legitimate requirements together around the same project reality without weakening any of them. Integration is sometimes misread as compromise—it isn&apos;t. Good integration doesn&apos;t ask specialists or regulators to abandon their responsibilities; it creates the conditions in which their individually correct decisions work together.
          </p>
          <p>
            The aim isn&apos;t one regulator. It&apos;s one trusted project reality supporting several independent regulatory judgements—considerably harder than organising another coordination meeting.
          </p>

          <figure className="article-image article-image-wide">
            <Image
              unoptimized
              src={`${imageBase}/whole-of-government-site-coordination.webp`}
              alt="Project and regulatory teams coordinating on site at Grand Dunman"
              width={700}
              height={425}
              sizes="(max-width: 800px) 90vw, 900px"
            />
            <figcaption>
              Different mandates, one physical project: integration depends on bringing separate professional and regulatory perspectives around the same condition on site.
            </figcaption>
          </figure>

          <h2>Projects Are Rarely Difficult Because Nobody Knows What They&apos;re Doing</h2>
          <p>
            Major developments contain considerable expertise: the architect protects design intent, the structural engineer protects safety, the contractor protects sequence and programme, the quantity surveyor protects commercial viability, the regulators protect the public interest.
          </p>
          <p>Everyone is protecting something legitimate. Nobody in the room is necessarily wrong.</p>
          <p>
            The difficulty begins when their individually reasonable positions no longer fit together. A design may be aesthetically correct but hard to construct or maintain. A technically safe solution may block access for another system. An efficient sequence for one trade may obstruct another. A valid requirement introduced late may become highly disruptive once finishes are complete.
          </p>
          <p>
            The project doesn&apos;t struggle because one party lacks competence. It struggles because the interfaces between competent parties weren&apos;t resolved early enough—someone has to see the combined consequence for the whole development.
          </p>
          <p>
            That&apos;s the developer&apos;s role. We don&apos;t design every detail, execute every trade, or carry the regulator&apos;s authority. But we shape the conditions everyone else performs under—when specialists are appointed, when information becomes available, when hard decisions get escalated, and whether everyone works from the same understanding.
          </p>
          <p>
            This is usually called coordination. I think the more accurate word is integration: the developer&apos;s job isn&apos;t merely passing information between parties, it&apos;s making separate decisions work as one project—and making them work in time.
          </p>

          <h2>Construction Has an Information-Flow Problem</h2>
          <p>
            We often say construction has a productivity problem. That&apos;s true, but many productivity losses that eventually surface on site begin much earlier, as information-flow failures.
          </p>
          <p>
            The pattern is consistent. First, information arrives late, in different formats and channels—one consultant working off the approved drawing, another off photographs, someone else recalling a site condition that&apos;s since changed. Everyone ends up discussing the same issue from a different version of reality.
          </p>
          <p>
            Second, interfaces remain unresolved. A decision is required, but ownership is unclear; several parties must contribute, but nobody owns the combined outcome. The matter stays technically &quot;in progress&quot; while the window for an economical solution quietly closes.
          </p>
          <p>
            Third, the site absorbs the consequence: work is resequenced, completed finishes reopened, teams working longer hours to recover time lost to earlier indecision. By the time it looks like poor site productivity, the root cause is often months old.
          </p>
          <p>
            A downstream construction problem is frequently an upstream information problem arriving late. This is also why productivity can&apos;t be fixed by asking site teams to move faster: if the information is late, the interface unresolved, or the decision still in motion, faster execution may just produce rework more efficiently.
          </p>

          <h2>The Pilot Made the Work Harder Before It Made It Easier</h2>
          <p>
            Innovation is often presented as though its benefit appears the moment the technology arrives. Real projects are less polite—someone has to absorb the learning, preparation and coordination first, and at TOP, with the team stretched, that effort is felt directly.
          </p>
          <p>
            Areas had to be genuinely ready before capture—not &quot;almost ready,&quot; not &quot;ready except for a few items,&quot; and certainly not ready only from one favourable angle. The camera is not diplomatic. It records what is actually there.
          </p>
          <p>
            Comments then had to move through a real workflow: capture, comment, owner, required-by date, rectify, verify, close. A digital comment doesn&apos;t rectify itself simply because it was recorded efficiently—someone still has to own the issue, do the work, and verify the final condition.
          </p>
          <blockquote>The technology did not remove the work. It moved the work forward.</blockquote>

          <figure className="article-image article-image-wide">
            <Image
              unoptimized
              src={`${imageBase}/reality-capture-inspection.webp`}
              alt="Reality capture inspection being carried out inside a completed Grand Dunman space"
              width={700}
              height={333}
              sizes="(max-width: 800px) 90vw, 900px"
            />
            <figcaption>
              Virtual inspection still requires physical readiness, planned capture and disciplined follow-through. Digital evidence does not close a defect by itself.
            </figcaption>
          </figure>

          <p>
            Earlier doesn&apos;t always mean easier, but it usually means more options stay open. A problem found before finishes close can be corrected at modest cost; the same problem found at final inspection may mean hacking, replacement, reinspection, delay and an argument about responsibility. The physical defect is identical—the timing of its discovery changes everything.
          </p>

          <h2>The Project Started Inspecting Itself</h2>
          <p>
            The most interesting benefit was one we hadn&apos;t anticipated: preparing for virtual inspection improved our own quality assurance.
          </p>
          <p>
            Once everyone knew completed spaces would be captured clearly and kept in a shared digital record, behaviour changed. Consultants reviewed works more carefully. The contractor organised rectification earlier. Nobody wanted an unfinished item permanently visible in high resolution.
          </p>
          <p>
            Before the authorities inspected the development, the project team had already inspected itself more critically. This didn&apos;t replace regulatory inspection—independent professional judgement remains essential—but it improved readiness before formal inspection occurred. Visibility changed preparation; earlier preparation changed the outcome.
          </p>

          <figure className="article-image article-image-wide">
            <Image
              unoptimized
              src={`${imageBase}/pre-inspection-quality-review.webp`}
              alt="Project team carrying out a pre-inspection quality review at Grand Dunman"
              width={700}
              height={310}
              sizes="(max-width: 800px) 90vw, 900px"
            />
            <figcaption>
              Preparing for capture encouraged closer pre-inspection review and earlier rectification—effectively making the project inspect itself before the formal inspection window.
            </figcaption>
          </figure>

          <p>
            There&apos;s a fair challenge here: was the improvement the technology, or everyone knowing Grand Dunman was a closely watched pilot? Probably both—a high-profile pilot draws more management attention, and we shouldn&apos;t confuse an attention effect with a technology effect. But the mechanism still matters. If persistent, location-linked evidence makes incomplete work harder to ignore and closure easier to trace, the operating system has improved, even if the camera can&apos;t claim all the credit.
          </p>

          <h2>The Most Valuable Outcomes May Be Invisible</h2>
          <p>
            The completed photographs of Grand Dunman don&apos;t show the meetings, rehearsals, comments and rectification that preceded TOP, or the problems caught early enough to avoid becoming final-stage crises. That is the nature of good integration—when it works, its value is often invisible.
          </p>

          <figure className="article-image article-image-wide">
            <Image
              unoptimized
              src={`${imageBase}/grand-dunman-completed-entrance.webp`}
              alt="Completed Grand Dunman entrance and clubhouse facade"
              width={700}
              height={525}
              sizes="(max-width: 800px) 90vw, 900px"
            />
            <figcaption>
              The final photograph shows the outcome, not the avoided rework, earlier decisions and coordination that made the outcome possible.
            </figcaption>
          </figure>

          <p>
            An issue closed earlier. One fewer return inspection. One less completed surface reopened. One less last-minute argument about responsibility. There&apos;s no ribbon-cutting for a coordination problem that never happened. But when enough problems don&apos;t arrive in the final inspection window, the whole project feels the difference.
          </p>
          <p>
            Construction productivity shouldn&apos;t be measured only by visible site activity. Avoided rework is productivity. Earlier closure is productivity. A defect prevented before installation, an interface resolved before finishes close, a decision made while alternatives remain—these are outcomes too. The absence of disruption is still an outcome.
          </p>

          <h2>The Evidence Must Not Become Another Silo</h2>
          <p>
            There&apos;s a real danger worth naming: the wrong implementation adds virtual inspection on top of consultant inspections, contractor QA systems, email, photographs, agency platforms and existing TOP documentation. Do the same work and upload another set of evidence into another platform, and virtual inspection becomes administration disguised as productivity. The right model progressively replaces duplicate evidence production; it doesn&apos;t add a channel.
          </p>
          <p>
            This is the CORENET X problem again, pointed the other way: durable value depends on staying interoperable, not on trading many agency silos for one large vendor silo. Standards should define the evidence and portability required, not force every project into a proprietary solution.
          </p>
          <p>
            The stakes rise once the record itself becomes an asset. Persistent 360-degree capture can pick up workers, private interiors, security arrangements and spatial geometry, and may stay accessible long after the inspection ends. Access control, retention, provenance and audit trail aren&apos;t IT footnotes at that point—they&apos;re part of regulatory trust. Every evidence object should carry, at minimum, where and when it was captured, who submitted it, which drawing revision it relates to, and who verified closure—without that discipline, a shared project reality becomes another uncertain version of one. If these records are later used for AI, the governance bar needs to be higher still.
          </p>

          <h2>AI Should Come Last, Not First</h2>
          <p>
            The long-term opportunity is real. Across enough well-structured project records, recurring defects become visible, repeated interface failures get identified, and a comment on one floor can be propagated to similar floors before the same defect repeats. That is where AI becomes useful.
          </p>
          <p>
            But the order matters. First, build reliable project records. Then standardise inspection items, comments, causes and closure outcomes. Then set access, security, retention and audit rules. Only after that should cross-project AI be applied—otherwise it simply learns the different ways projects document confusion.
          </p>
          <p>
            The ambition shouldn&apos;t be artificial intelligence sitting on top of unstructured archives. It should be shared industry memory, governed well enough that the next project doesn&apos;t relearn every lesson from the beginning.
          </p>

          <h2>The Next Pilot Should Start Before TOP</h2>
          <p>
            The developer integrates designers, specialists and contractors around one project; government integrates agencies and regulatory objectives across many. Different scale, same principle: better upstream conditions produce better downstream outcomes.
          </p>
          <p>
            The practical lesson isn&apos;t to adopt more cameras. It&apos;s to introduce the information discipline earlier—reality capture supporting progress monitoring, consultant reviews and interface closure during construction, not surfacing for the first time once TOP has already become an emergency. Learning the platform while time exists spreads the capture and training cost across several applications, and catches regulatory risks before finishes and access constraints make them expensive to fix.
          </p>
          <p>
            The trade-off is real: earlier capture demands manpower, platform cost, disciplined information management and more consultant attention upfront. Some benefit accrues to regulators; some cost falls on contractors and consultants. Developers likely capture the largest share of value, through reduced schedule risk. A proper business case weighs total system cost, not a saving for one participant that shifts work onto another.
          </p>
          <p>
            The test should be simple: did the system reduce overall inspection effort, rework, return visits and TOP compression—or only produce better-looking evidence of the same unresolved process?
          </p>

          <h2>The Camera Was the Witness</h2>
          <p>
            The pilot did not eliminate standards, professional responsibility or physical work. It did something more fundamental: it made information more common, exposed interfaces earlier, let issues close while options still remained, and let different parties work from a more consistent representation of the project.
          </p>
          <p>
            That is why the camera was not the breakthrough. The camera was the witness. Integration was the innovation. A trusted project record was the foundation—and the longer-term opportunity is turning many such records into shared industry intelligence, so the next development doesn&apos;t relearn the same lessons from the beginning.
          </p>
          <p>
            Upstream information shapes upstream decisions. Upstream decisions shape downstream execution. If we want better productivity, fewer surprises and more confident completion, we have to stop treating every downstream problem as though it began on site. Very often it began earlier—in information that didn&apos;t flow, an interface left unresolved, or a decision that arrived after the economical options had disappeared.
          </p>
          <p>
            The future of construction is not simply faster work. It is earlier readiness, a shared project reality, better-timed professional judgement—and integration designed before the project is forced to pay for its absence.
          </p>

          <p className="original-note">
            Originally published on <a href={originalUrl} target="_blank" rel="noreferrer">Medium</a> on 20 August 2026.
          </p>
          <p className="author-note">
            Written from inside Singapore&apos;s construction and development industry. Observations drawn from years of working across approvals, coordination, sequencing, and delivery. Positions are the author&apos;s own.
          </p>
          <p className="author-note">
            Lim Hwee Chim is a Singapore property development leader and the founder of Skyline by HC, where she writes about how upstream developer decisions shape construction outcomes.
          </p>
        </div>

        <p className="article-back">
          <Link href="/articles">← Back to all articles</Link>
        </p>
      </article>
    </Shell>
  );
}
