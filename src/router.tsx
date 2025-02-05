import { createBrowserRouter } from "react-router";
import { PunchInKioske } from "./routes/PunchInKioske";
import { Login } from "./routes/Login";
import { Home } from "./routes/Home";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
        errorElement: <Login />,
    },
    {
        path: "/login",
        element: <Login />,
    },
    {
        path: "check-in",
        element: <PunchInKioske />,
    },
]);

export const links = [
    {
        name: "Início",
        path: "/",
    },
    {
        name: "Login",
        path: "/login",
    },
    {
        name: "Registro",
        path: "/check-in",
    },
];
