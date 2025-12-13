"use client"

import { Badge, Button } from "@/components/storybook";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
import { AlarmMinus, ChevronRight, Minus, Plus, Search, Share2Icon, WrenchIcon } from "lucide-react";
import React, { useState } from "react";
import SearchFriends from "../updates/search-friends";
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { AVATARS, CURATED_TOGGLE_AVATAR_IDS, DAY_INITIALS, DaysOfWeek, Frequency } from "./create-goal.constants";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { formSchema, type FormValues } from "@/lib/form-schema";


const getCuratedToggleAvatars = () => AVATARS.filter(avatar =>
    CURATED_TOGGLE_AVATAR_IDS.includes(avatar.id)
);



function CreateNewGoal() {
    const curatedAvatars = getCuratedToggleAvatars();
    const [selectedEmojiId, setSelectedEmojiId] = useState<string>(curatedAvatars[0]?.id || "");
    const [selectedFrequency, setSelectedFrequency] = useState<Frequency>(Frequency.WEEKLY || Frequency.DAILY);
    const [selectedDays, setSelectedDays] = useState<DaysOfWeek[]>([]); // State for selected days


    const [currentStep, setCurrentStep] = useState(0); // 0-indexed
    const [completedSteps, setCompletedSteps] = useState<number[]>([]);

    const form = useForm<FormValues>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            description: "",
            friend: "",
            frequency: Frequency.DAILY,
        },
    })

    const handleDaysChange = (newDays: string[]) => {
        // Assert that the string array is treated as DaysOfWeek array
        setSelectedDays(newDays as DaysOfWeek[]);
        console.log("Selected Days:", newDays);
    };

    const onSubmit = () => {

    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
                <div className=" w-full p-4">
                    <div className="flex flex-col items-center mb-5">
                        <h1 className="text-6xl font-semibold ">Create a <span className="text-primary">New</span> Goal</h1>
                        <p className="mx-4">Follow the instructions bellow to create a new goal</p>
                        <div className="w-[900px] mt-6">
                            <Tabs defaultValue="name-description">
                                <TabsList className="w-full">
                                    <TabsTrigger value="name-description"></TabsTrigger>
                                    <TabsTrigger value="frequency"></TabsTrigger>
                                    <TabsTrigger value="invite-friend"></TabsTrigger>

                                </TabsList>
                                <TabsContent className="flex w-full" value="name-description">
                                    <Card className="w-1/2">
                                        <CardHeader className="flex font-bold gap-5">
                                            <Badge variant='success' className="">1</Badge> My next Goal
                                        </CardHeader>
                                        <CardDescription className="ml-10 mb-2"> Set a name and description for your goal</CardDescription>
                                        <CardContent className="ml-6 pt-2 grid gap-3">
                                            <FormField
                                                control={form.control}
                                                name="name"
                                                render={({ field }) => (
                                                    <FormItem className="w-full">
                                                        {//  <FormLabel className="mx-2 my-1">Set a name for your Goal</FormLabel>
                                                        }
                                                        <FormControl>
                                                            <Input placeholder="Name..." {...field} />
                                                        </FormControl>
                                                        <FormMessage />
                                                    </FormItem>
                                                )}
                                            />
                                            <FormField
                                                control={form.control}
                                                name="description"
                                                render={({ field }) => (
                                                    <FormItem className="w-full">
                                                        {//<FormLabel className="mx-2 my-1">Add a short description</FormLabel>
                                                        }
                                                        <FormControl>
                                                            <Textarea placeholder="Description..." {...field} />
                                                        </FormControl>
                                                        <FormMessage />
                                                    </FormItem>
                                                )}
                                            />

                                        </CardContent>
                                    </Card>
                                    <Card className="w-1/2 h-full pt-6">
                                        <div className="flex gap-4">
                                            <Button variant='primary' className="text-background"> Add<Plus /></Button>
                                            <div className="flex items-center border rounded-md bg-background">
                                                <Input className='border-transparent rounded-r-none border-r' placeholder='Find A Tag....' />
                                                <Search size={20} className="mx-2" />

                                            </div>
                                        </div>
                                        <CardContent className="flex gap-3 w-full justify-between items-center" >
                                            <div className="mr-4 ">
                                                <Avatar className={cn("size-[100px] border mt-2")}>
                                                    <AvatarImage
                                                        src={AVATARS.find(a => a.id === selectedEmojiId)?.url}
                                                        alt={AVATARS.find(a => a.id === selectedEmojiId)?.label || "Selected Emoji"} />
                                                    <AvatarFallback>GIF</AvatarFallback>
                                                </Avatar>
                                            </div>
                                            <div className="flex">
                                                <ToggleGroup
                                                    type="single"
                                                    value={selectedEmojiId}
                                                    onValueChange={(value) => {
                                                        if (value) {
                                                            setSelectedEmojiId(value);
                                                            console.log("Selected emoji ID:", value);
                                                        }
                                                    }}
                                                    className="grid grid-cols-5 grid-rows-2 gap-1"
                                                >
                                                    {curatedAvatars.map((avatar) => (
                                                        <ToggleGroupItem
                                                            key={avatar.id}
                                                            value={avatar.id}
                                                            aria-label={`Select ${avatar.label}`}
                                                            className="flex items-center justify-center p-1 h-8 w-8 data-[state=on]:bg-primary/20" // Example styling for active state
                                                        >
                                                            <img
                                                                src={avatar.url}
                                                                alt={avatar.label}
                                                                className="h-6 w-6 object-contain"
                                                            />
                                                        </ToggleGroupItem>
                                                    ))}
                                                </ToggleGroup>
                                            </div>

                                        </CardContent>

                                        <CardFooter className="flex justify-end mt-5 ">
                                            <Button className="text-background" variant='primary'>Next <ChevronRight /></Button>
                                        </CardFooter>
                                    </Card>

                                </TabsContent>
                                <TabsContent value="frequency">
                                    <Card>
                                        <div className="flex justify-between">
                                            <div>
                                                <CardHeader className="flex gap-5 font-bold">
                                                    <Badge variant='success'>2</Badge> Set Frequency & Days
                                                </CardHeader>
                                                <CardDescription className="ml-10 mb-2">
                                                    How often and on which days do you want to work on your goal?
                                                </CardDescription>
                                            </div>
                                            <div className="flex">
                                                <Select value={selectedFrequency} onValueChange={(value: Frequency) => setSelectedFrequency(value)}>
                                                    <SelectTrigger className="border border-primary">
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
                                            </div>
                                        </div>
                                        <CardContent className="grid gap-6">

                                            {selectedFrequency === (Frequency.WEEKLY || Frequency.DAILY) && (
                                                <div className="flex justify-center">
                                                    <ToggleGroup
                                                        type="multiple"
                                                        value={selectedDays}
                                                        onValueChange={handleDaysChange}
                                                        className="flex flex-wrap justify-center items-center border border-primary"
                                                    >
                                                        {Object.values(DaysOfWeek).map((day) => (
                                                            <ToggleGroupItem
                                                                key={day}
                                                                value={day} // 'day' is a string, which is correct for ToggleGroupItem
                                                                aria-label={`Toggle ${day}`}
                                                                className="h-10 w-10 text-sm font-semibold rounded-md my-1 mx-1
                                                   data-[state=on]:bg-primary data-[state=on]:text-primary-foreground
                                                   hover:bg-accent hover:text-accent-foreground flex items-center justify-center"
                                                            >
                                                                {DAY_INITIALS[day]}
                                                            </ToggleGroupItem>
                                                        ))}
                                                    </ToggleGroup>

                                                </div>
                                            )}

                                        </CardContent>
                                        <CardFooter className="flex justify-end">
                                            <Button className="text-background" variant='primary'>Next <ChevronRight /></Button>
                                        </CardFooter>
                                    </Card>
                                </TabsContent>
                            </Tabs>
                            <Tabs>
                                <TabsContent value="invite-friend" className="rounded-md min-h-[60vh] p-5">
                                    <Card variant='secondary'>
                                        <CardContent >
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
                                        </CardContent>
                                    </Card>
                                </TabsContent>
                            </Tabs>
                        </div>
                    </div>

                </div>


            </form>
        </Form >
    )
}
export default CreateNewGoal;