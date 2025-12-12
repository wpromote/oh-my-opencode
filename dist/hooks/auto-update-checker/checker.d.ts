import type { UpdateCheckResult } from "./types";
export declare function isLocalDevMode(directory: string): boolean;
export declare function findPluginEntry(directory: string): string | null;
export declare function getCachedVersion(): string | null;
export declare function getLatestVersion(): Promise<string | null>;
export declare function checkForUpdate(directory: string): Promise<UpdateCheckResult>;
