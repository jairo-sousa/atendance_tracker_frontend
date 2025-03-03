import { Flex, Input } from "@chakra-ui/react";
import { globalColors } from "@/theme/theme";

interface DatePickerInterface {
    onchange: Function;
    value: string;
}

export function DatePicker({ onchange, value }: DatePickerInterface) {
    const { backgroundPrimary, contentSecondary, borderSecondary } =
        globalColors;

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        onchange(e.target.value);
    };

    return (
        <Flex
            p={"1.1rem 1.3rem"}
            alignItems={"center"}
            gap={"1rem"}
            w={"25rem"}
            border={`1px solid ${borderSecondary}`}
            borderRadius={"0.8rem"}
            backgroundColor={backgroundPrimary}
            h={"3.7rem"}
        >
            <Input
                type="date"
                border={"none"}
                outline={"none"}
                flex={1}
                color={contentSecondary}
                onChange={handleChange}
                value={value}
            />
        </Flex>
    );
}
