import React, { ReactNode, useEffect, useState } from "react";

import Cookies from "js-cookie";
import { Navigate } from "react-router";
import { PrivateRoutePainel } from "@/fragments/layout/PrivateRoutePanel";

export interface PrivateChildRouteInterface {
    session_token?: string;
}

interface PrivateRouteInterface {
    children: ReactNode;
}

export function PrivateRoute({ children }: PrivateRouteInterface) {
    const [hasSessionToken, setHasSessionToken] = useState<boolean>();
    const [sessionToken, setSessionToken] = useState<string | undefined>(
        undefined
    );

    useEffect(() => {
        const token = Cookies.get("sessionToken");

        if (token && token.startsWith("Bearer ")) {
            setSessionToken(token);
            setHasSessionToken(true);
        } else {
            setHasSessionToken(false);
        }
    }, []);

    if (hasSessionToken == null) return;
    if (hasSessionToken == false) return <Navigate to="/" />;

    if (!React.isValidElement(children)) return <div>Invalid children</div>;

    return (
        <PrivateRoutePainel>
            {React.cloneElement(children as React.ReactElement, {
                session_token: sessionToken,
            })}
        </PrivateRoutePainel>
    );
}
