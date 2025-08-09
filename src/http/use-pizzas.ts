import type { PaginatedPizzasResponse, SinglePizzaResponse } from "@/types/pizzas";
import { baseFetch } from "@/utils/base-fetch/base-fetch";
import { useQuery } from "@tanstack/react-query";
import { toast } from "sonner";

export function usePizzas(currentPizzaPage: number) {
    return useQuery({
        queryKey: ['get-pizzas', currentPizzaPage],
        queryFn: async () => {
            const response = await baseFetch(`${import.meta.env.VITE_API_URL}/api/pizzas?page=${currentPizzaPage}`)

            if (!response.ok) {
                toast.error("Errore durante recupero delle pizze!")
                throw new Error("Errore durante recupero delle pizze!")
            }

            const result: PaginatedPizzasResponse = await response.json()
            return result
        },
    })
}

export function usePizza(pizzaId: number) {
    return useQuery({
        queryKey: ['get-pizza', pizzaId],
        queryFn: async () => {
            const response = await baseFetch(`${import.meta.env.VITE_API_URL}/api/pizzas/${pizzaId}`)

            if (!response.ok) {
                toast.error("Errore durante recupero della pizza!")
                throw new Error("Errore durante recupero della pizza!")
            }

            const result: SinglePizzaResponse = await response.json()

            return result.data
        },
    })
}