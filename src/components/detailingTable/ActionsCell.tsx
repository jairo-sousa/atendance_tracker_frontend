import { Flex } from "@chakra-ui/react";
import { ReactNode } from "react";

interface ActionsCellInterface {
    children?: ReactNode;
}

export function ActionsCell({ children }: ActionsCellInterface) {
    return (
        <Flex gap={"2rem"} flex={1} justify={"end"}>
            {children}
        </Flex>
    );
}
