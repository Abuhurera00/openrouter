import { Navigate, type RouteObject } from "react-router-dom";
import { PATH } from "@/lib/path";
import SignIn from "@/pages/auth/signIn";
import SignUp from "@/pages/auth/signUp";
import Dashboard from "@/pages/dashboard";
import { DashboardLayout } from "@/layouts/dashboard-layout";
import ProtectedRoute from "./protected-route";
import ProtectedLayout from "@/layouts/protected-layout";
import ApiKeys from "@/pages/apiKeys";
import Credits from "@/pages/credits";
import NotFound from "@/pages/notFound";

export const routes: RouteObject[] = [
    {
        path: PATH.LOGIN,
        element: <SignIn />,
    },
    {
        path: PATH.SIGN_UP,
        element: <SignUp />,
    },
    {
        path: "/",
        element: <Navigate to={PATH.LOGIN} replace />,
    },

    {
        element: <ProtectedLayout />,
        children: [
            {
                element: <ProtectedRoute userTypes={["user"]} />,
                children: [
                    {
                        element: <DashboardLayout />,
                        children: [
                            {
                                path: PATH.DASHBOARD,
                                element: <Dashboard />,
                            },
                            {
                                path: PATH.API_KEYS,
                                element: <ApiKeys />,
                            },
                            {
                                path: PATH.CREDITS,
                                element: <Credits />,
                            },
                        ],
                    },
                ],
            },
        ],
    },
    {
        path: "*",
        element: <NotFound />,
    },
];
