import { useQuery } from "@tanstack/react-query";
import type { ApiResponse } from "@/types/auth";
import { AUTH_TAGS } from "./tags";
import { authService } from "@/services/auth-service";

export function useGetUserProfile(options?: any) {
    return useQuery<ApiResponse>({
        queryKey: [AUTH_TAGS.PROFILE],
        queryFn: () => authService.getMe(),
        staleTime: 1000 * 30,
        ...options,
    });
}
