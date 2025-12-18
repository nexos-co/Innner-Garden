import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { format } from "date-fns";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Calendar } from "@/components/ui/calendar";
import {
    FormField,
    FormItem,
    FormLabel,
    FormControl,
    FormMessage,
    FormDescription
} from "@/components/ui/form";
import { DaysOfWeek, DAY_INITIALS, WORK_DAYS } from "./create-goal.constants";
import type { FormValues } from "@/lib/form-schema";
import { Frequency } from './create-goal.constants';
import { Badge } from '@/components/storybook';
import { Input } from '@/components/ui/input';

interface SecondStepProps {
    form: ReturnType<typeof useForm<FormValues>>;
}

export function SecondStep({ form }: SecondStepProps) {
    const { control, setValue, getValues } = form;
    const [displayFrequency, setDisplayFrequency] = useState<Frequency>(getValues("frequency"));
    const [isTimesCountManual, setIsTimesCountManual] = useState(false);

    useEffect(() => {
        const currentDaysInForm = getValues("days");
        setValue("days", [], { shouldValidate: true });
        setValue("monthlyDates", [], { shouldValidate: true });
        setValue("timesCount", undefined, { shouldValidate: false });

        setIsTimesCountManual(false);

        switch (displayFrequency) {
            case Frequency.DAILY:
                setValue("days", Object.values(DaysOfWeek), { shouldValidate: true });
                setValue("timesCount", 7, { shouldValidate: true });
                break;
            case Frequency.WEEKLY:
                if (!currentDaysInForm || currentDaysInForm.length === 0 || getValues("frequency") !== Frequency.WEEKLY) {
                    setValue("days", WORK_DAYS, { shouldValidate: true });
                    setValue("timesCount", WORK_DAYS.length, { shouldValidate: true });
                } else {
                    setValue("days", currentDaysInForm, { shouldValidate: true });
                    setValue("timesCount", currentDaysInForm.length, { shouldValidate: true });
                }
                break;
            case Frequency.MONTHLY:
                break;
            default:
                break;
        }
    }, [displayFrequency, setValue, getValues]);


    const renderSelectedDateBadges = (dates: Date[] | undefined) => {
        if (!dates || dates.length === 0) {
            return <p className="text-sm text-muted-foreground mt-2">No dates selected.</p>;
        }

        const sortedDates = [...dates].sort((a, b) => a.getTime() - b.getTime());

        return (
            <div className="flex flex-wrap gap-2 mt-2">
                {sortedDates.map((date, index) => (
                    <Badge key={index} variant="success" className=" text-sm">
                        {format(date, "MMM dd, yyyy")}
                    </Badge>
                ))}
            </div>
        );
    };

    return (
        <Card className="w-full">
            <CardHeader className='flex gap-5 pb-4'>
                <Badge variant='secondary' className="h-6 w-6 flex items-center justify-center rounded-full">3</Badge>
                <div>
                    <CardTitle>Set Schedule</CardTitle>
                    <CardDescription>How often do you want to work on your goal?</CardDescription>
                </div>
            </CardHeader>
            <CardContent>
                <div className="p-6 border-t flex gap-6 items-start">
                    <div>
                        <FormField
                            control={control}
                            name="frequency"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Goal Frequency</FormLabel>
                                    <Select
                                        onValueChange={(value: Frequency) => {
                                            field.onChange(value);
                                            setDisplayFrequency(value);
                                        }}
                                        defaultValue={field.value}
                                    >
                                        <FormControl>
                                            <SelectTrigger className="w-[200px] mt-1">
                                                <SelectValue placeholder="Select frequency" />
                                            </SelectTrigger>
                                        </FormControl>
                                        <SelectContent>
                                            <SelectGroup>
                                                {Object.values(Frequency).map((freq) => (
                                                    <SelectItem key={freq} value={freq}>{freq}</SelectItem>
                                                ))}
                                            </SelectGroup>
                                        </SelectContent>
                                    </Select>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                    </div>

                    {displayFrequency === Frequency.WEEKLY && (
                        <div>
                            <FormField
                                control={control}
                                name="days"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>* Set days of the week?</FormLabel>
                                        <FormControl>
                                            <ToggleGroup
                                                type="multiple"
                                                value={field.value || []}
                                                onValueChange={(newDays: string[]) => {
                                                    field.onChange(newDays as DaysOfWeek[]);

                                                    if (newDays.length > 0) {
                                                        setValue("timesCount", newDays.length, { shouldValidate: true });
                                                        setIsTimesCountManual(false);
                                                    } else {
                                                        setValue("timesCount", undefined, { shouldValidate: true });
                                                        setIsTimesCountManual(false);
                                                    }
                                                }}
                                                className="flex mt-1 flex-wrap border justify-start"
                                                disabled={isTimesCountManual}
                                            >
                                                {Object.values(DaysOfWeek).map((day) => (
                                                    <ToggleGroupItem
                                                        key={day}
                                                        value={day}
                                                        aria-label={`Toggle ${day}`}
                                                        className="h-10 w-10 text-sm font-semibold rounded-md m-2 border border-primary
                                                               data-[state=on]:bg-primary data-[state=on]:text-primary-foreground
                                                               hover:bg-accent hover:text-accent-foreground flex items-center justify-center"
                                                    >
                                                        {DAY_INITIALS[day]}
                                                    </ToggleGroupItem>
                                                ))}
                                            </ToggleGroup>
                                        </FormControl>
                                        <FormDescription>
                                            Set a specific specific days or set a number of times.
                                        </FormDescription>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={control}
                                name="timesCount"
                                render={({ field }) => (
                                    <FormItem className='mt-3'>
                                        <FormLabel>* Or Times</FormLabel>
                                        <FormControl>
                                            <Input
                                                type="number"
                                                placeholder="5"
                                                min={1}
                                                {...field}
                                                value={field.value === undefined ? "" : field.value}
                                                onChange={(e) => {
                                                    const value = e.target.value;
                                                    const numValue = value === "" ? undefined : Number(value);

                                                    field.onChange(numValue);

                                                    if (numValue !== undefined && numValue >= 1) {
                                                        setIsTimesCountManual(true);
                                                        setValue("days", [], { shouldValidate: true });
                                                    } else {
                                                        setIsTimesCountManual(false);
                                                    }
                                                }}
                                                className="mt-1 w-[200px] border"
                                            />
                                        </FormControl>
                                        <FormDescription>
                                            When you select a number directly can not add specific dates.
                                        </FormDescription>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>
                    )}

                    {displayFrequency === Frequency.DAILY && (
                        <FormItem>
                            <FormLabel>Daily Goal</FormLabel>
                            <FormControl>
                                <div className="flex flex-wrap gap-2 justify-start mt-1 opacity-70 cursor-not-allowed">
                                    {Object.values(DaysOfWeek).map((day) => (
                                        <div
                                            key={day}
                                            className="h-10 w-10 text-sm font-semibold rounded-md
                                                   bg-primary text-primary-foreground
                                                   flex items-center justify-center"
                                        >
                                            {DAY_INITIALS[day]}
                                        </div>
                                    ))}
                                </div>
                            </FormControl>
                            <FormMessage />
                            <FormDescription className='flex justify-center'>Your goal is set for every day of the week.</FormDescription>
                        </FormItem>
                    )}

                    {displayFrequency === Frequency.MONTHLY && (
                        <FormField
                            control={control}
                            name="monthlyDates"
                            render={({ field }) => (
                                <FormItem className="flex flex-col">
                                    <FormLabel>* Which dates of the month?</FormLabel>

                                    <Calendar
                                        mode="multiple"
                                        selected={field.value || []}
                                        onSelect={field.onChange}
                                    />
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                    )}

                </div>
            </CardContent>
        </Card>
    );
}