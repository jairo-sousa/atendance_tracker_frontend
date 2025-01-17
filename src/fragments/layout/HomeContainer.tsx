import { Flex } from "@chakra-ui/react";
import { ReactNode } from "react";

interface HomeContainerInterface {
    children?: ReactNode;
    justifyContent?: string;
}

export function HomeContainer({
    children,
    justifyContent,
}: HomeContainerInterface) {
    return (
        <Flex
            w={"100%"}
            h={"100%"}
            justifyContent={justifyContent}
            paddingTop={"2rem"}
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
