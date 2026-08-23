import type { Metadata } from "next";
import Link from "next/link";
import { Shell } from "../components";

export const metadata: Metadata = {
  title: "Connect | Lim Hwee Chim",
  description: "Connect with Lim Hwee Chim to compare notes on construction delivery, PPVC, precast coordination, project problems and practical experiments.",
  alternates: { canonical: "/connect" },
};

export default function Connect(){
  return <Shell>
    <section className="page-hero split">
      <div>
        <p className="eyebrow">Connect</p>
        <h1>Got an interesting project problem? Let’s compare notes.</h1>
      </div>
      <p>Construction throws up plenty of strange problems. If you are working through one, testing an idea, or simply see something worth discussing, feel free to get in touch.</p>
    </section>

    <section className="speaking-grid">
      <div>
        <p className="eyebrow">Things HC is curious about</p>
        <h2>Questions worth exploring.</h2>
      </div>
      <div className="number-list">
        <p><span>01</span>Why projects get stuck</p>
        <p><span>02</span>PPVC, precast and coordination</p>
        <p><span>03</span>Experiments worth trying</p>
      </div>
    </section>

    <section className="media-note">
      <p className="eyebrow">Interesting problems welcome</p>
      <h2>If you have something interesting, send it HC’s way.</h2>
      <p>It could be a difficult construction interface, an unusual project experiment, a PPVC or precast problem, something that does not quite work despite everyone following the process, or simply an industry question worth thinking about.</p>
      <p>HC may not have the answer. But those are usually the conversations worth having.</p>
      <Link className="button dark" href="/contact">Get in touch <span>→</span></Link>
    </section>

    <section className="media-note">
      <p className="eyebrow">Speaking, sharing & industry conversations</p>
      <h2>Project lessons are better when they are shared.</h2>
      <p>HC occasionally shares project lessons at industry sessions, practitioner discussions and events, particularly where real project experience can help unpack how policy, design and delivery meet in practice.</p>
    </section>
  </Shell>;
}
