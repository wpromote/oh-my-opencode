export interface ResolvedServer {
    id: string;
    command: string[];
    extensions: string[];
    priority: number;
    env?: Record<string, string>;
    initialization?: Record<string, unknown>;
}
export declare function findServerForExtension(ext: string): ResolvedServer | null;
export declare function getLanguageId(ext: string): string;
export declare function isServerInstalled(command: string[]): boolean;
export declare function getAllServers(): Array<{
    id: string;
    installed: boolean;
    extensions: string[];
    disabled: boolean;
    source: string;
    priority: number;
}>;
export declare function getConfigPaths_(): {
    project: string;
    user: string;
    opencode: string;
};
