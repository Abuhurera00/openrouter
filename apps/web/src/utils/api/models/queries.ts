import { useQuery } from "@tanstack/react-query";
import type { ApiResponse } from "@/types/auth";
import { modelsService } from "@/services/models-service";
import { ModelsTags } from "./tags";

export function useGetModels(options?: any) {
    return useQuery<ApiResponse>({
        queryKey: [ModelsTags.GET],
        queryFn: () => modelsService.getModels(),
        staleTime: 1000 * 30,
        ...options,
    });
}
