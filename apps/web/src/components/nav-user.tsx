import {
    BadgeCheck,
    ChevronsUpDown,
    CreditCard,
    Loader,
    LogOut,
} from "lucide-react"

import {
    Avatar,
    AvatarFallback,
} from "@workspace/ui/components/avatar"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@workspace/ui/components/dropdown-menu"
import {
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    useSidebar,
} from "@workspace/ui/components/sidebar"
import { useNavigate } from "react-router"
import { PATH } from "@/lib/path"
import { useSignOutMutation } from "@/utils/api/auth/mutation"
import { toast } from "sonner"
import { Modal } from "./common/modal"
import { useState } from "react"

export function NavUser({
    user,
}: {
    user: {
        name?: string
        email: string
        avatar?: string
    }
}) {
    const navigate = useNavigate()
    const { isMobile } = useSidebar()
    const { mutate, isPending } = useSignOutMutation({
        onSuccess: () => {
            navigate(PATH.LOGIN)
        },
        OnError: (err: any) => {
            toast.error(err.message || "Logout failed")
        }
    })
    const [logoutOpen, setLogoutOpen] = useState(false)
    const initials = user.email
        ? user.email
            .split(" ")
            .map((n) => n[0])
            .join("")
        : ""

    const onClose = () => {
        setLogoutOpen(false)
    }


    return (
        <SidebarMenu>
            <SidebarMenuItem>
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <SidebarMenuButton
                            size="lg"
                            className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
                        >
                            <Avatar className="h-8 w-8 rounded-lg">
                                <AvatarFallback className="rounded-lg">{initials}</AvatarFallback>
                            </Avatar>
                            <div className="grid flex-1 text-left text-sm leading-tight">
                                <span className="truncate text-xs">{user.email}</span>
                            </div>
                            <ChevronsUpDown className="ml-auto size-4" />
                        </SidebarMenuButton>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent
                        className="w-(--radix-dropdown-menu-trigger-width) min-w-56 rounded-lg"
                        side={isMobile ? "bottom" : "right"}
                        align="end"
                        sideOffset={4}
                    >
                        <DropdownMenuLabel className="p-0 font-normal">
                            <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
                                <Avatar className="h-8 w-8 rounded-lg">
                                    <AvatarFallback className="rounded-lg">{initials}</AvatarFallback>
                                </Avatar>
                                <div className="grid flex-1 text-left text-sm leading-tight">
                                    <span className="truncate text-xs">{user.email}</span>
                                </div>
                            </div>
                        </DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuGroup>
                            <DropdownMenuItem>
                                <CreditCard />
                                Credits
                            </DropdownMenuItem>
                        </DropdownMenuGroup>
                        {/* <DropdownMenuSeparator /> */}
                        <DropdownMenuGroup>
                            <DropdownMenuItem>
                                <BadgeCheck />
                                API Keys
                            </DropdownMenuItem>
                        </DropdownMenuGroup>
                        <DropdownMenuSeparator />
                        {/* // <Link to={PATH.LOGIN}> */}
                        <DropdownMenuItem onClick={() => setLogoutOpen(true)}>
                            {isPending ? (
                                <Loader className="w-4 h-4 animate-spin" />
                            ) : (
                                <LogOut />
                            )}
                            Log out
                        </DropdownMenuItem>
                        {/* // </Link> */}
                    </DropdownMenuContent>
                </DropdownMenu>
            </SidebarMenuItem>

            <Modal
                open={logoutOpen}
                onOpenChange={(isOpen) => {
                    if (!isOpen) onClose()
                    setLogoutOpen(isOpen)
                }}
                title={"Confirm Logout"}
                description={"Are you sure you want to log out?"}
                onConfirm={() => {
                    mutate()
                    onClose()
                }}
                onCancel={onClose}
                confirmLabel="Yes"
                cancelLabel="No"
            />
        </SidebarMenu>
    )
}
