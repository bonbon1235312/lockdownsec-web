import { LegalPage } from "@/components/legal-page";
import { termsOfUse } from "@/lib/legal-content";

export default function TermsPage() { return <LegalPage policy={termsOfUse} />; }
