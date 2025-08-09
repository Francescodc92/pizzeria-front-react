import { CartModalComponent } from "@/components/cart/cart-modal-component";
import { GoUpButtonComponent } from "@/components/go-up-button/go-up-button";
import { Toaster } from "@/components/ui/sonner";
import { useGetUserInfo } from "@/http/use-auth-user";
import { FooterComponent } from "@/pages/layout/parts/footer/footer-component";
import { HeaderComponent } from "@/pages/layout/parts/header/header-component";
import { useEffect, type ReactNode } from "react";
import { useLocation } from "react-router-dom";

export const Layout = ({ children }: { children: ReactNode }) => {
    const { pathname } = useLocation();
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { data } = useGetUserInfo();

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" })
    }, [pathname]);

    return (
        <>
            <HeaderComponent />
            {children}
            <Toaster />
            <GoUpButtonComponent />
            <CartModalComponent />
            <FooterComponent />
        </>
    )
}