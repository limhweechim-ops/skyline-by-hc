import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = { title: { default: "Lim Hwee Chim | Skyline by HC", template: "%s | Skyline by HC" }, description: "Practitioner writing on how upstream developer decisions shape construction outcomes in Singapore.", metadataBase: new URL("https://limhweechim.com"), openGraph: { title: "Lim Hwee Chim — Skyline by HC", description: "Developer-side perspectives on construction, technology, regulation and Singapore’s built environment.", type: "website" }, other: { "codex-preview": "development" }, icons: { icon: "/favicon.svg" } };
export default function RootLayout({children}:{children:React.ReactNode}) { return <html lang="en"><body>{children}</body></html>; }
