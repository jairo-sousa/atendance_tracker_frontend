import { SideBar } from "@/components/sidebar/SideBar";
import { Flex } from "@chakra-ui/react";
import { Outlet } from "react-router";

const Layout = () => {
    return (
        <>
            <Flex w={"100%"} h={"100vh"}>
                <SideBar />
                <Outlet />
            </Flex>
        </>
    );
};

export default Layout;
