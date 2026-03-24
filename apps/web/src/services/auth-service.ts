import { API_ENDPOINTS } from "@/lib/endpoints-config";
import api from "../lib/api";
import type { ApiResponse, SignInData, SignUpData } from "../types/auth";

// const TOKEN_KEY = import.meta.env.VITE_LOCAL_STORAGE_TOKEN_KEY || "template-access-token";

export const authService = {
    signIn: async (data: SignInData): Promise<ApiResponse> => {
        const response = await api.post<ApiResponse>(API_ENDPOINTS.AUTH.SIGN_IN, data);
        const result = response.data;

        return result;
    },

    signUp: async (data: SignUpData): Promise<ApiResponse> => {
        const response = await api.post<ApiResponse>(API_ENDPOINTS.AUTH.SIGN_UP, data);
        const result = response.data;

        return result;
    },

    getMe: async (): Promise<ApiResponse> => {
        const response = await api.get<ApiResponse>(API_ENDPOINTS.AUTH.PROFILE);
        return response.data;
    },
    logout: async () => {
        await api.post(API_ENDPOINTS.AUTH.LOGOUT);
    },
};
