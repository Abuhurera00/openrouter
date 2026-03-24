import { Outlet, useLocation } from "react-router";
import { SidebarInset, SidebarProvider, SidebarTrigger } from "@workspace/ui/components/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import { Separator } from "@workspace/ui/components/separator";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@workspace/ui/components/breadcrumb";

export function DashboardLayout() {
    const { pathname } = useLocation();
    return (
        <SidebarProvider>
            <AppSidebar />
            <SidebarInset>
                <header className="flex h-16 shrink-0 items-center gap-2 border-b">
                    <div className="flex items-center gap-2 px-3">
                        <SidebarTrigger />
                        <Separator orientation="vertical" className="mr-2 h-4" />
                        <Breadcrumb>
                            <BreadcrumbList>
                                <BreadcrumbItem className="hidden md:block">
                                    <BreadcrumbLink href="#">
                                        OpenRouter
                                    </BreadcrumbLink>
                                </BreadcrumbItem>
                                <BreadcrumbSeparator className="hidden md:block" />
                                <BreadcrumbItem>
                                    <BreadcrumbPage className="capitalize">
                                        {pathname.substring(1).replace("/", " > ").replace(/-/g, " ") || "Dashboard"}
                                    </BreadcrumbPage>
                                </BreadcrumbItem>
                            </BreadcrumbList>
                        </Breadcrumb>
                    </div>
                </header>
                {/* <div className="flex flex-1 flex-col gap-4 p-4">
                    <div className="max-w-5xl lg:px-8 py-8">
                        <Outlet />
                    </div>
                </div> */}
                <main className="flex-1 overflow-auto p-4">
                    <div className="max-w-7xl mx-auto lg:px-8 py-2 lg:py-8">
                        <Outlet />
                    </div>
                </main>
            </SidebarInset>
        </SidebarProvider>
    );
}