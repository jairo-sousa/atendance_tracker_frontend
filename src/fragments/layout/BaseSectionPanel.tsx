import { ReactNode } from "react";
import { Flex } from "@chakra-ui/react";
import { globalColors } from "@/theme/theme";

interface BaseSectionPanelInterface {
    children?: ReactNode;
    gap?: string;
}

export function BaseSectionPanel({ children, gap }: BaseSectionPanelInterface) {
    const { backgroundSecondary } = globalColors;

    return (
        <Flex
            direction={"column"}
            w={"100%"}
            minH={"100%"}
            p={"0 3rem"}
            justifyContent={"start"}
            align={"start"}
            backgroundColor={backgroundSecondary}
            gap={gap || ""}
        >
            {children}
        </Flex>
    );
}
