import React from "react";
import { Outlet } from "react-router";
import { PrivateChildRouteInterface } from "./PrivateRoute";

const PrivateOutletWrapper: React.FC<PrivateChildRouteInterface> = ({
    session_token,
}) => {
    return <Outlet context={{ session_token }} />;
};

export default PrivateOutletWrapper;
