import { EmplloyeeField } from "@/routes/Employee";
import { Input } from "@chakra-ui/react";

interface InputCellInterface {
    inputvalue: string;
    customStyle?: React.CSSProperties;
    enabled?: boolean;
    onChange: Function;
    entityField: EmplloyeeField;
}

export function InputCell({
    inputvalue,
    entityField,
    customStyle,
    enabled,
    onChange,
}: InputCellInterface) {
    const { field, value } = entityField;

    return (
        <Input
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
            _disabled={{
                opacity: 1,
            }}
            onChange={(e) => {
                onChange(field, e.target.value);
            }}
        />
    );
}
