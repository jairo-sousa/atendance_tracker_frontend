import { ReactNode } from "react";
import { Button } from "@chakra-ui/react";

interface BandButtonProps {
    children?: ReactNode;
}

export function BandButton({ children }: BandButtonProps) {
    return (
        <Button
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
