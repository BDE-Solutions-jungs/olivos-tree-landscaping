import { defineMcp } from "@lovable.dev/mcp-js";
import getBusinessInfoTool from "./tools/get-business-info";
import listServicesTool from "./tools/list-services";
import getQuoteGuidanceTool from "./tools/get-quote-guidance";

export default defineMcp({
  name: "olivos-tree-landscaping",
  title: "Olivos Tree & Landscaping",
  version: "0.1.0",
  instructions:
    "Public tools for Olivos Tree Service Plus Landscaping LLC in Plainfield, Indiana. Use `get_business_info` for contact details, hours and service area, `list_services` for the tree care and landscaping services offered, and `get_quote_guidance` to explain how to request a free estimate.",
  tools: [getBusinessInfoTool, listServicesTool, getQuoteGuidanceTool],
});
