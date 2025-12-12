export declare const slashcommand: {
    description: string;
    args: {
        command: import("zod").ZodString;
    };
    execute(args: {
        command: string;
    }, context: import("@opencode-ai/plugin").ToolContext): Promise<string>;
};
