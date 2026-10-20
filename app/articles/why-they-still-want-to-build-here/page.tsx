import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Shell } from "../../components";

const title = "Why They Still Want to Build Here";
const canonical = "/articles/why-they-still-want-to-build-here";
const description = "Why international contractors keep pursuing Singapore construction projects—and how developer readiness helps preserve the predictability that attracts them.";
const image = "/images/articles/why-they-still-want-to-build-here/marina-bay-construction-skyline.webp";
const imageAlt = "Illustration of tower cranes and a construction site overlooking Singapore’s Marina Bay skyline";
export const metadata: Metadata = {
  title, description, alternates: { canonical },
  authors: [{ name: "Lim Hwee Chim", url: "https://limhweechim.com/about" }],
  robots: { index: true, follow: true },
  openGraph: { title, description, type: "article", url: canonical, publishedTime: "2026-10-20T00:00:00+08:00", modifiedTime: "2026-10-20T00:00:00+08:00", authors: ["https://limhweechim.com/about"], images: [{ url: image, width: 1672, height: 941, alt: imageAlt }] },
  twitter: { card: "summary_large_image", title, description, images: [image] },
};
export default function WhyTheyStillWantToBuildHere() {
  const schema = {
    "@context": "https://schema.org", "@type": "Article", headline: title, description,
    datePublished: "2026-10-20", dateModified: "2026-10-20",
    mainEntityOfPage: "https://limhweechim.com" + canonical, url: "https://limhweechim.com" + canonical,
    author: { "@type": "Person", "@id": "https://limhweechim.com/about#person", name: "Lim Hwee Chim", url: "https://limhweechim.com/about" },
    publisher: { "@type": "Organization", name: "Skyline by HC", url: "https://limhweechim.com" },
    image: ["https://limhweechim.com" + image],
    articleSection: "Development Strategy & Procurement",
    keywords: ["Singapore construction", "international contractors", "Chinese contractors", "procurement", "project readiness", "construction predictability"],
    inLanguage: "en-SG",
  };
  return <Shell><article className="article-page">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    <header>
      <p className="eyebrow"><Link href="/topics/development-strategy-procurement">Development Strategy &amp; Procurement</Link></p>
      <h1>{title}</h1>
      <div className="byline"><span>By <Link href="/about">Lim Hwee Chim</Link></span><span><time dateTime="2026-10-20">20 October 2026</time> · 5 min read</span></div>
    </header>
    <div className="article-body">
      <figure className="article-image article-image-wide"><Image unoptimized src={image} alt={imageAlt} width={1672} height={941} sizes="(max-width: 800px) 90vw, 1100px" priority /><figcaption>Illustration of construction overlooking Marina Bay, Singapore.</figcaption></figure>
<p className="lead">{"Singapore construction market is bustling. Refer to the list of tenderers for construction, and you’ll find an interesting mix."}</p>
<p>{"International builders have always been part of the picture here, working alongside our local contractors. German, Japanese and Korean firms each had their eras. More recently I’ve been seeing more Chinese contractors, many of them backed by large state-owned groups."}</p>
<p>{"The market hasn’t become any easier. Maybe even more demanding."}</p>
<p>{"Margins are thin. Labour is tight. Safety is non-negotiable. Consultants want everything in writing. Authorities want submissions in the right sequence. And developers, myself included, would quite like the building yesterday, at last year’s price."}</p>
<p>{"Still, these challenges have not turned them away. Some come with the weight of a large construction group behind them. Some bring prefabrication experience, equipment and methods I would honestly like us to learn more from."}</p>
<p>{"So we might ask, so why come?"}</p>
<p>{"I suspect part of the answer is something we talk about less than cost or technology. Predictability."}</p>
<h2>{"A project that will actually happen"}</h2>
<p>{"On the projects I deal with, once the land is secured, the financing is arranged and a committed developer calls a serious tender, the work ahead becomes very real. A contractor has something concrete to assess before committing people and capital."}</p>
<p>{"That doesn’t mean every tender here turns into a building. I also wouldn’t claim Singapore projects always run more reliably than projects elsewhere. The client, the funding and how ready the project is still matter."}</p>
<p>{"There will still be design changes, authority requirements and a programme that gets uncomfortable as it goes. I know those rather well."}</p>
<p>{"But a credible path to construction is worth something."}</p>
<p>{"There’s also a good deal of work in view. In January 2026, BCA projected S$47–53 billion in construction contract awards for the year, and an annual average of S$39–46 billion for 2027–2030. These are forecasts, and schedules will move. BCA also cautioned that demand could ease once major developments such as Changi Terminal 5 are completed."}</p>
<p>{"So it’s a substantial pipeline, though not one that keeps rising forever."}</p>
<p>{"For contractors looking beyond their home markets, that matters. China’s property downturn is part of the background: official figures show real estate development investment fell 17.2% in 2025. My reading is that thinner opportunities at home make overseas work more attractive to some firms."}</p>
<p>{"But Singapore is only one part of a much wider overseas push. Chinese contractors are chasing work across the Middle East, Africa and Southeast Asia, and each market offers its own mix of scale, opportunity and risk."}</p>
<p>{"Nor are all the firms we see here newcomers. One of the largest Chinese groups set up its Singapore business in 1992. Some have spent decades learning our approval processes, building local teams and working with our subcontractors. From the developer’s side it can look like a recent arrival. Often it is the expansion of a business that has been here all along."}</p>
<p>{"My reading is that Singapore offers a useful combination: identifiable work ahead, an established business environment, and a base from which to operate across the region. For firms that already know this market, those advantages are easier to put to work."}</p>
<p>{"That doesn’t make a Singapore contract automatically profitable. But when a firm decides where to commit people and capital, the size of the opportunity is only part of the calculation. How confidently it can plan around that opportunity matters too."}</p>
<h2>{"The tender that never becomes a site"}</h2>
<p>{"The region offers bigger visions, and often bigger margins on paper."}</p>
<p>{"Saudi Arabia’s The Line was the boldest of them: twin mirrored towers running 170 kilometres, once projected to cost more than a trillion dollars. In May this year, further work was reportedly pushed back until at least after 2030, as the kingdom’s sovereign fund turned its spending toward ports and data centres. Indonesia’s new capital and a long list of stalled projects in Vietnam tell quieter versions of the same story."}</p>
<p>{"None of this is a verdict on ambition. Some of these projects will still be built, in some form. But a contractor’s headquarters isn’t evaluating a vision. It is evaluating whether the money will still be there when the fifth progress claim goes in."}</p>
<p>{"A 15 percent margin on a project that pauses at 15 percent complete is not a 15 percent margin."}</p>
<h2>{"The view from headquarters"}</h2>
<p>{"From our side of the table, we see one contractor deciding whether to bid."}</p>
<p>{"From theirs, the decision may pass through several desks at headquarters. Someone has to approve the resources. Someone has to commit the guarantee. Someone has to judge when the project will start bringing in revenue, and whether that revenue will earn an acceptable return."}</p>
<p>{"Someone also has to explain, a year later, why a team was mobilised, housed and then sent home."}</p>
<p>{"Other international contractors will have their own reasons to diversify. Predictability is one part of the appeal. It doesn’t explain every bid."}</p>
<p>{"My guess is that a modest-margin job with a credible path to construction can look better than a higher-margin opportunity whose financing, or political sponsorship, can change between award and topping out."}</p>
<p>{"That only holds if the payment terms and execution risks still make commercial sense. A certain start doesn’t guarantee a satisfactory finish."}</p>
<p>{"And you can’t keep an experienced project team busy with a promising tender."}</p>
<h2>{"Our side of the bargain"}</h2>
<p>{"If we value what these contractors bring, our projects have to be ready for them. That means closing the decisions that affect pricing. It means being clear about what risk the contract actually transfers. And it means setting a programme that reflects the approvals and coordination still ahead, rather than the one we wish we had."}</p>
<p>{"It would be a waste to offer a credible pipeline and then spend its value on avoidable uncertainty."}</p>
<p>{"In my view, Singapore’s attraction goes beyond the margin on any single job. Part of it is being able to commit people and capital to work that has a real chance of happening."}</p>
<p>{"The margin may still be modest."}</p>
<p>{"The predictability is part of the product. Keeping it that way is our job."}</p>
      <p className="article-note">Sources: <a href="https://www1.bca.gov.sg/resources/newsroom/steady-construction-demand-in-2026-as-singapore-steps-up-support-for-built-environment-firms-through-collaboration-and-innovation/" target="_blank" rel="noopener noreferrer">Building and Construction Authority, construction demand outlook (January 2026)</a>; <a href="https://www.stats.gov.cn/english/PressRelease/202601/t20260120_1962353.html" target="_blank" rel="noopener noreferrer">National Bureau of Statistics of China (2025)</a>; <a href="https://www.semafor.com/article/05/22/2026/saudis-neom-halts-work-on-the-line-until-after-2030" target="_blank" rel="noopener noreferrer">Semafor (May 2026)</a>.</p>
      <p className="article-note">Written from inside Singapore’s construction and development industry. Positions are the author’s own.</p>
      <p className="author-note">Lim Hwee Chim is a Singapore property development leader and the founder of Skyline by HC, where she writes about how upstream developer decisions shape construction outcomes.</p>
      <p className="article-note">This is the permanent Skyline by HC website edition. Also published on <a href="https://limhweechim.substack.com/p/why-they-still-want-to-build-here" target="_blank" rel="noopener noreferrer">Skyline Letters on Substack</a>.</p>
      <p className="article-note">Related Skyline reading: <Link href="/articles/contract-matters-timing-more">The Contract Matters. The Timing Matters More.</Link> and <Link href="/articles/speed-vs-certainty">Speed vs. Certainty: Why I’m Not Copying China’s Construction Playbook</Link>.</p>
    </div>
  </article></Shell>;
}
