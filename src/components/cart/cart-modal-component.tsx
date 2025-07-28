import { useCartStore } from "@/store/cart"
import { useToggleCartModalStore } from "@/store/modal-cart"
import { formatCurrency } from "@/utils/format-currency/format-currency"
import { faCartShopping } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { CartPizzaComponent } from "./cart-pizza-component"

export const CartModalComponent = () => {
    const cart = useCartStore(state => state.cart)
    const isModalCartOpen = useToggleCartModalStore(state => state.isModalCartOpen)
    const toggleCartModal = useToggleCartModalStore(state => state.toggleCartModal)
    const getCartTotalPrice = useCartStore(state => state.getCartTotalPrice)

    //ToDo: verificare se il contenuto del cart ha avuto variazioni del prezzo

    return (
        <div
            className={`fixed top-0 z-50 h-screen bg-slate-200 w-full max-w-[700px] transition-all duration-300 lg:border-s-2 lg:border-primary pt-10 ${isModalCartOpen ? 'right-0' : '-right-full'}`}
        >

            <button
                onClick={toggleCartModal}
                className="bg-primary hover:bg-primary/80 text-white px-5 py-2 rounded text-sm cursor-pointer order-2 sm:order-1 absolute top-3 right-5 z-50">
                X
            </button>

            {
                cart.length <= 0 ? (
                    <div className="flex flex-col gap-10">
                        <h3 className="text-center text-2xl text-gray-500 uppercase mt-6">
                            Il carrello è vuoto
                        </h3>
                        <FontAwesomeIcon className="text-primary text-6xl" icon={faCartShopping} />
                    </div>

                ) : (
                    <>
                        <div className="h-[70%] overflow-y-auto">
                            <h1 className="text-3xl font-bold text-primary flex items-center justify-center gap-3">
                                <FontAwesomeIcon className="text-primary text-3xl" icon={faCartShopping} />
                                Carrello
                            </h1>
                            {
                                cart.map(cartItem => {
                                    return <CartPizzaComponent key={cartItem.id} pizza={cartItem} />
                                })
                            }
                        </div>

                        <div className="h-[30%] flex flex-col border-t-2 border-primary rounded-t-2xl px-2 bg-white">
                            <div className="p-3 py-5 border-b-[1px] border-primary flex justify-between text-xl font-semibold">
                                <span>Totale:</span>
                                <p>{formatCurrency(getCartTotalPrice())}</p>
                            </div>
                            <div className="p-3 py-5 border-b-[1px] border-primary flex justify-between text-lg font-semibold">
                                <span>Elementi nel carrello:</span>
                                <p>{cart.length}</p>
                            </div>
                            <div className="p-3 flex items-center justify-center flex-1">
                                {/* <router-link :to="{ name: 'checkout' }" @click="closeModal()"
                className="bg-primary hover:bg-primary/80 text-white px-5 py-2 rounded text-sm cursor-pointer order-2 sm:order-1">
                Procedi
                con l'acquisto
            </router-link> */}
                            </div>
                        </div>
                    </>
                )
            }




        </div>
    )
}