import { useForm } from "react-hook-form";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from '@/components/ui/badge'; 
import {
    FormField,
    FormItem,
    FormLabel,
    FormControl,
    FormMessage,
    FormDescription
} from "@/components/ui/form"; 
import type { FormValues } from "@/lib/form-schema";
import SearchFriends from "../updates/search-friends";

interface ThirdStepProps {
    form: ReturnType<typeof useForm<FormValues>>;
}

export function ThirdStep({ form }: ThirdStepProps) {
    const { control } = form; 

    return (
        <Card className="w-full">
            <CardHeader className='flex gap-5 pb-4'>
                <Badge variant='secondary' className="h-6 w-6 flex items-center justify-center rounded-full">2</Badge>
                <div>
                    <CardTitle>Invite a Friend</CardTitle>
                    <CardDescription>Share your goal with a friend for accountability and support.</CardDescription>
                </div>
            </CardHeader>
            <CardContent className="p-6 border-t flex flex-col gap-6">

                <FormField
                    control={control}
                    name="friend"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Select a Friend</FormLabel>
                            <FormControl>
                                <SearchFriends
                                    selectedFriendId={field.value} 
                                    onSelectFriend={field.onChange} 
                                    className="w-full"
                                />
                            </FormControl>
                            <FormDescription>
                                Your friend will receive an invitation to join your goal.
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />
            </CardContent>
        </Card>
    );
}
