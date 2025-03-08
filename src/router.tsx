import { createBrowserRouter } from "react-router";
import { PunchInKioske } from "./routes/PunchInKioske";
import { Login } from "./routes/Login";
import { Home } from "./routes/Home";
import { Emplloyee } from "./routes/Employee";
import { Backup } from "./routes/Backup";
import { Payroll } from "./routes/Payroll";
import { Workday } from "./routes/Workday";
import Layout from "./routes/Layout";
import PrivateRouteLayout from "./routes/PrivateRouteLayout";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
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
                path: "/workday",
                element: <Workday />,
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
        name: "Login",
        path: "/login",
    },
    {
        name: "Funcionários",
        path: "/employee",
    },
    {
        name: "Dias úteis",
        path: "/workday",
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
        path: "/check-in",
    },
];
