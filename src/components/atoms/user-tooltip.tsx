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
            <TooltipContent className="px-2 py-1 bg-background-secondary border mt-1" side="bottom">
                <UserCard
                    className="border-none text-primary text-sm"
                    name={name}
                    avatarUrl={avatarUrl}
                    additionalText={email}
                />
            </TooltipContent>
        </Tooltip>
    );
};

export default UserTooltip;
