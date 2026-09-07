import assert from "node:assert/strict";
import test from "node:test";

import { humanizerLanePresentation, rawLanePresentation } from "./lane-presentation";

test("raw model high score is presented as an experimental pattern signal", () => {
  const presentation = rawLanePresentation("ai_characteristics_detected");

  assert.equal(presentation.badge, "experimental signal");
  assert.match(presentation.copy, /does not establish authorship/i);
});

test("raw model low score does not clear a document", () => {
  const presentation = rawLanePresentation("human_characteristics_detected");

  assert.equal(presentation.badge, "no strong pattern");
  assert.match(presentation.copy, /does not rule out AI involvement/i);
});

test("humanizer copy uses a qualitative review signal instead of a probability", () => {
  const presentation = humanizerLanePresentation("elevated");

  assert.equal(presentation.badge, "review signal");
  assert.doesNotMatch(presentation.copy, /score|probability|%/i);
});
