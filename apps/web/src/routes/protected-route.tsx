import { Navigate, Outlet } from "react-router-dom";
import useAuthStore from "@/store/useAuthStore";
import PageLoader from "@/components/common/page-loader";

interface ProtectedRouteProps {
    userTypes?: string[];
    redirectTo?: string;
}

const ProtectedRoute = ({
    // userTypes = ["user"],
    redirectTo = "/login",
}: ProtectedRouteProps) => {
    const { isAuthenticated, isLoading } = useAuthStore();

    if (isLoading) return <PageLoader />;

    if (!isAuthenticated) return <Navigate to={redirectTo} replace />;

    return <Outlet />;
};

export default ProtectedRoute;
