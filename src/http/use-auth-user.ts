// http/use-auth-user.ts
import { useUserStore } from "@/store/user-logged";
import { useMutation, useQuery } from "@tanstack/react-query";
import { toast } from "sonner";

import { baseFetch } from "@/utils/base-fetch/base-fetch";
import type { GetUserDataResponse, LoginUserRequest, LoginUserResponse, LogoutUserResponse, RegisterUserRequest, RegisterUserResponse } from "../types/auth-user";

export function useLoginUser() {
    const loginUser = useUserStore(state => state.loginUser)
    return useMutation({
        mutationFn: async ({ email, password }: LoginUserRequest) => {
            const response = await baseFetch(`${import.meta.env.VITE_API_URL}/api/login`, {
                method: "POST",
                body: JSON.stringify({ email, password }),
            });

            const result: LoginUserResponse = await response.json()

            if (result.error) {
                toast.error(result.error)
                throw new Error(result.error)
            }

            toast.success("Login effettuato con successo!")

            loginUser(result.loggedUser!)

            return result.message;
        },
    });

}

export function useRegisterUser() {
    return useMutation({
        mutationFn: async ({ firstName,
            lastName,
            phoneNumber,
            email,
            password,
            passwordConfirmation }: RegisterUserRequest) => {
            const response = await baseFetch(`${import.meta.env.VITE_API_URL}/api/register`, {
                method: "POST",
                body: JSON.stringify({
                    first_name: firstName,
                    last_name: lastName,
                    phone_number: phoneNumber,
                    email,
                    password,
                    password_confirmation: passwordConfirmation
                }),
            });

            const result: RegisterUserResponse = await response.json()

            if (result.errors) {
                Object.values(result.errors).forEach((errorArray) => {
                    errorArray.forEach((errorMessage: string) => {
                        toast.error(errorMessage);
                    });
                });
                throw new Error("Validation errors");
            }

            toast.success("Registrazione effettuata con successo!")

            return result.message;
        },
    });

}

export function useLogoutUser() {
    const logoutUser = useUserStore(state => state.logoutUser)

    return useMutation({
        mutationFn: async () => {
            const response = await baseFetch(`${import.meta.env.VITE_API_URL}/api/logout`, {
                method: "POST",
                credentials: "include",
            })

            const result: LogoutUserResponse = await response.json()

            if (result.error) {
                toast.error(result.error)
                throw new Error(result.error)
            }

            toast.success("Logout effettuato con successo!")


            logoutUser()
        }
    })
}

export function useGetUserInfo() {
    const loginUser = useUserStore(state => state.loginUser)
    return useQuery({
        queryKey: ['get-user-data'],
        queryFn: async () => {
            const response = await baseFetch(`${import.meta.env.VITE_API_URL}/api/user`, {
                method: "GET",
            });

            if (response.status === 401) {
                loginUser(null)
                throw new Error("Sessione scaduta")
            }

            if (!response.ok) {
                toast.error("Errore durante recupero dei dati dell'utente!")
                throw new Error("Errore durante recupero dei dati dell'utente!")
            }

            const result: GetUserDataResponse = await response.json()



            if (!result.loggedUser) {
                toast.error("Errore durante recupero dei dati dell'utente!")
                throw new Error("Errore durante recupero dei dati dell'utente!")
            }

            loginUser(result.loggedUser)


            return result.loggedUser
        },
        refetchOnWindowFocus: true,
    })
}