import type { PluginInput } from "@opencode-ai/plugin";
interface MessageInfo {
    id?: string;
    role?: string;
    sessionID?: string;
    parentID?: string;
    error?: unknown;
}
export declare function createSessionRecoveryHook(ctx: PluginInput): {
    handleSessionRecovery: (info: MessageInfo) => Promise<boolean>;
    isRecoverableError: (error: unknown) => boolean;
    setOnAbortCallback: (callback: (sessionID: string) => void) => void;
};
export {};
