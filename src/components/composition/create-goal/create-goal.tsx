"use client"

import { Badge, Button } from "@/components/storybook";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
import { Minus, Plus } from "lucide-react";
import React from "react";
import SearchFriends from "../updates/search-friends";
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Frequency } from "./create-goal.constants";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";

const formSchema = z.object({
    name: z.string().min(2, {
        message: "Goal name must be at least 2 characters.",
    }),
    description: z.string().min(5, {
        message: "Your description must be at least 5 characters"
    }),
    friend:
        z.string().min(2, {
            message: "Friend name must be at least 2 characters.",
        }),
    frequency: z.enum([Frequency.DAILY, Frequency.MONTHLY, Frequency.WEEKLY]),
    hours: z.number().optional(),
    times: z.number().optional(),
})
const CreateNewGoal = () => {
    const [goal, setGoal] = React.useState(350)

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            frequency: Frequency.DAILY
        },
    })

    function onClick(adjustment: number) {
        setGoal(Math.max(200, Math.min(400, goal + adjustment)))
    }

    function onSubmit(values: z.infer<typeof formSchema>) {
        //actions here
        console.log(values)
    }


    return (<Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
            <div className='flex w-full'>
                <div className="bg-sidebar p-5 w-1/3 flex items-center rounded-full justify-center">
                    {/**animated plant */}
                </div>
                <div className="flex flex-col gap-3 text-app-border p-2 mx-3 min-h-[40rem]">
                    <div className="mb-5">
                        <h1 className="text-6xl font-semibold ">Create a <span className="text-app-text">New</span> Goal</h1>
                        <p className="mx-4">Follow the instructions bellow to create a new goal</p>
                    </div>

                    <div className="flex items-center gap-5">
                        <Badge variant="lite" className="rounded-full border-none"> 1 </Badge>
                        <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                                <FormItem className="w-full">
                                    <FormLabel className="mx-2 my-1 text-app-border/70">Set a name for your Goal</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Name" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>
                    <div className="h-10">
                        <Separator orientation="vertical" className="mx-4" />
                    </div>
                    <div className="flex items-center gap-5">
                        <Badge variant="lite" className="rounded-full border-none"> 2 </Badge>
                        <FormField
                            control={form.control}
                            name="description"
                            render={({ field }) => (
                                <FormItem className="w-full">
                                    <FormLabel className="mx-2 my-1 text-app-border/70">Assign a description here</FormLabel>
                                    <FormControl>
                                        <Textarea placeholder="Description" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>
                    <div className="h-10">
                        <Separator orientation="vertical" className="mx-4" />
                    </div>
                    <div className="flex items-center gap-5">
                        <Badge variant="lite" className="rounded-full border-none"> 3</Badge>
                        <div className="w-full flex justify-between gap-5">
                            <p className="mx-2 my-1 text-app-border/70">Invite a Friend</p>
                            <FormField
                                control={form.control}
                                name="friend"
                                render={({ field }) => (
                                    <FormItem >
                                        <FormControl>
                                            <SearchFriends {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>
                    </div>

                    <div className="h-10">
                        <Separator orientation="vertical" className="mx-4" />
                    </div>
                    <div className="flex items-center gap-5">
                        <Badge variant="lite" className="rounded-full border-none"> 4 </Badge>
                        <div className="w-full flex justify-between gap-5">
                            <p className="mx-2 my-1 text-app-border/70">Set your activity.</p>
                            <FormField
                                control={form.control}
                                name="frequency"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormControl>
                                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                                                <SelectTrigger className="w-[180px] bg-sidebar border-app-border">
                                                    <SelectValue placeholder="Select frequency" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    <SelectGroup>
                                                        <SelectItem value={Frequency.DAILY}>{Frequency.DAILY}</SelectItem>
                                                        <SelectItem value={Frequency.WEEKLY}>{Frequency.WEEKLY}</SelectItem>
                                                        <SelectItem value={Frequency.MONTHLY}>{Frequency.MONTHLY}</SelectItem>
                                                    </SelectGroup>
                                                </SelectContent>
                                            </Select>
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
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
            </div>
            <div className="flex justify-end gap-2 my-5">
                <Button variant='outline'>Cancel</Button>
                <Button type="submit" variant='secondary' className="">Create</Button>
            </div>

        </form>
    </Form>
    )
}
export default CreateNewGoal;