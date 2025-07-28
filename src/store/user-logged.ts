import type { User } from "@/types/auth-user";
import { toast } from "sonner";
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
            toast.success("Login effettuato con successo!")
            return set(() => ({ loggedUser: user }))
        },
        logoutUser: () => {
            toast.success("Logout effettuato con successo!")
            return set(() => ({ loggedUser: null }))
        }
    }),
    {
        name: "user-storage",
    }
));