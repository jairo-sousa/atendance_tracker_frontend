import { ReactNode, useEffect, useState } from "react";

import Cookies from "js-cookie";
import { Navigate } from "react-router";
import { Flex } from "@chakra-ui/react";

interface PrivateRouteInterface {
    children?: ReactNode;
}

export function PrivateRoute({ children }: PrivateRouteInterface) {
    const [hasSessionToken, setHasSessionToken] = useState<boolean>();

    useEffect(() => {
        setHasSessionToken(
            Cookies.get("sessionToken")?.startsWith("Bearer ") == true
        );
    }, []);

    if (hasSessionToken == false) return <Navigate to="/check-in" />;

    return (
        <>
            <Flex
                direction={"column"}
                w={"100%"}
                h={"100vh"}
                overflowY={"scroll"}
                scrollbarWidth={"none"}
                css={{
                    "&::-webkit-scrollbar": {
                        display: "none",
                    },
                    "&": {
                        msOverflowStyle: "none",
                    },
                }}
            >
                {children}
            </Flex>
        </>
    );
}
