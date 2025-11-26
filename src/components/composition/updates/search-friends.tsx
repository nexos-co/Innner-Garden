import { Dialog, DialogContent, DialogHeader, DialogOverlay, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { faker } from "@faker-js/faker";
import { Check, Search } from "lucide-react";
import { useEffect, useMemo, useState, type FunctionComponent } from "react";
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
} from "@/components/ui/command"
import { cn } from "@/lib/utils";
import UserCard from "@/components/atoms/user-card";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";

interface SearchFriendsProps {

}

interface FriendType {
    id: string,
    name: string,
    avatarUrl: string
}


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


const SearchFriends: FunctionComponent<SearchFriendsProps> = () => {

    const friends: FriendType[] = Array.from({ length: 20 }).map(() => {
        const name = faker.person.fullName();
        return {
            id: Math.random().toString(),
            avatarUrl: faker.image.personPortrait(),
            name,
        }
    });

    const [value, setValue] = useState("");

    return (
        <Dialog>
            <DialogTrigger >
                <div className="flex items-center justify-center">
                    <UserList />
                    <div className="flex ml-2 space-x-2 items-center border border-app-border rounded-md bg-sidebar pr-2">
                        <Input className='border-transparent rounded-r-none border-r' placeholder='Find Friends....' />
                        <Search size={20} />
                    </div>
                </div>
            </DialogTrigger>

            <DialogOverlay />
            <DialogContent className="pt-12 ">
                <Command value={value} className="w-full">
                    <DialogHeader className="flex flex-row justify-end px-4">
                        <UserList />
                        <div className="w-full max-w-[18rem]">
                            <CommandInput autoFocus className='border-r focus:border-r overflow-hidden w-full  rounded-r-none' placeholder='Find Friends....' />
                        </div>
                    </DialogHeader>

                    <Separator className="mt-6 bg-sidebar" />
                    <CommandList >
                        <CommandEmpty>No friends found.</CommandEmpty>
                        <CommandGroup>
                            {friends.map((friend) => (
                                <CommandItem
                                    className={
                                        cn("hover:bg-none bg-none", value === friend.name && "bg-sidebar")
                                    }
                                    key={friend.id}
                                    value={friend.name}
                                    onSelect={(currentValue) => {
                                        setValue(currentValue === value ? "" : currentValue)
                                    }}
                                >
                                    <UserCard
                                        name={friend.name}
                                        avatarUrl={friend.avatarUrl}
                                        className="border-none bg-transparent"
                                    />

                                    {value === friend.name && (
                                        <Button className="w-6 h-6 ml-auto" size='icon'>
                                            <Check className="text-sidebar" />
                                        </Button>
                                    )}
                                </CommandItem>
                            ))}
                        </CommandGroup>
                    </CommandList>
                </Command>
            </DialogContent>
        </Dialog >
    );
}

export default SearchFriends;