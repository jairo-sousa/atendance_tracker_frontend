import { Input } from "@chakra-ui/react";

interface LoginInputProps {
    placeholder?: string;
}

export function LoginInput({ placeholder }: LoginInputProps) {
    return (
        <Input
            borderRadius={"0.4rem"}
            p={"2rem"}
            fontSize={"1.4rem"}
            fontWeight={400}
            outlineWidth={0}
            border={"1px solid var(--border-secondary)"}
            color={"var(--content-secondary)"}
            placeholder={placeholder}
            _placeholder={{
                color: "var(--content-tertiary)",
            }}
        />
    );
}
