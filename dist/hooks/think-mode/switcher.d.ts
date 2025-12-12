export declare const THINKING_CONFIGS: Record<string, Record<string, unknown>>;
export declare function getHighVariant(modelID: string): string | null;
export declare function isAlreadyHighVariant(modelID: string): boolean;
export declare function getThinkingConfig(providerID: string, modelID: string): Record<string, unknown> | null;
