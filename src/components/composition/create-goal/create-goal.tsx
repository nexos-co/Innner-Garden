"use client"

import { Badge, Button } from "@/components/storybook";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
import { Minus, Plus } from "lucide-react";
import React from "react";
import SearchFriends from "../updates/search-friends";

enum frequency {
    DAILY = "Daily",
    WEEKLY = "Weekly",
    MONTHLY = "Monthly"
};
const CreateNewGoal = () => {
    const [goal, setGoal] = React.useState(350)

    function onClick(adjustment: number) {
        setGoal(Math.max(200, Math.min(400, goal + adjustment)))
    }

    return (
        <div className='flex w-full'>
            <div className="bg-sidebar p-5 w-1/3 flex items-center justify-center">
                {/**animated plant */}
            </div>
            <div className="flex flex-col gap-3 text-app-border p-2 mx-3 min-h-[40rem]">
                <div className="mb-5">
                    <h1 className="text-6xl font-semibold ">Create a <span className="text-app-text">New</span> Goal</h1>
                    <p className="mx-4">Follow the instructions bellow to create a new goal</p>
                </div>
                <div className="flex items-center gap-5">
                    <Badge variant="lite" className="rounded-full border-none"> 1 </Badge>
                    <div className="w-full">
                        <p className="mx-2 my-1 text-app-border/70">Set a name for your Goal</p>
                        <Input id="name" placeholder='Name' ></Input>
                    </div>
                </div>
                <div className="h-10">
                    <Separator orientation="vertical" className="mx-4" />
                </div>
                <div className="flex items-center gap-5">
                    <Badge variant="lite" className="rounded-full border-none"> 2 </Badge>
                    <div className="w-full">
                        <p className="mx-2 my-1 text-app-border/70">Assign a description here</p>
                        <Textarea id="description" placeholder='Description' ></Textarea>
                    </div>
                </div>
                <div className="h-10">
                    <Separator orientation="vertical" className="mx-4" />
                </div>
                <div className="flex items-center gap-5">
                    <Badge variant="lite" className="rounded-full border-none"> 3</Badge>
                    <div className="w-full flex justify-between gap-5">
                        <p className="mx-2 my-1 text-app-border/70">Invite a Friend</p>
                        <SearchFriends />
                    </div>
                </div>
            
                <div className="h-10">
                    <Separator orientation="vertical" className="mx-4" />
                </div>
                <div className="flex items-center gap-5">
                    <Badge variant="lite" className="rounded-full border-none"> 4 </Badge>
                    <div className="w-full flex justify-between gap-5">
                        <p className="mx-2 my-1 text-app-border/70">Set your activity.</p>
                        <Select>
                            <SelectTrigger className="w-[180px] bg-sidebar border-app-border">
                                <SelectValue placeholder="Select Frequency" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    <SelectItem value={frequency.DAILY}>{frequency.DAILY}</SelectItem>
                                    <SelectItem value={frequency.WEEKLY}>{frequency.WEEKLY}</SelectItem>
                                    <SelectItem value={frequency.MONTHLY}>{frequency.MONTHLY}</SelectItem>
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                    </div>
                </div>
                <div className="mx-5 my-3">
                    <div className="p-3 pb-0">
                        <div className="flex items-center justify-center space-x-2">
                            <Button
                                variant="outline"
                                size="icon"
                                className="h-8 w-8 shrink-0 rounded-full"
                                onClick={() => onClick(-10)}
                                disabled={goal <= 200}
                            >
                                <Minus />
                                <span className="sr-only">Decrease</span>
                            </Button>
                            <div className="flex-1 text-center">
                                <div className="text-7xl text-app-primary font-bold tracking-tighter">
                                    {goal}
                                </div>
                                <div className="text-app-border text-[0.70rem] uppercase">
                                    hours
                                </div>
                            </div>
                            <Button
                                variant="outline"
                                size="icon"
                                className="h-8 w-8 shrink-0 rounded-full"
                                onClick={() => onClick(10)}
                                disabled={goal >= 400}
                            >
                                <Plus />
                                <span className="sr-only">Increase</span>
                            </Button>
                        </div>

                    </div>
                </div>
            </div>
        </div>)
}
export default CreateNewGoal;