import { ReactNode } from "react";
import { BaseBrandTitle } from "./BaseBrandTitle";

interface BrandSectionTitleProps {
    children?: ReactNode;
    marginTop?: string;
}

export function BrandSectionTitle({
    children,
    marginTop,
}: BrandSectionTitleProps) {
    return (
        <BaseBrandTitle
            fontSize="2rem"
            borderThickness="0.4rem"
            marginTop={marginTop}
        >
            {children}
        </BaseBrandTitle>
    );
}
