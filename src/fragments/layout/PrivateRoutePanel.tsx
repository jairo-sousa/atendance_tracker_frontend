import { ReactNode } from "react";
import { Flex } from "@chakra-ui/react";

interface PrivateRoutePainelInterface {
    children?: ReactNode;
}

export function PrivateRoutePainel({ children }: PrivateRoutePainelInterface) {
    return (
        <Flex
            direction={"column"}
            w={"100%"}
            h={"100vh"}
            overflowY={"scroll"}
            scrollbarWidth={"none"}
            css={{
                "&::-webkit-scrollbar": {
                    display: "none",
                },
                "&": {
                    msOverflowStyle: "none",
                },
            }}
        >
            {children}
        </Flex>
    );
}
