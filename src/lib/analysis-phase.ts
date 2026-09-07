export type AnalysisPhase = "idle" | "checking" | "raw" | "humanizer" | "complete";
export type StageState = "waiting" | "active" | "complete";

const labels = ["Submitting", "Raw model", "Humanizer", "Results"] as const;

export function getAnalysisStages(phase: AnalysisPhase): { label: string; state: StageState }[] {
  if (phase === "checking") {
    return labels.map((label, index) => ({ label, state: index === 0 ? "active" : "waiting" }));
  }
  if (phase === "raw") {
    return labels.map((label, index) => ({ label, state: index === 0 ? "complete" : index === 1 ? "active" : "waiting" }));
  }
  if (phase === "humanizer") {
    return labels.map((label, index) => ({ label, state: index < 2 ? "complete" : index === 2 ? "active" : "waiting" }));
  }
  const activeIndex = phase === "complete" ? 3 : 0;
  return labels.map((label, index) => ({
    label,
    state: phase === "idle" ? "waiting" : index < activeIndex ? "complete" : index === activeIndex ? "active" : "waiting",
  }));
}
