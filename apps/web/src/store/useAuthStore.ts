import { create } from "zustand";
import { callApi } from "@/lib/callApi";
import type { User } from "@/types/auth";
import { authService } from "@/services/auth-service";

interface AuthState {
    user: User | null;
    isAuthenticated: boolean;
    isLoading: boolean;
    setUser: (user: User | null) => void;
    fetchUser: () => Promise<void>;
    logout: () => void;
}


const useAuthStore = create<AuthState>((set) => ({
    user: null,
    isAuthenticated: false,
    isLoading: true,

    setUser: (user) =>
        set({
            user,
            isAuthenticated: !!user,
        }),

    fetchUser: async () => {

        set({ isLoading: true });

        const response = await callApi(() => authService.getMe(), {
            showSuccess: false,
            showError: false,
        });

        if (response?.success) {
            set({
                user: response.data.user,
                isAuthenticated: true,
                isLoading: false,
            });
        } else {
            set({
                user: null,
                isAuthenticated: false,
                isLoading: false,
            });
        }
    },

    logout: () => {
        set({
            user: null,
            isAuthenticated: false,
            isLoading: false
        });
    },
}));

export default useAuthStore;
