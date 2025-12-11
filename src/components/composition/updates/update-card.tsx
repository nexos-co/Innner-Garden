import { type FunctionComponent } from "react";
import { Button } from '@/components/ui/button'
import UserCard from "../../atoms/user-card";
import { faker } from "@faker-js/faker";
import CircularProgress from "@/components/atoms/circular-progress";
import { cn } from "@/lib/utils";

interface UpdateCardProps {
    index: number
}

const UpdateCard: FunctionComponent<UpdateCardProps> = ({ index }) => {
    const isFocused = false
    return (
        <div className={cn("flex flex-col hover:bg-gray-800 pointer flex-1 gap-4 pb-5 p-2 border-b",isFocused && "bg-primary border-black border-t")}>
            <UserCard className="bg-transparent border-none" name={faker.person.fullName()} avatarUrl={faker.image.avatar()} additionalText={faker.internet.email()} />

            <div className=" space-y-2  flex-col">
                <div className="flex flex-row gap-2 justify-between">
                    <div className="text-sm">{faker.date.recent().toLocaleDateString()}</div>
                    <div className="flex flex-row items-center gap-2">
                        <div className="h-5 w-5">
                            <CircularProgress />
                        </div>
                        <p className="text-sm italic text-app-primary"> Make exercice all days</p>
                    </div>
                </div>
                <p className={cn("bg-sidebar/70 min-h-30 p-3", isFocused && "bg-background/60")}>I go to the gym a 4:00 pm today, feeling a bit tired</p>
            </div>

            <div className="flex-1 flex justify-end items-end space-x-2">
                <Button variant='outline' className="text-sm flex-1">Quick Validate</Button>
                <Button variant='default'>View</Button>
            </div>
        </div>
    );
}

export default UpdateCard;