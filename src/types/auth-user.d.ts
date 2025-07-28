export type LoginUserRequest = {
    email: string,
    password: string
}

export type LoginUserResponse = {
    message?: string,
    loggedUser?: User
    error?: string
}

export type RegisterUserRequest = {
    firstName: string,
    lastName: string,
    phoneNumber: string,
    email: string,
    password: string,
    passwordConfirmation: string
}

export type RegisterUserResponse = {
    message?: string,
    errors?: Record<string, string[]>
}

export type LogoutUserResponse = {
    message?: string,
    error?: string
}

export interface User {
    id: number
    firstName: string
    lastName: string
    phoneNumber: string
    email: string
    role: string[]
    addresses: UserAddress[]
}

export interface UserAddress {
    id: number
    userId: number
    road: string
    city: string
    country: string
    zipCode: string
}