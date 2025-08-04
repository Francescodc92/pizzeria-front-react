import { useDeleteUserAddress } from "@/http/use-user-address"
import { useUserStore } from "@/store/user-logged"
import type { UserAddress } from "@/types/auth-user"
import { faSpinner, faTrash } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

interface AddressComponentProps {
    address: UserAddress
}

export const AddressComponent = ({ address }: AddressComponentProps) => {
    const selectDeliveryAddress = useUserStore(state => state.selectDeliveryAddress)
    const selectedAddress = useUserStore(state => state.selectedDeliveryAddress)
    const { mutateAsync: deleteUserAddress, isPending } = useDeleteUserAddress()


    return (
        <div className="flex items-center my-2 border border-gray-200 rounded dark:border-gray-300 px-4">
            <input
                type="radio"
                value={address.id}
                id={`radio-${address.id}`}
                name="address"
                className="w-4 h-4 text-primary bg-primary border-primary/85"
                checked={selectedAddress === address.id}
                onChange={() => selectDeliveryAddress(address.id)}
            />
            <label className="w-full py-4 ms-2 text-sm font-medium text-gray-900 cursor-pointer" htmlFor={`radio-${address.id}`}>
                {address.road}, {address.city}, {address.country}
                <span className="text-primary ms-2">{address.zipCode}</span>
            </label>
            <button
                className="bg-primary hover:bg-primary/80 text-white px-3 py-2 rounded text-sm cursor-pointer order-2 sm:order-1 disabled:opacity-70"
                onClick={() => deleteUserAddress(address.id)}
                disabled={isPending}
            >
                {isPending ? (
                    <FontAwesomeIcon icon={faSpinner} spin />
                ) : (
                    <FontAwesomeIcon icon={faTrash} />
                )}
            </button>
        </div>
    )
}