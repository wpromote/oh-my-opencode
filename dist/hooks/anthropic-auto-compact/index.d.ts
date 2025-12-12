import type { PluginInput } from "@opencode-ai/plugin";
export declare function createAnthropicAutoCompactHook(ctx: PluginInput): {
    event: ({ event }: {
        event: {
            type: string;
            properties?: unknown;
        };
    }) => Promise<void>;
};
export type { AutoCompactState, ParsedTokenLimitError } from "./types";
export { parseAnthropicTokenLimitError } from "./parser";
export { executeCompact, getLastAssistant } from "./executor";
