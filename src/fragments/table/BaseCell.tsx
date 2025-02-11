import { Text } from "@chakra-ui/react";
import { ReactNode } from "react";

interface BaseCellInterface {
    children?: ReactNode;
    customStyle?: React.CSSProperties;
}

export function BaseCell({ children, customStyle }: BaseCellInterface) {
    return (
        <Text
            flex={1}
            fontSize={"1.4rem"}
            textAlign={"start"}
            fontWeight={500}
            style={customStyle}
        >
            {children}
        </Text>
    );
}
