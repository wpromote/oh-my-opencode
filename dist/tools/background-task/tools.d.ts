import { type PluginInput } from "@opencode-ai/plugin";
import type { BackgroundManager } from "../../features/background-agent";
type OpencodeClient = PluginInput["client"];
export declare function createBackgroundTask(manager: BackgroundManager): {
    description: string;
    args: {
        description: import("zod").ZodString;
        prompt: import("zod").ZodString;
        agent: import("zod").ZodString;
    };
    execute(args: {
        description: string;
        prompt: string;
        agent: string;
    }, context: import("@opencode-ai/plugin").ToolContext): Promise<string>;
};
export declare function createBackgroundOutput(manager: BackgroundManager, client: OpencodeClient): {
    description: string;
    args: {
        task_id: import("zod").ZodString;
        block: import("zod").ZodOptional<import("zod").ZodBoolean>;
        timeout: import("zod").ZodOptional<import("zod").ZodNumber>;
    };
    execute(args: {
        task_id: string;
        block?: boolean | undefined;
        timeout?: number | undefined;
    }, context: import("@opencode-ai/plugin").ToolContext): Promise<string>;
};
export declare function createBackgroundCancel(manager: BackgroundManager, client: OpencodeClient): {
    description: string;
    args: {
        taskId: import("zod").ZodString;
    };
    execute(args: {
        taskId: string;
    }, context: import("@opencode-ai/plugin").ToolContext): Promise<string>;
};
export {};
