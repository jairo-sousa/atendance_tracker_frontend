import { ReactNode, useEffect, useState } from "react";

import Cookies from "js-cookie";
import { Navigate } from "react-router";

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

    return <>{children}</>;
}
