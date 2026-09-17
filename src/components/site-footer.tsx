import Link from "next/link";

export function SiteFooter() {
  return <footer className="site-footer"><div className="shell footer-inner"><p>© 2026 LockDown AI. Experimental text-analysis signals for review.</p><nav aria-label="Legal navigation"><Link href="/terms">Terms of use</Link><Link href="/privacy">Privacy</Link><a href="mailto:nicholsone140@gmail.com">Contact</a></nav></div></footer>;
}
