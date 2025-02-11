import { BrandSectionTitle } from "../../fragments/text/BrandSectionTitle";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { TertiarySidebarPanel } from "../../fragments/layout/TertiarySidebarPanel";
import { SidebarHeader } from "@/components/sidebar/SidebarHeader";
import { LinksContainer } from "@/components/sidebar/LinksContainer";
import { LogoutButton } from "@/components/sidebar/LogoutButton";
import { SidebarLinkList } from "@/components/sidebar/SidebarLinkList";
import { Toaster } from "../ui/toaster";
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
