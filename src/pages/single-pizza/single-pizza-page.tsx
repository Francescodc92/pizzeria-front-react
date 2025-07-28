import { QuantityButtons } from "@/components/cart/components/quantity-buttons"
import { ErrorHttpComponent } from "@/components/http-error/error-compoent"
import { LoaderComponent } from "@/components/loader/loader-component"
import { usePizza } from "@/http/use-pizzas"
import { useCartStore } from "@/store/cart"
import { formatCurrency } from "@/utils/format-currency/format-currency"
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useNavigate, useParams } from "react-router-dom"

export const SinglePizzaPage = () => {
    const params = useParams()
    const pizzaId = Number(params.pizzaId)
    const navigate = useNavigate();

    const { data: pizza, isLoading, error } = usePizza(pizzaId)
    const getPizzaQuantity = useCartStore(state => state.getPizzaQuantity(pizzaId))
    const isPizzaInCart = useCartStore(state => state.isPizzaInCart(pizzaId))
    const addItemToCart = useCartStore(state => state.addItemToCart)

    return (
        <>
            {
                isLoading && <LoaderComponent />
            }
            {
                pizza && (
                    <div className="max-w-6xl mx-auto md:flex my-10 min-h-[350px] px-3 relative pt-10 mt-32">
                        <button
                            onClick={() => navigate("/pizzas")}
                            className="absolute -top-2 left-2 bg-primary text-white w-10 h-10 flex items-center justify-center rounded-md">
                            <FontAwesomeIcon icon={faArrowLeft} />
                        </button>
                        <div className="max-h-[350px] rounded-t-md md:rounded-md md:w-1/2 overflow-hidden relative">
                            <img className="w-full max-h-full object-contain object-center" src={pizza?.fullImagePath} alt={pizza?.name} />

                            {
                                pizza.discountPercent > 0 && (
                                    <span
                                        className="absolute top-3 right-3 h-15 w-15 flex items-center justify-center bg-primary text-md font-bold rounded-full text-white">
                                        -{pizza.discountPercent}%
                                    </span>
                                )
                            }

                        </div>
                        <div className=" text-lg px-3 flex flex-col md:w-1/2 ">
                            <div className="flex-1 flex flex-col gap-2 pt-5">
                                <h3 className="uppercase text-[#b68a2c] text-3xl text-center mb-4">
                                    {pizza?.name}
                                </h3>
                                <p className="text-xl text-muted-foreground">{pizza?.description}</p>

                                <div className="mt-5">

                                    {pizza.discountPercent > 0 && (
                                        <p className="flex justify-center md:justify-start">

                                            Sconto applicato del <span className="text-primary ms-2 font-bold">{pizza.discountPercent}%</span>
                                        </p>
                                    )
                                    }
                                    <div className="flex justify-center md:justify-start">
                                        {
                                            pizza.discountPercent > 0 && (
                                                <span className="font-bold text-gray-500 line-through me-3">
                                                    {formatCurrency(pizza.price)}
                                                </span>
                                            )
                                        }
                                        <span className="font-bold text-primary">
                                            {formatCurrency(pizza.priceAfterDiscount)}
                                        </span>
                                    </div>
                                </div>


                            </div>

                            <div className="flex flex-col sm:flex-row gap-5 items-center justify-center  py-6">
                                <button
                                    onClick={() => addItemToCart(pizza)}
                                    className="bg-primary hover:bg-primary/80 text-white px-5 py-2 rounded text-sm cursor-pointer order-2 sm:order-1">
                                    Aggiungi
                                    al carrello
                                </button>

                                {isPizzaInCart &&

                                    <div className=" flex items-center gap-3 order-1 mt-2 sm:mt-0 sm:order-2">
                                        <span>quantità</span>
                                        <QuantityButtons
                                            pizzaId={pizza?.id} pizzaQuantity={getPizzaQuantity}
                                        />
                                    </div>
                                }

                            </div>

                        </div >
                    </div >
                )
            }

            {
                error && (
                    <ErrorHttpComponent message={error.message} />
                )
            }
        </>
    )
}