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
    size?:number,
    children?: React.ReactNode
}

const UserCard: FunctionComponent<UserCardProps> = ({
    name,
    avatarUrl,
    additionalText,
    className,
    size,
    children
}) => {
    return (<div className={
        cn("flex gap-2 items-center w-fit rounded-2xl py-1 ", className)
    }>
        <Avatar className={cn("size-6 border")}>
            <AvatarImage src={avatarUrl} alt="@shadcn" />
            <AvatarFallback>cn</AvatarFallback>
        </Avatar>

        <div className="text-xs">
            <p>{name}</p>
            <p className="text-xs text-muted-foreground">{additionalText} {children} </p>
        </div>
    </div>);
}

export default UserCard;