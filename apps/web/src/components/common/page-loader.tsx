import { Loader } from "lucide-react";

const PageLoader = () => {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/50 backdrop-blur-xs">
            <Loader className="h-12 w-12 animate-spin mb-2 text-primary" />
        </div>
    );
};

export default PageLoader;
