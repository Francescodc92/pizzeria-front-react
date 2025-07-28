import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { useRegisterUser } from '@/http/use-auth-user';
import { useSanctumToken } from '@/http/use-sanctum-token';
import { useToggleModalStore } from "@/store/modal-login";
import { useToggleRegisterModalStore } from "@/store/modal-register";
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod/v4';

const registerUserSchema = z.object({
    firstName: z.string().min(3, { message: 'Il nome deve contenere almeno 3 caratteri' }),
    lastName: z.string().min(3, { message: 'Il nome deve contenere almeno 3 caratteri' }),
    phoneNumber: z.string()
        .min(9, { message: "Il numero è troppo corto" })
        .max(15, { message: "Il numero è troppo lungo" })
        .regex(/^\+?[0-9]{9,15}$/, { message: "Numero non valido" }),
    email: z.email(),
    password: z.string().min(3, { message: 'La password deve contenere almeno 3 caratteri' }),
    passwordConfirmation: z.string(),
}).refine(
    (data) => data.password === data.passwordConfirmation, {
    path: ["passwordConfirmation"],
    message: "Le password non coincidono",
})

type RegisterUserFormData = z.infer<typeof registerUserSchema>

export const RegisterModalComponent = () => {
    const toggleLoginModal = useToggleModalStore(state => state.toggleLoginModal)
    const toggleRegisterModal = useToggleRegisterModalStore(state => state.toggleRegisterModal)
    const { mutateAsync: register } = useRegisterUser()
    const { isSuccess } = useSanctumToken()

    const registerUserForm = useForm<RegisterUserFormData>({
        resolver: zodResolver(registerUserSchema),
        defaultValues: {
            firstName: '',
            lastName: '',
            phoneNumber: '',
            email: '',
            password: '',
            passwordConfirmation: '',
        },
    })

    const handleOpenLoginModal = () => {
        toggleRegisterModal()
        toggleLoginModal()
    }

    const handleRegisterUser = async (data: RegisterUserFormData) => {
        if (isSuccess) {
            try {
                await register(data)
                registerUserForm.reset();
                toggleRegisterModal()
            } catch (error) {
                if (error instanceof Error) {
                    console.log(error.message);
                } else {
                    console.log("Errore sconosciuto:", error);
                }
            }
        }
    };
    return (

        <div
            className="w-full h-screen fixed inset-0 bg-black/70 z-30 flex items-center justify-center px-2"
        >
            <button
                className="bg-primary text-white px-3 py-1 rounded absolute top-8 right-8 uppercase cursor-pointer transition-all duration-300 hover:bg-primary/70"
                onClick={toggleRegisterModal}
            >
                X
            </button>
            <Form {...registerUserForm}>
                <form
                    className="w-full max-w-[600px] bg-white py-10 px-4 md:px-10 rounded shadow-lg flex flex-col gap-5"
                    onSubmit={registerUserForm.handleSubmit(handleRegisterUser)}
                >

                    <FormField
                        control={registerUserForm.control}
                        name="firstName"
                        render={({ field }) => {
                            return (
                                <FormItem>
                                    <FormLabel>Nome</FormLabel>
                                    <FormControl>
                                        <Input
                                            {...field}
                                            placeholder="Inserire il nome"
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )
                        }}
                    />
                    <FormField
                        control={registerUserForm.control}
                        name="lastName"
                        render={({ field }) => {
                            return (
                                <FormItem>
                                    <FormLabel>Cognome</FormLabel>
                                    <FormControl>
                                        <Input
                                            {...field}
                                            placeholder="Inserire il cognome"
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )
                        }}
                    />

                    <FormField
                        control={registerUserForm.control}
                        name="email"
                        render={({ field }) => {
                            return (
                                <FormItem>
                                    <FormLabel>Email</FormLabel>
                                    <FormControl>
                                        <Input
                                            {...field}
                                            placeholder="Inserire l'email"
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )
                        }}
                    />

                    <FormField
                        control={registerUserForm.control}
                        name="phoneNumber"
                        render={({ field }) => {
                            return (
                                <FormItem>
                                    <FormLabel>Numero di telefono</FormLabel>
                                    <FormControl>
                                        <Input
                                            {...field}
                                            placeholder="Inserire il numero (es. +393471234567)"
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )
                        }}
                    />

                    <FormField
                        control={registerUserForm.control}
                        name="password"
                        render={({ field }) => {
                            return (
                                <FormItem>
                                    <FormLabel>Password</FormLabel>
                                    <FormControl>
                                        <Input
                                            {...field}
                                            type='password'
                                            placeholder="Inserire la password"
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )
                        }}
                    />

                    <FormField
                        control={registerUserForm.control}
                        name="passwordConfirmation"
                        render={({ field }) => {
                            return (
                                <FormItem>
                                    <FormLabel>Conferma Password</FormLabel>
                                    <FormControl>
                                        <Input
                                            {...field}
                                            type='password'
                                            placeholder="Inserire la password"
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )
                        }}
                    />
                    <div className="flex flex-col md:flex-row gap-3 items-center justify-between">
                        <Button type="submit">
                            Registrati
                        </Button>
                        <button
                            onClick={handleOpenLoginModal}
                            type="button"
                            className="text-primary hover:underline"
                        >
                            Hai già un account?
                        </button>
                    </div >
                </form >
            </Form>
        </div >
    );
}