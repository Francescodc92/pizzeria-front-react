// http/use-auth-user.ts
import { useUserStore } from "@/store/user-logged";
import { getCookie } from "@/utils/cookie/get-cookie";
import { useMutation } from "@tanstack/react-query";
import type { LoginUserRequest, LoginUserResponse, LogoutUserResponse } from "../types/auth-user";

export function useLoginUser() {
    const xsrfToken = getCookie('XSRF-TOKEN');
    const loginUser = useUserStore(state => state.loginUser)
    return useMutation({
        mutationFn: async ({ email, password }: LoginUserRequest) => {
            const response = await fetch(`${import.meta.env.VITE_API_URL}/api/login`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "X-XSRF-TOKEN": xsrfToken || ""
                },
                credentials: "include",
                body: JSON.stringify({ email, password }),
            });

            const result: LoginUserResponse = await response.json()

            if (result.error) throw new Error(result.error)


            loginUser(result.loggedUser!)

            return result.message;
        },
    });

}

export function useLogoutUser() {
    const xsrfToken = getCookie('XSRF-TOKEN');
    const logoutUser = useUserStore(state => state.logoutUser)

    return useMutation({
        mutationFn: async () => {
            const response = await fetch(`${import.meta.env.VITE_API_URL}/api/logout`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "X-XSRF-TOKEN": xsrfToken || ""
                },
                credentials: "include",
            })

            const result: LogoutUserResponse = await response.json()

            if (result.error) throw new Error(result.error)

            logoutUser()
        }
    })
}