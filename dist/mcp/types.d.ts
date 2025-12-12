import { z } from "zod";
export declare const McpNameSchema: z.ZodEnum<{
    websearch_exa: "websearch_exa";
    context7: "context7";
}>;
export type McpName = z.infer<typeof McpNameSchema>;
