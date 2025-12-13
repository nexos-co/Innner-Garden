import { DaysOfWeek, Frequency } from "@/components/composition/create-goal/create-goal.constants";
import z from "zod";

export const formSchema = z.object({
    name: z.string().min(2, {
        message: "Goal name must be at least 2 characters.",
    }),
    description: z.string().min(5, {
        message: "Your description must be at least 5 characters"
    }),
    friend:
        z.string().min(2, {
            message: "Friend name must be at least 2 characters.",
        }).optional(),
    // Step 3 fields
    frequency: z.enum(Frequency, {
        error: () => ({ message: "Please select a frequency." })
    }),
    days: z.array(z.enum(DaysOfWeek)).optional(), 
    monthlyDates: z.array(z.date()).optional(), 

});
export type FormValues = z.infer<typeof formSchema>;