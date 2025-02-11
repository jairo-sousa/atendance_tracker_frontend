import { Fieldset } from "@chakra-ui/react";
import { ReactNode } from "react";

interface FieldsetRootProps {
    children?: ReactNode;
}

export function FieldsetRoot({ children }: FieldsetRootProps) {
    return (
        <Fieldset.Root w={"100%"} h={"fit-content"} gap={"3rem"}>
            {children}
        </Fieldset.Root>
    );
}
