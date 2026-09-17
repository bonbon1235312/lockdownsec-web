import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import type { LegalPolicy } from "@/lib/legal-content";

export function LegalPage({ policy }: { policy: LegalPolicy }) {
  return <main><SiteHeader active="" /><section className="legal-page"><div className="shell legal-shell"><span className="eyebrow">{policy.eyebrow}</span><h1>{policy.title}</h1><p className="legal-intro">{policy.description}</p><p className="legal-updated mono">Last updated: {policy.updated}</p><div className="legal-content">{policy.sections.map((section) => <section key={section.heading}><h2>{section.heading}</h2>{section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</section>)}</div></div></section><SiteFooter /></main>;
}
