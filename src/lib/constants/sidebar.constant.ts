import { Blocks, BookmarkPlus, ClockAlert, Home, LucideListTodo, LucideUser2, PieChart, Users, Users2, type LucideIcon } from "lucide-react";

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
        url: '/dashboard/garden/',
    },
    {
        name: 'Goals',
        icon: PieChart,
        url: '/dashboard/goals'
    },
    {
        name: 'New Goal',
        icon: BookmarkPlus,
        url: '/dashboard/goals/new'
    }
]

export const topBarLinks = [
    {
        name: "Friends",
        icon: Users,
        url: '/dashboard/friends/',
    },
    {
        name: "Updates",
        icon: ClockAlert,
        url: '/dashboard/friends/updates',
        updates: 10,
    },
    {
        name: 'Invites',
        icon: LucideListTodo,
        url: '/dashboard/invites',
        updates: 2,
    },
]