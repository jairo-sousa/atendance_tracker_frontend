import { ReactNode } from "react";
import { BaseCell } from "./BaseCell";

interface QuaternaryHeaderCellInterface {
    children?: ReactNode;
    customStyle?: React.CSSProperties;
}

export function QuaternaryHeaderCell({
    children,
    customStyle,
}: QuaternaryHeaderCellInterface) {
    const style: React.CSSProperties = {
        color: "var(--content-quaternary)",
        fontWeight: 600,
        ...customStyle,
    };

    return <BaseCell customStyle={style}>{children}</BaseCell>;
}
