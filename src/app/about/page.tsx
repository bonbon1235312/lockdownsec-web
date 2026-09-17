import { Eye, LockKey, Warning } from "@phosphor-icons/react/dist/ssr";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export default function AboutPage() {
  return <main><SiteHeader active="About" /><section className="page"><div className="shell"><span className="eyebrow">About LockDown AI</span><h1>Decision support, not a verdict machine.</h1><p>LockDown AI is built for an honest class demonstration of two self-trained text detectors. It provides model signals to inform review; it does not identify an author or establish provenance.</p><div className="content-grid"><article className="content-card"><Eye size={28} color="var(--signal)" /><h2>Visible uncertainty</h2><p>Results are qualitative where calibration supports it. A low result is never presented as proof that AI was not involved.</p></article><article className="content-card"><LockKey size={28} color="var(--signal)" /><h2>No text retention</h2><p>The frontend does not save pasted documents. The API is designed to log operational metadata, not submitted text.</p></article><article className="content-card"><Warning size={28} color="var(--signal)" /><h2>Use with care</h2><p>Do not use model output alone for academic, employment, legal, or disciplinary decisions.</p></article></div></div></section><SiteFooter /></main>;
}
