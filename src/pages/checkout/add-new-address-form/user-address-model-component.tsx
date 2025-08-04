import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useCreateUserAddress } from "@/http/use-user-address";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod/v4";

const addAddressSchema = z.object({
    city: z.string().min(1, { message: 'La città è obbligatoria' }),
    road: z.string().min(1, { message: 'L\'indirizzo è obbligatorio' }),
    zipCode: z.string().min(1, { message: 'Il codice postale è obbligatorio' }),
    country: z.string().min(1, { message: 'La nazione è obbligatoria' }),
});

type AddAddressFormData = z.infer<typeof addAddressSchema>;

export const NewAddressForm = () => {
    const { mutateAsync: createUserAddress, isPending } = useCreateUserAddress();

    const addAddressForm = useForm<AddAddressFormData>({
        resolver: zodResolver(addAddressSchema),
        defaultValues: {
            city: '',
            road: '',
            zipCode: '',
            country: 'Italia',
        },
    })


    const handleAddNewAddress = async (data: AddAddressFormData) => {
        try {
            await createUserAddress(data);
            addAddressForm.reset();
        } catch (error) {
            if (error instanceof Error) {
                console.log(error.message);
            } else {
                console.log("Errore sconosciuto:", error);
            }
        }
    };

    return (
        <Form {...addAddressForm}>
            <form className="w-full bg-white py-3 px-4 md:px-5 rounded flex flex-col gap-4"
                onSubmit={addAddressForm.handleSubmit(handleAddNewAddress)}
            >
                <FormField
                    control={addAddressForm.control}
                    name="city"
                    render={({ field }) => {
                        return (
                            <FormItem>
                                <FormLabel>Città</FormLabel>
                                <FormControl>
                                    <Input
                                        {...field}
                                        placeholder="Inserire la città"
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )
                    }}
                />

                <FormField
                    control={addAddressForm.control}
                    name="road"
                    render={({ field }) => {
                        return (
                            <FormItem>
                                <FormLabel>Indirizzo</FormLabel>
                                <FormControl>
                                    <Input
                                        {...field}
                                        placeholder="Inserire l'indirizzo"
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )
                    }}
                />

                <FormField
                    control={addAddressForm.control}
                    name="country"
                    render={({ field }) => {
                        return (
                            <FormItem>
                                <FormLabel>Nazione</FormLabel>
                                <FormControl>
                                    <Input
                                        {...field}
                                        placeholder="Inserire la nazione"
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )
                    }}
                />


                <FormField
                    control={addAddressForm.control}
                    name="zipCode"
                    render={({ field }) => {
                        return (
                            <FormItem>
                                <FormLabel>Codice Postale</FormLabel>
                                <FormControl>
                                    <Input
                                        {...field}
                                        placeholder="Inserire il codice postale"
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )
                    }}
                />

                <div className="flex flex-col md:flex-row gap-3 items-center justify-between">
                    <button
                        className="bg-primary text-white px-4 py-2 rounded text-sm uppercase cursor-pointer transition-all duration-300 hover:bg-primary/70"
                        type="submit"
                        disabled={isPending}
                    >
                        Aggiungi Indirizzo
                        {isPending && <FontAwesomeIcon icon={faSpinner} spin className="ml-2" />}
                    </button>
                </div>
            </form >
        </Form>
    )
}