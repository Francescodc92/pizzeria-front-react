import type { User } from "@/types/auth-user";
import { create } from "zustand";
import { persist } from 'zustand/middleware';

interface UseUserStore {
    loggedUser: User | null
    selectedDeliveryAddress: number | null;
    loginUser: (user: User) => void
    logoutUser: () => void;
    selectDeliveryAddress: (addressId: number | null) => void;
}

export const useUserStore = create(persist<UseUserStore>(
    (set) => ({
        loggedUser: null,
        selectedDeliveryAddress: null,
        loginUser: (user) => {
            return set(() => ({ loggedUser: user }))
        },

        logoutUser: () => {
            return set(() => ({ loggedUser: null }))
        },

        selectDeliveryAddress: (addressId: number | null) => {
            return set(() => ({ selectedDeliveryAddress: addressId }))
        },

    }),
    {
        name: "user-storage",
    }
));