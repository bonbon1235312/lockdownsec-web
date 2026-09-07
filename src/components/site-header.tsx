import Link from "next/link";
import { ShieldCheck } from "@phosphor-icons/react/dist/ssr";

const links = [
  ["Detector", "/"],
  ["Model Arena", "/arena"],
  ["Models", "/models"],
  ["Research", "/research"],
  ["About", "/about"],
] as const;

export function SiteHeader({ active }: { active: string }) {
  return <header className="header"><div className="shell header-inner">
    <Link href="/" className="brand" aria-label="LockDown AI home"><span className="brand-mark"><ShieldCheck size={15} weight="fill" /></span><span>LockDown AI</span></Link>
    <nav className="nav" aria-label="Primary navigation">{links.map(([label, href]) => <Link className={active === label ? "active" : ""} href={href} key={href}>{label}</Link>)}</nav>
    <span className="mono status-label" style={{ color: "var(--faint)", fontSize: 10 }}><i className="status-dot" />LIVE INFERENCE</span>
  </div></header>;
}
