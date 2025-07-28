import type { User } from "@/types/auth-user";
import { create } from "zustand";
import { persist } from 'zustand/middleware';

interface UseUserStore {
    loggedUser: User | null
    loginUser: (user: User) => void
    logoutUser: () => void;
}

export const useUserStore = create(persist<UseUserStore>(
    (set) => ({
        loggedUser: null,
        loginUser: (user) => {

            return set(() => ({ loggedUser: user }))
        },
        logoutUser: () => {
            return set(() => ({ loggedUser: null }))
        }
    }),
    {
        name: "user-storage",
    }
));