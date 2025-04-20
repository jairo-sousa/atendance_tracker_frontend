import { BrandSectionTitle } from "../../fragments/text/BrandSectionTitle";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { TertiarySidebarPanel } from "../../fragments/layout/TertiarySidebarPanel";
import { Toaster } from "../ui/toaster";
import { useLocation } from "react-router";
import { SidebarHeader } from "./SidebarHeader";
import { LinksContainer } from "./LinksContainer";
import { SidebarLinkList } from "./SidebarLinkList";
import { LogoutButton } from "./LogoutButton";

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

    if (!hasSessionToken || router.pathname === "/") return;

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
