import { create } from 'zustand'

interface UseToggleRegisterModalStore {
  isModalRegisterOpen: boolean
  toggleRegisterModal: () => void
}

export const useToggleRegisterModalStore = create<UseToggleRegisterModalStore>((set) => ({
  isModalRegisterOpen: false,
  toggleRegisterModal: () => set((state) => ({ isModalRegisterOpen: !state.isModalRegisterOpen })),
}))