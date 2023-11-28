// Server configuration
export const SERVER_PORT = 3000; // Server port
export const DEBUG = false; // Debug mode

// Prompt Moderation before sending to OpenAI
export const MODERATION = true; // Moderation mode

// Rate limit
export const PRIOD = 15 * 1000; // 15 seconds
export const RATE_LIMIT = 50; // 50 requests per 15 seconds

// Whitelisted IPs
export const WHITELISTED_IPS = [
    // "127.0.0.1"
];

// OpenAI API Keys
export let OPENAI_KEYS = [
    "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",
    "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",
    "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",
    "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",
];
