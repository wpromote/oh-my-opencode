export declare const lsp_hover: {
    description: string;
    args: {
        filePath: import("zod").ZodString;
        line: import("zod").ZodNumber;
        character: import("zod").ZodNumber;
    };
    execute(args: {
        filePath: string;
        line: number;
        character: number;
    }, context: import("@opencode-ai/plugin").ToolContext): Promise<string>;
};
export declare const lsp_goto_definition: {
    description: string;
    args: {
        filePath: import("zod").ZodString;
        line: import("zod").ZodNumber;
        character: import("zod").ZodNumber;
    };
    execute(args: {
        filePath: string;
        line: number;
        character: number;
    }, context: import("@opencode-ai/plugin").ToolContext): Promise<string>;
};
export declare const lsp_find_references: {
    description: string;
    args: {
        filePath: import("zod").ZodString;
        line: import("zod").ZodNumber;
        character: import("zod").ZodNumber;
        includeDeclaration: import("zod").ZodOptional<import("zod").ZodBoolean>;
    };
    execute(args: {
        filePath: string;
        line: number;
        character: number;
        includeDeclaration?: boolean | undefined;
    }, context: import("@opencode-ai/plugin").ToolContext): Promise<string>;
};
export declare const lsp_document_symbols: {
    description: string;
    args: {
        filePath: import("zod").ZodString;
    };
    execute(args: {
        filePath: string;
    }, context: import("@opencode-ai/plugin").ToolContext): Promise<string>;
};
export declare const lsp_workspace_symbols: {
    description: string;
    args: {
        filePath: import("zod").ZodString;
        query: import("zod").ZodString;
        limit: import("zod").ZodOptional<import("zod").ZodNumber>;
    };
    execute(args: {
        filePath: string;
        query: string;
        limit?: number | undefined;
    }, context: import("@opencode-ai/plugin").ToolContext): Promise<string>;
};
export declare const lsp_diagnostics: {
    description: string;
    args: {
        filePath: import("zod").ZodString;
        severity: import("zod").ZodOptional<import("zod").ZodEnum<{
            all: "all";
            error: "error";
            warning: "warning";
            information: "information";
            hint: "hint";
        }>>;
    };
    execute(args: {
        filePath: string;
        severity?: "all" | "error" | "warning" | "information" | "hint" | undefined;
    }, context: import("@opencode-ai/plugin").ToolContext): Promise<string>;
};
export declare const lsp_servers: {
    description: string;
    args: {};
    execute(args: Record<string, never>, context: import("@opencode-ai/plugin").ToolContext): Promise<string>;
};
export declare const lsp_prepare_rename: {
    description: string;
    args: {
        filePath: import("zod").ZodString;
        line: import("zod").ZodNumber;
        character: import("zod").ZodNumber;
    };
    execute(args: {
        filePath: string;
        line: number;
        character: number;
    }, context: import("@opencode-ai/plugin").ToolContext): Promise<string>;
};
export declare const lsp_rename: {
    description: string;
    args: {
        filePath: import("zod").ZodString;
        line: import("zod").ZodNumber;
        character: import("zod").ZodNumber;
        newName: import("zod").ZodString;
    };
    execute(args: {
        filePath: string;
        line: number;
        character: number;
        newName: string;
    }, context: import("@opencode-ai/plugin").ToolContext): Promise<string>;
};
export declare const lsp_code_actions: {
    description: string;
    args: {
        filePath: import("zod").ZodString;
        startLine: import("zod").ZodNumber;
        startCharacter: import("zod").ZodNumber;
        endLine: import("zod").ZodNumber;
        endCharacter: import("zod").ZodNumber;
        kind: import("zod").ZodOptional<import("zod").ZodEnum<{
            source: "source";
            quickfix: "quickfix";
            refactor: "refactor";
            "refactor.extract": "refactor.extract";
            "refactor.inline": "refactor.inline";
            "refactor.rewrite": "refactor.rewrite";
            "source.organizeImports": "source.organizeImports";
            "source.fixAll": "source.fixAll";
        }>>;
    };
    execute(args: {
        filePath: string;
        startLine: number;
        startCharacter: number;
        endLine: number;
        endCharacter: number;
        kind?: "source" | "quickfix" | "refactor" | "refactor.extract" | "refactor.inline" | "refactor.rewrite" | "source.organizeImports" | "source.fixAll" | undefined;
    }, context: import("@opencode-ai/plugin").ToolContext): Promise<string>;
};
export declare const lsp_code_action_resolve: {
    description: string;
    args: {
        filePath: import("zod").ZodString;
        codeAction: import("zod").ZodString;
    };
    execute(args: {
        filePath: string;
        codeAction: string;
    }, context: import("@opencode-ai/plugin").ToolContext): Promise<string>;
};
