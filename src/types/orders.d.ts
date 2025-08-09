import type { CartPizza } from "./pizzas"

export type PaginatedOrdersResponse = {
    data: Order[]
    links: Links
    meta: Meta
}

export interface Order {
    id: number
    orderDateForHuman: string
    orderStatusTranslated: OrderStatusTranslated
    status: 'pending' | 'processing' | 'shipped' | 'completed'
    address: Address
    pizzas: CartPizza[]
    user: User
    orderPrice: string
}

type OrderStatusTranslated = {
    pending?: string;
    processing?: string;
    shipped?: string;
    completed?: string;
};

export interface Links {
    first: string
    last: string
    prev: string
    next: string
}

export interface Meta {
    current_page: number
    from: number
    last_page: number
    links: Link[]
    path: string
    per_page: number
    to: number
    total: number
}

export interface Link {
    url?: string
    label: string
    active: boolean
}
