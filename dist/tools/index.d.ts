import type { PluginInput } from "@opencode-ai/plugin";
import type { BackgroundManager } from "../features/background-agent";
type OpencodeClient = PluginInput["client"];
export { createCallOmoAgent } from "./call-omo-agent";
export declare function createBackgroundTools(manager: BackgroundManager, client: OpencodeClient): {
    background_task: {
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
    background_output: {
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
    background_cancel: {
        description: string;
        args: {
            taskId: import("zod").ZodString;
        };
        execute(args: {
            taskId: string;
        }, context: import("@opencode-ai/plugin").ToolContext): Promise<string>;
    };
};
export declare const builtinTools: {
    lsp_hover: {
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
    lsp_goto_definition: {
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
    lsp_find_references: {
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
    lsp_document_symbols: {
        description: string;
        args: {
            filePath: import("zod").ZodString;
        };
        execute(args: {
            filePath: string;
        }, context: import("@opencode-ai/plugin").ToolContext): Promise<string>;
    };
    lsp_workspace_symbols: {
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
    lsp_diagnostics: {
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
    lsp_servers: {
        description: string;
        args: {};
        execute(args: Record<string, never>, context: import("@opencode-ai/plugin").ToolContext): Promise<string>;
    };
    lsp_prepare_rename: {
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
    lsp_rename: {
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
    lsp_code_actions: {
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
    lsp_code_action_resolve: {
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
    ast_grep_search: {
        description: string;
        args: {
            pattern: import("zod").ZodString;
            lang: import("zod").ZodEnum<{
                bash: "bash";
                typescript: "typescript";
                csharp: "csharp";
                rust: "rust";
                php: "php";
                python: "python";
                javascript: "javascript";
                go: "go";
                c: "c";
                cpp: "cpp";
                java: "java";
                ruby: "ruby";
                lua: "lua";
                swift: "swift";
                elixir: "elixir";
                yaml: "yaml";
                json: "json";
                html: "html";
                css: "css";
                haskell: "haskell";
                kotlin: "kotlin";
                nix: "nix";
                scala: "scala";
                solidity: "solidity";
                tsx: "tsx";
            }>;
            paths: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodString>>;
            globs: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodString>>;
            context: import("zod").ZodOptional<import("zod").ZodNumber>;
        };
        execute(args: {
            pattern: string;
            lang: "bash" | "typescript" | "csharp" | "rust" | "php" | "python" | "javascript" | "go" | "c" | "cpp" | "java" | "ruby" | "lua" | "swift" | "elixir" | "yaml" | "json" | "html" | "css" | "haskell" | "kotlin" | "nix" | "scala" | "solidity" | "tsx";
            paths?: string[] | undefined;
            globs?: string[] | undefined;
            context?: number | undefined;
        }, context: import("@opencode-ai/plugin").ToolContext): Promise<string>;
    };
    ast_grep_replace: {
        description: string;
        args: {
            pattern: import("zod").ZodString;
            rewrite: import("zod").ZodString;
            lang: import("zod").ZodEnum<{
                bash: "bash";
                typescript: "typescript";
                csharp: "csharp";
                rust: "rust";
                php: "php";
                python: "python";
                javascript: "javascript";
                go: "go";
                c: "c";
                cpp: "cpp";
                java: "java";
                ruby: "ruby";
                lua: "lua";
                swift: "swift";
                elixir: "elixir";
                yaml: "yaml";
                json: "json";
                html: "html";
                css: "css";
                haskell: "haskell";
                kotlin: "kotlin";
                nix: "nix";
                scala: "scala";
                solidity: "solidity";
                tsx: "tsx";
            }>;
            paths: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodString>>;
            globs: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodString>>;
            dryRun: import("zod").ZodOptional<import("zod").ZodBoolean>;
        };
        execute(args: {
            pattern: string;
            rewrite: string;
            lang: "bash" | "typescript" | "csharp" | "rust" | "php" | "python" | "javascript" | "go" | "c" | "cpp" | "java" | "ruby" | "lua" | "swift" | "elixir" | "yaml" | "json" | "html" | "css" | "haskell" | "kotlin" | "nix" | "scala" | "solidity" | "tsx";
            paths?: string[] | undefined;
            globs?: string[] | undefined;
            dryRun?: boolean | undefined;
        }, context: import("@opencode-ai/plugin").ToolContext): Promise<string>;
    };
    grep: {
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
    glob: {
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
    slashcommand: {
        description: string;
        args: {
            command: import("zod").ZodString;
        };
        execute(args: {
            command: string;
        }, context: import("@opencode-ai/plugin").ToolContext): Promise<string>;
    };
    skill: {
        description: string;
        args: {
            skill: import("zod").ZodString;
        };
        execute(args: {
            skill: string;
        }, context: import("@opencode-ai/plugin").ToolContext): Promise<string>;
    };
};
