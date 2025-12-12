import type { PluginInput } from "@opencode-ai/plugin";
interface SessionNotificationConfig {
    title?: string;
    message?: string;
    playSound?: boolean;
    soundPath?: string;
    /** Delay in ms before sending notification to confirm session is still idle (default: 1500) */
    idleConfirmationDelay?: number;
    /** Skip notification if there are incomplete todos (default: true) */
    skipIfIncompleteTodos?: boolean;
}
export declare function createSessionNotification(ctx: PluginInput, config?: SessionNotificationConfig): ({ event }: {
    event: {
        type: string;
        properties?: unknown;
    };
}) => Promise<void>;
export {};
