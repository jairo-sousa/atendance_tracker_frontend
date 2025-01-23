import { ReactNode } from "react";
import { Text } from "@chakra-ui/react";

interface BaseBrandTitleProps {
    children?: ReactNode;
    fontSize?: string;
    borderThickness?: string;
    customStyle?: React.CSSProperties;
}

export function BaseBrandTitle({
    children,
    fontSize,
    borderThickness,
    customStyle,
}: BaseBrandTitleProps) {
    return (
        <Text
            as={"h1"}
            pl={"1.2rem"}
            fontSize={fontSize || "2rem"}
            borderLeft={`${borderThickness || "0.4rem"} solid #f8d442`}
            style={customStyle}
        >
            {children}
        </Text>
    );
}
