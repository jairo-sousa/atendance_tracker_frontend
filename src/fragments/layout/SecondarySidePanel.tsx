import { Flex } from "@chakra-ui/react";
import { ReactNode } from "react";

interface SecondarySidePanelProps {
    children?: ReactNode;
}

export function SecondarySidePanel({ children }: SecondarySidePanelProps) {
    return (
        <Flex
            direction={"column"}
            justify={"start"}
            align={"start"}
            gap={"2rem"}
            w={"73rem"}
            h={"100%"}
            p={"3rem 5.6rem 3rem 5rem"}
            backgroundColor={"var(--background-secondary)"}
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
