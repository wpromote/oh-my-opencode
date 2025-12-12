export interface ParsedTokenLimitError {
    currentTokens: number;
    maxTokens: number;
    requestId?: string;
    errorType: string;
    providerID?: string;
    modelID?: string;
}
export interface RetryState {
    attempt: number;
    lastAttemptTime: number;
}
export interface AutoCompactState {
    pendingCompact: Set<string>;
    errorDataBySession: Map<string, ParsedTokenLimitError>;
    retryStateBySession: Map<string, RetryState>;
}
export declare const RETRY_CONFIG: {
    readonly maxAttempts: 5;
    readonly initialDelayMs: 2000;
    readonly backoffFactor: 2;
    readonly maxDelayMs: 30000;
};
