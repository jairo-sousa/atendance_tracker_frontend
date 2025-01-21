import { ReactNode } from "react";
import { Button } from "@chakra-ui/react";

interface BandButtonProps {
    children?: ReactNode;
    onClick: () => void;
}

export function BandButton({ children, onClick }: BandButtonProps) {
    return (
        <Button
            onClick={onClick}
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
