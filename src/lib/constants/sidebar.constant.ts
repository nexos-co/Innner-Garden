import { Blocks, ClockAlert, Home, LucideListTodo, PieChart, Users, Users2, type LucideIcon } from "lucide-react";

export interface SidebarCollection {
    name: string,
    icon: LucideIcon,
    url: string
}[]

export const sidebarLinks: SidebarCollection[] = [
    {
        name: 'Home',
        icon: Home,
        url: '/dashboard'
    },
    {
        name: 'Garden',
        icon: Blocks,
        url: '/garden/',
    },
    {
        name: 'Goals',
        icon: PieChart,
        url: '/dashboard/goals'
    },

    {
        name: "Friends",
        icon: Users,
        url: '/dashboard/friends/',
    },
    {
        name: "Updates",
        icon: ClockAlert,
        url: '/dashboard/friends/updates'
    },
    {
        name: 'Invites',
        icon: LucideListTodo,
        url: '/dashboard/invites'
    }
]