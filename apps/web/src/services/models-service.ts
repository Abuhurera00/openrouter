import { API_ENDPOINTS } from "@/lib/endpoints-config";
import api from "../lib/api";
import type { ApiResponse } from "../types/auth";

export const modelsService = {
    getModels: async (): Promise<ApiResponse> => {
        const response = await api.get<ApiResponse>(API_ENDPOINTS.MODELS.GET);
        return response.data;
    },
};
