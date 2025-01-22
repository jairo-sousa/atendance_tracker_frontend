import { ReactNode } from "react";
import { Text } from "@chakra-ui/react";

interface BrandPageTitleProps {
    children?: ReactNode;
}

export function BrandPageTitle({ children }: BrandPageTitleProps) {
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
