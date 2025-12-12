/**
 * Antigravity project context management.
 * Handles fetching GCP project ID via Google's loadCodeAssist API.
 */
import type { AntigravityProjectContext } from "./types";
/**
 * Fetch project context from Google's loadCodeAssist API.
 * Extracts the cloudaicompanionProject from the response.
 * Falls back to ANTIGRAVITY_DEFAULT_PROJECT_ID if API fails or returns empty.
 *
 * @param accessToken - Valid OAuth access token
 * @returns Project context with cloudaicompanionProject ID
 */
export declare function fetchProjectContext(accessToken: string): Promise<AntigravityProjectContext>;
/**
 * Clear the project context cache.
 * Call this when tokens are refreshed or invalidated.
 *
 * @param accessToken - Optional specific token to clear, or clears all if not provided
 */
export declare function clearProjectContextCache(accessToken?: string): void;
