import { useCartStore } from "@/store/cart"
import { formatCurrency } from "@/utils/format-currency/format-currency"
import { PaymentComponent } from "./payment-component/payment-component"

export const CheckoutPage = () => {
    const cart = useCartStore(state => state.cart)
    const getPizzaTotalPrice = useCartStore(state => state.getPizzaTotalPrice)
    const getCartTotalPrice = useCartStore(state => state.getCartTotalPrice)

    return (
        <main className="mt-32">
            <div className="max-w-6xl px-2 mx-auto">
                <div
                    className=" flex flex-col justify-between border-t-2 border-b-2 border-primary rounded-2xl px-2 bg-white my-5 shadow-xl shadow-black/20 h-[250px]">

                    <div className="p-5 border-b-[1px] border-primary font-semibold text-lg flex-1 overflow-y-auto ">

                        {
                            cart.length <= 0 ? (
                                <div className="text-center text-gray-500">
                                    Il carrello è vuoto
                                </div>
                            ) : (
                                cart.map(cartItem => {
                                    return (
                                        <div key={cartItem.id} className="flex justify-between py-2">
                                            <p className="flex items-center gap-2">
                                                <span className="text-primary">
                                                    {cartItem.quantity}
                                                </span>
                                                {cartItem.name}
                                            </p>

                                            <p className="text-primary">{formatCurrency(getPizzaTotalPrice(cartItem.id))}</p>
                                        </div>
                                    )
                                })
                            )
                        }
                    </div>

                    <div className="p-3 py-5 flex justify-between text-xl font-semibold">
                        <span>Totale:</span>
                        <p>{formatCurrency(getCartTotalPrice())}</p>
                    </div>


                </div >

                <PaymentComponent />
            </div >
        </main>
    )
}