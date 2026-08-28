"use client";

import { FormEvent, useState } from "react";

type SubmissionState = "idle" | "submitting" | "success" | "error";

export function ContactForm() {
  const [submissionState, setSubmissionState] = useState<SubmissionState>("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmissionState("submitting");

    const form = event.currentTarget;
    const response = await fetch(form.action, {
      method: form.method,
      body: new FormData(form),
      headers: { Accept: "application/json" },
    });

    if (response.ok) {
      form.reset();
      setSubmissionState("success");
      return;
    }

    setSubmissionState("error");
  }

  if (submissionState === "success") {
    return (
      <div className="form-confirmation" role="status" aria-live="polite">
        <p className="eyebrow">Message sent</p>
        <h3>Thank you. Your note has been sent to Lim Hwee Chim.</h3>
        <p>HC will review it and respond if there is a useful conversation to continue.</p>
        <button type="button" onClick={() => setSubmissionState("idle")}>
          Send another note
        </button>
      </div>
    );
  }

  return (
    <form
      action="https://formspree.io/f/xkjwoowd"
      method="POST"
      acceptCharset="UTF-8"
      onSubmit={handleSubmit}
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
        <select name="enquiry_type" defaultValue="Project problem or lesson">
          <option value="Project problem or lesson">Project problem or lesson</option>
          <option value="PPVC, precast or DfMA">PPVC, precast or DfMA</option>
          <option value="Experiment or research idea">Experiment or research idea</option>
          <option value="Speaking or media invitation">Speaking or media invitation</option>
          <option value="Other industry conversation">Other industry conversation</option>
        </select>
      </label>

      <label>
        Message
        <textarea name="message" rows={5} required />
      </label>

      <button type="submit" disabled={submissionState === "submitting"}>
        {submissionState === "submitting" ? "Sending…" : "Send note"}{" "}
        {submissionState === "submitting" ? null : <span aria-hidden="true">→</span>}
      </button>

      {submissionState === "error" ? (
        <p className="form-error" role="alert">
          The message could not be sent. Please check your connection and try again.
        </p>
      ) : (
        <p className="form-note">
          Your message will be sent securely to Lim Hwee Chim.
        </p>
      )}
    </form>
  );
}
