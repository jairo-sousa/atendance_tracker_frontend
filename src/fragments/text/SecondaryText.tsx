import { globalColors } from "@/theme/theme";
import { Text } from "@chakra-ui/react";

interface SecondaryTextinterface {
    children?: React.ReactNode;
}

export function SecondaryText({ children }: SecondaryTextinterface) {
    const { contentSecondary } = globalColors;

    return (
        <Text fontSize={"1.6rem"} fontWeight={500} color={contentSecondary}>
            {children}
        </Text>
    );
}
