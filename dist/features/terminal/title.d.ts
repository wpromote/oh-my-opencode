export type SessionStatus = "ready" | "processing" | "tool" | "error" | "idle";
export interface TitleContext {
    sessionId: string;
    sessionTitle?: string;
    directory?: string;
    status?: SessionStatus;
    currentTool?: string;
    customSuffix?: string;
}
export declare function formatTerminalTitle(ctx: TitleContext): string;
export declare function setTerminalTitle(title: string): void;
export declare function updateTerminalTitle(ctx: TitleContext): void;
export declare function resetTerminalTitle(): void;
