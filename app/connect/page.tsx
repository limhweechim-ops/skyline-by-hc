import type { Metadata } from "next";
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
    </section>

    <section className="contact-grid" id="contact-form">
      <div>
        <p>Send HC a note.</p>
        <p className="small">A short note about the issue, idea or experiment is enough to begin.</p>
      </div>

      <form
        action="https://formspree.io/f/xkjwoowd"
        method="POST"
        acceptCharset="UTF-8"
      >
        <input
          type="hidden"
          name="_subject"
          value="New enquiry from limhweechim.com"
        />

        <label>
          Name
          <input type="text" name="name" autoComplete="name" required />
        </label>

        <label>
          Email
          <input type="email" name="email" autoComplete="email" required />
        </label>

        <label>
          What would you like to compare notes on?
          <select name="enquiry_type" defaultValue="Construction question">
            <option value="Construction question">Construction question</option>
            <option value="Project experiment">Project experiment</option>
            <option value="Article feedback">Article feedback</option>
            <option value="Industry conversation">Industry conversation</option>
          </select>
        </label>

        <label>
          Message
          <textarea name="message" rows={5} required />
        </label>

        <button type="submit">
          Send note <span aria-hidden="true">→</span>
        </button>
        <p className="form-note">
          Your message will be sent securely to Lim Hwee Chim.
        </p>
      </form>
    </section>

    <section className="media-note">
      <p className="eyebrow">Speaking, sharing &amp; industry conversations</p>
      <h2>Project lessons are better when they are shared.</h2>
      <p>HC occasionally shares project lessons at industry sessions, practitioner discussions and events, particularly where real project experience can help unpack how policy, design and delivery meet in practice.</p>
    </section>
  </Shell>;
}
