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

    // TYPE
    let typeToUse = "text";
    if (type === "datetime") typeToUse = "time";
    if (type === "date") typeToUse = "date";

    // BLOCK + CURSOR
    const isNestedField = field.includes(".");
    const isNullDatetime = type === "datetime" && !inputvalue;

    const isBlock = (isNestedField || isNullDatetime) && enabled;
    const isDisabled = !enabled || isNestedField || isNullDatetime;

    // COMPUTED STYLES
    const borderStyle = enabled ? "1px solid black" : "none";
    const placeholderText = enabled ? `Digite ${value}` : "";
    const disabledCursor = isBlock ? "disabled" : "default";

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
            border={borderStyle}
            disabled={isDisabled}
            placeholder={placeholderText}
            value={inputvalue}
            type={typeToUse}
            autoFocus={autofocus}
            _disabled={{
                opacity: 1,
                cursor: disabledCursor,
            }}
            onChange={(e) => {
                onChange(field, e.target.value);
            }}
        />
    );
}
