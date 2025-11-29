import { faker } from "@faker-js/faker";
import type { FunctionComponent } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { cn } from "@/lib/utils";
import UserTooltip from "./user-tooltip";

interface UsersListProps {
    joined?: boolean
}

const UsersList: FunctionComponent<UsersListProps> = ({ joined }) => {
    const previewFriends: {
        id: string,
        email: string,
        name: string,
        avatarUrl: string,
        commonProjects: number;
    }[] = [
            { id: '1', name: faker.person.fullName(), avatarUrl: faker.image.avatar(), commonProjects: parseInt((Math.random()*100).toString()), email: faker.internet.email() },
            { id: '2', name: faker.person.fullName(), avatarUrl: faker.image.avatar(), commonProjects: parseInt((Math.random()*100).toString()),  email: faker.internet.email() },
            { id: '3', name: faker.person.fullName(), avatarUrl: faker.image.avatar(), commonProjects: parseInt((Math.random()*100).toString()),  email: faker.internet.email() },
        ];

    return (
        <>
            {
                previewFriends.map((friend) => (
                    <UserTooltip
                    email={friend.email}
                    name={friend.name}
                    avatarUrl={friend.avatarUrl}
                    commonProjects={friend.commonProjects}
                    >
                        <Avatar className={cn(
                            'border border-app-border size-10',
                            !joined && "-ml-3"
                        )}>
                            <AvatarImage src={friend.avatarUrl} alt="@shadcn" />
                            <AvatarFallback>{friend.name.slice(0, 2)}</AvatarFallback>
                        </Avatar>
                    </UserTooltip>
                ))
            }
        </>
    )
}

export default UsersList;