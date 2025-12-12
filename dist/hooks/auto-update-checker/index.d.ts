import type { PluginInput } from "@opencode-ai/plugin";
export declare function createAutoUpdateCheckerHook(ctx: PluginInput): {
    event: ({ event }: {
        event: {
            type: string;
            properties?: unknown;
        };
    }) => Promise<void>;
};
export type { UpdateCheckResult } from "./types";
export { checkForUpdate } from "./checker";
export { invalidateCache } from "./cache";
