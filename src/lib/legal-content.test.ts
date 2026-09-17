import assert from "node:assert/strict";
import test from "node:test";

import { privacyPolicy, termsOfUse } from "./legal-content";

const policyText = (policy: { sections: readonly { paragraphs: readonly string[] }[] }) =>
  policy.sections.flatMap((section) => section.paragraphs).join(" ");

test("privacy policy gives a contact route and does not promise text is never processed", () => {
  const text = policyText(privacyPolicy);

  assert.match(text, /nicholsone140@gmail\.com/i);
  assert.match(text, /real-time inference/i);
  assert.match(text, /not intentionally retain submitted text/i);
});

test("terms state that detector outputs are not high-stakes or authorship decisions", () => {
  const text = policyText(termsOfUse);

  assert.match(text, /not proof of authorship/i);
  assert.match(text, /academic, employment, legal, disciplinary, or other high-stakes/i);
  assert.match(text, /Nothing in these terms excludes liability that cannot be excluded by law/i);
});
