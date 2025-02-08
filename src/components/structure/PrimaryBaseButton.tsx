import { ReactNode } from "react";
import { Button } from "@chakra-ui/react";
import { globalColors } from "@/theme/theme";

interface PrimaryBaseButtonInterface {
    children?: ReactNode;
    onClick: () => void;
}

export function PrimaryBaseButton({
    children,
    onClick,
}: PrimaryBaseButtonInterface) {
    const { contentPrimary } = globalColors;
    return (
        <Button
            w={"100%"}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"start"}
            borderRadius={"0.4rem"}
            gap={"2.3rem"}
            outline={"none"}
            fontWeight={500}
            fontSize={"1.6rem"}
            backgroundColor={"transparent"}
            color={contentPrimary}
            onClick={onClick}
        >
            {children}
        </Button>
    );
}
