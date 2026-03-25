import * as React from "react"
import {
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    useSidebar,
} from "@workspace/ui/components/sidebar"

export function AppSidebarHeader({
    app,
}: {
    app: {
        name: string
        logo: React.ElementType
        version: string
    }[]
}) {
    const { isMobile } = useSidebar()
    const [activeTeam, setActiveTeam] = React.useState(app[0])

    if (!activeTeam) {
        return null
    }

    return (
        <SidebarMenu>
            <SidebarMenuItem>
                <SidebarMenuButton
                    size="lg"
                    className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
                >
                    <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-primary/10 border border-primary/20">
                        <activeTeam.logo className="size-3.5 text-primary" />
                    </div>
                    <div className="flex gap-3 items-center flex-row flex-1 text-left text-sm leading-tight">
                        <span className="truncate font-medium">{activeTeam.name}</span>
                        <span className="text-xs font-light text-foreground">{activeTeam.version}</span>
                    </div>
                </SidebarMenuButton>
            </SidebarMenuItem>
        </SidebarMenu>
    )
}
