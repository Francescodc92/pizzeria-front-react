import type { Pizza } from "@/types/pizzas"
import { formatCurrency } from "@/utils/format-currency/format-currency"
import { Link } from "react-router-dom"

interface PizzaComponentProp {
  pizza: Pizza
}

export const PizzaComponent = ({ pizza }: PizzaComponentProp) => {
  return (
    <div className=" border border-primary/30 cursor-pointer hover:border-primary rounded-md ">

      <Link to="{ name: 'single-pizza', params: { id: pizza.id } }" >
        <div className="h-[250px] relative">
          <img className="w-full h-full object-contain object-center" src={pizza.fullImagePath} alt={pizza.name} />
          <span v-if="pizza.discountPercent"
            className="absolute top-4 right-3 h-12 w-12 flex items-center justify-center bg-primary text-md font-bold rounded-full text-white">
            -{pizza.discountPercent}%
          </span>
        </div>
        <div className="text-center text-lg mt-3">
          <h3 className="uppercase text-[#b68a2c]">
            {pizza.name}
          </h3>

          <span className="px-2 py-1 font-bold text-gray-500 line-through" v-if="pizza.discountPercent">
            {formatCurrency(pizza.price)}
          </span>
          <span className="px-2 py-1 font-bold text-primary">
            {formatCurrency(pizza.priceAfterDiscount)}
          </span>
        </div>
      </Link >
      <div className="flex items-center justify-center gap-3 py-3">
        <button
          // @click="addPizzaToCart(pizza)"
          className="bg-primary text-white px-5 py-2 rounded text-sm cursor-pointer">Aggiungi al carrello</button>
      </div>

    </div>

  )
}