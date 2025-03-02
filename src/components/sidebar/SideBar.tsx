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

const checkHasSessionToken = () =>
    Cookies.get("sessionToken")?.startsWith("Bearer ") == true;

export function SideBar() {
    const [hasSessionToken, setHasSessionToken] = useState<boolean>(
        checkHasSessionToken()
    );

    const router = useLocation();
    useEffect(() => {
        setHasSessionToken(checkHasSessionToken());
    }, [router]);

    if (!hasSessionToken || router.pathname === "/check-in") return;

    return (
        <TertiarySidebarPanel>
            <Toaster />
            <BrandSectionTitle firstChild={true}>
                REGISTRO DE PONTO
            </BrandSectionTitle>

            <SidebarHeader />

            <LinksContainer>
                <SidebarLinkList />
            </LinksContainer>

            <LogoutButton />
        </TertiarySidebarPanel>
    );
}
