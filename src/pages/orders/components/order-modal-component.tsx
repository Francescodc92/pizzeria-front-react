import { useToggleOrderModalStore } from "@/store/order-modal";
import type { Order } from "@/types/orders";
import { formatCurrency } from "@/utils/format-currency/format-currency";
import { OrderPizzaComponent } from "./order-pizza-component";

export const OrderModalComponent = ({ order }: { order: Order }) => {
    const toggleOrderModal = useToggleOrderModalStore((state) => state.toggleOrderModal);

    const statusColors: Record<Order["status"], string> = {
        processing: "bg-yellow-200 text-yellow-800",
        completed: "bg-green-200 text-green-800",
        pending: "bg-red-200 text-red-800",
        shipped: "bg-blue-200 text-blue-800",
    }
    return (
        <div>
            <div className="w-full h-screen fixed inset-0 bg-black/70 z-30 flex items-center justify-center px-2">
                <button
                    className="bg-primary text-white px-3 py-1 rounded absolute top-8 right-8 uppercase cursor-pointer transition-all duration-300 hover:bg-primary/70"
                    onClick={() => toggleOrderModal()}
                >
                    X
                </button>
                <div className="w-full max-w-[1200px] max- bg-white py-10 px-4 md:px-10 rounded shadow-lg">
                    <h2 className="text-center text-2xl text-gray-500 uppercase mt-6">Dettagli ordine n <span className="text-primary">{
                        order.id
                    }</span></h2>
                    <div className="w-full py-5 px-2 flex flex-col md:flex-row border-t-2 border-b-2 border-primary rounded-2xl">
                        <div className="w-full md:w-1/2  p-2">
                            <h3 className="text-primary uppercase">Dettagli spedizione</h3>
                            <p>Contatti</p>
                            <p className="text-gray-500">{order.user.phoneNumber}</p>
                            <p className="text-gray-500">{order.user.email}</p>
                            <p className="text-gray-500">
                                {order.address.road}, {order.address.city}, {order.address.zipCode} {order.address.country}
                            </p>
                        </div>

                        <div className="w-full md:w-1/2 border-t-2 md:border-t-0 md:border-l-2 border-primary p-2">
                            <h3 className="text-primary uppercase">Dati ordine</h3>
                            <div className="flex justify-end">
                                <span className={`py-1 px-2 font-bold rounded text-right ${statusColors[order.status]}`}>
                                    {order.orderStatusTranslated[order.status]}
                                </span>
                            </div>
                            <div className="flex justify-between pt-4">
                                <div>
                                    <p>Data Ordine</p>
                                    <p className="text-gray-500">{order.orderDateForHuman}</p>
                                </div>
                                <div>
                                    <p>Prezzo Ordine</p>
                                    <p className="text-primary">
                                        {formatCurrency(order.orderPrice)}
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div
                        className="w-full py-5 px-2 flex flex-col md:flex-row border-t-2 border-b-2 border-primary rounded-2xl mt-3 overflow-y-auto">

                        <div className="w-full p-2">
                            <h3 className="text-primary uppercase text-center">Pizze dell'ordine</h3>

                            <div className="h-[200px] overflow-y-auto">
                                {
                                    order.pizzas.map(pizza => (
                                        <OrderPizzaComponent key={pizza.id} pizza={pizza} />
                                    ))
                                }
                            </div>


                        </div>

                    </div>
                </div>
            </div >
        </div >
    );
};
