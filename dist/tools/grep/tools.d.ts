export declare const grep: {
    description: string;
    args: {
        pattern: import("zod").ZodString;
        include: import("zod").ZodOptional<import("zod").ZodString>;
        path: import("zod").ZodOptional<import("zod").ZodString>;
    };
    execute(args: {
        pattern: string;
        include?: string | undefined;
        path?: string | undefined;
    }, context: import("@opencode-ai/plugin").ToolContext): Promise<string>;
};
