import { globalColors } from "@/theme/theme";
import { Link } from "@chakra-ui/react";

interface SidebarLinkinterface {
    children?: React.ReactNode;
    active: boolean;
    path: string;
}

export function SidebarLink({ children, active, path }: SidebarLinkinterface) {
    const { backgroundBrand } = globalColors;

    return (
        <Link
            href={path}
            display={"flex"}
            justifyContent={"start"}
            borderRadius={"0.4rem"}
            gap={"1.5rem"}
            p={"1.3rem 1.2rem"}
            cursor={"pointer"}
            textDecoration={"none"}
            outline={"none"}
            backgroundColor={active ? backgroundBrand : ""}
        >
            {children}
        </Link>
    );
}
