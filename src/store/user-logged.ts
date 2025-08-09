import type { User, UserAddress } from "@/types/auth-user";
import { create } from "zustand";
import { persist } from 'zustand/middleware';

interface UseUserStore {
    loggedUser: User | null
    selectedDeliveryAddress: UserAddress | null;
    loginUser: (user: User | null) => void
    logoutUser: () => void;
    selectDeliveryAddress: (address: UserAddress | null) => void;
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

        selectDeliveryAddress: (address: UserAddress | null) => {
            return set(() => ({ selectedDeliveryAddress: address }))
        },

    }),
    {
        name: "user-storage",
    }
));