import { create } from 'zustand'

interface UseToggleModalStore {
  isModalRegisterOpen: boolean
  toggleRegisterModal: () => void
}

export const useToggleRegisterModalStore = create<UseToggleModalStore>((set) => ({
  isModalRegisterOpen: false,
  toggleRegisterModal: () => set((state) => ({ isModalRegisterOpen: !state.isModalRegisterOpen })),
}))