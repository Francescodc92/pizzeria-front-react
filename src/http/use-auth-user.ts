// http/use-auth-user.ts
import { useMutation } from "@tanstack/react-query";
import type { AuthUserRequest, AuthUserResponse } from "../types/auth-user";

function getCookie(name: string) {
    const match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
    if (match) return decodeURIComponent(match[2]);
    return null;
}

export function useAuthUser() {
    const xsrfToken = getCookie('XSRF-TOKEN');
    return useMutation({
        mutationFn: async ({ email, password }: AuthUserRequest) => {
            const response = await fetch(`${import.meta.env.VITE_API_URL}/api/login`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "X-XSRF-TOKEN": xsrfToken || ""
                },
                credentials: "include",
                body: JSON.stringify({ email, password }),
            });

            const result: AuthUserResponse = await response.json()

            if (result.error) throw new Error(result.error)

            return result.message;
        },
    });

}