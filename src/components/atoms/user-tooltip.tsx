import type { FunctionComponent } from "react";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import UserCard from "./user-card";
import { Separator } from "../ui/separator";
import { Badge } from "../storybook";

interface UserTooltipProps {
    name: string;
    email: string;
    avatarUrl: string,
    commonProjects: number;
    className?: string;
    children: React.ReactNode
}

const UserTooltip: FunctionComponent<UserTooltipProps> = ({
    name,
    email,
    avatarUrl,
    commonProjects,
    children
}) => {
    return (
        <Tooltip>
            <TooltipTrigger>
                {children}
            </TooltipTrigger>
            <TooltipContent className="p-3 bg-sidebar border border-app-border text-md text-app-border -translate-x-3/4 translate-y-3/4">
                <UserCard
                    className="border-none"
                    name={name}
                    avatarUrl={avatarUrl}
                    additionalText={email}
                />
                <Separator className="my-2" />
                <div className="flex justify-around gap-4 items-center">
                    <p className="font-semibold text-app-primary">Projects in Common: 
                    </p>
                    <Badge variant="success">{commonProjects}</Badge>
                </div>
            </TooltipContent>
        </Tooltip>
    );
};

export default UserTooltip;
