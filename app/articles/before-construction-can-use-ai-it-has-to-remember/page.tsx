import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Shell } from "../../components";

const title = "Before Construction Can Use AI, It Has to Remember";
const description =
  "What Whole-of-Government Virtual Inspection made Lim Hwee Chim reconsider about AI in construction: useful intelligence depends first on trusted project memory, structured information and disciplined closure.";
const canonical = "/articles/before-construction-can-use-ai-it-has-to-remember";
const originalUrl =
  "https://www.linkedin.com/pulse/before-construction-can-use-artificial-intelligence-has-hwee-chim-lim-vknqc/";
const wogImageBase = "/images/articles/one-camera-many-agencies-one-project-reality";
const chinaImageBase = "/images/articles/speed-vs-certainty";

export const metadata: Metadata = {
  title: `${title} | Skyline by HC`,
  description,
  alternates: { canonical },
  keywords: [
    "AI in construction",
    "construction artificial intelligence",
    "project memory",
    "Whole-of-Government Virtual Inspection",
    "CORENET X",
    "digital construction",
    "construction productivity",
    "information flow",
  ],
  openGraph: {
    title,
    description,
    type: "article",
    publishedTime: "2026-09-02",
    authors: ["Lim Hwee Chim"],
    images: [
      {
        url: `${wogImageBase}/03_virtual-inspection-platform-360-record.png`,
        width: 700,
        height: 438,
        alt: "Virtual inspection platform showing a shared 360-degree project record",
      },
    ],
  },
};

export default function BeforeConstructionCanUseAIArticle() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    datePublished: "2026-09-02",
    dateModified: "2026-09-02",
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
    image: `https://limhweechim.com${wogImageBase}/03_virtual-inspection-platform-360-record.png`,
    keywords: [
      "AI in construction",
      "project memory",
      "Whole-of-Government Virtual Inspection",
      "CORENET X",
      "digital construction",
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
          <p className="eyebrow">PPVC, DfMA, Technology &amp; Productivity</p>
          <h1>{title}</h1>
          <p className="standfirst">
            What Whole-of-Government Virtual Inspection made me reconsider about AI in construction
          </p>
          <div className="byline">
            <span>By Lim Hwee Chim</span>
            <span>2 September 2026 · 12 min read</span>
          </div>
        </header>

        <div className="article-body">
          <figure className="article-image article-image-wide">
            <Image
              unoptimized
              src={`${wogImageBase}/03_virtual-inspection-platform-360-record.png`}
              alt="Virtual inspection platform showing a shared 360-degree project record"
              width={700}
              height={438}
              sizes="(max-width: 800px) 90vw, 900px"
              priority
            />
            <figcaption>
              The camera is only the witness. The more consequential question is whether the evidence it captures becomes trusted, structured project memory.
            </figcaption>
          </figure>

          <p className="lead">
            The 360-degree camera fits in one hand. My partner normally uses it for our family trips, and it looks too ordinary for the attention it now gets on site — no robot arm, no flashing light, no visible ambition to transform the industry. It just records what is there.
          </p>
          <p>That may be exactly why it matters.</p>
          <p>
            Two months ago I was asked to speak at IBEW on AI and innovation in construction. I hesitated — awkward, given how much of my early mornings already go to wondering what AI will do to how we build. But the more I looked, the more uncomfortable the real finding became. Singapore construction does not have a shortage of AI ideas. We already have AI reading façades, tracking progress and optimising logistics. One façade-inspection system BCA highlighted saved around 30% in manpower and time. Virtual inspection has reported productivity gains of up to 60%, across more than 70 completed projects.
          </p>
          <p>
            So the question is no longer whether AI has arrived. The harder question is why so much of construction still feels like every project is learning everything for the first time.
          </p>

          <h2>The checker I wanted to build</h2>
          <p>
            Last year I tried to design an AI compliance checker: let AI read BCA&apos;s accessibility requirements, compare them against the design and flag the non-compliances before submission. The rules already exist digitally. Our projects already run on BIM. Surely the missing piece was just the machine sitting between the two.
          </p>
          <p>
            Singapore is already building toward this — CORENET X&apos;s Model Checker validates IFC+SG models against regulatory requirements. That matters. Catching an undersized provision before submission beats discovering it after the concrete has developed opinions of its own.
          </p>
          <p>
            But it also draws the boundary of the problem. The checker assesses what is represented in the model. Construction still deals with what was built. A model can show clean clearance along an accessible route right up until a column is cast slightly off position, a wall finish thickens, or a handrail bracket sits a little too proud. No single variation breaks anything. Together, they can quietly turn a compliant design into a completed condition nobody actually assessed.
          </p>
          <blockquote>
            The approved model is not quite the building. That gap is where construction lives — and where the interesting AI problem actually begins.
          </blockquote>

          <h2>Why some AI already works</h2>
          <p>
            The AI applications that work best share one unglamorous trait: someone already did the boring work first. The camera has a continuous feed. A structured digital workflow has known locations and objects. The lift has sensors and history. Structured input, narrow problem — that is the pattern behind every genuine success, not the intelligence itself.
          </p>
          <p>
            Safety vision spots a worker entering an unsafe zone because the feed is continuous and the rule is unambiguous. Façade AI recognises a defect because the image, surface and objective are all defined. The algorithm looks impressive. The information architecture underneath it is the less photogenic reason it works at all. Without that, the algorithm has nowhere reliable to stand.
          </p>

          <h2>What the camera revealed</h2>
          <p>
            This came into focus through our Whole-of-Government Virtual Inspection pilot on a residential project. The camera is the most visible object in the room. I have come to think it is the least interesting part of it — it is only the witness. BCA does not become SCDF. SCDF does not become PUB. Their mandates stay separate, as they should. What changes is that every agency now starts from the same captured physical condition: one project reality, several professional judgements applied to it.
          </p>

          <figure className="article-image article-image-wide">
            <Image
              unoptimized
              src={`${wogImageBase}/04_whole-of-government-site-coordination.png`}
              alt="Project and regulatory teams coordinating on site during virtual inspection"
              width={700}
              height={425}
              sizes="(max-width: 800px) 90vw, 900px"
            />
            <figcaption>
              One project reality can support several independent professional and regulatory judgements without collapsing their different mandates into one.
            </figcaption>
          </figure>

          <p>
            Around that evidence a workflow forms: capture, observation, assignment, rectification, verified closure. Phased submission becomes possible — one part of the project reviewed and rectified while another is still under construction, lessons from the first informing the second before the same mistake repeats.
          </p>
          <p>
            WOG Virtual Inspection is not an AI platform, and it should not try to become one. Its job is more practical — helping authorities decide whether a development is safe, compliant and ready for occupation. But going through the pilot changed how I think about AI. It showed me what one of its missing foundations actually looks like.
          </p>
          <blockquote>Not another algorithm. A trusted project record.</blockquote>

          <h2>Knowledge without memory</h2>
          <p>
            Walk onto a large project and information is not the shortage. BIM models, drawings, RFIs, inspection photos. Then there is WhatsApp. On one project cycle I sit inside a few dozen group chats. A leaking riser shows up as a photograph. A ceiling-clearance problem arrives with three red circles drawn over a screenshot. An authority&apos;s clarification gets forwarded without the conversation that made it intelligible.
          </p>
          <p>Five people read it. Three discuss it. Someone solves it. Six months later, almost nobody can find it.</p>
          <p>
            That is not a shortage of knowledge. It is knowledge without memory. Construction has spent years digitising information, and rightly so. But digital is not the same as reusable. A photograph in a folder is digital. Link it to a location, an element, a requirement, a responsible party and a verified closure, and it becomes something a person who was not on site can actually understand and trust.
          </p>

          <figure className="article-image article-image-wide">
            <Image
              unoptimized
              src={`${wogImageBase}/05_reality-capture-inspection.png`}
              alt="Reality-capture inspection record used to review completed construction work"
              width={700}
              height={425}
              sizes="(max-width: 800px) 90vw, 900px"
            />
            <figcaption>
              Digital evidence becomes reusable only when it carries enough context to explain what was observed, what was decided and whether closure was verified.
            </figcaption>
          </figure>

          <p>
            AI can already retrieve messy information without much difficulty. The harder question is whether the information behind a consequential decision deserves to be trusted at all. Which revision applied? Was the departure formally accepted as a tolerance, or did everyone just move on? Was the observation actually closed, or did it just go quiet?
          </p>
          <p>AI may retrieve the information. We still have to know what it means.</p>

          <h2>When every project learns alone</h2>
          <p>
            Say ten projects experience water ingress at an E-deck. The evidence exists in ten different forms — a defect platform here, WhatsApp photos there. Every project learns something. The industry learns almost nothing. The next development appoints a new team, who occasionally rediscover, at cost, a lesson another project already paid for.
          </p>
          <p>
            This is where AI becomes genuinely useful — not as the officer, the architect or the project manager, but as the system that surfaces where professional attention actually needs to go. Link the captured physical condition to the applicable regulatory observation. Location known. Design retrievable. Rectification recorded. Closure verified.
          </p>
          <p>
            Do that once and you have an inspection record. Do it consistently and patterns start showing themselves — the waterproofing interface that keeps failing, the M&amp;E clearance that turns urgent right before TOP because the coordination assumption was wrong months earlier and nobody was told. These stop looking like isolated site problems. They become upstream patterns worth acting on. That, I find far more interesting than generative design.
          </p>

          <h2>Standardise the index, not the answer</h2>
          <p>
            There is a legitimate objection here. A leak is not always the same leak — standardising too aggressively strips out the context that makes professional judgement worth having. Contractors may resist a record used later, without context, to assess them. They would have a point. The goal is not a dropdown menu for every construction decision — standardise the index, not the answer.
          </p>
          <p>
            There is a cost too. Hand a full taxonomy — agency, clause, element, severity, cause, stage, closure — to a tired site engineer, and you will build the industry&apos;s most comprehensive database of &quot;Others.&quot; AI should absorb that burden, not add to it: propose the classification, identify the location and retrieve the likely drawing, while people verify what actually matters. Technology routes attention. Professional judgement still decides.
          </p>

          <h2>What China showed me</h2>
          <p>
            On site visits across Shanghai, Nanjing and Wuxi at the end of 2025, what stayed with me was not the robots. It was the structure underneath them. On one Nanjing site, a dashboard tracked crane positions, wind speed, labour and material movement in real time. I asked whether it was mostly for display. The site manager&apos;s answer was simple: this is how we run the site.
          </p>

          <figure className="article-image article-image-wide">
            <Image
              unoptimized
              src={`${chinaImageBase}/live-construction-dashboard.webp`}
              alt="Live smart-construction dashboard displaying site operational information"
              width={900}
              height={506}
              sizes="(max-width: 800px) 90vw, 900px"
            />
            <figcaption>
              The impressive part of a live site dashboard is not the screen. It is the operating discipline that makes the information timely, structured and useful.
            </figcaption>
          </figure>

          <p>
            The impressive part was never the screen. It was the absence of information latency — data captured close to the work, tagged with location, responsibility and deadline the moment it was logged, not reconstructed weeks later for a report nobody wanted to write. The data was structured because the process was structured. The AI had somewhere to stand.
          </p>
          <p>
            Singapore cannot copy China&apos;s delivery model, and should not try — our distributed system protects professional independence and clear mandates, things not worth trading for a faster dashboard. But one principle travels well regardless of model: useful intelligence begins with disciplined information flow. Singapore is already assembling pieces of it — CORENET X, Integrated Digital Delivery, common data environments and site management data standards. The more consistently projects describe the same kinds of events, the easier those events become to compare.
          </p>

          <h2>The developer&apos;s part</h2>
          <p>
            The highest-leverage move is not asking every project team to produce more data. It is making sure the project stops forgetting the decisions that mattered. For each material issue: preserve the cause, the decision required, the owner, the dependency, the required-by date and the outcome. The photograph and drawing sit behind those fields, not instead of them.
          </p>
          <p>
            Project memory should not just explain yesterday&apos;s problem. It should change tomorrow&apos;s brief, the design gate, the hold point and the inspection plan. Start narrow — accessible-route clearances, wet-area penetrations, fire-stopping — and test whether the same conditions recur, and whether the next project closes the interface before site compression forces the issue anyway.
          </p>
          <p>
            Capture once, use many times. Capture supports inspection. Observation supports closure. Verified closure supports handover. The lesson returns upstream. But visibility alone does not close an issue — someone still has to force the next step: name the decision, assign the owner, set the required-by date, before it becomes tomorrow morning&apos;s urgent site meeting. Otherwise we end up with a better shared view of the problem and no better system for resolving it.
          </p>
          <p>
            The cost has to be distributed honestly too. If the site team carries the effort while a future project pockets the insight, resistance is rational, not obstructive. The developer should fund the workflow, remove the duplicate reporting and actually return the lesson to the next brief.
          </p>
          <p>
            None of this should be casually relabelled AI. Its value is more basic, and more important — connecting what was required, what was designed, what was observed, what was accepted and what had to change.
          </p>

          <h2>What I would say now</h2>
          <p>
            I still want the intelligent compliance checker. I am just less interested now in pretending we can skip straight to it.
          </p>
          <p>
            Here is the version I actually find provocative. CORENET X is building coordinated digital information about what we intended to build — government has been explicit that its common BIM approach exists for upfront coordination, to cut downstream abortive work before it happens. Virtual inspection, meanwhile, is quietly building something else: digital evidence of what we actually built. Two records, growing up in parallel, describing the same buildings from opposite ends of the timeline.
          </p>
          <blockquote>What happens when those two records can eventually talk to each other?</blockquote>
          <p>
            Not merged into one dashboard — that is the boring version of the question. The interesting version is what a project looks like once intent and reality are both machine-readable enough to be compared automatically, continuously, instead of reconciled by exhausted people at TOP. Reality capture gives us evidence of what was physically there. Inspection and closure tell us what was accepted and what had to change. The opportunity is to preserve the links between all three — intent, evidence and decision — not just within one project, but across every project that comes after it.
          </p>
          <p>
            At IBEW, I will share what we learned running Whole-of-Government Virtual Inspection on a pilot residential project — what worked, what stayed difficult, what still needs building. Not to admire the camera. To help build the memory behind it.
          </p>
          <blockquote>Construction has already paid for these lessons. It is time we stopped losing the receipts.</blockquote>

          <hr />
          <p className="article-note">
            <strong>Sources:</strong> BCA, Artificial Intelligence (AI) for the Built Environment (5 Aug 2026); BCA, Virtual Inspection (30 Jun 2026); BCA, Integrated Digital Delivery and Site Management Data Standards (2026); CORENET X, Model Checker, Code of Practice and IFC+SG guidance; and project experience from a Whole-of-Government Virtual Inspection pilot residential development.
          </p>
          <p className="article-note">
            This article was also published on{" "}
            <a href={originalUrl} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
            .
          </p>
          <p className="article-note">
            Related Skyline reading:{" "}
            <Link href="/articles/one-camera-many-agencies-one-project-reality">
              One Camera, Many Agencies, One Project Reality
            </Link>
            {" "}and{" "}
            <Link href="/articles/speed-vs-certainty">
              Speed vs. Certainty: Why I&apos;m Not Copying China&apos;s Construction Playbook
            </Link>
            .
          </p>
        </div>
      </article>
    </Shell>
  );
}
