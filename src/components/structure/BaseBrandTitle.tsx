import { ReactNode } from "react";
import { Text } from "@chakra-ui/react";

interface BaseBrandTitleProps {
    children?: ReactNode;
    fontSize?: string;
    borderThickness?: string;
    marginTop?: string;
    customStyle?: React.CSSProperties;
}

export function BaseBrandTitle({
    children,
    fontSize,
    borderThickness,
    customStyle,
    marginTop,
}: BaseBrandTitleProps) {
    return (
        <Text
            as={"h1"}
            pl={"1.2rem"}
            fontSize={fontSize || "2rem"}
            borderLeft={`${borderThickness || "0.4rem"} solid #f8d442`}
            mt={marginTop}
            style={customStyle}
        >
            {children}
        </Text>
    );
}
