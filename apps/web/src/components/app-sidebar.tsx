import * as React from "react"
import {
    Coins,
    Key,
    LayoutDashboard,
    Zap,
} from "lucide-react"

import { NavMain } from "@/components/nav-main"
import { NavUser } from "@/components/nav-user"
import { AppSidebarHeader } from "@/components/app-sidebar-header"
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarHeader,
    SidebarRail,
} from "@workspace/ui/components/sidebar"
import { PATH } from "@/lib/path"
import useAuthStore from "@/store/useAuthStore"
import { useGetUserProfile } from "@/utils/api/auth/queries"

// This is sample data.
const data = {
    app: [
        {
            name: "OpenRouter",
            logo: Zap,
            version: "v1.0.0",
        },
    ],
    navMain: [
        {
            title: "Dashboard",
            url: PATH.DASHBOARD,
            icon: LayoutDashboard,
            isActive: true,
            items: [
                {
                    title: "Dashboard",
                    url: PATH.DASHBOARD,
                },
            ],
        },
        {
            title: "API Keys",
            url: PATH.API_KEYS,
            icon: Key,
            items: [
                {
                    title: "API Keys",
                    url: PATH.API_KEYS,
                },
            ],
        },
        {
            title: "Credits",
            url: PATH.CREDITS,
            icon: Coins,
            items: [
                {
                    title: "Credits",
                    url: PATH.CREDITS,
                },
            ],
        },
    ]
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
    const { data: { data: user } } = useGetUserProfile();
    return (
        <Sidebar collapsible="icon" {...props}>
            <SidebarHeader>
                <AppSidebarHeader app={data.app} />
            </SidebarHeader>
            <SidebarContent>
                <NavMain items={data.navMain} />
                {/* <NavProjects projects={data.projects} /> */}
            </SidebarContent>
            <SidebarFooter>
                {user && <NavUser user={user} />}
            </SidebarFooter>
            <SidebarRail />
        </Sidebar>
    )
}
