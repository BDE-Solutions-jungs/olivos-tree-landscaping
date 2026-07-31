import { defineTool } from "@lovable.dev/mcp-js";
import { BUSINESS } from "../business";

export default defineTool({
  name: "get_business_info",
  title: "Get business info",
  description:
    "Get contact details, hours, service area, rating and languages for Olivos Tree Service Plus Landscaping LLC.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => ({
    content: [{ type: "text" as const, text: JSON.stringify(BUSINESS, null, 2) }],
    structuredContent: { business: BUSINESS },
  }),
});
