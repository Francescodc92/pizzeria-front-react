export type Pizza = {
    id: number;
    name: string;
    fullImagePath: string;
    discountPercent: number;
    price: number;
    priceAfterDiscount: number;
};

export type PizzaResponse = {
    data: Pizza[]
}
