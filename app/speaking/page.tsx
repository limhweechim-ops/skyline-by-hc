import type { Metadata } from "next";
import Link from "next/link"; import { Shell } from "../components";

export const metadata: Metadata = {
  alternates: { canonical: "/speaking" },
};
export default function Speaking(){return <Shell><section className="page-hero split"><div><p className="eyebrow">Speaking & media</p><h1>Grounded conversations about how projects really move.</h1></div><p>Available for thoughtful industry exchanges, panels and practitioner discussions.</p></section><section className="speaking-grid"><div><p className="eyebrow">Speaking themes</p><h2>From policy intent to project reality.</h2></div><div className="number-list"><p><span>01</span>Upstream developer leadership</p><p><span>02</span>PPVC as coordination discipline</p><p><span>03</span>Technology and integration</p><p><span>04</span>The final 90 days to TOP</p><p><span>05</span>Regulatory friction and learning</p></div></section><section className="media-note"><p className="eyebrow">Selected experience</p><h2>Building the evidence archive.</h2><p>This page will grow with verified talks, panels, event photographs and published media references. Each entry will identify the organiser, date and subject clearly.</p><Link className="button dark" href="/contact">Discuss an invitation <span>→</span></Link></section></Shell>}
