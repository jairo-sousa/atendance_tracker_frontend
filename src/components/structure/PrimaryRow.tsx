import { Flex } from "@chakra-ui/react";
import { ReactNode } from "react";

interface PrimaryRowInterface {
    children?: ReactNode;
    transparent?: boolean;
}

export function PrimaryRow({ children, transparent }: PrimaryRowInterface) {
    const backgroundColor = !transparent
        ? "var(--background-primary)"
        : "transparent";
    return (
        <Flex
            w={"100%"}
            minH={"5.1rem"}
            p={"1.7rem 1.3rem"}
            backgroundColor={backgroundColor}
            gap={"2rem"}
        >
            {children}
        </Flex>
    );
}
