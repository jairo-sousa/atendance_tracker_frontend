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

    useEffect(() => {
        const sessionToken = Cookies.get("sessionToken");

        if (sessionToken && sessionToken.startsWith("Bearer ")) {
            setHasSessionToken(true);
        } else {
            setHasSessionToken(false);
        }
    }, []);

    if (hasSessionToken == false) return <Navigate to="/check-in" />;
    if (!React.isValidElement(children)) {
        return <div>Invalid children</div>;
    }

    return (
        <PrivateRoutePainel>
            {React.cloneElement(children as React.ReactElement)}
        </PrivateRoutePainel>
    );
}
