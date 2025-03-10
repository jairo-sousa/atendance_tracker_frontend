import { Box } from "@chakra-ui/react";
import { globalColors } from "@/theme/theme";
import { ElementType, forwardRef, ReactNode } from "react";

interface InputPrimaryPanelInterface {
    children?: ReactNode;
    w?: string;
    as?: ElementType | undefined;
    ref?: React.ForwardedRef<unknown>;
    onChange?: Function;
}

export const InputPrimaryPanel = forwardRef(
    ({ w, children, as, onChange }: InputPrimaryPanelInterface, ref) => {
        const { backgroundPrimary, borderSecondary } = globalColors;

        return (
            <Box
                as={as}
                ref={ref}
                display={"flex"}
                p={"1.1rem 1.3rem"}
                alignItems={"center"}
                gap={"1rem"}
                borderRadius={"0.8rem"}
                h={"4.2rem"}
                fontWeight={400}
                fontFamily={"Montserrat"}
                fontSize={"1.4rem"}
                w={w || "25rem"}
                border={`1px solid ${borderSecondary}`}
                backgroundColor={backgroundPrimary}
                onChange={() => onChange && onChange()}
            >
                {children}
            </Box>
        );
    }
);
