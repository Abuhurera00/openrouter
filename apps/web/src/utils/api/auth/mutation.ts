import { useMutation } from "@tanstack/react-query";
import { AUTH_TAGS } from "./tags";
import { authService } from "@/services/auth-service";
import type { ApiResponse, SignInData } from "@/types/auth";

export function useSignInMutation(options?: any) {
    return useMutation<ApiResponse, Error, SignInData>({
        mutationKey: [AUTH_TAGS.SIGN_IN],
        mutationFn: authService.signIn,
        ...options,
    });
}

export function useSignUpMutation(options?: any) {
    return useMutation<ApiResponse, Error, SignInData>({
        mutationKey: [AUTH_TAGS.SIGN_UP],
        mutationFn: authService.signUp,
        ...options,
    });
}