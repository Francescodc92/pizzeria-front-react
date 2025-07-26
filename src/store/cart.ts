import type { CartPizza, Pizza } from "@/types/pizzas";
import { create } from "zustand";
import { persist } from "zustand/middleware";


interface UseCartStore {
    cart: CartPizza[],
    addItemToCart: (pizza: Pizza) => void,
    removeItemToCart: (pizza: CartPizza) => void,
    incrementPizzaQuantity: (pizzaId: number) => void,
    decrementPizzaQuantity: (pizzaId: number) => void,
    getPizzaTotalPrice: (pizzaId: number) => number,
    getCartTotalPrice: () => number
}

export const useCartStore = create<UseCartStore>()(
    persist(
        (set, get) => ({
            cart: [],
            addItemToCart: (pizza: Pizza) => {
                const currentCart = get().cart;
                const existingPizza = currentCart.findIndex(cartItem => cartItem.id == pizza.id)

                if (existingPizza != -1) {
                    const updatedCart = currentCart.map(cartItem => (
                        cartItem.id == pizza.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
                    ))

                    set({ cart: updatedCart })
                } else {
                    set({ cart: [...currentCart, { ...pizza, quantity: 1 }] })
                }
            },
            removeItemToCart: (pizza: CartPizza) => {
                const currentCart = get().cart;
                const updatedCart = currentCart.filter(cartItem => cartItem.id != pizza.id)
                set({ cart: updatedCart })
            },
            incrementPizzaQuantity: (pizzaId: number) => {
                const currentCart = get().cart;
                const updatedCart = currentCart.map(cartItem => (
                    cartItem.id == pizzaId ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
                ))

                set({ cart: updatedCart })
            },
            decrementPizzaQuantity: (pizzaId: number) => {
                const currentCart = get().cart;
                const updatedCart = currentCart.map(cartItem => (
                    cartItem.id == pizzaId ? { ...cartItem, quantity: cartItem.quantity - 1 } : cartItem
                )).filter(item => item.quantity > 0);

                set({ cart: updatedCart })

            },
            getPizzaTotalPrice: (pizzaId: number) => {
                const currentCart = get().cart;
                const pizza = currentCart.find(cartItem => cartItem.id == pizzaId)
                return pizza ? pizza?.quantity * pizza?.priceAfterDiscount : 0
            },
            getCartTotalPrice: () => {
                const currentCart = get().cart;
                return currentCart.reduce((acc, item) => item.quantity * item.priceAfterDiscount + acc, 0)
            }
        }),
        {
            name: "cart-storage"
        }
    )
)