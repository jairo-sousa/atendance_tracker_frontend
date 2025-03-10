import { Input } from "@chakra-ui/react";
import { globalColors } from "@/theme/theme";
import { InputPrimaryPanel } from "./InputPrimaryPanel";

interface InputPrimaryInterface {
    onchange: Function;
    value: string | number;
    type: string;
    w?: string;
}

export function InputPrimary({
    onchange,
    value,
    type,
    w,
}: InputPrimaryInterface) {
    const { contentSecondary } = globalColors;

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        onchange(e.target.value);
    };

    return (
        <InputPrimaryPanel w={w}>
            <Input
                type={type}
                border={"none"}
                outline={"none"}
                flex={1}
                color={contentSecondary}
                onChange={handleChange}
                value={value}
            />
        </InputPrimaryPanel>
    );
}
