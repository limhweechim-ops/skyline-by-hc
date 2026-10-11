import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Shell } from "../../components";

const title = "How I Have Worked with AI";
const canonical = "/articles/how-i-have-worked-with-ai";
const description = "Lim Hwee Chim shares four ways she uses AI in property development: preserving decision context, challenging assumptions, anticipating risks and preparing for human conversations.";
const image = "/images/articles/how-i-have-worked-with-ai/judgement-agency-taste.png";
export const metadata: Metadata = {
  title, description, alternates: { canonical },
  authors: [{ name: "Lim Hwee Chim", url: "https://limhweechim.com/about" }],
  robots: { index: true, follow: true },
  openGraph: { title, description, type: "article", url: canonical, publishedTime: "2026-10-09T00:00:00+08:00", modifiedTime: "2026-10-11T00:00:00+08:00", authors: ["https://limhweechim.com/about"], images: [{ url: image, width: 710, height: 292, alt: "With AI, options are no longer expensive. What stays valuable is judgement, agency, and taste — and someone willing to own the choice." }] },
  twitter: { card: "summary_large_image", title, description, images: [image] },
};
export default function HowIHaveWorkedWithAI() {
  const schema = {
    "@context": "https://schema.org", "@type": "Article", headline: title, description,
    datePublished: "2026-10-09", dateModified: "2026-10-11",
    mainEntityOfPage: "https://limhweechim.com" + canonical, url: "https://limhweechim.com" + canonical,
    author: { "@type": "Person", name: "Lim Hwee Chim", url: "https://limhweechim.com/about" },
    publisher: { "@type": "Organization", name: "Skyline by HC", url: "https://limhweechim.com" },
    image: ["https://limhweechim.com" + image, "https://limhweechim.com/images/articles/how-i-have-worked-with-ai/long-nosed-character.jpg"],
    articleSection: "PPVC, DfMA, Technology & Productivity",
    keywords: ["AI in property development", "AI in construction", "human judgement", "developer leadership", "project memory", "HC-DIS"],
    inLanguage: "en-SG",
  };
  return <Shell><article className="article-page">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    <header>
      <p className="eyebrow"><Link href="/topics/ppvc-dfma-productivity">PPVC, DfMA, Technology &amp; Productivity</Link></p>
      <h1>{title}</h1>
      <div className="byline"><span>By <Link href="/about">Lim Hwee Chim</Link></span><span><time dateTime="2026-10-09">9 October 2026</time> · 5 min read</span></div>
    </header>
    <div className="article-body">
<p className="lead">{"We talked about AI replacing jobs today. The conversation comes round often now, and it usually carries a quiet anxiety with it. I noticed my own answer has been getting firmer — mostly because I use AI more each month, not less."}</p>
<p>{"People who use AI will be better positioned than people who do not. That part I am fairly sure of. What I am less willing to assume is that whole jobs simply vanish — administrative roles, junior roles, whichever list is circulating this week. Some tasks will shrink. Some roles will evolve. But accountability still has to sit with someone. When a recommendation goes wrong, someone stands in front of the board, the authority or the contractor and owns it. That someone will not be the model."}</p>
<p>{"What has changed is the cost of options. A proposal used to carry two or three alternatives because each took real effort to prepare. Now I can ask for a hundred before lunch. Options are cheap."}</p>
<p>{"Choosing is not. Judgement, agency and taste — knowing which option fits, being willing to commit to it, recognising quality before I can fully explain it. These are the qualities I find myself relying on more, precisely because AI gives me more to work with."}</p>
<figure className="article-image article-image-wide"><Image unoptimized src="/images/articles/how-i-have-worked-with-ai/judgement-agency-taste.png" alt="With AI, options are no longer expensive. What stays valuable is judgement, agency, and taste — and someone willing to own the choice." width={710} height={292} sizes="(max-width: 800px) 90vw, 710px" priority /></figure>
<p>{"Over the past year, my own use has settled into four practices. None of them is about speed."}</p>
<figure className="article-image article-image-portrait"><Image unoptimized src="/images/articles/how-i-have-worked-with-ai/long-nosed-character.jpg" alt="Long-nosed wooden character beneath a painted ceiling" width={637} height={835} sizes="(max-width: 800px) 82vw, 620px" /><figcaption>AI helps me ask better questions. I still keep a nose out for answers that sound too good.</figcaption></figure>
<h2>{"One: remember the reason, not the record"}</h2>
<p>{"Construction does not lack information. We have drawings, BIM models, RFIs, inspection photographs, and enough WhatsApp groups that finding the right conversation has become a small project of its own."}</p>
<p>{"What we lose is the reason. Why was the detail changed? What condition made it acceptable? When someone leaves the team, the files stay. The reasoning leaves with them."}</p>
<p>{"That is why I am building HC-DIS, my developer-intelligence system. Not a bigger archive — a record of decisions that keeps the conditions attached: an owner, a dependency, a required-by date, a consequence, a source. An authority response may have applied to one design. A detail that worked on one project may have depended on an access route the next one does not have. Remembering the answer without its conditions is just a more confident way of getting it wrong."}</p>
<h2>{"Two: ask it to disagree"}</h2>
<p>{"Most AI models are built to be agreeable. Ask for help with a proposal and you will usually get encouragement, a cleaner structure, and several reasons why you were right all along. Pleasant. Not always useful."}</p>
<p>{"So I ask it to argue back. I have kept journals in English and Chinese since 2000 — the parts of work that minutes never capture: what unsettled me, why I pushed, what I could not quite say in the room. I now use them, alongside my articles, so AI understands how I think. Then I ask it to test that thinking rather than polish it."}</p>
<p>{"If I say I have become calmer as a leader, what supports that? A few better conversations are encouraging. They do not establish a lasting change. I would not accept that evidence from a project manager telling me an issue was under control, so I should not accept it from myself. When work stalls, AI helps me ask the less flattering question: is the problem capability, an unclear instruction, or ownership I have quietly taken back?"}</p>
<p>{"There is a trap. AI only sees the account I give it. Leave out my own part, and it will help me build a very convincing defence."}</p>
<h2>{"Three: read backwards from the consequence"}</h2>
<p>{"Charlie Munger, whose thinking I keep returning to, liked to say: invert, always invert. His blunter version was, “All I want to know is where I’m going to die, so I’ll never go there.” I use AI the same way — start from the outcome, then work backwards to what must not be missed."}</p>
<p>In my piece on the <Link href="/articles/top-90-day-stress-test">final ninety days before TOP</Link>{", I wrote about a building becoming one working system. The fire alarm can work. The lift can work. The interface between them can still fail. By the time a missing decision is found behind a finished ceiling, the team has run out of good options."}</p>
<p>{"So I aim AI upstream. Before an activity starts, what must already be true? Which drawing revision are we relying on? What has been released for procurement, and what is still being discussed as though it had been? The output is not a verdict. It is a question we can verify early enough to act on — and someone on the team still has to close it."}</p>
<h2>{"Four: the room still matters"}</h2>
<p>{"This is the part I did not expect. The more work AI does, the more the human conversation matters."}</p>
<p>{"The decisions that really move a project are still made face to face. AI does the reading, the comparing and the first draft, and I walk in far better prepared because of it. But the outcome is settled in the room. An authority officer needs to know we understand the concern — and to feel that we mean it. A contractor needs space to explain a constraint without feeling that every answer will come back as another AI-generated list of questions. Sincerity does not come in a summary."}</p>
<p>{"I keep returning to the Chinese word 城府, chengfu — depth and composure: knowing what to say, when to say it, and when to keep listening. A well-drafted message does not decide whether today is the right day to send it."}</p>
<p>{"AI has taken a great deal of work off my desk. What it handed back is the part that was always mine — to choose, to own the choice, and to sit across the table from the people who will live with it."}</p>
<p>{"It can prepare me for the room. It cannot walk in for me."}</p>

      <p className="author-note">Lim Hwee Chim is a Singapore property development leader and the founder of Skyline by HC, where she writes about how upstream developer decisions shape construction outcomes.</p>
      <p className="article-note">This is the permanent Skyline by HC website edition. Also published on <a href="https://limhweechim.substack.com/p/how-i-have-worked-with-ai" target="_blank" rel="noopener noreferrer">Skyline Letters on Substack</a>.</p>
      <p className="article-note">Related Skyline reading: <Link href="/articles/before-construction-can-use-ai-it-has-to-remember">Before Construction Can Use AI, It Has to Remember</Link> and <Link href="/articles/top-90-day-stress-test">TOP: The 90-Day Stress Test</Link>.</p>
    </div>
  </article></Shell>;
}
