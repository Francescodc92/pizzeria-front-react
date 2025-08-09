import { LoaderComponent } from "@/components/loader/loader-component";
import { useOrders } from "@/http/use-orders";
import { useToggleOrderModalStore } from "@/store/order-modal";
import { useState } from "react";
import { OrderModalComponent } from "./components/order-modal-component";
import { OrderTable } from "./components/order-table-component";

export const OrdersPage = () => {
    const [page, setPage] = useState(1)
    const { data, isLoading, error } = useOrders(page);
    const selectedOrder = useToggleOrderModalStore((state) => state.selectedOrder);
    const isModalOrderOpen = useToggleOrderModalStore((state) => state.isModalOrderOpen);

    const handleChangePage = (button: string) => {

        if (button == "prev") {
            if (page > 1) setPage((currentPage) => currentPage - 1);
        } else if (button == "next") {
            if (page < Number(data?.meta.last_page)) setPage((currentPage) => currentPage + 1);
        }

    }

    return (
        <main className="mt-32">
            {isLoading && <LoaderComponent />}


            <div className="max-w-6xl mx-auto px-3 relative min-h-[300px]" v-else>
                {!isLoading && (
                    <>

                        <h2 className=" text-center text-3xl uppercase my-5 text-primary font-bold">Ordini</h2>
                        <div
                            className="relative border-t-2 border-b-2 border-primary rounded-2xl pt-5 bg-white my-5 shadow-xl shadow-black/20 overflow-hidden">
                            {
                                data && (
                                    <>
                                        <OrderTable orders={data.data} />
                                        <div
                                            className="flex items-center justify-between lg:justify-center gap-3 py-3 px-3 sticky bottom-0 bg-white md:static border-t border-primary"
                                            v-if="lastPage != 1">
                                            <button
                                                className="bg-primary text-white px-5 py-2 rounded text-sm cursor-pointer disabled:opacity-50 disabled:cursor-auto uppercase"
                                                onClick={() => handleChangePage("prev")} disabled={page == 1}
                                            >
                                                prev
                                            </button>
                                            <div className="text-xl">
                                                <span className="text-primary">{page}</span>/<span>{data?.meta.last_page}</span>
                                            </div>
                                            <button
                                                className="bg-primary text-white px-5 py-2 rounded text-sm cursor-pointer disabled:opacity-50 disabled:cursor-auto uppercase"
                                                onClick={() => handleChangePage("next")} disabled={page == Number(data?.meta.last_page)}
                                            >
                                                next
                                            </button>
                                        </div >
                                    </>

                                )
                            }


                            {
                                error && (
                                    <div className="min-h-[400px] flex items-center justify-center">
                                        <h1 className="text-3xl font-bold text-zinc-800">
                                            <span className="text-primary">{error.message}</span>
                                        </h1>
                                    </div>
                                )
                            }




                        </div >
                    </>
                )}

                {
                    selectedOrder && isModalOrderOpen && <OrderModalComponent order={selectedOrder} />
                }
            </div >
        </main >
    );
};
