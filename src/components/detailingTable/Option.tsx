import { ReactNode } from "react";

interface OptionInterface {
    value: string | number | null;
    children: ReactNode;
}

export function Option({ value, children }: OptionInterface) {
    return (
        <option className="option" value={value ? value : ""}>
            {children}
        </option>
    );
}
