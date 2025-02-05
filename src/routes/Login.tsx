import { Flex, Text } from "@chakra-ui/react";

import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import { Navigate } from "react-router";

export function Login() {
    const [hasSessionToken, setHasSessionToken] = useState<boolean>();

    useEffect(() => {
        setHasSessionToken(
            Cookies.get("sessionToken")?.startsWith("Bearer ") == true
        );
    }, []);

    if (hasSessionToken == true) return <Navigate to="/" />;

    return (
        <Flex direction={"column"}>
            <Text as={"h1"}>LOGIN</Text>

            <Flex direction={"column"}>
                <Text>Faça Login para obter token de sessão</Text>
                <Text>
                    {Cookies.get("sessionToken")?.length &&
                        "Token inválido: " + Cookies.get("sessionToken")}
                </Text>
            </Flex>
        </Flex>
    );
}
