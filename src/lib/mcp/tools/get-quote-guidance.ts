import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";
import { BUSINESS } from "../business";

export default defineTool({
  name: "get_quote_guidance",
  title: "Get estimate guidance",
  description:
    "Explain how to request a free estimate for a described job, and what details to have ready when calling.",
  inputSchema: {
    job_description: z
      .string()
      .optional()
      .describe("Short description of the work needed, e.g. 'remove a large dead oak near the house'."),
  },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: ({ job_description }) => {
    const lines = [
      `Estimates are free: ${BUSINESS.estimates}`,
      `Call ${BUSINESS.phone} (${BUSINESS.hours}). English and Spanish spoken.`,
      `Service area: ${BUSINESS.serviceArea.join(", ")}. Residential and commercial.`,
      job_description ? `Job described: ${job_description}` : null,
      "Have ready: property address, photos of the trees or area, access notes (gates, slopes, power lines), and your preferred timing. Storm damage is handled as emergency service.",
    ].filter(Boolean) as string[];
    return { content: [{ type: "text" as const, text: lines.join("\n\n") }] };
  },
});
