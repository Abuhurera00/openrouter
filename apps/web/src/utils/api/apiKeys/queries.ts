import { useQuery } from "@tanstack/react-query";
import { API_KEYS_TAGS } from "./tags";
import type { ApiResponse } from "@/types/auth";
import { apiKeysService } from "@/services/api-keys-service";

export function useGetApiKeys(options?: any) {
    return useQuery<ApiResponse>({
        queryKey: [API_KEYS_TAGS.GET],
        queryFn: () => apiKeysService.getApiKeys(),
        staleTime: 1000 * 30,
        ...options,
    });
}
