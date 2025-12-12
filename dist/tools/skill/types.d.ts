import { z } from "zod/v4";
export type SkillScope = "user" | "project";
/**
 * Zod schema for skill frontmatter validation
 * Following Anthropic Agent Skills Specification v1.0
 */
export declare const SkillFrontmatterSchema: z.ZodObject<{
    name: z.ZodString;
    description: z.ZodString;
    license: z.ZodOptional<z.ZodString>;
    "allowed-tools": z.ZodOptional<z.ZodArray<z.ZodString>>;
    metadata: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
}, z.core.$strip>;
export type SkillFrontmatter = z.infer<typeof SkillFrontmatterSchema>;
export interface SkillMetadata {
    name: string;
    description: string;
    license?: string;
    allowedTools?: string[];
    metadata?: Record<string, string>;
}
export interface SkillInfo {
    name: string;
    path: string;
    basePath: string;
    metadata: SkillMetadata;
    content: string;
    references: string[];
    scripts: string[];
    assets: string[];
}
export interface LoadedSkill {
    name: string;
    metadata: SkillMetadata;
    basePath: string;
    body: string;
    referencesLoaded: Array<{
        path: string;
        content: string;
    }>;
}
