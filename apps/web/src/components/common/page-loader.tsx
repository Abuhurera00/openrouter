import { Loader } from "lucide-react";

const PageLoader = () => {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-card/30 backdrop-blur-xs">
            <Loader className="h-12 w-12 animate-spin mb-2 text-foreground" />
        </div>
    );
};

export default PageLoader;
