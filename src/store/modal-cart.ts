import { create } from 'zustand'

interface UseToggleCartModalStore {
  isModalCartOpen: boolean
  toggleCartModal: () => void
}

export const useToggleCartModalStore = create<UseToggleCartModalStore>((set) => ({
  isModalCartOpen: false,
  toggleCartModal: () => set((state) => ({ isModalCartOpen: !state.isModalCartOpen })),
}))