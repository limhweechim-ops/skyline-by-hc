import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Shell } from "../../components";

const slug = "my-love-hate-relationship-with-natural-stones";
const canonical = `/articles/${slug}`;
const imageBase = `/images/articles/${slug}`;
const title = "My Love-Hate Relationship with Natural Stones";
const seoTitle = "Natural Stone in Construction: My Love-Hate Relationship with Marble";
const description =
  "A developer-side field note on natural stone, marble dry-lay, veining, moisture, mechanical fixing and why beautiful stone can create demanding delivery risks.";
const searchThemes = [
  "natural stone construction",
  "marble dry lay",
  "marble moisture stains",
  "marble mechanical fixing",
  "Jura Beige limestone",
  "Belvedere stone",
  "Singapore residential development",
  "material selection",
];

export const metadata: Metadata = {
  title: { absolute: seoTitle },
  description,
  keywords: searchThemes,
  alternates: { canonical },
  openGraph: {
    title: seoTitle,
    description,
    type: "article",
    url: canonical,
    images: [
      {
        url: `${imageBase}/carrara-quarry-natural-stone.jpg`,
        width: 1200,
        height: 1600,
        alt: "Carrara marble quarry cut into white terraces with excavators working below",
      },
    ],
  },
};

export default function NaturalStonesArticle() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    datePublished: "2026-10-04",
    dateModified: "2026-10-04",
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
    image: `https://limhweechim.com${imageBase}/carrara-quarry-natural-stone.jpg`,
    keywords: searchThemes,
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
          <p className="standfirst">Part 1 of <em>Nature with Approval Rights</em></p>
          <div className="byline">
            <span>By Lim Hwee Chim</span>
            <span>4 October 2026 · 7 min read</span>
          </div>
        </header>

        <div className="article-body">
          <p className="lead">
            The first time I stood at the edge of the Carrara quarry, I stopped talking.
          </p>
          <p>
            A whole mountainside cut into white steps, excavators on the floor looking like toys. Somewhere in that rock was a polished lobby floor that we would later reduce to a hatch pattern and a two-line description on a finishes schedule.
          </p>
          <p>That was where it started. I have loved natural stone ever since.</p>

          <figure className="article-image article-image-portrait">
            <Image
              unoptimized
              src={`${imageBase}/carrara-quarry-natural-stone.jpg`}
              alt="Carrara marble quarry cut into white terraces with excavators working below"
              width={1200}
              height={1600}
              sizes="(max-width: 800px) 82vw, 620px"
              priority
            />
            <figcaption>
              Carrara. The excavators look like toys, which is roughly how the mountain sees them too.
            </figcaption>
          </figure>

          <p>
            Carrara. Statuario for its quiet white. Calacatta when the project could afford the gold, and occasionally when it could not. Rainforest when a designer wanted the room to have weather. I used it once, and I still remember the slab more clearly than the project.
          </p>
          <p>
            Every quarry visit leaves me with the same thought: something that took millions of years to form ends up negotiated over a few dollars per square metre. The millions of years never come up in the meeting.
          </p>

          <p>
            Strictly speaking, not every stone here is marble. Jura Beige, for one, is a limestone. On site, anything polished, heavy and expensive gets called marble, and I stopped correcting it years ago.
          </p>
          <p>
            Jura Beige comes from the Jurassic period, and if you look closely during dry-lay you start finding fossils — rings and unfamiliar outlines from an ancient sea, now sitting beside green masking tape and a handwritten label. Creatures that lived long before anyone imagined a building, let alone a powder room. There is always more in the stone than the colour we selected.
          </p>

          <figure className="article-image article-image-wide">
            <Image
              unoptimized
              src={`${imageBase}/jura-beige-dry-lay-fossils.jpg`}
              alt="Jura Beige limestone pieces arranged during dry-lay with fossil markings visible"
              width={1600}
              height={1200}
              sizes="(max-width: 900px) 92vw, 900px"
            />
            <figcaption>
              Jura Beige in dry-lay: a Jurassic seabed, taped up for a powder room.
            </figcaption>
          </figure>

          <p>
            Then there is what people make of it. A reception counter rolled into a long curve, grey and gold moving across its face, the joints still there but outranked by the form. Carved pieces where the veining runs over the rims and disappears into the hollows. A vanity edge, quieter still — a rounded lip your hand finds before your eye does. Something this hard starts to look almost soft. This is stone worked as a material, not just picked as a finish.
          </p>

          <figure className="article-image article-image-wide">
            <Image
              unoptimized
              src={`${imageBase}/curved-natural-stone-reception-counter.jpg`}
              alt="Large curved natural stone reception counter being worked on site"
              width={1600}
              height={1200}
              sizes="(max-width: 900px) 92vw, 900px"
            />
            <figcaption>A counter that refuses to be a straight line.</figcaption>
          </figure>

          <figure className="article-image article-image-wide">
            <Image
              unoptimized
              src={`${imageBase}/carved-natural-stone-seating.jpg`}
              alt="Carved dark natural stone seating pieces with veining continuing over the curved surfaces"
              width={1600}
              height={1200}
              sizes="(max-width: 900px) 92vw, 900px"
            />
            <figcaption>
              Carved stone, veining running into the hollows. The traffic cone is not part of the design intent.
            </figcaption>
          </figure>

          <figure className="article-image article-image-portrait">
            <Image
              unoptimized
              src={`${imageBase}/rounded-marble-vanity-edge.jpg`}
              alt="Rounded natural stone vanity edge showing a shaped return"
              width={1200}
              height={1600}
              sizes="(max-width: 800px) 82vw, 560px"
            />
            <figcaption>The quieter version: a rounded vanity edge and a shaped return.</figcaption>
          </figure>

          <p>
            Belvedere, a black stone from Angola that we used in the lobby, is drama of a different kind, with white and gold running through a dark face. Most of the effort goes into something no visitor will ever notice: making separate pieces read as one wall.
          </p>

          <figure className="article-image article-image-wide">
            <Image
              unoptimized
              src={`${imageBase}/belvedere-stone-dry-lay-cutting-layout.jpg`}
              alt="Belvedere natural stone slabs marked and taped for cutting layout"
              width={1600}
              height={1200}
              sizes="(max-width: 900px) 92vw, 900px"
            />
            <figcaption>
              Belvedere on the rack, taped for cutting. Where the gold lands is decided here, not on the scaffold.
            </figcaption>
          </figure>

          <figure className="article-image article-image-portrait">
            <Image
              unoptimized
              src={`${imageBase}/belvedere-stone-full-height-lobby-wall.jpg`}
              alt="Full-height Belvedere stone cladding installed in a lobby"
              width={1200}
              height={1600}
              sizes="(max-width: 800px) 82vw, 560px"
            />
            <figcaption>Belvedere in place at full height.</figcaption>
          </figure>

          <figure className="article-image article-image-portrait">
            <Image
              unoptimized
              src={`${imageBase}/belvedere-stone-level-marker-detail.jpg`}
              alt="Level marker precisely integrated into dark Belvedere stone wall cladding"
              width={1200}
              height={1600}
              sizes="(max-width: 800px) 82vw, 560px"
            />
            <figcaption>
              A level marker set into the stone. A small detail with no tolerance for a bad cut.
            </figcaption>
          </figure>

          <p>
            At height, beauty also needs a Professional Engineer. For heavy panels above people&apos;s heads, I would require mechanical anchorage designed and endorsed by one. Each fixing needs enough sound stone around it, which can mean a thicker, heavier piece, plus support steelwork, plus fabrication, plus access. Every plus comes with a dollar sign. That conversation belongs before the stone is ordered, not after the scaffold goes up.
          </p>

          <h2>When the mountain arrives</h2>

          <p>Then the stone arrives on site, and the romance meets the programme.</p>
          <p>A sample is a 300mm promise. The delivered floor is the rest of the mountain.</p>
          <p>
            One slab carries a heavier vein. Another has a grey cloud nobody saw in the showroom. Two pieces that looked fine on their own sit side by side like strangers at a wedding table. The owner, quite reasonably, expects the brochure. The brochure showed one photograph.
          </p>
          <p>
            We chose marble because no two pieces are alike. Then we asked the supplier to make them alike. I have been on both sides of that sentence, sometimes in the same meeting.
          </p>
          <p>
            So we dry-lay. Pieces are numbered, shuffled and reshuffled like a very heavy deck of cards — strong veins pushed toward the wardrobe line, darker pieces sent to quieter corners. It often takes space the site does not have and time the programme never budgeted, and every extra lift is another chance at a chipped edge.
          </p>
          <p>
            When the selection works, the eye reads one stone, not several. Nobody sees the shuffling, which is rather the point.
          </p>
          <p>
            Some stones do not forgive handling at all. Chipped arrises, hairline cracks, resin patches that never quite match. The brittle ones arrive with mesh and resin on the back. That helps the slab survive the journey, but the backing must also be compatible with the adhesive beneath it. Batch thicknesses vary, so even keeping two edges flush becomes a small negotiation. You learn which stones to love from a distance.
          </p>
          <p>
            Then there is moisture. Water from the bedding or screed can find its way into the stone. It can darken the stone or leave a tide mark, often just in time for handover. Where the moisture carries soluble salts to the surface, a white deposit may appear weeks later. We check the bedding and seal the stone. It helps. It does not make a porous material stop being porous.
          </p>
          <p>
            When an owner points at a dark patch, “natural variation” is the easiest answer in the room. Sometimes it is even true. But a cloud the quarry put there and a stain we put there are different problems, and the owner deserves to know which one they are looking at.
          </p>
          <p>
            That is the hard part of this relationship. I can admire the stone and still ask whether we chose it for a setting prepared to accept it.
          </p>

          <blockquote>Nature, it turns out, has approval rights. It just never attends the coordination meeting.</blockquote>

          <div className="takeaway">
            <span>Practitioner takeaway</span>
            <strong>
              Natural stone is not only a material-selection decision. Dry-lay space, moisture control, fixing strategy, thickness, replacement stock and acceptance criteria all need to be resolved before the finish reaches site.
            </strong>
          </div>

          <p className="article-note">
            Written from inside Singapore&apos;s construction and development industry. Observations are drawn from project delivery and material-selection experience. Positions are the author&apos;s own.
          </p>
          <p className="author-note">
            Lim Hwee Chim is a Singapore property development leader and the founder of Skyline by HC, where she writes about how upstream developer decisions shape construction outcomes.
          </p>
          <p className="article-note">
            Related Skyline reading:{" "}
            <Link href="/articles/aluminium-finish-survive-twice">
              The Aluminium Finish That Has to Survive Twice
            </Link>{" "}
            and{" "}
            <Link href="/articles/the-smallest-risk-on-a-construction-project">
              The Smallest Risk on a Construction Project
            </Link>
            .
          </p>
        </div>
      </article>
    </Shell>
  );
}
