import { useCartStore } from "@/store/cart"
import type { CartPizza } from "@/types/pizzas"
import { formatCurrency } from "@/utils/format-currency/format-currency"
import { faTrash } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { QuantityButtons } from "./components/quantity-buttons"

interface CartPizzaComponentProps {
    pizza: CartPizza
}

export const CartPizzaComponent = ({ pizza }: CartPizzaComponentProps) => {
    const getPizzaTotalPrice = useCartStore(state => state.getPizzaTotalPrice)
    const removeItemToCart = useCartStore(state => state.removeItemToCart)

    const removePizza = () => {
        removeItemToCart(pizza)
    }

    return (
        <>
            <div className="py-5 flex px-3 relative">
                <div className="flex flex-col sm:flex-row sm:items-center gap-3 flex-1">
                    <div className="w-[150px] h-[150px] relative self-center rounded-md overflow-hidden">
                        <img className="w-full h-full object-cover object-center"
                            src={pizza.fullImagePath} alt={pizza.name} />
                        {
                            pizza.discountPercent > 0 && (
                                <span v-if="pizza.discountPercent"
                                    className="absolute top-0 left-0 h-12 w-12 flex items-center justify-center bg-primary text-md font-bold rounded-full text-white">
                                    -{pizza.discountPercent}%
                                </span>
                            )
                        }
                    </div>
                    <div className="text-lg ps-5 flex flex-col gap-2 flex-1">
                        <h3 className="uppercase text-[#b68a2c] hover:text-[#a58237] hover:underline cursor-pointer"
                        //   @click="openPizzaInfo(pizza.id)"
                        >
                            {pizza.name}
                        </h3>
                        <div className="flex gap-2 w-full">
                            <div className="flex flex-col">
                                {
                                    pizza.discountPercent > 0 && (
                                        <span className="font-bold text-gray-500 line-through text-sm" v-if="pizza.discountPercent">
                                            {formatCurrency(pizza.price)}
                                        </span>
                                    )
                                }
                                <span className="font-bold text-primary">
                                    {formatCurrency(pizza.priceAfterDiscount)}
                                </span>
                            </div>
                            <span className="ms-auto pe-3">
                                Tot: <span className=" font-bold text-primary">{formatCurrency(getPizzaTotalPrice(pizza.id))}</span>
                            </span>
                        </div>
                        <div
                            className=" flex items-center justify-center sm:justify-start border-b border-primary sm:border-0 pb-2 sm:pb-0 gap-3 order-1 mt-2 sm:mt-0 sm:order-2">
                            <QuantityButtons pizzaId={pizza.id} pizzaQuantity={pizza.quantity} />
                        </div>
                    </div>
                </div>
                <div className=" flex md:items-center justify-center absolute top-3 right-3 sm:static">
                    <button
                        className="bg-primary hover:bg-primary/80 text-white  flex items-center justify-center border rounded-md h-10 w-10"
                        onClick={removePizza}
                    >
                        <FontAwesomeIcon icon={faTrash} />
                    </button>
                </div >
            </div >
        </>
    )
}