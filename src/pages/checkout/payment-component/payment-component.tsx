import { useCartStore } from "@/store/cart"
import { useUserStore } from "@/store/user-logged"
import { NewAddressForm } from "../add-new-address-form/user-address-model-component"
import { AddressComponent } from "../components/address-component"

export const PaymentComponent = () => {
    const user = useUserStore(state => state.loggedUser)
    const selectedAddress = useUserStore(state => state.selectedDeliveryAddress)
    const cart = useCartStore(state => state.cart)
    return (
        <>
            <div
                className="max-w-6xl min-h-[300px] mx-auto  px-2 border-t-2 border-b-2 border-primary rounded-2xl  bg-white my-5 shadow-xl shadow-black/20 flex flex-col">
                <div className="flex flex-col md:flex-row flex-1">
                    <div className="md:w-[50%] w-full mt-4 px-2">
                        <h3 className="text-lg font-semibold my-3">Inserisci un nuovo Indirizzo</h3>

                        <NewAddressForm />
                    </div>

                    <div className="md:w-[50%] w-full h-[300px] py-3 pb-10 px-3 overflow-y-auto mt-4">
                        <h3 className="text-lg font-semibold my-3">Seleziona un Indirizzo</h3>
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


                </div >
                <div className="p-3 mt-5 flex items-center justify-center">
                    <button
                        className="bg-primary hover:bg-primary/80 text-white px-5 py-2 rounded text-sm cursor-pointer order-2 sm:order-1 disabled:bg-primary/50 disabled:cursor-not-allowed "
                        disabled={!user || !selectedAddress || cart.length === 0}
                    >
                        Procedi con l'acquisto
                    </button>
                </div >
            </div >
        </>
    )
}