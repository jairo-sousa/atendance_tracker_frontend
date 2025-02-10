import { ReactNode } from "react";
import { Text } from "@chakra-ui/react";

interface DialogSubtitleProps {
    children?: ReactNode;
}

export function DialogSubtitle({ children }: DialogSubtitleProps) {
    return (
        <Text
            color={"var(--content-secondary)"}
            fontSize={"1.4rem"}
            fontWeight={400}
        >
            {children}
        </Text>
    );
}
