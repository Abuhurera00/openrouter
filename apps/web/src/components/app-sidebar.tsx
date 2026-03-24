import * as React from "react"
import { GalleryVerticalEnd, Zap } from "lucide-react"

import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarMenuSub,
    SidebarMenuSubButton,
    SidebarMenuSubItem,
    SidebarRail,
} from "@workspace/ui/components/sidebar"
import { PATH } from "@/lib/path"
import { Link, useLocation } from "react-router"

const data = {
    navMain: [
        {
            title: "Dashboard",
            url: PATH.DASHBOARD,
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
            items: [
                {
                    title: "Credits",
                    url: PATH.CREDITS,
                }
            ],
        },
    ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
    const { pathname } = useLocation();
    return (
        <Sidebar {...props}>
            <SidebarHeader>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton size="lg" asChild>
                            <Link to={PATH.DASHBOARD}>
                                <div className="flex items-center justify-center size-8 rounded-lg bg-primary/10 border border-primary/20">
                                    <Zap className="size-3.5 text-primary" />
                                </div>
                                <div className="flex gap-3 leading-none">
                                    <span className="font-medium">OpenRouter</span>
                                    <span className="text-xs font-light text-foreground">v1.0.0</span>
                                </div>
                            </Link>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>
            <SidebarContent>
                <SidebarGroup>
                    <SidebarMenu>
                        {data.navMain.map((item) => (
                            <SidebarMenuItem key={item.title}>
                                <SidebarMenuButton asChild>
                                    <Link to={item.url} className="font-medium">
                                        {item.title}
                                    </Link>
                                </SidebarMenuButton>
                                {item.items?.length ? (
                                    <SidebarMenuSub>
                                        {item.items.map((item) => (
                                            <SidebarMenuSubItem key={item.title}>
                                                <SidebarMenuSubButton asChild isActive={pathname === item.url}>
                                                    <Link to={item.url}>{item.title}</Link>
                                                </SidebarMenuSubButton>
                                            </SidebarMenuSubItem>
                                        ))}
                                    </SidebarMenuSub>
                                ) : null}
                            </SidebarMenuItem>
                        ))}
                    </SidebarMenu>
                </SidebarGroup>
            </SidebarContent>
            <SidebarRail />
        </Sidebar>
    )
}
