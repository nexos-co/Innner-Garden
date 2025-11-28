import { faker } from "@faker-js/faker";
import type { FunctionComponent } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { cn } from "@/lib/utils";

interface UsersListProps {
    joined?: boolean
}

const UsersList: FunctionComponent<UsersListProps> = ({ joined }) => {
    const previewFriends: {
        id: string,
        name: string,
        avatarUrl: string,
    }[] = [
            { id: '1', name: faker.person.fullName(), avatarUrl: faker.image.avatar() },
            { id: '2', name: faker.person.fullName(), avatarUrl: faker.image.avatar() },
            { id: '3', name: faker.person.fullName(), avatarUrl: faker.image.avatar() },
        ];

    return (
        <>
            {
                previewFriends.map((friend) => (
                    <Avatar className={cn(
                        'border border-app-border size-10',
                        !joined && "-ml-3"
                    )}>
                        <AvatarImage src={friend.avatarUrl} alt="@shadcn" />
                        <AvatarFallback>{friend.name.slice(0, 2)}</AvatarFallback>
                    </Avatar>
                ))
            }
        </>
    )
}

export default UsersList;