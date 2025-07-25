export type PizzaResponse = {
    data: Pizza[]
}


export type PaginatedPizzasResponse = {
    data: Pizza[]
    links: Links
    meta: Meta
}


export interface Pizza {
    id: number
    name: string
    fullImagePath: string
    description: string
    price: string
    available: number
    discountPercent: number
    priceAfterDiscount: number
}

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