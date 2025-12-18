import { faker } from "@faker-js/faker";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";


const UserList = () => {
    const previewFriends: {
        id: string,
        name: string,
        avatarUrl: string,
    }[] = [
            { id: '1', name: faker.person.fullName(), avatarUrl: faker.image.avatar() },
            { id: '2', name: faker.person.fullName(), avatarUrl: faker.image.avatar() },
            { id: '3', name: faker.person.fullName(), avatarUrl: faker.image.avatar() },
        ];
    return <>
        {previewFriends.map((friend) => (
            <Avatar className='border border-app-border -ml-3 size-9'>
                <AvatarImage src={friend.avatarUrl} alt="@shadcn" />
                <AvatarFallback>{friend.name.slice(0, 2)}</AvatarFallback>
            </Avatar>
        ))}
    </>
}