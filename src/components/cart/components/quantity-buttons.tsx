import { useCartStore } from "@/store/cart"
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

interface QuantityButtonsProps {
    pizzaId: number, pizzaQuantity: number
}

export const QuantityButtons = ({ pizzaId, pizzaQuantity }: QuantityButtonsProps) => {
    const incrementPizzaQuantity = useCartStore(state => state.incrementPizzaQuantity)
    const decrementPizzaQuantity = useCartStore(state => state.decrementPizzaQuantity)

    return (
        <>
            <button type="button" id="decrement-button"
                onClick={() => decrementPizzaQuantity(pizzaId)}
                className="bg-primary hover:bg-primary/80 text-white hover:text-white/50 flex items-center justify-center border rounded-md h-10 w-10 " >
                <FontAwesomeIcon icon={faMinus} />
            </button >
            <span>{pizzaQuantity} </span>
            <button type="button" id="increment-button"
                onClick={() => incrementPizzaQuantity(pizzaId)}
                className="bg-primary hover:bg-primary/80 text-white hover:text-white/50  flex items-center justify-center border rounded-md h-10 w-10 " >
                <FontAwesomeIcon icon={faPlus} />
            </button >
        </>
    )
}