import { ReactNode } from "react";
import { Flex } from "@chakra-ui/react";

interface BandGratientPanelProps {
    children?: ReactNode;
}

export function BandGratientPanel({ children }: BandGratientPanelProps) {
    return (
        <Flex
            w={"100%"}
            h={"100%"}
            justify={"center"}
            align={"center"}
            background={
                "linear-gradient(71.17deg, #feaf00 19.35%, #f8d442 90.12%)"
            }
        >
            {children}
        </Flex>
    );
}
