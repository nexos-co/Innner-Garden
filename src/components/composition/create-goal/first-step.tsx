// src/components/create-goal/FirstStep.tsx
import { useForm } from "react-hook-form";
import React from 'react'; // Import React for JSX

// Shadcn UI Components
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from '@/components/ui/badge';
import { Input } from "@/components/ui/input";
import {
    FormField,
    FormItem,
    FormLabel,
    FormControl,
    FormMessage,
    FormDescription
} from "@/components/ui/form";

// Types
import type { FormValues } from "@/lib/form-schema";

// New: Import your SearchSelect component and example icons
import SearchSelect, { type SelectableItem } from "@/components/composition/create-goal/search-select"; // Adjust path
import { Book, Heart, Brain, Dumbbell, Wallet } from 'lucide-react'; // Example icons for tags
import { Textarea } from "@/components/ui/textarea";

interface FirstStepProps {
    form: ReturnType<typeof useForm<FormValues>>;
}

// Example predefined tags with icons/avatars
const predefinedTags: SelectableItem[] = [
    { id: "learning", name: "Learning", icon: <Book className="h-4 w-4" /> },
    { id: "health", name: "Health", icon: <Heart className="h-4 w-4" /> },
    { id: "fitness", name: "Fitness", icon: <Dumbbell className="h-4 w-4" /> },
    { id: "personal_growth", name: "Personal Growth", icon: <Brain className="h-4 w-4" /> },
    { id: "finance", name: "Finance", icon: <Wallet className="h-4 w-4" /> },
    // Add more as needed
];

export function FirstStep({ form }: FirstStepProps) {
    const { control } = form;

    return (
        <Card className="w-full">
            <CardHeader className='flex gap-5 pb-4'>
                <Badge variant='secondary' className="h-6 w-6 flex items-center justify-center rounded-full">1</Badge>
                <div>
                    <CardTitle>Goal Details</CardTitle>
                    <CardDescription>Give your goal a name and a brief description.</CardDescription>
                </div>
            </CardHeader>
            <CardContent className="p-6 border-t flex flex-col gap-6">

                <FormField
                    control={control}
                    name="name"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Goal Name</FormLabel>
                            <FormControl>
                                <Input placeholder="e.g., Learn Spanish" {...field} />
                            </FormControl>
                            <FormDescription>
                                A clear and concise name for your goal.
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={control}
                    name="tag"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Goal Category / Tag</FormLabel>
                            <FormControl>
                                <SearchSelect
                                    items={predefinedTags}
                                    selectedItemId={field.value} // field.value will be the ID/name string
                                    onSelectItem={(id) => field.onChange(id || "")} // Ensure string or empty string
                                    placeholder="Search or create tag..."
                                    emptyMessage="No tags found."
                                    dialogTitle="Select a Goal Category"
                                    triggerLabel="Select a tag"
                                />
                            </FormControl>
                            <FormDescription>
                                Categorize your goal to keep things organized.
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={control}
                    name="description"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Description</FormLabel>
                            <FormControl>
                                <Textarea
                                    placeholder="Briefly describe your goal, why it's important, or what you hope to achieve."
                                    {...field}
                                ></Textarea>
                            </FormControl>
                            <FormDescription>
                                Provide more details about your goal.
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />

            </CardContent>
        </Card>
    );
}
