import { globalColors } from "@/theme/theme";
import { Text } from "@chakra-ui/react";

interface PrimarySidebarSubtitleinterface {
    children?: React.ReactNode;
}

export function PrimarySidebarSubtitle({
    children,
}: PrimarySidebarSubtitleinterface) {
    const { contentPrimary } = globalColors;

    return (
        <Text fontSize={"1.7rem"} fontWeight={700} color={contentPrimary}>
            {children}
        </Text>
    );
}
