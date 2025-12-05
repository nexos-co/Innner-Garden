import { useEffect, useState, type FunctionComponent } from "react";
import { Card } from "../ui/card";
import { cn } from "@/lib/utils";
import UserCard from "./user-card";
import { faker } from "@faker-js/faker";

interface UpdateCardProps {
    index: number
}

const UpdateCard: FunctionComponent<UpdateCardProps> = ({ index }) => {
    const [isExpanded, setIsExppanded] = useState(false);

    const moreUpdates = true
    useEffect(() => {
        const delay = 200 * index;
        setTimeout(() => setIsExppanded(true), delay)
    }, [])

    return (
        <div className="flex flex-col gap-6">
            <UserCard
                name={faker.person.fullName()}
                avatarUrl={faker.image.personPortrait()}
            />
            <div className="w-full flex flex-row w-full">
                <Card className="w-full h-[30rem] max-w-[40rem]">

                </Card>
                <Card variant='secondary' className={
                    cn("max-w-[25rem] -z-1 shadow-lg  w-full bg-sidebar border border-app-border p-4 transition-all duration-600",
                        isExpanded ? "-translate-x-[4%] translate-y-4" : "-translate-x-[100%]"
                    )
                }>

                </Card>
            </div>

            {moreUpdates ? <div className="flex items-center justify-center">
                <div className="border w-full border-dashed mt-5 border-app-border/50" />
                <div className="text-sm text-app-primary text-center w-full mt-4">4 more updates, see all</div>
                <div className="border w-full border-dashed mt-5 border-app-border/50" />

            </div>
                : <div>
                    <div className="border w-full border-dashed mt-5 border-app-border/50" />
                </div>
            }
        </div>
    );
}

export default UpdateCard;