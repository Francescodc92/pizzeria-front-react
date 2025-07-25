import { FooterComponent } from "@/components/footer/footer-component";
import { GoUpButtonComponent } from "@/components/go-up-button/go-up-button";
import { HeaderComponent } from "@/components/header/header-component";
import type { ReactNode } from "react";

export const Layout = ({ children }: { children: ReactNode }) => {
    return (
        <>
            <HeaderComponent />
            {children}
            <GoUpButtonComponent />
            <FooterComponent />
        </>
    )
}