import { useLogoutUser } from "@/http/use-auth-user";
import { useCartStore } from "@/store/cart";
import { useToggleCartModalStore } from "@/store/cart-modal";
import { useToggleLoginModalStore } from "@/store/login-modal";
import { useUserStore } from "@/store/user-logged";
import { useState } from "react";
import { NavItemsComponent } from "./nav-item-component";

const NavItemsArray = [
    {
        path: "/",
        text: "Home",
        svg: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 25 11"
                className="w-5 h-5 fill-white group-hover:fill-primary "
            >
                <path d="M21.1 3.7c-.6-.1-1.1-.3-1.6-.7-.4-.3-.8-.7-1.1-1-.9-.9-1.8-1.8-3.1-1.8-.2 0-.4 0-.6.1-.8.1-1.6.6-2.2 1.3C11.9.9 11.2.4 10.3.3c-.2 0-.4-.1-.6-.1-1.3 0-2.2.9-3 1.8-.4.3-.8.7-1.2 1-.6.5-1.3.7-2.1.7-1 0-1.9-.4-2.6-1l-.6-.6v.8c0 6.8 4.4 7.8 7.1 7.8 1.5 0 2.8-.3 3.2-.5.8-.4 1.4-.9 2-1.5.5.7 1.2 1.2 2 1.5.4.2 1.7.5 3.2.5 1 0 2.3-.1 3.5-.7.2-.1.5-.3.7-.4 1.7-1 3-3 3-6.8v-.7l-.6.5c-.6.6-1.5 1-2.4 1l-.8.1zm0 5.6c-1.1.6-2.3.8-3.5.8-1.5 0-2.7-.3-3-.5-.8-.4-1.5-1-2-1.7l-.3-.4-.3.4c-.5.7-1.1 1.3-2 1.7 0 .1-1.2.4-2.7.4C4.5 10 1.2 8.9.9 3.6c.7.5 1.6.7 2.5.7.9 0 1.8-.3 2.5-.8.4-.3.8-.7 1.2-1.1C7.9 1.7 8.7 1 9.8 1h.5c.8.1 1.5.6 2 1.4l.3.4.3-.4c.5-.8 1.2-1.3 2-1.4h.5c1.1 0 1.8.8 2.7 1.6.4.4.8.8 1.2 1.1.6.4 1.3.7 2 .8h.7c.8 0 1.6-.3 2.3-.7-.1 2.6-1 4.2-2.3 5.2-.4 0-.6.1-.9.3z" />
                <path d="M17.7 11c-1.5 0-2.9-.3-3.3-.5-.7-.3-1.4-.8-1.9-1.4-.5.6-1.1 1.1-1.9 1.4-.4.2-1.7.5-3.3.5C4.6 11 0 10 0 2.9V1.6l.9.9c.6.6 1.5 1 2.4 1 .7 0 1.4-.2 2-.6.4-.3.7-.6 1.1-1 1-1 2-1.9 3.4-1.9.2 0 .4 0 .6.1.8.1 1.5.6 2.1 1.2.6-.7 1.3-1.1 2.1-1.2.2-.1.4-.1.6-.1 1.4 0 2.4 1 3.3 1.8.4.3.7.7 1.1 1 .4.3 1 .5 1.5.6h.7c.9 0 1.7-.4 2.3-1l.9-.8v1.3c0 4.2-1.7 6.1-3.1 7-.2.1-.5.3-.7.4-.9.5-2.1.7-3.5.7zm-5.2-2.7l.2.2c.5.6 1.1 1.1 1.9 1.5.4.2 1.7.5 3.1.5 1.4 0 2.5-.2 3.4-.7.2-.1.5-.3.7-.4 1.9-1.1 2.9-3.4 2.9-6.5v-.2l-.2.2c-.7.6-1.6 1-2.5 1.1h-.7c-.6-.1-1.2-.3-1.8-.7-.4-.3-.8-.7-1.2-1-.8-.8-1.7-1.7-3-1.7-.2 0-.4 0-.5.1-.8.1-1.5.6-2 1.3h-.3l-.2-.2c-.6-.7-1.3-1.1-2-1.3-.2 0-.4-.1-.5-.1-1.2 0-2.1.9-3 1.7-.4.4-.8.8-1.2 1.1-.6.5-1.4.7-2.2.7-1 0-2-.4-2.7-1.1l-.3-.1V3c0 6.6 4.3 7.6 6.9 7.6 1.5 0 2.8-.3 3.1-.5.8-.4 1.4-.9 1.9-1.5l.2-.3zm5.2 2c-1.6 0-2.8-.3-3-.5-.9-.4-1.6-1-2-1.8l-.1-.1-.2.1c-.5.8-1.2 1.4-2 1.8-.3.1-1.5.5-3 .5-2.9 0-6.3-1.1-6.6-6.6v-.5l.2.3c.7.5 1.5.7 2.3.7.9 0 1.7-.3 2.4-.8.5-.3.9-.7 1.3-1.1C7.9 1.5 8.7.7 9.8.7h.5c.8.2 1.6.7 2.1 1.5l.1.1.1-.1c.6-.8 1.3-1.4 2.1-1.5h.5c1.1 0 1.9.8 2.8 1.6l-.1.2.1-.2c.4.4.8.8 1.2 1.1.6.4 1.2.7 1.9.7h.7c.8 0 1.5-.3 2.2-.7l.4-.2v.5c-.1 2.4-.9 4.2-2.4 5.3-.2.2-.5.3-.7.5-1 .5-2.2.8-3.6.8zm-5.2-3.2l.5.7c.4.7 1 1.2 1.8 1.6.2.1 1.4.4 2.9.4 1.3 0 2.4-.3 3.4-.7.2-.1.4-.3.6-.4 1.2-.9 2-2.5 2.1-4.6-.6.3-1.3.5-2 .5h-.7c-.8-.1-1.5-.4-2.1-.8-.5-.3-.9-.7-1.2-1.1-.8-.8-1.5-1.5-2.5-1.5h-.4c-.7.1-1.4.6-1.9 1.3l-.4.7-.6-.6c-.5-.7-1.2-1.2-1.9-1.3h-.4c-1 0-1.7.7-2.5 1.5-.4.3-.8.7-1.2 1-.7.5-1.7.8-2.6.8-.8 0-1.5-.2-2.2-.6.4 4.7 3.6 5.7 6.2 5.7 1.5 0 2.6-.3 2.9-.4.7-.3 1.3-.8 1.7-1.5l.5-.7z" />
            </svg>
        ),
    },
    {
        path: "#menu",
        text: "Promozioni",
        svg: null,
    },
    {
        path: "/pizzas",
        text: "Menu",
        svg: null,
    },
    {
        path: "#events",
        text: "Eventi",
        svg: null,
    },
    {
        path: "/ordini",
        text: "Ordini",
        svg: null,
    },
];

export const NavBarComponent = () => {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [isLogoutMenuOpen, setLogoutMenuOpen] = useState(false);
    const loggedUser = useUserStore(state => state.loggedUser)
    const toggleLoginModal = useToggleLoginModalStore(state => state.toggleLoginModal)
    const toggleCartModal = useToggleCartModalStore(state => state.toggleCartModal)
    const { mutateAsync: logoutUser } = useLogoutUser()
    const cart = useCartStore(state => state.cart);
    const totalQuantity = cart.reduce((acc, item) => acc + item.quantity, 0);

    const handleUserLogout = async () => {
        await logoutUser()
    }

    return (
        <nav className="fixed top-0 w-full z-20 bg-zinc-800">
            <div className=" max-w-6xl flex items-center justify-between mx-auto px-2 py-2 flex-wrap md:flex-nowrap">
                <a
                    href="{ name: 'pizzas' }"
                    className="bg-primary text-white px-3 py-1 rounded  uppercase cursor-pointer transition-all duration-300 hover:bg-primary/70"
                >
                    Ordina
                </a>

                <div className="max-w-[80px] sm:max-w-[90px] block md:hidden">
                    <img
                        className="w-full"
                        src="/src/assets/img/h5-logo-divided-header-dark.png"
                        alt="logo pizzeria don peppe"
                    />
                </div>

                <div
                    className={`items-center justify-between md:flex md:w-auto absolute md:static md:opacity-100 bottom-0 left-0 translate-y-full md:translate-0 w-full md:pointer-events-auto transition ${isMobileMenuOpen ? "translate-y-0 opacity-100 pointer-events-auto" : "translate-y-full opacity-0 pointer-events-none"}`}
                >
                    <ul className="flex flex-col gap-5 md:gap-0 py-4 px-1 md:p-0 rounded-b-lg rtl:space-x-reverse md:flex-row md:items-center md:mt-0 md:border-0 bg-zinc-800 md:bg-transparent  text-white">
                        {NavItemsArray.slice(0, 2).map((item, index) => {
                            return (
                                <NavItemsComponent
                                    key={index}
                                    path={item.path}
                                    svg={item.svg}
                                    text={item.text}
                                />
                            );
                        })}

                        <li>
                            <div className="max-w-[100px] hidden md:block">
                                <img
                                    className="w-full"
                                    src="/src/assets/img/h5-logo-divided-header.png"
                                    alt="logo pizzeria don peppe"
                                />
                            </div>
                        </li>
                        {NavItemsArray.slice(2).map((item, index) => {
                            return (
                                <NavItemsComponent
                                    key={index}
                                    path={item.path}
                                    svg={item.svg}
                                    text={item.text}
                                />
                            );
                        })}
                        <li className="flex items-center justify-center">
                            <button className="group flex items-center justify-center hover:text-primary  gap-1 py-2 px-3 text-white rounded md:bg-transparent uppercase cursor-pointer" onClick={toggleCartModal}>

                                <div className="relative flex gap-1 items-center">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="28"
                                        height="20"
                                    >
                                        <path
                                            fill="currentColor"
                                            d="M23 20c-2.2 0-4-1.8-4-4 0-.2 0-.4.1-.7.1-.3.3-.4.6-.4.3.1.4.3.4.6v.4c0 1.7 1.3 3 3 3s3-1.3 3-3c0-.7-.2-1.3-.6-1.8-.2-.2-.1-.5.1-.7.2-.2.5-.1.7.1.5.7.8 1.6.8 2.5-.1 2.2-1.9 4-4.1 4zM6 20c-1 0-1.9-.4-2.6-1-.7-.6-1.2-1.5-1.3-2.4-.1-.3.1-.6.4-.6.2 0 .5.2.5.4.2 1.5 1.5 2.6 3 2.6s2.8-1.1 3-2.6c0-.2.3-.4.5-.4.3 0 .5.3.4.6-.1.9-.6 1.8-1.3 2.4-.7.6-1.6 1-2.6 1z"
                                        />
                                        <path
                                            fill="currentColor"
                                            d="M18.5 17H.5c-.1 0-.3-.1-.4-.2-.1-.1-.1-.3-.1-.4l.3-1.5c.2-1.2.7-2.3 1.4-3.3s1.5-1.9 2.5-2.5c.1-.1.2-.1.3-.1h9c.3 0 .5.2.5.5V14h3.7l.6-1.7c.5-1.3.7-2.6.7-3.9 0-1.2-.2-2.4-.6-3.5L18 3.7c-.1-.2 0-.3.1-.5.1-.1.2-.2.4-.2h4c.3 0 .5.2.5.5v2c0 .1-.1.3-.1.4l-.5.5.9.5c1.4.7 2.6 1.8 3.5 3.2.8 1.4 1.3 2.9 1.3 4.5 0 .3-.2.5-.5.5h-.1-.1-.1s-1.6-.8-3.8-.9h-.1c-2 0-4.5 2.8-4.5 2.8-.1-.1-.3 0-.4 0zM1.1 16h17.2c.3-.3.8-.8 1.5-1.4 1.3-1.1 2.5-1.6 3.6-1.6h.2c1.5.1 2.7.4 3.4.7-.3-2.6-1.8-4.8-4.2-6l-1.5-.8c-.2 0-.3-.2-.3-.3 0-.2 0-.3.1-.4l.9-.9V4h-2.8l.2.5c.4 1.3.6 2.6.6 3.9 0 1.5-.3 2.9-.8 4.3l-.8 2c0 .2-.2.3-.4.3h-4.5c-.3 0-.5-.2-.5-.5V10H4.7c-1.8 1.2-3 3-3.4 5.1l-.2.9z"
                                        />
                                        <path
                                            fill="currentColor"
                                            d="M12.5 10h-6C5.7 10 5 9.3 5 8.5S5.7 7 6.5 7h6c.8 0 1.5.7 1.5 1.5s-.7 1.5-1.5 1.5zm-6-2c-.3 0-.5.2-.5.5s.2.5.5.5h6c.3 0 .5-.2.5-.5s-.2-.5-.5-.5h-6zM17.5 3c-.8 0-1.5-.7-1.5-1.5S16.7 0 17.5 0 19 .7 19 1.5 18.3 3 17.5 3zm0-2c-.3 0-.5.2-.5.5s.2.5.5.5.5-.2.5-.5-.2-.5-.5-.5z"
                                        />
                                        <path
                                            fill="currentColor"
                                            d="M18.5 4c-.2 0-.4-.1-.4-.3l-.5-1.1c-.1-.2 0-.5.2-.7.2-.1.5 0 .7.2l.5 1.1c.1.2 0 .5-.2.7-.1.1-.2.1-.3.1zM23 18.5c-1.4 0-2.5-1.1-2.5-2.5s1.1-2.5 2.5-2.5 2.5 1.1 2.5 2.5-1.1 2.5-2.5 2.5zm0-4c-.8 0-1.5.7-1.5 1.5s.7 1.5 1.5 1.5 1.5-.7 1.5-1.5-.7-1.5-1.5-1.5zM25 12.6c-.1 0-.3-.1-.4-.2-.5-.6-1.2-1-2-1.3-.6-.1-1.1-.1-1.1-.1-.3 0-.5-.2-.5-.5s.2-.5.5-.5c.1 0 2.3-.1 3.9 1.8.2.2.2.5-.1.7-.1 0-.2.1-.3.1zM11.5 15c-.3 0-.5-.2-.5-.5 0-1.4-1.1-2.5-2.5-2.5H6.7c-.7 0-1.3.3-1.8.7l-2.1 2.1c-.2.2-.5.2-.7 0-.2-.2-.2-.5 0-.7L4.3 12c.7-.7 1.5-1 2.5-1h1.8c1.9 0 3.5 1.6 3.5 3.5-.1.3-.3.5-.6.5zM6 18.5c-1.1 0-2.1-.8-2.4-1.9-.1-.3.1-.5.4-.6.3-.1.5.1.6.4.1.6.7 1.1 1.4 1.1s1.3-.5 1.4-1.1c.1-.3.3-.4.6-.4.3.1.4.3.4.6-.3 1.1-1.3 1.9-2.4 1.9z"
                                        />
                                    </svg>
                                    {cart.length > 0 &&

                                        <div
                                            className="group-hover:text-white absolute -top-[10px] -left-[10px] text-xs flex items-center justify-center w-5 h-5 bg-primary rounded-full"
                                        >
                                            {totalQuantity}
                                        </div>
                                    }
                                    cart
                                </div>
                            </button>
                        </li>
                    </ul>
                </div>
                {/* <!--end responsive navigation--> */}
                <div className="flex items-center mx-3 md:mx-0 gap-2">
                    {!loggedUser && (
                        <button
                            type="button"
                            className="bg-primary text-white px-3 py-1 rounded  uppercase cursor-pointer transition-all duration-300 hover:bg-primary/70 "
                            onClick={toggleLoginModal}
                        >
                            Accedi
                        </button>
                    )}

                    {loggedUser && (
                        <ul className={loggedUser ? "" : "hidden"}>
                            <li className="text-primary uppercase hover:text-primary/70 p-2 underline cursor-pointer relative">
                                <button onClick={() => setLogoutMenuOpen(!isLogoutMenuOpen)}>
                                    {loggedUser.firstName}
                                </button>

                                <div
                                    className={`w-[180px] bg-black/60 px-5 py-3 rounded-lg z-50 absolute top-10 lg:-left-2 -left-[100px] transition-all duration-300 ${isLogoutMenuOpen ? "opacity-100 visible" : "opacity-0 hidden"}`}
                                >
                                    <ul className="flex flex-col gap-3">
                                        <li>
                                            <button onClick={handleUserLogout} className="w-full bg-primary text-white px-3 py-2 uppercase cursor-pointer transition-all duration-300 hover:bg-primary/70">
                                                Logout
                                            </button>
                                        </li>
                                        {
                                            loggedUser.role.includes('admin') && (

                                                <li
                                                    className="w-full"
                                                >
                                                    <a
                                                        className="bg-primary w-full block text-white px-3 py-2 text-center uppercase cursor-pointer transition-all duration-300 hover:bg-primary/70"
                                                        href="http://localhost/admin/pizzas"
                                                        target="_blank"
                                                    >
                                                        Area Admin
                                                    </a>
                                                </li>
                                            )
                                        }
                                    </ul>
                                </div>
                            </li>
                        </ul>
                    )}

                    <button
                        type="button"
                        className="inline-flex items-center p-2 w-10 h-10 justify-center   rounded-lg md:hidden  focus:outline-none focus:ring-2  text-gray-400 hover:bg-gray-700 focus:ring-gray-600"
                        onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        <span className="sr-only">Open main menu</span>
                        <svg
                            className="w-5 h-5"
                            aria-hidden="false"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 17 14"
                        >
                            <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M1 1h15M1 7h15M1 13h15"
                            />
                        </svg>
                    </button>
                </div>
                {/* <!--end buttons --> */}
            </div>
        </nav >
    );
};