import { Blocks, ClockAlert, PieChart, type LucideIcon } from "lucide-react";

export interface SidebarCollection {
    name: string,
    routes: {
        name: string,
        icon: LucideIcon,
        url: string
    }[]
}

export const collections: SidebarCollection[] = [
    {
        name: 'Personal',
        routes: [
            {
                name: 'Garden',
                icon: Blocks,
                url: '/app/',
            },
            {
                name: 'Goals',
                icon: PieChart,
                url: '/app/goals'
            }
        ]
    },
    {
        name: "Friends",
        routes: [
            {
                name: "Updates",
                icon: ClockAlert,
                url: '/app/friends/',
            }
        ]
    }
]