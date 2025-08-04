import { LoaderComponent } from "@/components/loader/loader-component"
import { usePizzas } from "@/http/use-pizzas"
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { PizzaComponent } from "./components/pizza-component/pizza-component"

export const PizzasPage = () => {
    const [page, setPage] = useState(1)
    const { data, error, isLoading } = usePizzas(page)
    const navigate = useNavigate();

    const handleChangePage = (button: string) => {

        if (button == "prev") {
            if (page > 1) setPage((currentPage) => currentPage - 1);
        } else if (button == "next") {
            if (page < Number(data?.meta.last_page)) setPage((currentPage) => currentPage + 1);
        }

    }

    return (
        <>
            {
                isLoading && <LoaderComponent />
            }

            {
                data && (
                    <div className="max-w-6xl mx-auto px-3 relative mt-32">
                        <button
                            onClick={() => navigate("/")}
                            className="absolute top-0 left-0 bg-primary text-white w-10 h-10 flex items-center justify-center rounded-md">
                            <FontAwesomeIcon icon={faArrowLeft} />
                        </button>
                        <h2 className=" text-center text-3xl uppercase my-5 text-primary font-bold">Menu</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-y-5 gap-x-3">

                            {
                                data.data.map(pizza => (
                                    <PizzaComponent pizza={pizza} key={pizza.id} />
                                ))
                            }


                        </div>

                        <div
                            className="flex items-center justify-between lg:justify-center gap-3 py-3 lg:py-5 sticky bottom-0 bg-white lg:static">
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

                    </div >

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
        </>
    )
}