export function rawLanePresentation(decision: string | undefined) {
  const hasPattern = decision === "ai_characteristics_detected";

  return hasPattern
    ? {
        badge: "experimental signal",
        copy: "The raw model found a pattern similar to its AI-labelled training examples. This experimental signal does not establish authorship.",
      }
    : {
        badge: "no strong pattern",
        copy: "No strong pattern was found by this experimental model. This does not rule out AI involvement.",
    };
}

export function humanizerLanePresentation(band: "low" | "elevated" | "high" | undefined) {
  if (band === "high") return {
    badge: "strong review signal",
    copy: "This text showed a strong pattern associated with transformed AI writing in this model's evaluation. Treat it as a reason to review, not proof of authorship.",
  };
  if (band === "elevated") return {
    badge: "review signal",
    copy: "This text showed a pattern associated with transformed AI writing. Treat it as a reason to review, not proof of authorship.",
  };
  return {
    badge: "no strong signal",
    copy: "This model did not find a strong transformed-AI pattern. That does not rule out AI involvement, especially after substantial human editing.",
  };
}
