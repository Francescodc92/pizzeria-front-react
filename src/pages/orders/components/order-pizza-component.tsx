import type { CartPizza } from "@/types/pizzas";
import { formatCurrency } from "@/utils/format-currency/format-currency";
import { Link } from "react-router-dom";

export const OrderPizzaComponent = ({ pizza }: { pizza: CartPizza }) => {
    return (
        <div className="flex flex-col sm:flex-row sm:items-center gap-3 flex-1 py-3 border-b border-primary">
            <Link to={`/pizzas/${pizza.id}`} className="w-[80px] h-[80px] relative self-center">
                <img className="w-full h-full object-cover object-center" src={pizza.fullImagePath} alt={pizza.name} />
            </Link>
            <div className="text-lg ps-5 flex flex-col gap-1 flex-1">
                <Link to={`/pizzas/${pizza.id}`} className="uppercase text-[#b68a2c] hover:text-[#a58237] text-center sm:text-start">
                    {pizza.name}
                </Link>
                <div className="flex justify-between gap-1 w-full">
                    <div className="flex flex-col">
                        <div className="flex flex-col md:flex-row md:gap-2 md:items-center">
                            <span className="font-bold text-gray-500 line-through text-sm" v-if="pizza.discountPercent">
                                {formatCurrency(pizza.price)}
                            </span>
                            <span className="font-bold text-primary">
                                {formatCurrency(pizza.priceAfterDiscount)}
                            </span>
                        </div>
                        <p className="font-bold text-gray-500 capitalize text-sm">
                            quantità: <span className=" font-bold text-primary">{pizza.quantity}</span>
                        </p>
                    </div>
                    <div className="pe-3 flex flex-col">

                        <p>
                            Tot: <span className=" font-bold text-primary">{
                                formatCurrency(pizza.quantity *
                                    pizza.priceAfterDiscount)}</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}