import { SideBar } from "@/components/sidebar/SideBar";
import { Outlet } from "react-router";

const Layout = () => {
    return (
        <>
            <SideBar />
            <Outlet />
        </>
    );
};

export default Layout;
