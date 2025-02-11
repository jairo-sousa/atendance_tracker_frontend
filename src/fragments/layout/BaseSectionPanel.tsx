import { ReactNode } from "react";
import { Flex } from "@chakra-ui/react";
import { globalColors } from "@/theme/theme";

interface BaseSectionPanelInterface {
    children?: ReactNode;
}

export function BaseSectionPanel({ children }: BaseSectionPanelInterface) {
    const { backgroundSecondary } = globalColors;

    return (
        <Flex
            direction={"column"}
            w={"100%"}
            h={"100%"}
            justifyContent={"start"}
            align={"start"}
            backgroundColor={backgroundSecondary}
        >
            {children}
        </Flex>
    );
}
