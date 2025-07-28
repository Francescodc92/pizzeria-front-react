import { useQuery } from "@tanstack/react-query";
import { toast } from "sonner";

export function useSanctumToken() {
    return useQuery({
        queryKey: ['get-sanctum-token'],
        queryFn: async () => {
            const res = await fetch(`${import.meta.env.VITE_API_URL}/sanctum/csrf-cookie`, {
                headers: {
                    "Content-Type": "application/json",
                },
                credentials: 'include',
            });

            if (!res.ok) {
                toast.error('Errore nel recupero del CSRF token')
                throw new Error('Errore nel recupero del CSRF token');
            }

            return res;
        },
        staleTime: Infinity,
    });
}