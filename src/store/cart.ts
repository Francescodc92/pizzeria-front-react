import type { CartPizza, Pizza } from "@/types/pizzas";
import { toast } from "sonner";
import { create } from "zustand";
import { persist } from "zustand/middleware";


interface UseCartStore {
    cart: CartPizza[],
    isPizzaInCart: (pizzaId: number) => CartPizza | undefined
    addItemToCart: (pizza: Pizza) => void,
    removeItemToCart: (pizza: CartPizza) => void,
    incrementPizzaQuantity: (pizzaId: number) => void,
    decrementPizzaQuantity: (pizzaId: number) => void,
    getPizzaTotalPrice: (pizzaId: number) => number,
    getPizzaQuantity: (pizzaId: number) => number,
    getCartTotalPrice: () => number
}

export const useCartStore = create<UseCartStore>()(
    persist(
        (set, get) => ({
            cart: [],
            isPizzaInCart: (pizzaId: number) => {
                const currentCart = get().cart;
                return currentCart.find(cartItem => cartItem.id == pizzaId)
            },
            addItemToCart: (pizza: Pizza) => {
                const currentCart = get().cart;
                const existingPizza = get().isPizzaInCart(pizza.id)

                if (existingPizza) {
                    const updatedCart = currentCart.map(cartItem => (
                        cartItem.id == pizza.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
                    ))

                    set({ cart: updatedCart })
                } else {
                    set({ cart: [...currentCart, { ...pizza, quantity: 1 }] })
                }
                toast.success("Pizza aggiunta al carrello")

            },
            removeItemToCart: (pizza: CartPizza) => {
                const currentCart = get().cart;
                const updatedCart = currentCart.filter(cartItem => cartItem.id != pizza.id)
                set({ cart: updatedCart })
                toast.success("Pizza rimossa dal carrello")
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
                const existingPizza = get().isPizzaInCart(pizzaId)
                return existingPizza ? existingPizza?.quantity * existingPizza?.priceAfterDiscount : 0
            },
            getPizzaQuantity: (pizzaId: number) => {
                const existingPizza = get().isPizzaInCart(pizzaId)
                if (!existingPizza) return 0

                return existingPizza.quantity
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