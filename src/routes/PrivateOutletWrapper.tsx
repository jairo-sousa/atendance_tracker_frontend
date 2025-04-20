import React from "react";
import { Outlet } from "react-router";
import { PrivateChildRouteInterface } from "./PrivateRoute";

const PrivateOutletWrapper: React.FC<PrivateChildRouteInterface> = ({
    sessionToken,
}) => {
    return <Outlet context={{ sessionToken }} />;
};

export default PrivateOutletWrapper;
