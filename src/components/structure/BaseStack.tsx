import { Stack } from "@chakra-ui/react";
import { ReactNode } from "react";

interface BaseStackInterface {
    children?: ReactNode;
    gap?: string;
}

export function BaseStack({ children, gap }: BaseStackInterface) {
    return (
        <Stack w={"100%"} gap={gap || 0}>
            {children}
        </Stack>
    );
}
