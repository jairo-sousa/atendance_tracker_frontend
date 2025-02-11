import { Text } from "@chakra-ui/react";
import { SidebarLinkIcon } from "./SidebarLinkIcon";
import { PrimaryBaseButton } from "@/fragments/form/PrimaryBaseButton";

import Cookies from "js-cookie";
import { ApiService } from "@/services/ApiService";
import { useNavigate } from "react-router";

export function LogoutButton() {
    const apiService = new ApiService();
    const navigate = useNavigate();

    const handleLogout = async () => {
        const sessionToken = Cookies.get("sessionToken");
        if (!sessionToken) return;

        await apiService.logout(sessionToken, () => {
            Cookies.remove("sessionToken");
            navigate("/check-in");
        });
    };

    return (
        <PrimaryBaseButton onClick={handleLogout}>
            <Text>Sair</Text>
            <SidebarLinkIcon imagePath="/logout" />
        </PrimaryBaseButton>
    );
}
