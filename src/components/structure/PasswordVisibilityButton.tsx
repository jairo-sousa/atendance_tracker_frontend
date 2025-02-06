import { globalColors } from "@/theme/theme";
import { Button } from "@chakra-ui/react";
import { MouseEventHandler, ReactNode } from "react";

interface PasswordVisibilityButtonProps {
    children?: ReactNode;
    onClick: MouseEventHandler<HTMLButtonElement>;
}

export function PasswordVisibilityButton({
    children,
    onClick,
}: PasswordVisibilityButtonProps) {
    const { contentTertiary, contentSecondary } = globalColors;

    return (
        <Button
            position={"absolute"}
            fontWeight={600}
            fontSize={"1.6rem"}
            right={"2rem"}
            top={"50%"}
            backgroundColor={"transparent"}
            color={contentSecondary}
            _hover={{
                color: contentTertiary,
            }}
            onClick={onClick}
        >
            {children}
        </Button>
    );
}
