import { useQuery } from "@tanstack/react-query";
import type { PizzaResponse } from "../types/pizzas";

export function usePizzas() {
    return useQuery({
        queryKey: ['get-rooms'],
        queryFn: async () => {
            const response = await fetch(`${import.meta.env.VITE_API_URL}/api/pizzas-with-discount`)
            const result: PizzaResponse = await response.json()

            return result.data
        },
    })
}
