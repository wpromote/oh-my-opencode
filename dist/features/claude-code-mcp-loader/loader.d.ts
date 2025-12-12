import type { LoadedMcpServer, McpLoadResult } from "./types";
export declare function loadMcpConfigs(): Promise<McpLoadResult>;
export declare function formatLoadedServersForToast(loadedServers: LoadedMcpServer[]): string;
