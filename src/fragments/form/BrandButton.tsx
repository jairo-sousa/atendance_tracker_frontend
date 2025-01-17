import { ReactNode } from "react";
import { Button } from "@chakra-ui/react";

interface BrandButtonProps {
    children?: ReactNode;
    onClick: () => void;
    disabled: boolean;
}

export function BrandButton({ children, onClick, disabled }: BrandButtonProps) {
    return (
        <Button
            onClick={onClick}
            disabled={disabled}
            type="submit"
            borderRadius={"0.4rem"}
            p={"2rem"}
            m={0}
            fontSize={"1.4rem"}
            fontWeight={400}
            backgroundColor={"var(--content-brand)"}
        >
            {children}
        </Button>
    );
}
