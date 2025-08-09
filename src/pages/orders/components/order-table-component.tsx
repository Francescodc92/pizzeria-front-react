import { useToggleOrderModalStore } from "@/store/order-modal";
import type { Order } from "@/types/orders";
import { formatCurrency } from "@/utils/format-currency/format-currency";

interface OrderTableProps {
    orders: Order[]
}

export const OrderTable = ({ orders }: OrderTableProps) => {
    const setSelectedOrder = useToggleOrderModalStore((state) => state.setSelectedOrder);
    const toggleOrderModal = useToggleOrderModalStore((state) => state.toggleOrderModal);

    const statusColors: Record<Order["status"], string> = {
        processing: "bg-yellow-200 text-yellow-800",
        completed: "bg-green-200 text-green-800",
        pending: "bg-red-200 text-red-800",
        shipped: "bg-blue-200 text-blue-800",
    }

    const handleOpenOrderModal = (order: Order) => {
        setSelectedOrder(order);
        toggleOrderModal();
    }

    return (
        <>
            <div className="h-[350px] overflow-y-auto px-2">
                <table className="w-full px-2">
                    <thead className="sticky top-0 bg-gray-200 text-xs md:text-sm text-gray-700 uppercase px-2">
                        <tr>
                            <th scope="col" className="py-5 px-2 text-center md:text-start hidden md:table-cell">
                                #Id Ordine
                            </th>

                            <th scope="col" className="py-5 px-2 text-center md:text-start hidden sm:table-cell">
                                N* pizze
                            </th>
                            <th scope="col" className="py-5 px-2 text-center md:text-start ">
                                Data Ordine
                            </th>
                            <th scope="col" className="py-5 px-2 text-center md:text-start ">
                                Stato
                            </th>
                            <th scope="col" className="py-5 px-2 text-center md:text-start ">
                                Prezzo Totale
                            </th>
                        </tr>
                    </thead>
                    <tbody className="text-sm md:text-lg">
                        {orders.length === 0 && (
                            <tr>
                                <td className="text-center pt-3" colSpan={5}>Nessun ordine trovato</td>
                            </tr>
                        )}

                        {
                            orders.map((order) => (
                                <tr
                                    onClick={() => handleOpenOrderModal(order)}
                                    key={order.id}
                                    className="py-2 border-b border-gray-300 hover:border-primary cursor-pointer" >
                                    <td className="py-4 md:py-3 px-2 text-black/80 hidden md:table-cell">{order.id}</td>
                                    <td className="py-4 md:py-3 px-2 text-black/80 hidden sm:table-cell">{order.pizzas.length}</td>
                                    <td className="py-4 md:py-3 px-2 text-black/80 ">{order.orderDateForHuman}</td>
                                    <td className="py-4 md:py-3 px-2 text-black/80">
                                        <span className={`px-2 md:px-3 py-1 rounded ${statusColors[order.status]}`}
                                        >
                                            {order.orderStatusTranslated[order.status]}
                                        </span>
                                    </td>
                                    <td className="py-4 md:py-3 px-2  text-primary text-center">{formatCurrency(Number(order.orderPrice))}</td>
                                </tr>
                            ))
                        }

                    </tbody>
                </table >
            </div >

        </>

    )
}