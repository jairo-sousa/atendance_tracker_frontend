import { Flex } from "@chakra-ui/react";
import { ReactNode } from "react";
import { SecondaryDivisor } from "./SecondaryDivisor";

interface RouteHeaderInterface {
    children?: ReactNode;
    gap?: string;
}

export function RouteHeader({ children, gap }: RouteHeaderInterface) {
    return (
        <>
            <Flex w={"100%"} p={"2rem 0"} gap={"2rem"}>
                {children}
            </Flex>
            <SecondaryDivisor />
        </>
    );
}
