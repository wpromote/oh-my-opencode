import { type PluginInput } from "@opencode-ai/plugin";
import type { BackgroundManager } from "../../features/background-agent";
export declare function createCallOmoAgent(ctx: PluginInput, backgroundManager: BackgroundManager): {
    description: string;
    args: {
        description: import("zod").ZodString;
        prompt: import("zod").ZodString;
        subagent_type: import("zod").ZodEnum<{
            librarian: "librarian";
            explore: "explore";
        }>;
        run_in_background: import("zod").ZodBoolean;
        session_id: import("zod").ZodOptional<import("zod").ZodString>;
    };
    execute(args: {
        description: string;
        prompt: string;
        subagent_type: "librarian" | "explore";
        run_in_background: boolean;
        session_id?: string | undefined;
    }, context: import("@opencode-ai/plugin").ToolContext): Promise<string>;
};
