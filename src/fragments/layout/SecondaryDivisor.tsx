import { globalColors } from "@/theme/theme";
import { Box } from "@chakra-ui/react";

interface SecondaryDivisorInterface {
    vertical?: boolean;
}

export function SecondaryDivisor({ vertical }: SecondaryDivisorInterface) {
    const { borderSecondary } = globalColors;

    return (
        <Box
            w={vertical ? "1px" : "100%"}
            h={vertical ? "100%" : "1px"}
            backgroundColor={borderSecondary}
        ></Box>
    );
}
