import type { Metadata } from "next";
import { Shell } from "../components";

export const metadata: Metadata = {
  alternates: { canonical: "/contact" },
};

export default function Contact() {
  return (
    <Shell>
      <section className="page-hero">
        <p className="eyebrow">Contact</p>
        <h1>Start a useful conversation.</h1>
      </section>

      <section className="contact-grid">
        <div>
          <p>If you would like to get in touch, please leave a message below.</p>
          <p className="small">Please include a short note about your enquiry.</p>
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
            Enquiry type
            <select name="enquiry_type" defaultValue="General enquiry">
              <option value="General enquiry">General enquiry</option>
              <option value="Article feedback">Article feedback</option>
              <option value="Professional discussion">
                Professional discussion
              </option>
              <option value="Website feedback">Website feedback</option>
            </select>
          </label>

          <label>
            Message
            <textarea name="message" rows={5} required />
          </label>

          <button type="submit">
            Send enquiry <span aria-hidden="true">→</span>
          </button>
          <p className="form-note">
            Your message will be sent securely to Lim Hwee Chim.
          </p>
        </form>
      </section>
    </Shell>
  );
}
