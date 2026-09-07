export type SseEvent = { event: string; data: Record<string, unknown> };

export function parseSseBlocks(buffer: string): SseEvent[] {
  return buffer.split("\n\n").flatMap((block) => {
    const event = block.match(/^event: (.+)$/m)?.[1];
    const rawData = block.match(/^data: (.+)$/m)?.[1];
    if (!event || !rawData) return [];
    try {
      return [{ event, data: JSON.parse(rawData) as Record<string, unknown> }];
    } catch {
      return [];
    }
  });
}
