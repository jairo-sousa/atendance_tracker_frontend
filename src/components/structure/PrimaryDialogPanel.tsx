import { ReactNode } from "react";
import { Flex } from "@chakra-ui/react";

interface PrimaryDialogPanelProps {
    children?: ReactNode;
}

export function PrimaryDialogPanel({ children }: PrimaryDialogPanelProps) {
    return (
        <Flex
            direction={"column"}
            justify={"center"}
            align={"center"}
            w={"47.5rem"}
            h={"fit-content"}
            gap={"3rem"}
            p={"4.4rem 3rem"}
            borderRadius={"2rem"}
            backgroundColor={"var(--background-primary)"}
            boxShadow={"2px 5px 10px rgba(0, 0, 0, 0.1)"}
        >
            {children}
        </Flex>
    );
}
