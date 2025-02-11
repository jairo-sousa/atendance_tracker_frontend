import { Flex } from "@chakra-ui/react";
import { ReactNode } from "react";

interface LinksContainerPanelProps {
    children?: ReactNode;
}

export function LinksContainer({ children }: LinksContainerPanelProps) {
    return (
        <Flex
            as={"ul"}
            direction={"column"}
            align={"center"}
            h={"100%"}
            w={"100%"}
            gap={"1.6rem"}
        >
            {children}
        </Flex>
    );
}
