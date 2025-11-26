import type { FunctionComponent } from "react";
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar"
import { cn } from "@/lib/utils";

interface UserCardProps {
    name: string,
    avatarUrl: string,
    additionalText?: string,
    className?: string,
}

const UserCard: FunctionComponent<UserCardProps> = ({
    name,
    avatarUrl,
    additionalText,
    className
}) => {
    return (<div className={
        cn("flex gap-2 items-center border border-app-border w-fit  rounded-2xl py-1 pl-2 pr-4 bg-sidebar", className)
    }>
        <Avatar>
            <AvatarImage src={avatarUrl} alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
        </Avatar>

        <div className="text-sm">
            <p>{name}</p>
            <p className="text-xs">{additionalText}</p>
        </div>
    </div>);
}

export default UserCard;