import * as React from "react"
import * as SwitchPrimitives from "@radix-ui/react-switch"
import { cva, type VariantProps } from "class-variance-authority" 
import { cn } from "@/lib/utils"

const switchVariants = cva(
  "peer inline-flex shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "data-[state=checked]:bg-primary data-[state=unchecked]:bg-input",
        appPrimary:
          "data-[state=checked]:bg-app-primary data-[state=unchecked]:bg-app-border",
        sidebar:
          "data-[state=checked]:bg-sidebar text-app-border data-[state=unchecked]:bg-app-border",
        success:
          "data-[state=checked]:bg-success data-[state=unchecked]:bg-success/40",
        destructive:
          "data-[state=checked]:bg-red-500 data-[state=unchecked]:bg-gray-300",
      },
      size: {
        default: "h-[24px] w-[44px]", 
        sm: "h-[20px] w-[36px]",
        lg: "h-[28px] w-[52px]",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

interface SwitchProps
  extends React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root>,
    VariantProps<typeof switchVariants> {} 
const Switch = React.forwardRef<
  React.ElementRef<typeof SwitchPrimitives.Root>,
  SwitchProps 
>(({ className, variant, size, ...props }, ref) => ( 
  <SwitchPrimitives.Root
    className={cn(
      switchVariants({ variant, size }),
      className
    )}
    {...props}
    ref={ref}
  >
    <SwitchPrimitives.Thumb
      className={cn(
        "pointer-events-none block rounded-full bg-background shadow-lg ring-0 transition-transform",
        size === "sm" && "h-4 w-4 data-[state=checked]:translate-x-4 data-[state=unchecked]:translate-x-0",
        size === "lg" && "h-6 w-6 data-[state=checked]:translate-x-6 data-[state=unchecked]:translate-x-0",
        (size === "default" || !size) && "h-5 w-5 data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0"
      )}
    />
  </SwitchPrimitives.Root>
))
Switch.displayName = SwitchPrimitives.Root.displayName

export { Switch, switchVariants }

