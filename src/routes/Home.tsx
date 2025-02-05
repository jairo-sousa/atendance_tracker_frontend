import { Flex, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";

import Cookies from "js-cookie";
import { Navigate } from "react-router";

export function Home() {
    const [hasSessionToken, setHasSessionToken] = useState<boolean>();

    useEffect(() => {
        setHasSessionToken(
            Cookies.get("sessionToken")?.startsWith("Bearer ") == true
        );
    }, []);

    if (hasSessionToken == false) return <Navigate to="/check-in" />;

    return (
        <Flex direction={"column"}>
            <Text as={"h1"}>HOME</Text>

            <Flex>
                <Text>Token Carregado: {Cookies.get("sessionToken")}</Text>
            </Flex>
        </Flex>
    );
}
