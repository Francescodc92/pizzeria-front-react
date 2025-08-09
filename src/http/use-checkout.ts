import { useCartStore } from "@/store/cart";
import { useUserStore } from "@/store/user-logged";
import { baseFetch } from "@/utils/base-fetch/base-fetch";
import { loadStripe } from "@stripe/stripe-js";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";

export function useCreateCheckoutSession() {

    const getCheckoutPizzas = useCartStore(state => state.getCheckoutPizzas);
    const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLIC_KEY);
    const selectedDeliveryAddress = useUserStore(state => state.selectedDeliveryAddress);

    return useMutation({
        mutationKey: ['create-checkout-session'],
        mutationFn: async () => {
            const pizzas = getCheckoutPizzas()

            const res = await baseFetch(`${import.meta.env.VITE_API_URL}/api/orders/stripe/intent-payment`, {
                method: "POST",
                body: JSON.stringify({
                    userAddress: {
                        id: selectedDeliveryAddress?.id,
                        road: selectedDeliveryAddress?.road,
                        city: selectedDeliveryAddress?.city,
                        country: selectedDeliveryAddress?.country,
                        zip_code: selectedDeliveryAddress?.zipCode,
                    }, pizzas
                }),
            });


            if (!res.ok) {
                const errorText = await res.text();
                toast.error("Errore nella creazione della sessione di pagamento");
                throw new Error("Errore nella creazione della sessione di pagamento: " + errorText);
            }

            const data = await res.json();
            return data;
        },
        onSuccess: async (data) => {
            const stripe = await stripePromise
            if (!stripe) {
                toast.error("Errore nell'inizializzazione di Stripe");
                console.error("Stripe non inizializzato")
                return
            }

            const { error } = await stripe.redirectToCheckout({
                sessionId: data.session_id,
            })
            if (error) {
                console.error("Errore nel redirect a Stripe:", error.message)
            }
        },
        onError: (err) => {
            console.error("Errore checkout", err)
        },
    })
}


