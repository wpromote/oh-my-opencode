import { z } from "zod";
export declare const AgentNameSchema: z.ZodEnum<{
    oracle: "oracle";
    librarian: "librarian";
    explore: "explore";
    "frontend-ui-ux-engineer": "frontend-ui-ux-engineer";
    "document-writer": "document-writer";
}>;
export declare const AgentOverrideConfigSchema: z.ZodObject<{
    model: z.ZodOptional<z.ZodString>;
    temperature: z.ZodOptional<z.ZodNumber>;
    top_p: z.ZodOptional<z.ZodNumber>;
    prompt: z.ZodOptional<z.ZodString>;
    tools: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodBoolean>>;
    disable: z.ZodOptional<z.ZodBoolean>;
    description: z.ZodOptional<z.ZodString>;
    mode: z.ZodOptional<z.ZodEnum<{
        subagent: "subagent";
        primary: "primary";
        all: "all";
    }>>;
    color: z.ZodOptional<z.ZodString>;
    permission: z.ZodOptional<z.ZodObject<{
        edit: z.ZodOptional<z.ZodEnum<{
            ask: "ask";
            allow: "allow";
            deny: "deny";
        }>>;
        bash: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
            ask: "ask";
            allow: "allow";
            deny: "deny";
        }>, z.ZodRecord<z.ZodString, z.ZodEnum<{
            ask: "ask";
            allow: "allow";
            deny: "deny";
        }>>]>>;
        webfetch: z.ZodOptional<z.ZodEnum<{
            ask: "ask";
            allow: "allow";
            deny: "deny";
        }>>;
        doom_loop: z.ZodOptional<z.ZodEnum<{
            ask: "ask";
            allow: "allow";
            deny: "deny";
        }>>;
        external_directory: z.ZodOptional<z.ZodEnum<{
            ask: "ask";
            allow: "allow";
            deny: "deny";
        }>>;
    }, z.core.$strip>>;
}, z.core.$strip>;
export declare const AgentOverridesSchema: z.ZodObject<{
    oracle: z.ZodOptional<z.ZodOptional<z.ZodObject<{
        model: z.ZodOptional<z.ZodString>;
        temperature: z.ZodOptional<z.ZodNumber>;
        top_p: z.ZodOptional<z.ZodNumber>;
        prompt: z.ZodOptional<z.ZodString>;
        tools: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodBoolean>>;
        disable: z.ZodOptional<z.ZodBoolean>;
        description: z.ZodOptional<z.ZodString>;
        mode: z.ZodOptional<z.ZodEnum<{
            subagent: "subagent";
            primary: "primary";
            all: "all";
        }>>;
        color: z.ZodOptional<z.ZodString>;
        permission: z.ZodOptional<z.ZodObject<{
            edit: z.ZodOptional<z.ZodEnum<{
                ask: "ask";
                allow: "allow";
                deny: "deny";
            }>>;
            bash: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
                ask: "ask";
                allow: "allow";
                deny: "deny";
            }>, z.ZodRecord<z.ZodString, z.ZodEnum<{
                ask: "ask";
                allow: "allow";
                deny: "deny";
            }>>]>>;
            webfetch: z.ZodOptional<z.ZodEnum<{
                ask: "ask";
                allow: "allow";
                deny: "deny";
            }>>;
            doom_loop: z.ZodOptional<z.ZodEnum<{
                ask: "ask";
                allow: "allow";
                deny: "deny";
            }>>;
            external_directory: z.ZodOptional<z.ZodEnum<{
                ask: "ask";
                allow: "allow";
                deny: "deny";
            }>>;
        }, z.core.$strip>>;
    }, z.core.$strip>>>;
    librarian: z.ZodOptional<z.ZodOptional<z.ZodObject<{
        model: z.ZodOptional<z.ZodString>;
        temperature: z.ZodOptional<z.ZodNumber>;
        top_p: z.ZodOptional<z.ZodNumber>;
        prompt: z.ZodOptional<z.ZodString>;
        tools: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodBoolean>>;
        disable: z.ZodOptional<z.ZodBoolean>;
        description: z.ZodOptional<z.ZodString>;
        mode: z.ZodOptional<z.ZodEnum<{
            subagent: "subagent";
            primary: "primary";
            all: "all";
        }>>;
        color: z.ZodOptional<z.ZodString>;
        permission: z.ZodOptional<z.ZodObject<{
            edit: z.ZodOptional<z.ZodEnum<{
                ask: "ask";
                allow: "allow";
                deny: "deny";
            }>>;
            bash: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
                ask: "ask";
                allow: "allow";
                deny: "deny";
            }>, z.ZodRecord<z.ZodString, z.ZodEnum<{
                ask: "ask";
                allow: "allow";
                deny: "deny";
            }>>]>>;
            webfetch: z.ZodOptional<z.ZodEnum<{
                ask: "ask";
                allow: "allow";
                deny: "deny";
            }>>;
            doom_loop: z.ZodOptional<z.ZodEnum<{
                ask: "ask";
                allow: "allow";
                deny: "deny";
            }>>;
            external_directory: z.ZodOptional<z.ZodEnum<{
                ask: "ask";
                allow: "allow";
                deny: "deny";
            }>>;
        }, z.core.$strip>>;
    }, z.core.$strip>>>;
    explore: z.ZodOptional<z.ZodOptional<z.ZodObject<{
        model: z.ZodOptional<z.ZodString>;
        temperature: z.ZodOptional<z.ZodNumber>;
        top_p: z.ZodOptional<z.ZodNumber>;
        prompt: z.ZodOptional<z.ZodString>;
        tools: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodBoolean>>;
        disable: z.ZodOptional<z.ZodBoolean>;
        description: z.ZodOptional<z.ZodString>;
        mode: z.ZodOptional<z.ZodEnum<{
            subagent: "subagent";
            primary: "primary";
            all: "all";
        }>>;
        color: z.ZodOptional<z.ZodString>;
        permission: z.ZodOptional<z.ZodObject<{
            edit: z.ZodOptional<z.ZodEnum<{
                ask: "ask";
                allow: "allow";
                deny: "deny";
            }>>;
            bash: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
                ask: "ask";
                allow: "allow";
                deny: "deny";
            }>, z.ZodRecord<z.ZodString, z.ZodEnum<{
                ask: "ask";
                allow: "allow";
                deny: "deny";
            }>>]>>;
            webfetch: z.ZodOptional<z.ZodEnum<{
                ask: "ask";
                allow: "allow";
                deny: "deny";
            }>>;
            doom_loop: z.ZodOptional<z.ZodEnum<{
                ask: "ask";
                allow: "allow";
                deny: "deny";
            }>>;
            external_directory: z.ZodOptional<z.ZodEnum<{
                ask: "ask";
                allow: "allow";
                deny: "deny";
            }>>;
        }, z.core.$strip>>;
    }, z.core.$strip>>>;
    "frontend-ui-ux-engineer": z.ZodOptional<z.ZodOptional<z.ZodObject<{
        model: z.ZodOptional<z.ZodString>;
        temperature: z.ZodOptional<z.ZodNumber>;
        top_p: z.ZodOptional<z.ZodNumber>;
        prompt: z.ZodOptional<z.ZodString>;
        tools: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodBoolean>>;
        disable: z.ZodOptional<z.ZodBoolean>;
        description: z.ZodOptional<z.ZodString>;
        mode: z.ZodOptional<z.ZodEnum<{
            subagent: "subagent";
            primary: "primary";
            all: "all";
        }>>;
        color: z.ZodOptional<z.ZodString>;
        permission: z.ZodOptional<z.ZodObject<{
            edit: z.ZodOptional<z.ZodEnum<{
                ask: "ask";
                allow: "allow";
                deny: "deny";
            }>>;
            bash: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
                ask: "ask";
                allow: "allow";
                deny: "deny";
            }>, z.ZodRecord<z.ZodString, z.ZodEnum<{
                ask: "ask";
                allow: "allow";
                deny: "deny";
            }>>]>>;
            webfetch: z.ZodOptional<z.ZodEnum<{
                ask: "ask";
                allow: "allow";
                deny: "deny";
            }>>;
            doom_loop: z.ZodOptional<z.ZodEnum<{
                ask: "ask";
                allow: "allow";
                deny: "deny";
            }>>;
            external_directory: z.ZodOptional<z.ZodEnum<{
                ask: "ask";
                allow: "allow";
                deny: "deny";
            }>>;
        }, z.core.$strip>>;
    }, z.core.$strip>>>;
    "document-writer": z.ZodOptional<z.ZodOptional<z.ZodObject<{
        model: z.ZodOptional<z.ZodString>;
        temperature: z.ZodOptional<z.ZodNumber>;
        top_p: z.ZodOptional<z.ZodNumber>;
        prompt: z.ZodOptional<z.ZodString>;
        tools: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodBoolean>>;
        disable: z.ZodOptional<z.ZodBoolean>;
        description: z.ZodOptional<z.ZodString>;
        mode: z.ZodOptional<z.ZodEnum<{
            subagent: "subagent";
            primary: "primary";
            all: "all";
        }>>;
        color: z.ZodOptional<z.ZodString>;
        permission: z.ZodOptional<z.ZodObject<{
            edit: z.ZodOptional<z.ZodEnum<{
                ask: "ask";
                allow: "allow";
                deny: "deny";
            }>>;
            bash: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
                ask: "ask";
                allow: "allow";
                deny: "deny";
            }>, z.ZodRecord<z.ZodString, z.ZodEnum<{
                ask: "ask";
                allow: "allow";
                deny: "deny";
            }>>]>>;
            webfetch: z.ZodOptional<z.ZodEnum<{
                ask: "ask";
                allow: "allow";
                deny: "deny";
            }>>;
            doom_loop: z.ZodOptional<z.ZodEnum<{
                ask: "ask";
                allow: "allow";
                deny: "deny";
            }>>;
            external_directory: z.ZodOptional<z.ZodEnum<{
                ask: "ask";
                allow: "allow";
                deny: "deny";
            }>>;
        }, z.core.$strip>>;
    }, z.core.$strip>>>;
}, z.core.$strip>;
export declare const ClaudeCodeConfigSchema: z.ZodObject<{
    mcp: z.ZodOptional<z.ZodBoolean>;
    commands: z.ZodOptional<z.ZodBoolean>;
    skills: z.ZodOptional<z.ZodBoolean>;
    agents: z.ZodOptional<z.ZodBoolean>;
    hooks: z.ZodOptional<z.ZodBoolean>;
}, z.core.$strip>;
export declare const OhMyOpenCodeConfigSchema: z.ZodObject<{
    $schema: z.ZodOptional<z.ZodString>;
    disabled_mcps: z.ZodOptional<z.ZodArray<z.ZodEnum<{
        websearch_exa: "websearch_exa";
        context7: "context7";
    }>>>;
    disabled_agents: z.ZodOptional<z.ZodArray<z.ZodEnum<{
        oracle: "oracle";
        librarian: "librarian";
        explore: "explore";
        "frontend-ui-ux-engineer": "frontend-ui-ux-engineer";
        "document-writer": "document-writer";
    }>>>;
    agents: z.ZodOptional<z.ZodObject<{
        oracle: z.ZodOptional<z.ZodOptional<z.ZodObject<{
            model: z.ZodOptional<z.ZodString>;
            temperature: z.ZodOptional<z.ZodNumber>;
            top_p: z.ZodOptional<z.ZodNumber>;
            prompt: z.ZodOptional<z.ZodString>;
            tools: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodBoolean>>;
            disable: z.ZodOptional<z.ZodBoolean>;
            description: z.ZodOptional<z.ZodString>;
            mode: z.ZodOptional<z.ZodEnum<{
                subagent: "subagent";
                primary: "primary";
                all: "all";
            }>>;
            color: z.ZodOptional<z.ZodString>;
            permission: z.ZodOptional<z.ZodObject<{
                edit: z.ZodOptional<z.ZodEnum<{
                    ask: "ask";
                    allow: "allow";
                    deny: "deny";
                }>>;
                bash: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
                    ask: "ask";
                    allow: "allow";
                    deny: "deny";
                }>, z.ZodRecord<z.ZodString, z.ZodEnum<{
                    ask: "ask";
                    allow: "allow";
                    deny: "deny";
                }>>]>>;
                webfetch: z.ZodOptional<z.ZodEnum<{
                    ask: "ask";
                    allow: "allow";
                    deny: "deny";
                }>>;
                doom_loop: z.ZodOptional<z.ZodEnum<{
                    ask: "ask";
                    allow: "allow";
                    deny: "deny";
                }>>;
                external_directory: z.ZodOptional<z.ZodEnum<{
                    ask: "ask";
                    allow: "allow";
                    deny: "deny";
                }>>;
            }, z.core.$strip>>;
        }, z.core.$strip>>>;
        librarian: z.ZodOptional<z.ZodOptional<z.ZodObject<{
            model: z.ZodOptional<z.ZodString>;
            temperature: z.ZodOptional<z.ZodNumber>;
            top_p: z.ZodOptional<z.ZodNumber>;
            prompt: z.ZodOptional<z.ZodString>;
            tools: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodBoolean>>;
            disable: z.ZodOptional<z.ZodBoolean>;
            description: z.ZodOptional<z.ZodString>;
            mode: z.ZodOptional<z.ZodEnum<{
                subagent: "subagent";
                primary: "primary";
                all: "all";
            }>>;
            color: z.ZodOptional<z.ZodString>;
            permission: z.ZodOptional<z.ZodObject<{
                edit: z.ZodOptional<z.ZodEnum<{
                    ask: "ask";
                    allow: "allow";
                    deny: "deny";
                }>>;
                bash: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
                    ask: "ask";
                    allow: "allow";
                    deny: "deny";
                }>, z.ZodRecord<z.ZodString, z.ZodEnum<{
                    ask: "ask";
                    allow: "allow";
                    deny: "deny";
                }>>]>>;
                webfetch: z.ZodOptional<z.ZodEnum<{
                    ask: "ask";
                    allow: "allow";
                    deny: "deny";
                }>>;
                doom_loop: z.ZodOptional<z.ZodEnum<{
                    ask: "ask";
                    allow: "allow";
                    deny: "deny";
                }>>;
                external_directory: z.ZodOptional<z.ZodEnum<{
                    ask: "ask";
                    allow: "allow";
                    deny: "deny";
                }>>;
            }, z.core.$strip>>;
        }, z.core.$strip>>>;
        explore: z.ZodOptional<z.ZodOptional<z.ZodObject<{
            model: z.ZodOptional<z.ZodString>;
            temperature: z.ZodOptional<z.ZodNumber>;
            top_p: z.ZodOptional<z.ZodNumber>;
            prompt: z.ZodOptional<z.ZodString>;
            tools: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodBoolean>>;
            disable: z.ZodOptional<z.ZodBoolean>;
            description: z.ZodOptional<z.ZodString>;
            mode: z.ZodOptional<z.ZodEnum<{
                subagent: "subagent";
                primary: "primary";
                all: "all";
            }>>;
            color: z.ZodOptional<z.ZodString>;
            permission: z.ZodOptional<z.ZodObject<{
                edit: z.ZodOptional<z.ZodEnum<{
                    ask: "ask";
                    allow: "allow";
                    deny: "deny";
                }>>;
                bash: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
                    ask: "ask";
                    allow: "allow";
                    deny: "deny";
                }>, z.ZodRecord<z.ZodString, z.ZodEnum<{
                    ask: "ask";
                    allow: "allow";
                    deny: "deny";
                }>>]>>;
                webfetch: z.ZodOptional<z.ZodEnum<{
                    ask: "ask";
                    allow: "allow";
                    deny: "deny";
                }>>;
                doom_loop: z.ZodOptional<z.ZodEnum<{
                    ask: "ask";
                    allow: "allow";
                    deny: "deny";
                }>>;
                external_directory: z.ZodOptional<z.ZodEnum<{
                    ask: "ask";
                    allow: "allow";
                    deny: "deny";
                }>>;
            }, z.core.$strip>>;
        }, z.core.$strip>>>;
        "frontend-ui-ux-engineer": z.ZodOptional<z.ZodOptional<z.ZodObject<{
            model: z.ZodOptional<z.ZodString>;
            temperature: z.ZodOptional<z.ZodNumber>;
            top_p: z.ZodOptional<z.ZodNumber>;
            prompt: z.ZodOptional<z.ZodString>;
            tools: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodBoolean>>;
            disable: z.ZodOptional<z.ZodBoolean>;
            description: z.ZodOptional<z.ZodString>;
            mode: z.ZodOptional<z.ZodEnum<{
                subagent: "subagent";
                primary: "primary";
                all: "all";
            }>>;
            color: z.ZodOptional<z.ZodString>;
            permission: z.ZodOptional<z.ZodObject<{
                edit: z.ZodOptional<z.ZodEnum<{
                    ask: "ask";
                    allow: "allow";
                    deny: "deny";
                }>>;
                bash: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
                    ask: "ask";
                    allow: "allow";
                    deny: "deny";
                }>, z.ZodRecord<z.ZodString, z.ZodEnum<{
                    ask: "ask";
                    allow: "allow";
                    deny: "deny";
                }>>]>>;
                webfetch: z.ZodOptional<z.ZodEnum<{
                    ask: "ask";
                    allow: "allow";
                    deny: "deny";
                }>>;
                doom_loop: z.ZodOptional<z.ZodEnum<{
                    ask: "ask";
                    allow: "allow";
                    deny: "deny";
                }>>;
                external_directory: z.ZodOptional<z.ZodEnum<{
                    ask: "ask";
                    allow: "allow";
                    deny: "deny";
                }>>;
            }, z.core.$strip>>;
        }, z.core.$strip>>>;
        "document-writer": z.ZodOptional<z.ZodOptional<z.ZodObject<{
            model: z.ZodOptional<z.ZodString>;
            temperature: z.ZodOptional<z.ZodNumber>;
            top_p: z.ZodOptional<z.ZodNumber>;
            prompt: z.ZodOptional<z.ZodString>;
            tools: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodBoolean>>;
            disable: z.ZodOptional<z.ZodBoolean>;
            description: z.ZodOptional<z.ZodString>;
            mode: z.ZodOptional<z.ZodEnum<{
                subagent: "subagent";
                primary: "primary";
                all: "all";
            }>>;
            color: z.ZodOptional<z.ZodString>;
            permission: z.ZodOptional<z.ZodObject<{
                edit: z.ZodOptional<z.ZodEnum<{
                    ask: "ask";
                    allow: "allow";
                    deny: "deny";
                }>>;
                bash: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
                    ask: "ask";
                    allow: "allow";
                    deny: "deny";
                }>, z.ZodRecord<z.ZodString, z.ZodEnum<{
                    ask: "ask";
                    allow: "allow";
                    deny: "deny";
                }>>]>>;
                webfetch: z.ZodOptional<z.ZodEnum<{
                    ask: "ask";
                    allow: "allow";
                    deny: "deny";
                }>>;
                doom_loop: z.ZodOptional<z.ZodEnum<{
                    ask: "ask";
                    allow: "allow";
                    deny: "deny";
                }>>;
                external_directory: z.ZodOptional<z.ZodEnum<{
                    ask: "ask";
                    allow: "allow";
                    deny: "deny";
                }>>;
            }, z.core.$strip>>;
        }, z.core.$strip>>>;
    }, z.core.$strip>>;
    claude_code: z.ZodOptional<z.ZodObject<{
        mcp: z.ZodOptional<z.ZodBoolean>;
        commands: z.ZodOptional<z.ZodBoolean>;
        skills: z.ZodOptional<z.ZodBoolean>;
        agents: z.ZodOptional<z.ZodBoolean>;
        hooks: z.ZodOptional<z.ZodBoolean>;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type OhMyOpenCodeConfig = z.infer<typeof OhMyOpenCodeConfigSchema>;
export type AgentOverrideConfig = z.infer<typeof AgentOverrideConfigSchema>;
export type AgentOverrides = z.infer<typeof AgentOverridesSchema>;
export type AgentName = z.infer<typeof AgentNameSchema>;
export { McpNameSchema, type McpName } from "../mcp/types";
