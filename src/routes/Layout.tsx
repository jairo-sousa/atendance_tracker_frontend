import { SideBar } from "@/components/sidebar/SideBar";
import { Flex } from "@chakra-ui/react";
import { Outlet } from "react-router";
import { PrivateRoute } from "./PrivateRoute";

const Layout = () => {
    return (
        <>
            <Flex w={"100%"} h={"100vh"}>
                <SideBar />
                <PrivateRoute>
                    <Outlet />
                </PrivateRoute>
            </Flex>
        </>
    );
};

export default Layout;
