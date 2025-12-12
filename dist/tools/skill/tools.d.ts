import { z } from "zod/v4";
export declare const skill: {
    description: string;
    args: {
        skill: z.ZodString;
    };
    execute(args: {
        skill: string;
    }, context: import("@opencode-ai/plugin").ToolContext): Promise<string>;
};
