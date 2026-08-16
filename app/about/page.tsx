import { Shell } from "../components";

const profilePageJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  "@id": "https://limhweechim.com/about",
  url: "https://limhweechim.com/about",
  mainEntity: {
    "@type": "Person",
    "@id": "https://limhweechim.com/about#person",
    name: "Lim Hwee Chim",
    alternateName: "Hwee Chim Lim",
    url: "https://limhweechim.com/about",
    description:
      "Lim Hwee Chim is a Singapore property development leader and the founder of Skyline by HC, where she writes about how upstream developer decisions shape construction outcomes.",
    sameAs: [
      "https://sg.linkedin.com/in/hweechimlim",
      "https://medium.com/@hcl.writes",
    ],
  },
};

export default function About() {
  return (
    <Shell>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(profilePageJsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <section className="page-hero">
        <p className="eyebrow">About Lim Hwee Chim</p>
        <h1>A practitioner’s view from the developer side.</h1>
      </section>
      <section className="prose-layout">
        <aside>
          <span>Perspective</span>
          <p>
            Singapore
            <br />
            Property development
            <br />
            Project delivery
          </p>
        </aside>
        <article className="prose">
          <p className="lead">
            Lim Hwee Chim is a Singapore property development leader and the
            founder of Skyline by HC, where she writes about how upstream
            developer decisions shape construction outcomes.
          </p>
          <p>
            Her work spans the development lifecycle—from land and feasibility
            through design, authority approvals, procurement, construction and
            completion. That vantage point has shaped a simple conviction: many
            problems that appear on site begin much earlier, when information is
            incomplete, interfaces are unclear or time is compressed without
            acknowledging where the pressure will reappear.
          </p>
          <h2>Why Skyline exists</h2>
          <p>
            Skyline by HC is an independent practitioner platform for examining
            those decisions. It connects field experience with wider questions
            about productivity, PPVC, digital delivery, sustainability,
            regulation and leadership in Singapore’s built environment.
          </p>
          <p>
            The writing is not a project diary, nor a consultancy brochure. It
            is an attempt to make the invisible work of development more
            visible: the coordination that prevents a delay, the early question
            that avoids a variation, and the integration work that allows an
            innovation to survive contact with a real project.
          </p>
          <h2>A working position</h2>
          <p>
            Developers shape the conditions; contractors execute within them.
            This does not remove contractor responsibility. It asks a more
            useful upstream question: what information, incentives and decision
            structures did the project create—and what behaviours were they
            likely to produce?
          </p>
          <p className="note">
            Views expressed on this site are personal practitioner reflections
            and do not represent the official position of any employer or
            project party.
          </p>
        </article>
      </section>
    </Shell>
  );
}
