import { Flex } from "@chakra-ui/react";
import { globalColors } from "@/theme/theme";
import { ReactNode } from "react";

interface InputPrimaryPanelInterface {
    w?: string;
    children: ReactNode;
}

export function InputPrimaryPanel({ w, children }: InputPrimaryPanelInterface) {
    const { backgroundPrimary, borderSecondary } = globalColors;

    return (
        <Flex
            p={"1.1rem 1.3rem"}
            alignItems={"center"}
            gap={"1rem"}
            w={w || "25rem"}
            border={`1px solid ${borderSecondary}`}
            borderRadius={"0.8rem"}
            backgroundColor={backgroundPrimary}
            h={"3.7rem"}
        >
            {children}
        </Flex>
    );
}
