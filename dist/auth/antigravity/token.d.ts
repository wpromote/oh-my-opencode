/**
 * Antigravity token management utilities.
 * Handles token expiration checking, refresh, and storage format parsing.
 */
import type { AntigravityRefreshParts, AntigravityTokenExchangeResult, AntigravityTokens } from "./types";
/**
 * Check if the access token is expired.
 * Includes a 60-second safety buffer to refresh before actual expiration.
 *
 * @param tokens - The Antigravity tokens to check
 * @returns true if the token is expired or will expire within the buffer period
 */
export declare function isTokenExpired(tokens: AntigravityTokens): boolean;
/**
 * Refresh an access token using a refresh token.
 * Exchanges the refresh token for a new access token via Google's OAuth endpoint.
 *
 * @param refreshToken - The refresh token to use
 * @param clientId - Optional custom client ID (defaults to ANTIGRAVITY_CLIENT_ID)
 * @param clientSecret - Optional custom client secret (defaults to ANTIGRAVITY_CLIENT_SECRET)
 * @returns Token exchange result with new access token, or throws on error
 */
export declare function refreshAccessToken(refreshToken: string, clientId?: string, clientSecret?: string): Promise<AntigravityTokenExchangeResult>;
/**
 * Parse a stored token string into its component parts.
 * Storage format: `refreshToken|projectId|managedProjectId`
 *
 * @param stored - The pipe-separated stored token string
 * @returns Parsed refresh parts with refreshToken, projectId, and optional managedProjectId
 */
export declare function parseStoredToken(stored: string): AntigravityRefreshParts;
/**
 * Format token components for storage.
 * Creates a pipe-separated string: `refreshToken|projectId|managedProjectId`
 *
 * @param refreshToken - The refresh token
 * @param projectId - The GCP project ID
 * @param managedProjectId - Optional managed project ID for enterprise users
 * @returns Formatted string for storage
 */
export declare function formatTokenForStorage(refreshToken: string, projectId: string, managedProjectId?: string): string;
