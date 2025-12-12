import type { McpName } from "./types";
export { McpNameSchema, type McpName } from "./types";
export declare function createBuiltinMcps(disabledMcps?: McpName[]): Record<string, {
    type: "remote";
    url: string;
    enabled: boolean;
}>;
