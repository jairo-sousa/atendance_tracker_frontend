import { EmplloyeeField } from "@/routes/Employee";
import { Input } from "@chakra-ui/react";
import { useEffect, useRef } from "react";

interface InputCellInterface {
    inputvalue: string;
    customStyle?: React.CSSProperties;
    enabled?: boolean;
    onChange: Function;
    entityField: EmplloyeeField;
    autofocus?: boolean;
}

export function InputCell({
    inputvalue,
    entityField,
    customStyle,
    enabled,
    onChange,
    autofocus,
}: InputCellInterface) {
    const { field, value } = entityField;

    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (autofocus && enabled && inputRef.current) {
            inputRef.current.focus();
        }
    }, [autofocus, enabled]);

    return (
        <Input
            ref={inputRef}
            flex={1}
            p={0}
            w={"100%"}
            fontSize={"1.4rem"}
            textAlign={"start"}
            fontWeight={500}
            style={customStyle}
            border={"none"}
            disabled={!enabled || false}
            placeholder={enabled ? `Digite ${value}` : ""}
            value={inputvalue}
            autoFocus={autofocus}
            _disabled={{
                opacity: 1,
                cursor: "default",
            }}
            onChange={(e) => {
                onChange(field, e.target.value);
            }}
        />
    );
}
