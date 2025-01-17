import { ReactNode } from "react";
import { Flex } from "@chakra-ui/react";
import { globalColors } from "@/theme/theme";

const { backgroundTertiary } = globalColors;

interface TertiarySidebarPanelProps {
    children?: ReactNode;
}

export function TertiarySidebarPanel({ children }: TertiarySidebarPanelProps) {
    return (
        <Flex
            direction={"column"}
            minW={"fit-content"}
            h={"100%"}
            p={"1.8rem 2.5rem 3rem 2.5rem"}
            justify={"start"}
            align={"center"}
            gap={"5rem"}
            background={backgroundTertiary}
        >
            {children}
        </Flex>
    );
}
