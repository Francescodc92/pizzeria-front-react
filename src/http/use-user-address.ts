import { useUserStore } from "@/store/user-logged";
import { getCookie } from "@/utils/cookie/get-cookie";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { useGetUserInfo } from "./use-auth-user";

interface deleteUserAddressResponse {
    message?: string
    error?: string
}


export function useCreateUserAddress() {

}


export function useDeleteUserAddress() {
    const xsrfToken = getCookie('XSRF-TOKEN');
    const queryClient = useQueryClient();
    const loginUser = useUserStore(state => state.loginUser);
    const { refetch } = useGetUserInfo();

    return useMutation({
        mutationFn: async (addressId: number) => {
            const response = await fetch(`${import.meta.env.VITE_API_URL}/api/user/address/${addressId}`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json",
                    "X-XSRF-TOKEN": xsrfToken || ""
                },
                credentials: "include",
            });

            const result: deleteUserAddressResponse = await response.json();

            await queryClient.invalidateQueries({ queryKey: ['get-user-data'] });

            const { data: freshUser } = await refetch();

            if (freshUser) {
                loginUser(freshUser);
            }

            if (result.error) {
                toast.error(result.error);
                throw new Error(result.error);
            }

            toast.success(result.message);

            return result.message;
        }
    });
}