import { Flex } from "@chakra-ui/react";
import { ReactNode } from "react";
import { RouteGoBackButton } from "./RouteGoBackButton";

interface RouteNavigationInterface {
    children?: ReactNode;
}

export function RouteNavigation({ children }: RouteNavigationInterface) {
    return (
        <Flex
            w={"100%"}
            p={"1.8rem 3rem"}
            alignItems={"center"}
            justifyContent={"space-between"}
            backgroundColor={"white"}
        >
            <RouteGoBackButton />
            {children}
        </Flex>
    );
}
