import { Fieldset } from "@chakra-ui/react";
import { ReactNode } from "react";

interface FieldsetContainerProps {
    children?: ReactNode;
}

export function FieldsetContainer({ children }: FieldsetContainerProps) {
    return <Fieldset.Content>{children}</Fieldset.Content>;
}
