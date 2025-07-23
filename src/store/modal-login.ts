import { create } from 'zustand'

interface UseToggleModalStore {
  isModalLoginOpen: boolean
  toggleLoginModal: () => void
}

export const useToggleModalStore = create<UseToggleModalStore>((set) => ({
  isModalLoginOpen: false,
  toggleLoginModal: () => set((state) => ({ isModalLoginOpen: !state.isModalLoginOpen })),
}))