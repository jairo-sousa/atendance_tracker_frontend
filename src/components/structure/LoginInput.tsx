import { Input } from "@chakra-ui/react";

interface LoginInputProps {
    placeholder?: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export function LoginInput({ placeholder, value, onChange }: LoginInputProps) {
    return (
        <Input
            value={value}
            onChange={onChange}
            borderRadius={"0.4rem"}
            p={"2rem"}
            fontSize={"1.4rem"}
            fontWeight={400}
            outlineWidth={0}
            border={"1px solid var(--border-secondary)"}
            color={"var(--content-secondary)"}
            placeholder={placeholder}
            required
            _placeholder={{
                color: "var(--content-tertiary)",
            }}
        />
    );
}
