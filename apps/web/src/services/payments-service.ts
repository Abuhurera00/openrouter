import { API_ENDPOINTS } from "@/lib/endpoints-config";
import api from "../lib/api";
import type { ApiResponse } from "../types/auth";

export const paymentsService = {
    onRampCredits: async (): Promise<ApiResponse> => {
        const response = await api.post<ApiResponse>(API_ENDPOINTS.PAYMENTS.ONRAMP_CREDITS);
        return response.data;
    },
};
