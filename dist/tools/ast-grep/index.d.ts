import { ast_grep_search, ast_grep_replace } from "./tools";
export declare const builtinTools: {
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
};
export { ast_grep_search, ast_grep_replace };
export { ensureAstGrepBinary, getCachedBinaryPath, getCacheDir } from "./downloader";
export { getAstGrepPath, isCliAvailable, ensureCliAvailable, startBackgroundInit } from "./cli";
export { checkEnvironment, formatEnvironmentCheck } from "./constants";
export type { EnvironmentCheckResult } from "./constants";
