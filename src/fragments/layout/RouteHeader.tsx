import { Flex } from "@chakra-ui/react";
import { ReactNode } from "react";
import { RouteGoBackButton } from "./RouteGoBackButton";

interface RouteHeaderInterface {
    children?: ReactNode;
}

export function RouteHeader({ children }: RouteHeaderInterface) {
    return (
        <Flex
            w={"100%"}
            p={"1.2rem 3rem"}
            h={"6rem"}
            alignItems={"center"}
            justifyContent={"space-between"}
            backgroundColor={"white"}
        >
            <RouteGoBackButton />
            {children}
        </Flex>
    );
}
