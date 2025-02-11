import { ReactNode } from "react";
import { Field } from "../../components/ui/field";

interface LabeledFieldProps {
    children?: ReactNode;
    label?: string;
}

export function LabeledField({ children, label }: LabeledFieldProps) {
    return (
        <Field
            label={label}
            fontSize={"1.4rem"}
            fontWeight={400}
            color={"var(--content-primary)"}
            gap={"1rem"}
        >
            {children}
        </Field>
    );
}
