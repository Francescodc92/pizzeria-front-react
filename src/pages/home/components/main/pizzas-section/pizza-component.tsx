import type { Pizza } from "@/types/pizzas";
import { formatCurrency } from "@/utils/format-currency/format-currency";
import { Link } from "react-router-dom";

interface PizzaComponentProps {
    pizza: Pizza;
}

export const PizzaComponent = ({ pizza }: PizzaComponentProps) => {
    return (
        <div className="py-10">
            <Link to={`/pizzas/${pizza.id}`} className="pizza border border-primary/50  overflow-hidden block cursor-pointer hover:border-primary rounded-md">
                <div className="w-full h-[350px] relative">
                    <img
                        className="w-full h-full object-cover object-center"
                        src={pizza.fullImagePath}
                        alt={pizza.name}
                    />
                    <span
                        className="absolute top-4 right-3 h-12 w-12 flex items-center justify-center bg-primary text-md font-bold rounded-full text-white"
                    >
                        -{pizza.discountPercent}%
                    </span>
                </div>
                <div className="text-center text-lg mt-3">
                    <h3 className="uppercase text-[#b68a2c]">{pizza.name}</h3>

                    {pizza.discountPercent && (
                        <span className="px-2 py-1 font-bold text-gray-500 line-through">
                            {formatCurrency(pizza.price)}
                        </span>
                    )}

                    <span className="px-2 py-1 font-bold text-primary">
                        {formatCurrency(pizza.priceAfterDiscount)}
                    </span>
                </div>
            </Link>
        </div>
    );
};
