import { Flex } from "@chakra-ui/react";
import { ReactNode } from "react";

interface PrimaryRowInterface {
    children?: ReactNode;
    transparent?: boolean;
    p?: string;
    gap?: string;
}

export function PrimaryRow({
    children,
    transparent,
    p,
    gap,
}: PrimaryRowInterface) {
    const backgroundColor = !transparent
        ? "var(--background-primary)"
        : "transparent";
    return (
        <Flex
            w={"100%"}
            minH={"fit-content"}
            p={p || "1.7rem 1.3rem"}
            backgroundColor={backgroundColor}
            gap={gap || "2rem"}
            alignItems={"center"}
        >
            {children}
        </Flex>
    );
}
