import type { PluginInput } from "@opencode-ai/plugin";
export declare function createGrepOutputTruncatorHook(ctx: PluginInput): {
    "tool.execute.after": (input: {
        tool: string;
        sessionID: string;
        callID: string;
    }, output: {
        title: string;
        output: string;
        metadata: unknown;
    }) => Promise<void>;
};
