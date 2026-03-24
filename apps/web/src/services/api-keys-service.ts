import { API_ENDPOINTS } from "@/lib/endpoints-config";
import api from "../lib/api";
import type { ApiResponse } from "../types/auth";

export const apiKeysService = {
    getApiKeys: async (): Promise<ApiResponse> => {
        const response = await api.get<ApiResponse>(API_ENDPOINTS.API_KEYS.GET);
        return response.data;
    },

    createApiKey: async (name: string): Promise<ApiResponse> => {
        const response = await api.post<ApiResponse>(API_ENDPOINTS.API_KEYS.CREATE, { name });
        return response.data;
    },

    toggleApiKey: async ({
        id,
        disabled,
    }: {
        id: string;
        disabled: boolean;
    }): Promise<ApiResponse> => {
        const response = await api.patch<ApiResponse>(API_ENDPOINTS.API_KEYS.UPDATE(id), { disabled });
        return response.data;
    },

    deleteApiKey: async (id: string): Promise<ApiResponse> => {
        const response = await api.delete<ApiResponse>(API_ENDPOINTS.API_KEYS.DELETE(id));
        return response.data;
    },
};
