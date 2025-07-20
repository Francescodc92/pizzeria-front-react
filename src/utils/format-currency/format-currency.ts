export function formatCurrency(amount: string | number) {
    return Number(amount).toLocaleString("it-IT", {
        style: "currency",
        currency: "EUR",
    });
}
