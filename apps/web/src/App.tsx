import { useRoutes } from "react-router-dom";
import { Suspense } from "react";
import { Toaster } from "sonner";
import PageLoader from "./components/common/page-loader";
import { routes } from "./routes";

function AppRoutes() {
  const element = useRoutes(routes);
  return (
    <Suspense
      fallback={
        <div className="text-center p-10">
          <PageLoader />
        </div>
      }
    >
      {element}
    </Suspense>
  );
}

export function App() {
  return (
    <>
      {/* <ScrollToTop /> */}
      <Toaster richColors position="top-right" />
      <AppRoutes />
    </>
  );
}
