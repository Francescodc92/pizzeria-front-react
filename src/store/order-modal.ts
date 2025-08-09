import type { Order } from '@/types/orders'
import { create } from 'zustand'

interface UseToggleOrderModalStore {
  isModalOrderOpen: boolean
  selectedOrder: Order | null
  toggleOrderModal: () => void
  setSelectedOrder: (order: Order | null) => void
  resetSelectedOrder: () => void
}

export const useToggleOrderModalStore = create<UseToggleOrderModalStore>((set) => ({
  isModalOrderOpen: false,
  selectedOrder: null,
  toggleOrderModal: () => set((state) => ({ isModalOrderOpen: !state.isModalOrderOpen })),
  setSelectedOrder: (order: Order | null) => set({ selectedOrder: order }),
  resetSelectedOrder: () => set({ selectedOrder: null }),
}))