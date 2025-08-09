import { baseFetch } from "@/utils/base-fetch/base-fetch";
import { useQuery } from "@tanstack/react-query";
import { toast } from "sonner";

export function useSanctumToken() {
    return useQuery({
        queryKey: ['get-sanctum-token'],
        queryFn: async () => {
            const res = await baseFetch(`${import.meta.env.VITE_API_URL}/sanctum/csrf-cookie`);

            if (!res.ok) {
                toast.error('Errore nel recupero del CSRF token')
                throw new Error('Errore nel recupero del CSRF token');
            }

            return res;
        },
        staleTime: Infinity,
    });
}