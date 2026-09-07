import assert from "node:assert/strict";
import test from "node:test";

test("loading stages disclose only live request milestones", async () => {
  const phaseModule = await import("./analysis-phase").catch(() => ({ getAnalysisStages: () => [] }));

  assert.deepEqual(phaseModule.getAnalysisStages("checking"), [
    { label: "Submitting", state: "active" },
    { label: "Raw model", state: "waiting" },
    { label: "Humanizer", state: "waiting" },
    { label: "Results", state: "waiting" },
  ]);
  assert.deepEqual(phaseModule.getAnalysisStages("humanizer").slice(0, 3), [
    { label: "Submitting", state: "complete" },
    { label: "Raw model", state: "complete" },
    { label: "Humanizer", state: "active" },
  ]);
});
