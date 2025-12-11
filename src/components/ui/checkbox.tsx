// src/components/ui/checkbox.tsx
"use client"

import * as React from "react"
import * as CheckboxPrimitive from "@radix-ui/react-checkbox"
import { Check } from "lucide-react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

// 1. Define the variants using cva
const checkboxVariants = cva(
  "peer h-4 w-4 shrink-0 rounded-sm border ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
  {
    variants: {
      variant: {
        // Default (Shadcn standard: white background, primary border/check)
        default:
          "border-primary data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground",
        
        // Success (Green)
        success:
          "border-success data-[state=checked]:bg-success data-[state=checked]:text-white",
        
        // Destructive (Red)
        destructive:
          "border-destructive data-[state=checked]:bg-destructive data-[state=checked]:text-white",

        // Secondary/Outline (Good for neutral or darker backgrounds)
        secondary:
          "border-secondary data-[state=checked]:bg-secondary data-[state=checked]:text-secondary-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

// 2. Define the props interface to include variants
interface CheckboxProps
  extends React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>,
    VariantProps<typeof checkboxVariants> {}

const Checkbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  CheckboxProps
>(({ className, variant, ...props }, ref) => (
  <CheckboxPrimitive.Root
    ref={ref}
    className={cn(
      checkboxVariants({ variant }), // Apply the cva variants
      className
    )}
    {...props}
  >
    <CheckboxPrimitive.Indicator
      className={cn("flex items-center justify-center text-current")}
    >
      <Check className="h-4 w-4" />
    </CheckboxPrimitive.Indicator>
  </CheckboxPrimitive.Root>
))
Checkbox.displayName = CheckboxPrimitive.Root.displayName

// 3. Export the component and variants
export { Checkbox, checkboxVariants }

