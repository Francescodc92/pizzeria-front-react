import { FooterComponent } from "@/components/footer/footer-component";
import { GoUpButtonComponent } from "@/components/go-up-button/go-up-button";
import { HeaderComponent } from "@/components/header/header-component";
import { useEffect, type ReactNode } from "react";
import { useLocation } from "react-router-dom";

export const Layout = ({ children }: { children: ReactNode }) => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" })
    }, [pathname]);

    return (
        <>
            <HeaderComponent />
            {children}
            <GoUpButtonComponent />
            <FooterComponent />
        </>
    )
}