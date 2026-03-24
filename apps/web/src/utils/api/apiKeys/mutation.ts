import { useMutation } from "@tanstack/react-query";
import { API_KEYS_TAGS } from "./tags";
import { apiKeysService } from "@/services/api-keys-service";
import type { ApiResponse } from "@/types/auth";

export function useCreateApiKeyMutation(options?: any) {
    return useMutation<ApiResponse, Error, string>({
        mutationKey: [API_KEYS_TAGS.CREATE],
        mutationFn: apiKeysService.createApiKey,
        ...options,
    });
}


export function useToggleApiKeyMutation(options?: any) {
    return useMutation<ApiResponse, Error, { id: string; disabled: boolean }>({
        mutationKey: [API_KEYS_TAGS.UPDATE],
        mutationFn: apiKeysService.toggleApiKey,
        ...options,
    });
}


export function useDeleteApiKeyMutation(options?: any) {
    return useMutation<ApiResponse, Error, string>({
        mutationKey: [API_KEYS_TAGS.DELETE],
        mutationFn: apiKeysService.deleteApiKey,
        ...options,
    });
}