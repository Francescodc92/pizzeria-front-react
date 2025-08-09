import { useUserStore } from "@/store/user-logged";
import type { deleteUserAddressResponse, UserAddressRequest, UserAddressResponse } from "@/types/auth-user";
import { baseFetch } from "@/utils/base-fetch/base-fetch";
import { getCookie } from "@/utils/cookie/get-cookie";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { useGetUserInfo } from "./use-auth-user";




export function useCreateUserAddress() {
    const xsrfToken = getCookie('XSRF-TOKEN');
    const queryClient = useQueryClient();
    const loginUser = useUserStore(state => state.loginUser);
    const { refetch } = useGetUserInfo();

    return useMutation({
        mutationFn: async ({ city, road, zipCode, country }: UserAddressRequest) => {
            const response = await fetch(`${import.meta.env.VITE_API_URL}/api/user/address`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json",
                    "X-XSRF-TOKEN": xsrfToken || ""
                },
                credentials: "include",
                body: JSON.stringify({
                    city,
                    road,
                    zipCode,
                    country,
                }),
            });

            const result: UserAddressResponse = await response.json();
            if (result.error) {
                toast.error(result.error);
                throw new Error(result.error);
            }

            await queryClient.invalidateQueries({ queryKey: ['get-user-data'] });

            const { data: freshUser } = await refetch();

            if (freshUser) {
                loginUser(freshUser);
            }

            toast.success(result.message);

            return result.message;
        }
    });

}


export function useDeleteUserAddress() {
    const queryClient = useQueryClient();
    const loginUser = useUserStore(state => state.loginUser);
    const selectDeliveryAddress = useUserStore(state => state.selectDeliveryAddress);
    const { refetch } = useGetUserInfo();

    return useMutation({
        mutationFn: async (addressId: number) => {
            const response = await baseFetch(`${import.meta.env.VITE_API_URL}/api/user/address/${addressId}`, {
                method: "DELETE",
            });

            const result: deleteUserAddressResponse = await response.json();

            await queryClient.invalidateQueries({ queryKey: ['get-user-data'] });

            const { data: freshUser } = await refetch();

            if (freshUser) {
                loginUser(freshUser);
            }
            selectDeliveryAddress(null)

            if (result.error) {
                toast.error(result.error);
                throw new Error(result.error);
            }

            toast.success(result.message);

            return result.message;
        }
    });
}