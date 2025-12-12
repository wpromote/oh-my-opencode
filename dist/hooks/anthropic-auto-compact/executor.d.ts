import type { AutoCompactState } from "./types";
export declare function getLastAssistant(sessionID: string, client: any, directory: string): Promise<Record<string, unknown> | null>;
export declare function executeCompact(sessionID: string, msg: Record<string, unknown>, autoCompactState: AutoCompactState, client: any, directory: string): Promise<void>;
