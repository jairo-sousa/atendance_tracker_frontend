import { ReactNode } from "react";
import { BaseBrandTitle } from "./BaseBrandTitle";

interface BrandSectionTitleProps {
    children?: ReactNode;
    firstChild?: boolean;
}

export function BrandSectionTitle({
    children,
    firstChild,
}: BrandSectionTitleProps) {
    return (
        <BaseBrandTitle
            fontSize="2rem"
            borderThickness="0.4rem"
            marginTop={!firstChild ? "5rem" : ""}
        >
            {children}
        </BaseBrandTitle>
    );
}
