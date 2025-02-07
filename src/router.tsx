import { createBrowserRouter } from "react-router";
import { PunchInKioske } from "./routes/PunchInKioske";
import { Login } from "./routes/Login";
import { Home } from "./routes/Home";
import { Emplloyee } from "./routes/Employee";
import { Backup } from "./routes/Backup";
import { Payroll } from "./routes/Payroll";
import { Workday } from "./routes/Workday";
import Layout from "./routes/Layout";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/login",
                element: <Login />,
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
            {
                path: "/check-in",
                element: <PunchInKioske />,
            },
        ],
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
