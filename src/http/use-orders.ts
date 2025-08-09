import type { PaginatedOrdersResponse } from "@/types/orders";
import { baseFetch } from "@/utils/base-fetch/base-fetch";
import { useQuery } from "@tanstack/react-query";
import { toast } from "sonner";

export function useOrders(currentOrderPage: number) {
    return useQuery({
        queryKey: ["user-orders", currentOrderPage],
        queryFn: async () => {
            console.log("Fetching orders for page:", currentOrderPage);

            const response = await baseFetch(`${import.meta.env.VITE_API_URL}/api/orders?page=${currentOrderPage}`);

            if (!response.ok) {
                toast.error("Errore durante recupero degli ordini!")
                throw new Error("Errore durante recupero degli ordini!")
            }

            const result: PaginatedOrdersResponse = await response.json()
            return result;
        }
    })
}