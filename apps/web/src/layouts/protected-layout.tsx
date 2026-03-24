import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import useAuthStore from "@/store/useAuthStore";
import PageLoader from "@/components/common/page-loader";

const ProtectedLayout = () => {
    const { fetchUser, isLoading } = useAuthStore();

    useEffect(() => {
        fetchUser();
    }, [fetchUser]);

    if (isLoading) return <PageLoader />;

    return <Outlet />;
};

export default ProtectedLayout;
