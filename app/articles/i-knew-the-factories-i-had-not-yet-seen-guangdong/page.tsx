import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Shell } from "../../components";

const slug = "i-knew-the-factories-i-had-not-yet-seen-guangdong";
const canonical = `/articles/${slug}`;
const imageBase = `/images/articles/${slug}`;
const title = "I Knew the Factories. I Had Not Yet Seen Guangdong.";
const description =
  "What one extra night in Shenzhen changed about how I see the Greater Bay Area—and what developers can learn by looking beyond the product to the industrial system behind it.";

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
        url: `${imageBase}/05-shenzhen-talent-park-skyline.webp`,
        width: 1050,
        height: 1400,
        alt: "Tree-lined running path and skyline at Shenzhen Talent Park",
      },
    ],
  },
};

export default function GuangdongArticle() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    datePublished: "2026-09-21",
    dateModified: "2026-09-21",
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
    image: `https://limhweechim.com${imageBase}/05-shenzhen-talent-park-skyline.webp`,
    keywords: [
      "Guangdong",
      "Greater Bay Area",
      "Shenzhen",
      "construction sourcing",
      "developer procurement",
      "supply chain",
      "market sounding",
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
          <p className="eyebrow">Development Strategy &amp; Procurement</p>
          <h1>{title}</h1>
          <p className="standfirst">
            What one extra night in Shenzhen changed about how I see the Greater Bay Area
          </p>
          <div className="byline">
            <span>By Lim Hwee Chim</span>
            <span>21 September 2026 · 10 min read</span>
          </div>
        </header>

        <div className="article-body">
          <p className="lead">
            At seven in the morning, Shenzhen Bay was already moving. Runners strung along the waterfront. Trees stood between the path and the towers behind them, and offices, residences, hotels and shops sat close enough together to read as one district rather than a list of developments.
          </p>
          <p>
            I had added an extra night over the weekend to the trip on purpose. No factory visit waiting, no material board to finalise. I just wanted to walk and run through the city on my own terms, and see what Shenzhen had actually become.
          </p>

          <figure className="article-image article-image-portrait">
            <Image
              unoptimized
              src={`${imageBase}/05-shenzhen-talent-park-skyline.webp`}
              alt="Tree-lined running path and skyline at Shenzhen Talent Park"
              width={1050}
              height={1400}
              sizes="(max-width: 800px) 82vw, 620px"
              priority
            />
            <figcaption>
              An early-morning run through Shenzhen changed the frame: the city was no longer a sequence of project visits, but a place whose parts had begun to work together.
            </figcaption>
          </figure>

          <p>
            I first came here perhaps eight years ago, on an industry study trip to Tencent&apos;s Shenzhen headquarters and Ping An Tower. I even went up to the rooftop of the just-topped-out Ping An Tower to see its intricate structure at close range. The city was already rising fast. The towers were up, but much of it still felt unfinished in the way ambitious things often do — the intention was easier to read than the outcome.
          </p>

          <figure className="article-image article-image-portrait">
            <Image
              unoptimized
              src={`${imageBase}/03-ping-an-tower-construction-structure.webp`}
              alt="Complex steel structure viewed during construction of Ping An Tower"
              width={1050}
              height={1400}
              sizes="(max-width: 800px) 82vw, 620px"
            />
            <figcaption>
              My earlier Shenzhen memories were dominated by individual projects under construction — extraordinary objects, still read one site at a time.
            </figcaption>
          </figure>

          <p>
            This time the surprise wasn&apos;t the skyline. Shenzhen has never needed help looking tall. What had changed was that the pieces had started talking to each other.
          </p>

          <h2>The space between the projects</h2>
          <p>
            Around Shenzhen Bay and Nanshan, Talent Park now sits inside a much larger waterfront system. Offices open into shops and restaurants. Commercial streets run into public space without a seam. People run the bay in the morning and fill the malls by evening. The Shenzhen Bay Super Headquarters Base nearby is still under construction, but the district around it already feels settled — like it stopped being a plan and became a place while no one was looking.
          </p>

          <figure className="article-image article-image-wide">
            <Image
              unoptimized
              src={`${imageBase}/06-shenzhen-bay-super-headquarters-district.webp`}
              alt="Shenzhen Bay skyline and landscaped public realm around the Super Headquarters district"
              width={1400}
              height={1050}
              sizes="(max-width: 800px) 90vw, 900px"
            />
            <figcaption>
              The more revealing urban achievement is not the height of any one tower, but the way landscape, public space, commercial uses and movement begin to operate as one district.
            </figcaption>
          </figure>

          <p>
            The park doesn&apos;t read as leftover greenery, the bit that survives after the buildings are done. It reads as structure.
          </p>

          <figure className="article-image article-image-wide">
            <Image
              unoptimized
              src={`${imageBase}/04-shenzhen-bay-commercial-public-realm.webp`}
              alt="Contemporary commercial development opening onto public space in Shenzhen Bay"
              width={1400}
              height={1050}
              sizes="(max-width: 800px) 90vw, 900px"
            />
            <figcaption>
              In a mature district, the quality of the spaces between projects starts to matter as much as the projects themselves.
            </figcaption>
          </figure>

          <p>
            Maybe that&apos;s simply what eight years does to a masterplan. The first time I came, I noticed the projects — cranes, towers, individual sites climbing out of the ground one at a time. This time I noticed the gaps between them, and how little gap was left.
          </p>
          <p>
            A building takes a few years. A district takes longer. Infrastructure has to land, trees have to grow, businesses have to take root, and people need time to build habits around a place before anyone stops calling it a collection of projects and starts calling it a city.
          </p>

          <figure className="article-image article-image-portrait">
            <Image
              unoptimized
              src={`${imageBase}/01-shenzhen-bay-masterplan-model.webp`}
              alt="Physical masterplan model of Shenzhen Bay with landmark towers and surrounding urban blocks"
              width={1050}
              height={1400}
              sizes="(max-width: 800px) 82vw, 620px"
            />
            <figcaption>
              Masterplans make the intended relationships visible early. Time is what tests whether those relationships become a functioning district.
            </figcaption>
          </figure>

          <h2>Seeing in fragments</h2>
          <p>
            For most of my working life, Guangdong has been part of the job without quite being a place.
          </p>
          <p>
            In this trade we arrive with an agenda. Foshan for tiles, sanitaryware, aluminium, furniture, appliances. Zhongshan and Guzhen for lighting. Dongguan and Jiangmen for components and fabrication. Even the models we commission for a launch come out of some specialised workshop tucked into the Pearl River Delta.
          </p>
          <p>
            We land in Guangzhou or Shenzhen, get into a car, do the factory or the showroom, make the selection, have dinner, move on. The cities become airports with a supply chain in between.
          </p>

          <figure className="article-image article-image-portrait">
            <Image
              unoptimized
              src={`${imageBase}/02-guangdong-factory-production-line.webp`}
              alt="Project team reviewing a production line during a Guangdong factory visit"
              width={1050}
              height={1400}
              sizes="(max-width: 800px) 82vw, 620px"
            />
            <figcaption>
              A factory visit can answer the product question quickly. The more valuable procurement question is often what sits behind the line: tooling, subcontracted processes, critical inputs and recovery options.
            </figcaption>
          </figure>

          <p>
            After enough years of that, I think I had been seeing Guangdong in pieces without noticing the pieces belonged to something.
          </p>

          <h2>Numbers that don&apos;t fit in a showroom</h2>
          <p>
            The scale is easy to underestimate from inside a car. The Guangdong–Hong Kong–Macao Greater Bay Area spans nine Guangdong cities plus Hong Kong and Macao — more than 88 million people, an economy above RMB15 trillion. Shenzhen alone carries around 18.25 million people and roughly RMB3.9 trillion in GDP. Guangzhou adds another 19.1 million people and about RMB3.2 trillion. Between the two anchors, that&apos;s over 37 million people and more than RMB7 trillion — and the scale doesn&apos;t stop at the anchors.
          </p>
          <p>
            Foshan holds close to 9.79 million people and around RMB1.3 trillion. Dongguan, roughly 10.8 million people and a similarly sized economy, with industry and construction making up something like 55 per cent of its GDP. Zhongshan, about 4.57 million people and RMB430 billion, over half of it from secondary industry.
          </p>
          <p>
            These aren&apos;t satellite towns feeding two headline cities. They are substantial economies in their own right, and what makes them matter together is how differently each has specialised. Shenzhen leans into technology, electronics, robotics, advanced manufacturing. Guangzhou runs on its role as provincial capital and transport gateway, layered with automobiles, electronics, petrochemicals. Foshan has gone deep on building materials, furniture, appliances, machinery. Dongguan stayed a heavyweight in electronics and component manufacturing.
          </p>
          <p>
            Zhongshan is perhaps the sharpest example of what specialisation looks like on the ground. Guzhen alone holds more than 30,000 lighting and related enterprises, producing over RMB100 billion a year. By the municipal government&apos;s own figures, its output covers more than 70 per cent of China&apos;s domestic lighting market and reaches upward of 130 countries.
          </p>
          <p>
            Try reconciling that number with the memory of walking into a showroom to pick one pendant light. It doesn&apos;t reconcile easily — because the showroom is the visible end of a very long system. A lighting company still needs electronics, aluminium, glass, plastics, tooling, machinery, testing, packaging, logistics, and increasingly software and controls behind the fixture. A façade manufacturer depends on extrusion, glass, coatings, hardware, machinery, engineering. Furniture runs on timber, fabric, metalwork, automated production lines.
          </p>

          <figure className="article-image article-image-portrait">
            <Image
              unoptimized
              src={`${imageBase}/07-shenzhen-commercial-tower-facade.webp`}
              alt="Highly articulated glazed commercial tower facade in Shenzhen"
              width={1050}
              height={1400}
              sizes="(max-width: 800px) 82vw, 620px"
            />
            <figcaption>
              Complex finished products compress many upstream capabilities into one visible object. The façade is the outcome; the industrial network behind it is the enabling system.
            </figcaption>
          </figure>

          <p>
            Shenzhen supplies the technology. Dongguan industrialises the components. Foshan holds the materials base. Zhongshan specialises the product. Guangzhou moves the goods. Hong Kong sits alongside all of it as the international interface for finance, professional services, trade.
          </p>
          <p>
            Seen apart, these are cities with different industries. Seen together, they explain why the region works at all — and why the lines on the map matter less than the density of the connections underneath them. That density is also why the region is hard to copy by simply building cheaper factories somewhere else. The advantage was never one factory with lower labour cost. It&apos;s the accumulated network sitting around it — suppliers, tooling, engineers, testing facilities, logistics, and someone three streets over who already knows how to make the part you&apos;re missing.
          </p>

          <figure className="article-image article-image-portrait">
            <Image
              unoptimized
              src={`${imageBase}/08-tencent-headquarters-shenzhen.webp`}
              alt="Tencent headquarters complex in Shenzhen viewed from street level"
              width={1050}
              height={1400}
              sizes="(max-width: 800px) 82vw, 620px"
            />
            <figcaption>
              Shenzhen&apos;s technology economy is one part of the regional system — not separate from manufacturing, but increasingly intertwined with the products and production methods around it.
            </figcaption>
          </figure>

          <h2>What a sourcing trip actually asks</h2>
          <p>
            For a developer, that changes the question worth bringing to one of these trips.
          </p>
          <p>
            The usual question is narrow. Which façade system. Which tile. Which fitting. Which mock-up. Necessary questions — projects still need compliant products, honest lead times, and prices that survive the cost plan. But there&apos;s a second question worth carrying alongside it: what is the system that lets this product exist here at all? Who owns the tooling. Where the critical components actually come from. What&apos;s done in-house and what&apos;s subcontracted out. How late the design can change before production has to restart. What happens when a finish fails testing, or a replacement is needed three years after handover.
          </p>
          <blockquote>A finished sample tells you almost none of this.</blockquote>
          <p>
            There&apos;s a fair objection here, and I don&apos;t want to wave it away. A sourcing trip isn&apos;t an industrial study tour. Programmes are tight, consultants and suppliers are appointed precisely so developers don&apos;t have to trace every layer of every supply chain themselves, and going too far upstream has its own cost — early closeness to one manufacturer can narrow competition, or let a proposed solution shape the design before the alternatives have been tested against it.
          </p>
          <p>
            The answer isn&apos;t to turn every factory visit into a week-long expedition. It&apos;s targeted market sounding before the specification hardens — understanding the dependencies that actually matter while alternatives are still open, feeding manufacturing knowledge into the brief without letting one manufacturer write it, and holding competition through performance requirements, testing evidence, and interfaces that are actually spelled out.
          </p>
          <p>
            This matters most exactly when we ask for something new. Developers like to talk about innovation as though manufacturers are standing by with a menu, waiting for us to pick something off it. What&apos;s actually possible is bounded by existing tooling, production volumes, certification, engineering capability, and whether several suppliers are willing to move together. Understanding the ecosystem is what lets you tell a difficult request from an impossible one — and sometimes shows you where one small change upstream unlocks a much better product downstream.
          </p>

          <h2>Next time</h2>
          <p>
            This trip changed how I want to move through the region going forward. Stay the extra night occasionally. Walk Guangzhou instead of only landing in it. Run Shenzhen Bay instead of heading straight to the next appointment. Ask why lighting concentrated in Zhongshan and materials went deep in Foshan, and how Shenzhen&apos;s technology economy feeds back into both.
          </p>
          <p>
            After this many years in construction, I think I may have visited Guangdong many times without actually visiting it. I knew where the factories were. I&apos;m only now curious about what surrounds them and why.
          </p>
          <blockquote>
            A product can be selected in an afternoon. The system behind it takes longer to see.
          </blockquote>

          <div className="takeaway">
            <span>Practitioner takeaway</span>
            <strong>
              Use sourcing trips to test the industrial dependencies behind a proposed product before the specification hardens — not to let one supplier harden the specification for you.
            </strong>
          </div>

          <p className="author-note">
            Lim Hwee Chim is a Singapore property development leader and the founder of Skyline by HC, where she writes about how upstream developer decisions shape construction outcomes.
          </p>
          <p className="article-note">
            Related Skyline reading:{" "}
            <Link href="/articles/contract-matters-timing-more">
              The Contract Matters. The Timing Matters More.
            </Link>{" "}
            and{" "}
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
