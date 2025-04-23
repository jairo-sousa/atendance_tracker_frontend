import { createBrowserRouter } from "react-router";
import { PunchInKioske } from "./routes/PunchInKioske";
import { Login } from "./routes/Login";
import { Home } from "./routes/Home";
import { Emplloyee } from "./routes/Employee";
import { Backup } from "./routes/Backup";
import { Payroll } from "./routes/Payroll";
import Layout from "./routes/Layout";
import PrivateRouteLayout from "./routes/PrivateRouteLayout";
import { Day } from "./routes/Day";
import { SignUp } from "./routes/SignUp";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "/signup",
                element: <SignUp />,
            },
            {
                path: "/login",
                element: <Login />,
            },
            {
                path: "/",
                element: <PunchInKioske />,
            },
        ],
    },
    {
        path: "/",
        element: <PrivateRouteLayout />,
        children: [
            {
                path: "/home",
                element: <Home />,
            },
            {
                path: "/backup",
                element: <Backup />,
            },
            {
                path: "/employee",
                element: <Emplloyee />,
            },
            {
                path: "/payroll",
                element: <Payroll />,
            },
            {
                path: "/day",
                element: <Day />,
            },
        ],
    },
]);

export const links = [
    {
        name: "Início",
        path: "/home",
    },
    {
        name: "Sign Up",
        path: "/signup",
    },
    {
        name: "Login",
        path: "/login",
    },
    {
        name: "Funcionários",
        path: "/employee",
    },
    {
        name: "Dias úteis",
        path: "/day",
    },
    {
        name: "Pagamento",
        path: "/payroll",
    },
    {
        name: "Backup",
        path: "/backup",
    },
    {
        name: "Registro",
        path: "/",
    },
];
