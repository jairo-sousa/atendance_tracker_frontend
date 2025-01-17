import { Flex, Text } from "@chakra-ui/react";

interface PayrollDetailInterface {
    label: string;
    value: string | number | null;
    type: "currency" | "amount";
    fontSize?: string;
}
export function PayrollDetail({
    label,
    value,
    type,
    fontSize,
}: PayrollDetailInterface) {
    const formatValue = (value: string | number | null, type: string) => {
        if (type === "currency") return `R$ ${Number(value).toFixed(2)}`;
        if (type === "amount") return value;

        return value;
    };

    return (
        <Flex width={"40rem"} h={"4rem"} justify={"space-between"}>
            <Text fontSize={fontSize}>{label}</Text>
            <Text fontSize={fontSize}>{formatValue(value, type)}</Text>
        </Flex>
    );
}
