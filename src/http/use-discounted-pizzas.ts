import { baseFetch } from "@/utils/base-fetch/base-fetch";
import { useQuery } from "@tanstack/react-query";
import type { PizzaResponse } from "../types/pizzas";

export function useDiscountedPizzas() {
    return useQuery({
        queryKey: ['get-discounted-pizzas'],
        queryFn: async () => {
            const response = await baseFetch(`${import.meta.env.VITE_API_URL}/api/pizzas-with-discount`)
            const result: PizzaResponse = await response.json()
            return result.data
        },
    })
}
