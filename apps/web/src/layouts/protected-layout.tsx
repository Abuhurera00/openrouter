import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import useAuthStore from "@/store/useAuthStore";
import PageLoader from "@/components/common/page-loader";
import { useGetUserProfile } from "@/utils/api/auth/queries";

const ProtectedLayout = () => {
    const { data, isLoading } = useGetUserProfile();
    const { setUser } = useAuthStore();

    useEffect(() => {
        console.log("User profile data:", isLoading);
        if (data?.success) {
            setUser(data.data);
        } else if (data) {
            setUser(null);
        }
    }, [data]);

    if (isLoading) return <PageLoader />;

    return <Outlet />;
};

export default ProtectedLayout;
