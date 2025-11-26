import type { FunctionComponent } from "react";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

import { CalendarDays } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
} from "@/components/ui/card";
import UserCard from "@/components/atoms/user-card";

interface UpdatesPreviewProps {

}

const preview = [
    {
        id: 'xl2',
        user: {
            name: 'John Doe',
            avatarUrl: '',
        },
        goal: {
            name: 'Make Exercise',
            type: 'schedule',
        },
        milestone: {
            type: 'in-progress',
            title: 'I am on the gym right now',
            datetime: new Date(),
        }
    },
    {
        id: 'xl3',
        user: {
            name: 'John Doe',
            avatarUrl: '',
        },
        goal: {
            name: 'Make Exercise',
            type: 'schedule',
        },
        milestone: {
            type: 'in-progress',
            title: 'I am on the gym right now',
            datetime: new Date(),
        }
    },
     {
        id: 'xl6',
        user: {
            name: 'John Doe',
            avatarUrl: '',
        },
        goal: {
            name: 'Make Exercise',
            type: 'schedule',
        },
        milestone: {
            type: 'in-progress',
            title: 'I am on the gym right now',
            datetime: new Date(),
        }
    },
    {
        id: 'xl4',
        user: {
            name: 'John Doe',
            avatarUrl: '',
        },
        goal: {
            name: 'Make Exercise',
            type: 'schedule',
        },
        milestone: {
            type: 'in-progress',
            title: 'I am on the gym right now',
            datetime: new Date(),
        }
    }
]



const UpdatesPreview: FunctionComponent<UpdatesPreviewProps> = () => {
    return (
        <ScrollArea className=" overflow-hidden rounded-md whitespace-nowrap">
            <div className="flex w-max space-x-4">
                {preview.map((preview) => (
                    <Card key={preview.id} className="hover:shadow-xl transition-all duration-500 shrink-0 shadow w-[17rem] rounded-md aspect-4/5 border border-app-border p-2 space-y-2">
                        <CardHeader>
                           <UserCard 
                           name={preview.user.name}
                           avatarUrl={preview.user.avatarUrl}
                           additionalText={preview.milestone.datetime.toLocaleDateString() + ' at ' +  preview.milestone.datetime.toLocaleTimeString()}/>
                        </CardHeader>
                        <CardContent className="space-y-2">
                            <div className="space-y-4 bg-sidebar p-2">
                                <p className="text-lg">{preview.milestone.title}</p>
                                <p className="flex items-center gap-2 text-lg"> <CalendarDays size={18} /> GOAL: {preview.goal.name}</p>
                            </div>

                            <div className="flex justify-end gap-2">
                                <Badge> {preview.goal.type} </Badge>
                                <Badge variant='outline' >{preview.milestone.type} </Badge>
                            </div>
                        </CardContent>

                        <CardFooter className="flex-1 items-end">
                            <div className="w-full">
                                <Button className="text-sidebar w-full" > Review</Button>
                            </div>
                        </CardFooter>

                    </Card>
                ))}
            </div>
            <ScrollBar orientation="horizontal" />
        </ScrollArea>
    );
}

export default UpdatesPreview;