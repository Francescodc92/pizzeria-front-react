
export const NewAddressForm = () => {

    return (
        <form className="w-full max-w-[600px] bg-white py-3 px-4 md:px-10 rounded "
        // @submit.prevent="submitForm()" 
        >
            <div className="flex flex-col mb-4">
                <label className="text-sm text-gray-500 mb-2" htmlFor="city"> Città </label>
                <input className="px-3 py-2 border border-gray-300 rounded-lg focus:border-primary focus:outline-none" id="city"
                    name="city" v-model="formData.city" type="city" placeholder="Campobasso, roma, milano ..." required />
            </div>

            <div className="flex flex-col mb-4">
                <label className="text-sm text-gray-500 mb-2" htmlFor="road">Indirizzo</label>
                <input className="px-3 py-2 border border-gray-300 rounded-lg focus:border-primary focus:outline-none" id="road"
                    name="road" v-model="formData.road" type="road" placeholder="Via Roma 13 , Via Napoli... " required />
            </div>

            <div className="flex flex-col mb-4">
                <label className="text-sm text-gray-500 mb-2" htmlFor="zipCode">Codice Postale</label>
                <input className="px-3 py-2 border border-gray-300 rounded-lg focus:border-primary focus:outline-none" id="zipCode"
                    name="zipCode" v-model="formData.zipCode" type="zipCode" placeholder="00100, 86100 ..." required />
            </div>

            <div className="flex flex-col md:flex-row gap-3 items-center justify-between">
                <button
                    className="bg-primary text-white px-4 py-2 rounded text-sm uppercase cursor-pointer transition-all duration-300 hover:bg-primary/70"
                    type="submit">
                    Aggiungi Indirizzo
                </button>
            </div>
        </form >
    )
}