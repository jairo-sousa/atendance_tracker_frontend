import { ReactNode } from "react";
import { BaseCell } from "./BaseCell";

interface QuaternaryHeaderCellInterface {
    children?: ReactNode;
}

export function QuaternaryHeaderCell({
    children,
}: QuaternaryHeaderCellInterface) {
    const style: React.CSSProperties = {
        color: "var(--content-quaternary)",
        fontWeight: 600,
    };
    return <BaseCell customStyle={style}>{children}</BaseCell>;
}
