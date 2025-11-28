import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center justify-center rounded-full border px-3 py-1 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden",
  {
    variants: {
      variant: {
        default:
          "border-app-border bg-app-primary text-app-border hover:bg-app-primary/90",
        lite:
          "border-app-border bg-sidebar text-app-border hover:bg-sidebar/70",
        secondary:
          "bg-app-border text-background hover:bg-app-border/90",
        destructive:
          "bg-destructive/10 border-destructive text-destructive hover:bg-destructive/20",
        success:
          "bg-success/10 text-success border-success dark:bg-success/60 hover:bg-success/20",
        outline:
          "text-app-border border-app-border bg-transparent hover:bg-sidebar/40",
        blue:
          "bg-blue-100 text-blue-800 border-blue-800 hover:bg-blue-200",
        purple:
          "bg-purple-200 text-purple-900 border-purple-900 hover:bg-purple-300",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

function Badge({
  className,
  variant,
  asChild = false,
  ...props
}: React.ComponentProps<"span"> &
  VariantProps<typeof badgeVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : "span"

  return (
    <Comp
      data-slot="badge"
      className={cn(badgeVariants({ variant }), className)}
      {...props}
    />
  )
}

export { Badge, badgeVariants }
