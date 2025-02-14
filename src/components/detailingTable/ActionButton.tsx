import { Button } from "@chakra-ui/react";
import { SidebarLinkIcon } from "../sidebar/SidebarLinkIcon";

interface ActionButtonInterface {
    onClick: Function;
    id: string;
    imagePath: string;
}

export function ActionButton({
    onClick,
    id,
    imagePath,
}: ActionButtonInterface) {
    return (
        <Button
            backgroundColor={"transparent"}
            onClick={() => {
                onClick(id);
            }}
        >
            <SidebarLinkIcon imagePath={imagePath} />
        </Button>
    );
}
