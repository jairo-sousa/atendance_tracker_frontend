import { ReactNode } from "react";
import { Text } from "@chakra-ui/react";
import { globalColors } from "@/theme/theme";

interface PrimaryRouteTitleProps {
    children?: ReactNode;
}

export function PrimaryRouteTitle({ children }: PrimaryRouteTitleProps) {
    const { contentPrimary } = globalColors;
    return (
        <Text
            as={"h2"}
            color={contentPrimary}
            fontSize={"2.2rem"}
            fontWeight={700}
            flex={1}
        >
            {children}
        </Text>
    );
}
