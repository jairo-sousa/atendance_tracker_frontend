import { Flex } from "@chakra-ui/react";
import { ReactNode } from "react";

interface PrimaryRowInterface {
    children?: ReactNode;
    transparent?: boolean;
    p?: string;
}

export function PrimaryRow({ children, transparent, p }: PrimaryRowInterface) {
    const backgroundColor = !transparent
        ? "var(--background-primary)"
        : "transparent";
    return (
        <Flex
            w={"100%"}
            minH={"5.1rem"}
            p={p || "1.7rem 1.3rem"}
            backgroundColor={backgroundColor}
            gap={"2rem"}
        >
            {children}
        </Flex>
    );
}
