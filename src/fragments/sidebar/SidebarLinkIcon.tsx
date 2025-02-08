import { Image } from "@chakra-ui/react";

interface SidebarLinkIconInterface {
    imagePath: string;
}
export function SidebarLinkIcon({ imagePath }: SidebarLinkIconInterface) {
    return (
        <Image
            src={`/public${imagePath}.svg`}
            objectFit={"contain"}
            h={"1.7rem"}
        />
    );
}
