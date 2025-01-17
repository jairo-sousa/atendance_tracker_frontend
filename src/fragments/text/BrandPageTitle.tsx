import { ReactNode } from "react";
import { BaseBrandTitle } from "./BaseBrandTitle";

interface BrandPageTitleProps {
    children?: ReactNode;
}

export function BrandPageTitle({ children }: BrandPageTitleProps) {
    return (
        <BaseBrandTitle fontSize="3.2rem" borderThickness="0.6rem">
            {children}
        </BaseBrandTitle>
    );
}
