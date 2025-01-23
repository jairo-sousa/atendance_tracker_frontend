import { ReactNode } from "react";
import { BaseBrandTitle } from "./BaseBrandTitle";

interface BrandSectionTitleProps {
    children?: ReactNode;
    customStyle?: React.CSSProperties;
}

export function BrandSectionTitle({
    children,
    customStyle,
}: BrandSectionTitleProps) {
    return (
        <BaseBrandTitle
            fontSize="2rem"
            borderThickness="0.4rem"
            customStyle={customStyle}
        >
            {children}
        </BaseBrandTitle>
    );
}
