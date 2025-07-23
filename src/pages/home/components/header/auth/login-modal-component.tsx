import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { useAuthUser } from '@/http/use-auth-user';
import { useSanctumToken } from '@/http/use-sanctum-token';
import { useToggleModalStore } from "@/store/modal-login";
import { useToggleRegisterModalStore } from "@/store/modal-register";
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod/v4';

const loginUserSchema = z.object({
    email: z.email(),
    password: z.string().min(3, { message: 'La password deve contenere almeno 3 caratteri' })
})

type LoginUserFormData = z.infer<typeof loginUserSchema>

export const LoginModalComponent = () => {
    const toggleLoginModal = useToggleModalStore(state => state.toggleLoginModal)
    const toggleRegisterModal = useToggleRegisterModalStore(state => state.toggleRegisterModal)
    const { mutateAsync: login } = useAuthUser()
    const { isSuccess } = useSanctumToken()

    const loginUserForm = useForm<LoginUserFormData>({
        resolver: zodResolver(loginUserSchema),
        defaultValues: {
            email: '',
            password: '',
        },
    })

    const handleOpenRegisterModal = () => {
        toggleLoginModal()
        toggleRegisterModal()
    }

    const handleLoginUser = async (data: LoginUserFormData) => {
        if (isSuccess) {
            try {
                await login(data)
                loginUserForm.reset();
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
                onClick={toggleLoginModal}
            >
                X
            </button>
            <Form {...loginUserForm}>
                <form
                    className="w-full max-w-[600px] bg-white py-10 px-4 md:px-10 rounded shadow-lg flex flex-col gap-5"
                    onSubmit={loginUserForm.handleSubmit(handleLoginUser)}
                >
                    <FormField
                        control={loginUserForm.control}
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
                        control={loginUserForm.control}
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
                    <div className="flex flex-col md:flex-row gap-3 items-center justify-between">
                        <Button type="submit">
                            Login
                        </Button>
                        <button
                            onClick={handleOpenRegisterModal}
                            type="button"
                            className="text-primary hover:underline"
                        >
                            Non hai un account?
                        </button>
                    </div >
                </form >
            </Form>
        </div >
    );
}