import { Text } from "@chakra-ui/react";
import { SidebarLinkIcon } from "./SidebarLinkIcon";
import { PrimaryBaseButton } from "@/components/structure/PrimaryBaseButton";

export function LogoutButton() {
    const handleLogout = () => {
        console.log("Logout");
    };

    return (
        <PrimaryBaseButton onClick={handleLogout}>
            <Text>Sair</Text>
            <SidebarLinkIcon imagePath="/logout" />
        </PrimaryBaseButton>
    );
}
