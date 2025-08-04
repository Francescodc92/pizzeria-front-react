import { create } from 'zustand'

interface UseToggleLoginModalStore {
  isModalLoginOpen: boolean
  toggleLoginModal: () => void
}

export const useToggleLoginModalStore = create<UseToggleLoginModalStore>((set) => ({
  isModalLoginOpen: false,
  toggleLoginModal: () => set((state) => ({ isModalLoginOpen: !state.isModalLoginOpen })),
}))