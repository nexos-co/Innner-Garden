// src/lib/form-schema.ts
import { DaysOfWeek, Frequency } from "@/components/composition/create-goal/create-goal.constants";
import { z } from "zod";


export const formSchema = z.object({
    name: z.string().min(2, {
        message: "Goal name must be at least 2 characters.",
    }),
    tag: z.string().min(1, { message: "Please select or enter a tag." }), // Make tag required
    description: z.string().min(5, {
        message: "Your description must be at least 5 characters"
    }),
    friend:
        z.string().min(2, {
            message: "Friend name must be at least 2 characters.",
        }).optional(),
    // Step 3 fields
    frequency: z.nativeEnum(Frequency, { // Using nativeEnum for enums
        error: () => ({ message: "Please select a frequency." }) // Correct error mapping for nativeEnum
    }),
    days: z.array(z.nativeEnum(DaysOfWeek)).optional(),
    monthlyDates: z.array(z.date()).optional(),
    timesCount: z.coerce.number() // Use coerce to convert string from input to number
        .int("Count must be a whole number.")
        .min(1, "Count must be at least 1.")
        .max(999, "Count cannot exceed 999.")
        .optional(),
});
export type FormValues = z.infer<typeof formSchema>;
