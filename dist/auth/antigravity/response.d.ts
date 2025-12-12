/**
 * Antigravity Response Handler
 * Transforms Antigravity/Gemini API responses to OpenAI-compatible format
 *
 * Key responsibilities:
 * - Non-streaming response transformation
 * - SSE streaming response transformation (buffered - see transformStreamingResponse)
 * - Error response handling with retry-after extraction
 * - Usage metadata extraction from x-antigravity-* headers
 */
import type { AntigravityError, AntigravityUsage } from "./types";
/**
 * Usage metadata extracted from Antigravity response headers
 */
export interface AntigravityUsageMetadata {
    cachedContentTokenCount?: number;
    totalTokenCount?: number;
    promptTokenCount?: number;
    candidatesTokenCount?: number;
}
/**
 * Transform result with response and metadata
 */
export interface TransformResult {
    response: Response;
    usage?: AntigravityUsageMetadata;
    retryAfterMs?: number;
    error?: AntigravityError;
}
/**
 * Extract usage metadata from Antigravity response headers
 *
 * Antigravity sets these headers:
 * - x-antigravity-cached-content-token-count
 * - x-antigravity-total-token-count
 * - x-antigravity-prompt-token-count
 * - x-antigravity-candidates-token-count
 *
 * @param headers - Response headers
 * @returns Usage metadata if found
 */
export declare function extractUsageFromHeaders(headers: Headers): AntigravityUsageMetadata | undefined;
/**
 * Extract retry-after value from error response
 *
 * Antigravity returns retry info in error.details array:
 * {
 *   error: {
 *     details: [{
 *       "@type": "type.googleapis.com/google.rpc.RetryInfo",
 *       "retryDelay": "5.123s"
 *     }]
 *   }
 * }
 *
 * Also checks standard Retry-After header.
 *
 * @param response - Response object (for headers)
 * @param errorBody - Parsed error body (optional)
 * @returns Retry after value in milliseconds, or undefined
 */
export declare function extractRetryAfterMs(response: Response, errorBody?: Record<string, unknown>): number | undefined;
/**
 * Parse error response body and extract useful details
 *
 * @param text - Raw response text
 * @returns Parsed error or undefined
 */
export declare function parseErrorBody(text: string): AntigravityError | undefined;
/**
 * Transform a non-streaming Antigravity response to OpenAI-compatible format
 *
 * For non-streaming responses:
 * - Parses the response body
 * - Unwraps the `response` field if present (Antigravity wraps responses)
 * - Extracts usage metadata from headers
 * - Handles error responses
 *
 * Note: Does NOT handle thinking block extraction (Task 10)
 * Note: Does NOT handle tool normalization (Task 9)
 *
 * @param response - Fetch Response object
 * @returns TransformResult with transformed response and metadata
 */
export declare function transformResponse(response: Response): Promise<TransformResult>;
/**
 * Transform SSE streaming payload
 *
 * Processes each line in the SSE stream:
 * - Unwraps { response: { ... } } wrapper from data lines
 * - Preserves other SSE control lines (event:, id:, retry:, empty lines)
 *
 * Note: Does NOT extract thinking blocks (Task 10)
 *
 * @param payload - Raw SSE payload text
 * @returns Transformed SSE payload
 */
export declare function transformStreamingPayload(payload: string): string;
/**
 * Transforms a streaming SSE response from Antigravity to OpenAI format.
 *
 * **⚠️ CURRENT IMPLEMENTATION: BUFFERING**
 * This implementation reads the entire stream into memory before transforming.
 * While functional, it does not preserve true streaming characteristics:
 * - Blocks until entire response is received
 * - Consumes memory proportional to response size
 * - Increases Time-To-First-Byte (TTFB)
 *
 * **TODO: Future Enhancement**
 * Implement true streaming using ReadableStream transformation:
 * - Parse SSE chunks incrementally
 * - Transform and yield chunks as they arrive
 * - Reduce memory footprint and TTFB
 *
 * For streaming responses (current buffered approach):
 * - Unwraps the `response` field from each SSE event
 * - Returns transformed SSE text as new Response
 * - Extracts usage metadata from headers
 *
 * Note: Does NOT handle thinking block extraction (Task 10)
 *
 * @param response - The SSE response from Antigravity API
 * @returns TransformResult with transformed response and metadata
 */
export declare function transformStreamingResponse(response: Response): Promise<TransformResult>;
/**
 * Check if response is a streaming SSE response
 *
 * @param response - Fetch Response object
 * @returns True if response is SSE stream
 */
export declare function isStreamingResponse(response: Response): boolean;
/**
 * Extract thought signature from SSE payload text
 *
 * Looks for thoughtSignature in SSE events:
 * data: { "response": { "candidates": [{ "content": { "parts": [{ "thoughtSignature": "..." }] } }] } }
 *
 * Returns the last found signature (most recent in the stream).
 *
 * @param payload - SSE payload text
 * @returns Last thought signature if found
 */
export declare function extractSignatureFromSsePayload(payload: string): string | undefined;
/**
 * Extract usage from SSE payload text
 *
 * Looks for usageMetadata in SSE events:
 * data: { "usageMetadata": { ... } }
 *
 * @param payload - SSE payload text
 * @returns Usage if found
 */
export declare function extractUsageFromSsePayload(payload: string): AntigravityUsage | undefined;
