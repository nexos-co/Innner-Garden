import  { useState } from 'react';
import { useForm, FormProvider, type Resolver } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Check, Loader2 } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { cn } from "@/lib/utils";
import { formSchema, type FormValues } from '@/lib/form-schema';
import { Frequency, WORK_DAYS } from './create-goal.constants';
import { FirstStep } from './first-step';
import { ThirdStep } from './third-step';
import { SecondStep } from './second-step';


const STEPS = [
    { id: "step1", label: "Goal Details" },
    { id: "step2", label: "Invite Friend" },
    { id: "step3", label: "Set Schedule" },
];

export default function CreateNewGoal() {
    const [currentStep, setCurrentStep] = useState(0);
    const [completedSteps, setCompletedSteps] = useState<number[]>([]);

    const form = useForm<FormValues>({
        resolver: zodResolver(formSchema) as Resolver<FormValues>,
        defaultValues: {
            name: "",
            tag: "",
            description: "",
            friend: undefined,
            frequency: Frequency.WEEKLY,
            days: WORK_DAYS,
            monthlyDates: [],
            timesCount: undefined, 
        },
    });

    const { trigger, getValues, formState: { errors } } = form;

    const handleNext = async () => {
        let fieldsToValidate: (keyof FormValues)[] = [];
        if (currentStep === 0) { 
            fieldsToValidate = ["name", "tag", "description"];
        } else if (currentStep === 1) { 
            fieldsToValidate = ["friend"];
        } else if (currentStep === 2) { 
            fieldsToValidate = ["frequency", "timesCount"];
            const freq = getValues("frequency");
            if (freq === Frequency.WEEKLY) {
                fieldsToValidate.push("days");
            } else if (freq === Frequency.MONTHLY) {
                fieldsToValidate.push("monthlyDates");
            }
        }

        const stepIsValid = await trigger(fieldsToValidate, { shouldFocus: true });

        if (stepIsValid) {
            if (!completedSteps.includes(currentStep)) {
                setCompletedSteps([...completedSteps, currentStep]);
            }
            if (currentStep < STEPS.length - 1) {
                setCurrentStep(currentStep + 1);
            } else {
                console.log("Form submitted!", getValues());
                alert("Form submitted! Check console for data.");
            }
        } else {
            console.log("Validation errors:", errors);
        }
    };

    const handlePrevious = () => {
        if (currentStep > 0) {
            setCurrentStep(currentStep - 1);
        }
    };

    const renderStepTrigger = (stepIndex: number) => {
        const isActive = currentStep === stepIndex;
        const isCompleted = completedSteps.includes(stepIndex) || currentStep > stepIndex;

        return (
            <TabsTrigger
                key={STEPS[stepIndex].id}
                value={STEPS[stepIndex].id}
                className={cn(
                    "flex items-center gap-2 relative",
                    isCompleted && "text-primary",
                    isActive && "font-bold text-background",
                    !isCompleted && !isActive && "text-muted-foreground opacity-60 pointer-events-none"
                )}
                disabled={!isCompleted && !isActive}
                onClick={() => {
                    if (stepIndex < currentStep || isCompleted) {
                        setCurrentStep(stepIndex);
                    }
                }}
            >
                {isCompleted && currentStep !== stepIndex ? (
                    <Check className="h-4 w-4" />
                ) : isActive ? (
                    <Loader2 className="h-4 w-4 animate-spin text-background" />
                ) : (
                    <div className="h-4 w-4 text-center">{stepIndex + 1}</div>
                )}
                {STEPS[stepIndex].label}
            </TabsTrigger>
        );
    };

    return (
        <Card className="max-w-3xl mx-auto my-8">
            <CardHeader>
                <CardTitle className="text-3xl font-bold">Create <span className='text-primary'>New</span> Goal</CardTitle>
            </CardHeader>
            <CardContent>
                <Tabs value={STEPS[currentStep].id} className="w-full">
                    <TabsList className="grid w-full grid-cols-3 mb-8">
                        {STEPS.map((_, index) => renderStepTrigger(index))}
                    </TabsList>

                    <FormProvider {...form}>
                        <form onSubmit={form.handleSubmit(handleNext)}>
                            <TabsContent value="step1">
                                <FirstStep form={form} />
                            </TabsContent>

                            <TabsContent value="step2">
                                <ThirdStep form={form} />
                            </TabsContent>

                            <TabsContent value="step3">
                                <SecondStep form={form} />
                            </TabsContent>

                            {/* Navigation Buttons */}
                            <div className="flex justify-between mt-8 pt-4 border-t">
                                {currentStep > 0 && (
                                    <Button variant="outline" onClick={handlePrevious} type="button">
                                        Previous
                                    </Button>
                                )}
                                <div className={currentStep === 0 ? "ml-auto" : ""}>
                                    <Button type="submit">
                                        {currentStep < STEPS.length - 1 ? "Next" : "Submit"}
                                    </Button>
                                </div>
                            </div>
                        </form>
                    </FormProvider>
                </Tabs>
            </CardContent>
        </Card>
    );
}