import { BrandSectionTitle } from "./structure/BrandSectionTitle";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { TertiarySidebarPanel } from "./structure/TertiarySidebarPanel";
import { SidebarHeader } from "@/fragments/sidebar/SidebarHeader";
import { LinksContainer } from "@/fragments/sidebar/LinksContainer";
import { LogoutButton } from "@/fragments/sidebar/LogoutButton";
import { SidebarLinkList } from "@/fragments/sidebar/SidebarLinkList";
import { Toaster } from "./ui/toaster";
import { useLocation } from "react-router";

export function SideBar() {
    const [hasSessionToken, setHasSessionToken] = useState<boolean>(false);
    const router = useLocation();

    useEffect(() => {
        setHasSessionToken(
            Cookies.get("sessionToken")?.startsWith("Bearer ") == true
        );
    }, [router]);

    if (hasSessionToken == false) return;

    return (
        <TertiarySidebarPanel>
            <Toaster />
            <BrandSectionTitle>REGISTRO DE PONTO</BrandSectionTitle>

            <SidebarHeader />

            <LinksContainer>
                <SidebarLinkList />
            </LinksContainer>

            <LogoutButton />
        </TertiarySidebarPanel>
    );
}
