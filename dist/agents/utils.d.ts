import type { AgentConfig } from "@opencode-ai/sdk";
import type { AgentName, AgentOverrides } from "./types";
export declare function createBuiltinAgents(disabledAgents?: AgentName[], agentOverrides?: AgentOverrides): Record<string, AgentConfig>;
