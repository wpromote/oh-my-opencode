import type { PluginInput } from "@opencode-ai/plugin";
export declare function createTodoContinuationEnforcer(ctx: PluginInput): ({ event }: {
    event: {
        type: string;
        properties?: unknown;
    };
}) => Promise<void>;
