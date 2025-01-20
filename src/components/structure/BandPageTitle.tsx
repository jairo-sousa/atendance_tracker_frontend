import { ReactNode } from "react";
import { Text } from "@chakra-ui/react";

interface BandPageTitleProps {
    children?: ReactNode;
}

export function BandPageTitle({ children }: BandPageTitleProps) {
    return (
        <Text
            as={"h1"}
            pl={"1.2rem"}
            fontSize={"3.2rem"}
            borderLeft={"0.6rem solid #f8d442"}
        >
            {children}
        </Text>
    );
}
