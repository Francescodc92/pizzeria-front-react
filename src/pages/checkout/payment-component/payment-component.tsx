import { useCreateCheckoutSession } from "@/http/use-checkout"
import { useCartStore } from "@/store/cart"
import { useUserStore } from "@/store/user-logged"
import { faSpinner } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { NewAddressForm } from "../add-new-address-form/user-address-model-component"
import { AddressComponent } from "../components/address-component"

export const PaymentComponent = () => {
    const user = useUserStore(state => state.loggedUser)
    const selectedAddress = useUserStore(state => state.selectedDeliveryAddress)
    const cart = useCartStore(state => state.cart)
    const { mutateAsync: createCheckoutSession, isPending, error } = useCreateCheckoutSession()

    return (
        <>
            {
                user && cart.length > 0 ? (
                    <div
                        className="max-w-6xl min-h-[300px] mx-auto  px-2 border-t-2 border-b-2 border-primary rounded-2xl  bg-white my-5 shadow-xl shadow-black/20 flex flex-col">
                        <div className="flex flex-col md:flex-row flex-1">
                            <div className="md:w-[50%] w-full mt-4 px-2">
                                <h3 className="text-lg font-semibold my-3 text-center">Inserisci un nuovo Indirizzo</h3>

                                <NewAddressForm />
                            </div>

                            <div className="md:w-[50%] w-full h-[300px] py-3 pb-10 px-3 overflow-y-auto mt-4">
                                <h3 className="text-lg font-semibold my-3 text-center">Seleziona un Indirizzo</h3>
                                {
                                    user?.addresses && user.addresses.length > 0 ? (
                                        <div className="flex flex-col gap-2">
                                            {
                                                user.addresses.map(address => (
                                                    <AddressComponent key={address.id} address={address} />
                                                ))
                                            }
                                        </div>
                                    ) : (
                                        <p className="text-gray-500 text-lg text-center">Non hai ancora inserito nessun indirizzo</p>
                                    )
                                }
                            </div >

                            {error && (
                                <p className="text-red-500 text-center mt-2">
                                    Errore durante la creazione della sessione di pagamento
                                </p>
                            )}


                        </div >
                        <div className="p-3 mt-5 flex items-center justify-center">
                            <button
                                className="bg-primary hover:bg-primary/80 text-white px-5 py-2 rounded text-sm cursor-pointer order-2 sm:order-1 disabled:bg-primary/50 disabled:cursor-not-allowed "
                                disabled={!user || selectedAddress === null || cart.length === 0}
                                onClick={() => createCheckoutSession()}
                            >
                                Procedi con l'acquisto
                                {isPending && <FontAwesomeIcon icon={faSpinner} spin className="ml-2" />}
                            </button>
                        </div >
                    </div >
                ) :
                    (
                        <div className="max-w-6xl min-h-[300px] mx-auto px-2 border-t-2 border-b-2 border-primary rounded-2xl bg-white my-5 shadow-xl shadow-black/20 flex items-center justify-center">
                            <p className="text-gray-500 text-lg">Per procedere con l'acquisto, devi essere loggato</p>
                        </div>
                    )
            }
        </>
    )
}