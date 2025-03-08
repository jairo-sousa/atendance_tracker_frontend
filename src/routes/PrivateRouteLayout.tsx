import { SideBar } from "@/components/sidebar/SideBar";
import { Flex } from "@chakra-ui/react";
import { PrivateRoute } from "./PrivateRoute";
import PrivateOutletWrapper from "./PrivateOutletWrapper";

const PrivateRouteLayout = () => {
    return (
        <>
            <Flex w={"100%"} h={"100vh"}>
                <SideBar />
                <PrivateRoute>
                    <PrivateOutletWrapper />
                </PrivateRoute>
            </Flex>
        </>
    );
};

export default PrivateRouteLayout;
