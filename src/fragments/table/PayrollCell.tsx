import { Text } from "@chakra-ui/react";
import { ReactNode } from "react";

interface PayrollCellInterface {
    children: ReactNode;
}

export function PayrollCell({ children }: PayrollCellInterface) {
    return (
        <Text
            flex={1}
            p={"0 0 0 1rem"}
            w={"100%"}
            fontSize={"1.4rem"}
            textAlign={"start"}
            fontWeight={400}
            fontFamily={"Montserrat"}
        >
            {children}
        </Text>
    );
}
