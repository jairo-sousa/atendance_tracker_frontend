import { Fieldset } from "@chakra-ui/react";
import { ReactNode } from "react";

interface FieldsetRootProps {
    children?: ReactNode;
    onEnter?: () => Promise<void>;
}

export function FieldsetRoot({ children, onEnter }: FieldsetRootProps) {
    return (
        <Fieldset.Root
            w={"100%"}
            h={"fit-content"}
            gap={"3rem"}
            onKeyDown={(event) => {
                const key = event.key;
                if (key === "Enter" && onEnter) onEnter();
            }}
        >
            {children}
        </Fieldset.Root>
    );
}
