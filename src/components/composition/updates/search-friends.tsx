
import UserCard from "@/components/atoms/user-card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command";
import { Dialog, DialogContent, DialogHeader, DialogOverlay, DialogTrigger } from "@/components/ui/dialog";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { faker } from "@faker-js/faker";
import { Check, UserRoundPlus, X } from "lucide-react";
import { useMemo, useState, type FunctionComponent } from "react";

interface FriendType {
    id: string,
    name: string,
    avatarUrl: string
}

interface SearchFriendsProps {
    selectedFriendId?: string | undefined; 
    onSelectFriend: (friendId: string | undefined) => void; 
    className?: string;
}

const SearchFriends: FunctionComponent<SearchFriendsProps> = ({
    selectedFriendId,
    onSelectFriend,
    className
}) => {
    const allFriends: FriendType[] = useMemo(() => Array.from({ length: 20 }).map(() => {
        const name = faker.person.fullName();
        return {
            id: faker.string.uuid(), 
            avatarUrl: faker.image.avatar(), 
            name,
        }
    }), []);

    const selectedFriend = useMemo(() =>
        allFriends.find(f => f.id === selectedFriendId),
        [selectedFriendId, allFriends]
    );

    const [open, setOpen] = useState(false);
    const [commandInputValue, setCommandInputValue] = useState("");


    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <div className={cn(
                    "flex items-center space-x-2 px-3 py-2 border border-input rounded-md cursor-pointer hover:bg-accent hover:text-accent-foreground",
                    "min-h-10 w-full text-left justify-start", 
                    !selectedFriend && "text-muted-foreground",
                    className
                )}
                    aria-label={selectedFriend ? `Selected friend: ${selectedFriend.name}` : "Search for a friend"}
                >
                    {selectedFriend ? (
                        <>
                            <Avatar className='size-6'>
                                <AvatarImage src={selectedFriend.avatarUrl} alt={selectedFriend.name} />
                                <AvatarFallback>{selectedFriend.name.slice(0, 2)}</AvatarFallback>
                            </Avatar>
                            <span>{selectedFriend.name}</span>
                            <Button
                                variant="ghost"
                                size="icon"
                                className="ml-auto h-6 w-6 rounded-full"
                                onClick={(e) => {
                                    e.stopPropagation(); 
                                    onSelectFriend(undefined); 
                                    setCommandInputValue("");
                                }}
                            >
                                <X className="h-4 w-4" /> 
                            </Button>
                        </>
                    ) : (
                        <>
                            <UserRoundPlus className="h-5 w-5 mr-2" />
                            <span>Find a Friend...</span>
                        </>
                    )}
                </div>
            </DialogTrigger>

            <DialogOverlay />
            <DialogContent className="pt-8 sm:max-w-md pb-3 pl-4">
                <DialogHeader className="px-4">
                    <h3 className="text-lg font-semibold">Select a Friend</h3>
                </DialogHeader>

                <Command shouldFilter={false} className="w-full pr-2">
                    <CommandInput
                        placeholder='Search friends...'
                        value={commandInputValue}
                        onValueChange={setCommandInputValue}
                    />
                     <Separator className="my-2 bg-background" /> 

                    <CommandList>
                        <CommandEmpty>No friends found.</CommandEmpty>
                        <CommandGroup>
                            {allFriends
                                .filter(friend =>
                                    friend.name.toLowerCase().includes(commandInputValue.toLowerCase())
                                )
                                .map((friend) => (
                                    <CommandItem
                                        key={friend.id}
                                        value={friend.name}
                                        onSelect={() => {
                                            if (selectedFriendId === friend.id) {
                                                onSelectFriend(undefined);
                                            } else {
                                                onSelectFriend(friend.id);
                                            }
                                            setOpen(false);
                                        }}
                                        className={cn(
                                            "flex items-center justify-between cursor-pointer",
                                            selectedFriendId === friend.id && "bg-accent text-accent-foreground"
                                        )}
                                    >
                                        <UserCard
                                            name={friend.name}
                                            avatarUrl={friend.avatarUrl}
                                            className="border-none bg-transparent" 
                                        />

                                        {selectedFriendId === friend.id && (
                                            <Check className="h-4 w-4 ml-auto" />
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