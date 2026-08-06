import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Shell } from "../../components";

const title = "The Substation Went Underground.";
const description =
  "A planning refinement made basement substations more attractive. The technical discussion that followed shows why planning, fire safety and long-term grid operations have to be considered together.";
const canonical = "/articles/substation-went-underground";

export const metadata: Metadata = {
  title: `${title} | Skyline by HC`,
  description,
  alternates: { canonical },
  openGraph: {
    title,
    description,
    type: "article",
    publishedTime: "2026-07-25",
    authors: ["Lim Hwee Chim"],
    images: [
      {
        url: "/images/articles/substation-went-underground/above-ground-electrical-substation.webp",
        width: 722,
        height: 522,
        alt: "Above-ground electrical substation with direct external access",
      },
    ],
  },
};

export default function SubstationWentUndergroundArticle() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    datePublished: "2026-07-25",
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
      "https://limhweechim.com/images/articles/substation-went-underground/above-ground-electrical-substation.webp",
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
          <p className="standfirst">{description}</p>
          <div className="byline">
            <span>By Lim Hwee Chim</span>
            <span>25 July 2026 · 9 min read</span>
          </div>
        </header>

        <div className="article-body">
          <p className="lead">A substation has never sold a single unit.</p>
          <p>Buyers don&apos;t ask where the transformer sits. Architects would rather not explain why a windowless utility room occupies the best frontage on site. Developers, given the choice, spend the visible ground floor on what photographs well — lobby, retail, landscaping, arrival — and put the necessary, ugly things somewhere else.</p>
          <p>So when a 2019 planning refinement made it easier to exclude basement M&amp;E rooms from Gross Floor Area, the industry didn&apos;t need convincing. Move the substation underground. Keep the GFA. Free up the ground floor. Everyone wins.</p>

          <figure className="article-image article-image-wide">
            <Image unoptimized src="/images/articles/substation-went-underground/above-ground-electrical-substation.webp" alt="Above-ground electrical substation with direct external access for utility operations" width={722} height={522} sizes="(max-width: 800px) 90vw, 900px" priority />
            <figcaption>Above ground, a perimeter substation has ordinary advantages: direct access, short ventilation paths and straightforward emergency response.</figcaption>
          </figure>

          <p>Except the substation didn&apos;t just change floors. It moved from a relatively open, externally accessible room into an enclosed underground box, hemmed in by car parks, structural walls, building services, and several hundred occupied units overhead.</p>
          <p>The planning rule moved. Nobody sent the safety assumptions along with it.</p>
          <p>That gap is no longer theoretical. It is now the subject of active dialogue among BCA, SCDF, EMA and SP PowerGrid — a coordinated look at insulating fluid, fire containment, equipment access, indemnity, and what it actually takes to keep a substation running underground for thirty years. The conversation on live projects sounds technical: fire points, ester oil, headroom clearances. It isn&apos;t, really.</p>
          <p>It&apos;s a planning decision from seven years ago finally arriving at the desk of whoever runs the project today.</p>

          <h2>The Circular That Started It</h2>
          <p>The date worth remembering is 5 July 2019. URA issued Circular URA/PB/2019/11-DCG — Refinements to Gross Floor Area Rules to Facilitate More Efficient Calculation of GFA — and quietly reshaped how M&amp;E rooms are treated in basement car parks. Where the old rules tied GFA exemption to prescriptive physical controls, the refinement simplified matters: substations, bin centres, and pump rooms in fully sunken basement car parks could now sit outside the GFA count altogether.</p>
          <p>The intent was sound — infrastructure a development is legally required to house shouldn&apos;t eat into the intensity it&apos;s allowed to build. Nobody serious argues with that.</p>
          <p>But planning incentives don&apos;t stay theoretical. The moment a basement substation stopped costing GFA, it started making architectural sense to put it there. Every development team facing that trade-off reached roughly the same conclusion — which is exactly how an individually sensible decision becomes, at industry scale, something nobody quite decided on purpose.</p>
          <p>Ground-floor substations eat into frontage, unit planning, retail continuity — the whole choreography of arrival a launch brochure is built around. Push the room underground and the ground plane comes back, cleaner and more marketable. Nobody made a bad call here. Each project team answered the question the guideline actually asked: does this room count toward development intensity? Nobody was answering the quieter question it never raised: what changes when you put an oil-filled transformer underground?</p>

          <h2>The Location Changed the Risk, Not the Equipment</h2>
          <p>An above-ground substation on the perimeter comes with advantages so ordinary nobody bothers listing them — direct external access, short ventilation paths, easy heat rejection, a fire engine that can pull up outside.</p>
          <p>Push the same room underground and every one needs re-engineering from scratch. Access runs through the car park ramp. Ventilation depends on shafts threading through the building. Heat, smoke, and burning insulating fluid no longer have anywhere obvious to go. And in twenty years, replacing the transformer means getting a multi-tonne piece of equipment out of a fully occupied building without demolishing half of it.</p>
          <p>The transformer hasn&apos;t changed. The consequences of it failing have, simply because of where it now sits.</p>

          <figure className="article-image article-image-wide">
            <Image unoptimized src="/images/articles/substation-went-underground/underground-substation-equipment-room.webp" alt="Electrical switchgear and transformer equipment inside an enclosed basement substation room" width={828} height={467} sizes="(max-width: 800px) 90vw, 900px" />
            <figcaption>Moving the same electrical equipment underground changes its access, heat rejection, flood exposure and eventual replacement route.</figcaption>
          </figure>

          <h2>The Fluid Question</h2>
          <p>The liquid in an oil-filled transformer serves both insulating and cooling functions. For underground installations, the key question is whether conventional mineral oil remains appropriate for the setting, or whether a high-fire-point ester fluid should be required instead.</p>
          <p>This is not simply a comparison of two temperature figures. Flash point, fire point and auto-ignition temperature describe different material behaviours. Comparing one fluid&apos;s flash point with another fluid&apos;s fire point can therefore be misleading.</p>

          <figure className="article-image article-image-wide">
            <Image unoptimized src="/images/articles/substation-went-underground/transformer-fluid-comparison.webp" alt="Illustrative comparison of ester and mineral insulating fluids used in electrical transformers" width={1174} height={896} sizes="(max-width: 800px) 90vw, 900px" />
            <figcaption>Illustrative comparison of ester and mineral insulating fluids. Project specifications should rely on verified manufacturer data and the applicable authority requirements.</figcaption>
          </figure>

          <p>Mineral oil has served reliably in transformer installations for decades. The question is not whether it works. The question is whether the same solution remains appropriate when the transformer sits in a more enclosed and consequential location.</p>
          <p>Ester fluids may offer fire-safety and environmental advantages, but implementation is not simply a matter of changing the liquid. Equipment availability, technical specifications, operational acceptance, maintenance requirements and transition arrangements must all be aligned.</p>
          <p>For projects already in design or construction, clarity matters as much as the technical requirement itself. The industry benefits when the applicable standard, submission route, transition period and effective date are communicated early and consistently.</p>
          <p>This is not an argument against case-by-case engineering assessment. Different basement configurations may justify different solutions. But project-specific assessment works best when it begins from a clear and predictable baseline.</p>

          <h2>The Room Is a System, Not a Box With a Door</h2>
          <p>Early design treats a substation as a rectangle with a door and some dimensions. A basement substation is closer to a piece of long-term infrastructure sitting inside someone else&apos;s building.</p>
          <p>It needs fire containment sized for a fluid spill, a permanent route for replacing a transformer decades after occupation, structural capacity that anticipated equipment weight before the slab was cast, flood protection appropriate below grade, reliable heat rejection for the asset&apos;s life, and a clear line on who — SPPG, the MCST, the developer — owns which piece after handover.</p>
          <p>Every one of these is solvable. None of them is solvable well after the basement box has already been poured around it.</p>

          <h2>The Fine Print Matters More Underground</h2>
          <p>Two smaller items illustrate the same pattern at a level below fire code and fluid spec — the level of the fine print, where nobody thinks to look until it&apos;s load-bearing.</p>
          <p>The first is indemnity. The prevailing SP PowerGrid clause places full liability on the developer for incidents affecting the substation — including flood or water ingress — notwithstanding full compliance with all statutory requirements and approved designs. Above ground, against an external wall, that allocation was rarely tested.</p>
          <p>Below ground, in a room now exposed to groundwater, stormwater surge, and every other basement-specific failure mode, the same clause carries materially more residual risk than it did when it was written. Nobody redrafted it when the room moved. It simply travelled downward with the equipment, unexamined, and got heavier on the way.</p>
          <p>The second is headroom. A newly introduced requirement for 5.5 metres of clear headroom in front of transformer rooms is now surfacing on live projects, with limited clarity on its technical basis, its applicability, or its implementation timeline. It may well be a sound requirement — transformer replacement is exactly the kind of decades-out logistics problem this piece keeps returning to.</p>
          <p>But a requirement that arrives mid-design, without a stated basis or start date, produces the same effect as the ester-oil timeline gap: good design intent, delivered as a surprise instead of a standard.</p>
          <p>Neither of these is a technical failure. Both are what happens when a clause or a dimension is inherited from the above-ground version of the room and nobody goes back to ask whether it still fits the version that exists now.</p>

          <h2>Ventilation and CFD, or Mechanical Ventilation</h2>
          <p>Mechanical ventilation has long been the norm for basement substations in Singapore, even where a courtyard or open-to-sky opening sits beside the room. The reason is simple. An opening does not prove that transformer heat will escape reliably. Natural ventilation depends on buoyancy, louvre area, shaft geometry, wind and actual loading. That performance often has to be demonstrated through CFD.</p>
          <p>Mechanical ventilation is easier to define, test and commission. So when a project proposes natural ventilation, SPPG may reasonably ask for stronger evidence. The CFD request is therefore not the main issue. It is a consequence of choosing a less conventional ventilation strategy for a substation already moved underground.</p>

          <h2>Five Parties, Different Lens</h2>
          <p>URA asks whether the room is acceptable in planning terms and counts toward GFA. SCDF asks whether fire, smoke, and fluid can be safely contained. BCA asks whether the structure complies. EMA and SP PowerGrid ask whether the transformer can run reliably, be maintained, and eventually be replaced. The developer asks whether all of that can still be built and delivered on a programme that makes commercial sense.</p>
          <p>None of these questions is unreasonable alone. The trouble starts when they&apos;re answered one at a time, by five parties, at five stages, instead of together, early, in the same room. A substation can clear planning cleanly and still carry unresolved fire, access, liability and utility questions nobody has connected. Surfacing later, they get filed as technical complications. They aren&apos;t. They&apos;re the visible symptom of information that never had a reason to travel between desks.</p>
          <p>There&apos;s a sixth voice that is welcome: the QPs, LEWs and M&amp;E consultants who actually design these spaces project after project. They are the ones who feel the ester-oil timeline gap, the indemnity clause, and the headroom requirement first — in the design meeting, months before any of it reaches an authority desk. Bringing that practical, repeat-project experience into the same conversation as the five institutional parties would not resolve every question by itself.</p>
          <p>It would at least mean the framework gets stress-tested against how these rooms actually get built, not just how they get approved.</p>

          <h2>The 2019 Circular</h2>
          <p>The 2019 URA circular solved a genuine planning problem and opened up real value — better landscaping, cleaner ground planes, more usable communal space. Developers who moved substations underground were responding rationally. SPPG, EMA and SCDF scrutinising oil-filled equipment underground are doing their job correctly too.</p>
          <p>Nobody in this chain made an obviously wrong call. The weakness is in the seam between them — planning moved the preferred location of critical infrastructure, and the technical and utility standards had to catch up afterward, on whichever project happened to be mid-construction when the catching-up occurred.</p>
          <p>A fair-minded engineer would say there can never be one universal answer for every basement substation — a room beside an external wall isn&apos;t the room beneath a tower. Correct. But case-by-case review doesn&apos;t require the industry to relearn the baseline every time. Discretion and predictability aren&apos;t in tension. It&apos;s harder to design responsibly around a standard that doesn&apos;t exist until the reviewer writes it, mid-construction, in a comment.</p>

          <h2>The Design Gate</h2>
          <p>The practical answer, for anyone running such a project now, is a formal gate before the basement freezes — written confirmation of location, transformer rating and fluid, fire-point criterion, dimensions and heat losses, containment, the permanent access and replacement route, structural loading, flood protection, ventilation basis, headroom clearance, liability allocation, and who owns what after handover.</p>
          <p>Get that in writing early, and nobody downstream ever notices the work it saved. The room that didn&apos;t need enlarging. The slab opening that didn&apos;t need cutting twice. The indemnity clause that got queried before signing instead of after an incident. None of it becomes a story, because none of it happens. Good developer-side project management is invisible by design — its value shows up as the crisis that never made anyone&apos;s meeting minutes.</p>

          <h2>The Actual Lesson</h2>
          <p>This was never really about ester oil, and it isn&apos;t about CFD, headroom, or an indemnity clause taken in isolation. It&apos;s a case study in what happens when a policy changes the geography of critical infrastructure faster than the standards, contracts and clearances governing it can move.</p>
          <p>The 2019 refinement made basement substations commercially attractive. The industry responded as any rational industry would. But underground, the same equipment carries different fire consequence, access logistics, flood exposure, liability, and ownership on handover — and when those differences only surface after the design is fixed, some of the value gained from optimising GFA quietly gets spent again, on redesign, indemnity exposure and delay.</p>
          <p>Good development was never just about maximising GFA. Good regulation was never just about each discipline clearing its own bar. The part nobody owns by default is the integration between them — and that&apos;s usually where a project&apos;s real cost lives.</p>
          <p>The substation is still underground. The relevant authorities and the grid operator are, encouragingly, now looking at the same room together. Whether that produces one coordinated standard, or five more individually reasonable answers to five different questions, is the part of this story still being written.</p>

          <div className="takeaway"><span>Practitioner takeaway</span><strong>Before the basement freezes, confirm the substation as a complete operating system — not merely a compliant room on a drawing.</strong></div>
          <p className="original-note">Originally published on <a href="https://www.linkedin.com/pulse/substation-went-underground-hwee-chim-lim-e80bc/" target="_blank" rel="noreferrer">LinkedIn</a> on 25 July 2026.</p>
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