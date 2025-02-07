import { SideBar } from "@/components/SideBar";
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
