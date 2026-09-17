import { AnalysisStation } from "@/components/analysis-station";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export default function Home() {
  return (
    <main>
      <SiteHeader active="Detector" />
      <AnalysisStation />
      <SiteFooter />
    </main>
  );
}
