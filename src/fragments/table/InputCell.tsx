import { EntityField } from "@/interfaces/EntityInterface";
import { Input } from "@chakra-ui/react";
import { useEffect, useRef } from "react";

interface InputCellInterface {
    inputvalue: string;
    customStyle?: React.CSSProperties;
    enabled?: boolean;
    onChange: Function;
    entityField: EntityField;
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
    const { field, value, type } = entityField;

    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (autofocus && enabled && inputRef.current) {
            inputRef.current.focus();
        }
    }, [autofocus, enabled]);

    let typeToUse = "text";

    if (type === "datetime") typeToUse = "time";

    return (
        <Input
            ref={inputRef}
            flex={1}
            p={"0 0 0 1rem"}
            w={"100%"}
            fontSize={"1.4rem"}
            textAlign={"start"}
            fontWeight={500}
            style={customStyle}
            border={enabled ? "1px solid black" : "none"}
            disabled={!enabled || false}
            placeholder={enabled ? `Digite ${value}` : ""}
            value={inputvalue}
            type={typeToUse}
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
