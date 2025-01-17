import { Flex } from "@chakra-ui/react";
import { ReactNode } from "react";
import { SecondaryDivisor } from "./SecondaryDivisor";

interface RouteHeaderInterface {
    children?: ReactNode;
    gap?: string;
    justify?: string;
    noDivisor?: boolean;
}

export function RouteHeader({
    children,
    gap,
    justify,
    noDivisor,
}: RouteHeaderInterface) {
    return (
        <>
            <Flex
                w={"100%"}
                p={"2rem 0"}
                gap={gap || "1rem"}
                align={"center"}
                justify={justify}
            >
                {children}
            </Flex>
            {!noDivisor && <SecondaryDivisor />}
        </>
    );
}
