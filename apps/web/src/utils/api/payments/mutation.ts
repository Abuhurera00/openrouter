import { useMutation } from "@tanstack/react-query";
import { PAYMENTS_TAGS } from "./tags";
import { paymentsService } from "@/services/payments-service";
import type { ApiResponse } from "@/types/auth";

export function useOnRampCreditsMutation(options?: any) {
    return useMutation<ApiResponse, Error>({
        mutationKey: [PAYMENTS_TAGS.ONRAMP_CREDITS],
        mutationFn: paymentsService.onRampCredits,
        ...options,
    });
}