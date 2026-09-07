import assert from "node:assert/strict";
import test from "node:test";

test("parses staged inference events from the API stream", async () => {
  const streamModule = await import("./sse").catch(() => ({ parseSseBlocks: () => [] }));
  assert.deepEqual(streamModule.parseSseBlocks("event: raw_model\ndata: {}\n\nevent: complete\ndata: {\"word_count\":13}\n\n"), [
    { event: "raw_model", data: {} },
    { event: "complete", data: { word_count: 13 } },
  ]);
});
