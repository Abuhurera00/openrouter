export const API_ENDPOINTS = {
    AUTH: {
        SIGN_IN: "/auth/signin",
        SIGN_UP: "/auth/signup",
        PROFILE: "/auth/profile",
        LOGOUT: "/auth/logout",
    },
    API_KEYS: {
        GET: "/api-keys",
        CREATE: "/api-keys",
        UPDATE: (id: string) => `/api-keys/${id}`,
        DELETE: (id: string) => `/api-keys/${id}`,
    },
    MODELS: {
        GET: "/models",
    },
    PAYMENTS: {
        ONRAMP_CREDITS: "/payments/onramp",
    },
};