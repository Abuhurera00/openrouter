import { AppSidebar } from "@/components/app-sidebar"
import { PATH } from "@/lib/path"
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@workspace/ui/components/breadcrumb"
import { Separator } from "@workspace/ui/components/separator"
import {
    SidebarInset,
    SidebarProvider,
    SidebarTrigger,
} from "@workspace/ui/components/sidebar"
import { Outlet, useLocation } from "react-router"

export function DashboardLayout() {
    const { pathname } = useLocation();
    return (
        <SidebarProvider>
            <AppSidebar />
            <SidebarInset>
                <header className="top-0 sticky backdrop-blur-sm flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12">
                    <div className="flex justify-center items-center gap-2 px-4">
                        <SidebarTrigger className="-ml-1" />
                        <Separator
                            orientation="vertical"
                            className="mr-2"
                        />
                        <Breadcrumb>
                            <BreadcrumbList>
                                <BreadcrumbItem className="hidden md:block">
                                    <BreadcrumbLink href={PATH.DASHBOARD}>
                                        OpenRouter
                                    </BreadcrumbLink>
                                </BreadcrumbItem>
                                <BreadcrumbSeparator className="hidden md:block" />
                                <BreadcrumbItem className="capitalize">
                                    <BreadcrumbPage>{pathname.substring(1).replace("/", " > ").replace(/-/g, " ") || "Dashboard"}</BreadcrumbPage>
                                </BreadcrumbItem>
                            </BreadcrumbList>
                        </Breadcrumb>
                    </div>
                </header>
                {/* <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
                    <Outlet />
                </div> */}
                <main className="flex-1 overflow-auto max-lg:p-4">
                    <div className="container mx-auto lg:px-8 py-2 lg:py-8">
                        <Outlet />
                    </div>
                </main>
            </SidebarInset>
        </SidebarProvider>
    )
}
