"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRef, useState } from "react";

const links = [["/about", "About"], ["/articles", "Articles"], ["/topics", "Topics"], ["/connect", "Connect"]];

export default function Navigation() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const toggle = useRef<HTMLButtonElement>(null);
  return <div className="navigation" onKeyDown={(event) => {
    if (event.key === "Escape" && open) { setOpen(false); toggle.current?.focus(); }
  }}>
    <button ref={toggle} className="menu-toggle" aria-expanded={open} aria-controls="main-navigation" onClick={() => setOpen(!open)}>{open ? "Close" : "Menu"}<span aria-hidden="true">{open ? "−" : "+"}</span></button>
    <nav id="main-navigation" className={open ? "is-open" : ""} aria-label="Main navigation">
      {links.map(([href, label]) => <Link key={href} href={href} aria-current={pathname === href || pathname.startsWith(href + "/") ? "page" : undefined} onClick={() => setOpen(false)}>{label}</Link>)}
    </nav>
  </div>;
}
