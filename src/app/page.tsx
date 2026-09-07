import { AnalysisStation } from "@/components/analysis-station";
import { SiteHeader } from "@/components/site-header";

export default function Home() {
  return (
    <main>
      <SiteHeader active="Detector" />
      <AnalysisStation />
    </main>
  );
}
