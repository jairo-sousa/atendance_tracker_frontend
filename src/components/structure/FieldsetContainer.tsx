import { Fieldset, Flex } from "@chakra-ui/react";
import { ReactNode } from "react";

interface FieldsetContainerProps {
    children?: ReactNode;
}

export function FieldsetContainer({ children }: FieldsetContainerProps) {
    return (
        <Fieldset.Content>
            <Flex direction={"column"} gap={"2rem"}>
                {children}
            </Flex>
        </Fieldset.Content>
    );
}
