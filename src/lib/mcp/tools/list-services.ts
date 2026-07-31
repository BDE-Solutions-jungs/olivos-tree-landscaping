import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";
import { SERVICES } from "../business";

export default defineTool({
  name: "list_services",
  title: "List services",
  description:
    "List the tree care and landscaping services offered, optionally filtered by a keyword such as 'stump' or 'storm'.",
  inputSchema: {
    query: z
      .string()
      .optional()
      .describe("Optional keyword to filter services by name or description."),
  },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: ({ query }) => {
    const q = query?.trim().toLowerCase();
    const services = q
      ? SERVICES.filter(
          (s) => s.name.toLowerCase().includes(q) || s.description.toLowerCase().includes(q),
        )
      : [...SERVICES];
    return {
      content: [{ type: "text" as const, text: JSON.stringify(services, null, 2) }],
      structuredContent: { services },
    };
  },
});
