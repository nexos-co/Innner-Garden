import { Blocks, BookPlusIcon, ClockAlert, LucideListTodo, PieChart, type LucideIcon } from "lucide-react";

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
            },
            {
                name: 'New Goal',
                icon: BookPlusIcon,
                url: '/app/goal/new'
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
            },
            {
                name: 'Invites',
                icon: LucideListTodo,
                url: '/app/friends/invites'
            }
        ]
    }
]