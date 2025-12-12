export declare const glob: {
    description: string;
    args: {
        pattern: import("zod").ZodString;
        path: import("zod").ZodOptional<import("zod").ZodString>;
    };
    execute(args: {
        pattern: string;
        path?: string | undefined;
    }, context: import("@opencode-ai/plugin").ToolContext): Promise<string>;
};
