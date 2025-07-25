import type { PaginatedPizzasResponse } from "@/types/pizzas"
import { useQuery } from "@tanstack/react-query"

export function usePizzas(currentPizzaPage: number) {
    return useQuery({
        queryKey: ['get-pizzas', currentPizzaPage],
        queryFn: async () => {
            const response = await fetch(`${import.meta.env.VITE_API_URL}/api/pizzas?page=${currentPizzaPage}`)

            if (!response.ok) throw new Error("Errore durante recupero delle pizze!")

            const result: PaginatedPizzasResponse = await response.json()
            return result
        },
    })
}
