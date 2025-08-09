import { useCartStore } from "@/store/cart"
import { useEffect } from "react"

export const PaymentSucceededPage = () => {
    const clearCart = useCartStore(state => state.clearCart)

    useEffect(() => {
        clearCart()
    }, [clearCart])

    return (
        <main className="mt-32 min-h-[300px]">
            <div className="text-center mt-10">
                <h1 className="text-2xl font-bold text-green-600">Pagamento completato!</h1>
                <p>Riceverai una conferma via email a breve.</p>
            </div>
        </main>
    )
}