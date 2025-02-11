import { Input } from "@chakra-ui/react";

import { useState } from "react";
import { PasswordVisibilityButton } from "./PasswordVisibilityButton";

interface LoginInputProps {
    placeholder?: string;
    value: string;
    customType?: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export function LoginInput({
    placeholder,
    value,
    customType,
    onChange,
}: LoginInputProps) {
    const [passwordActionMessage, setPasswordActionMessage] =
        useState("Mostrar");

    const [type, setType] = useState(customType || "text");

    const switchPasswordVisible = () => {
        if (type === "password") {
            setType("text");
            setPasswordActionMessage("Esconder");
        } else {
            setType("password");
            setPasswordActionMessage("Mostrar");
        }
    };

    return (
        <>
            <Input
                type={type}
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
            {value && customType === "password" && (
                <PasswordVisibilityButton onClick={switchPasswordVisible}>
                    {passwordActionMessage}
                </PasswordVisibilityButton>
            )}
        </>
    );
}
