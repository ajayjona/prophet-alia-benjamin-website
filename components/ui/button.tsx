import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { Slot } from "radix-ui"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-primary focus-visible:ring-primary/40 focus-visible:ring-[3px]",
  {
    variants: {
      variant: {
        /* Primary button: Champagne Gold bg, Deep Aubergine text, Light Gold hover */
        default: "bg-accent text-primary-dark font-semibold hover:bg-accent-light shadow-xs",
        /* Secondary button: Royal Purple bg, Pure White text, Deep Aubergine hover */
        secondary: "bg-primary text-surface font-semibold hover:bg-primary-dark shadow-xs",
        /* Outline button: transparent bg, Royal Purple text & border, Soft Sand hover */
        outline: "bg-transparent text-primary border border-primary hover:bg-surface-muted hover:text-primary",
        /* Ghost button: transparent bg, Royal Purple text, Soft Sand hover */
        ghost: "bg-transparent text-primary hover:bg-surface-muted hover:text-primary",
        /* Link button */
        link: "text-primary underline-offset-4 hover:underline hover:text-primary-dark",
        /* Fallback destructive using approved dark palette */
        destructive: "bg-primary-dark text-surface hover:bg-primary",
      },
      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        xs: "h-6 gap-1 rounded-md px-2 text-xs has-[>svg]:px-1.5 [&_svg:not([class*='size-'])]:size-3",
        sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
        icon: "size-9",
        "icon-xs": "size-6 rounded-md [&_svg:not([class*='size-'])]:size-3",
        "icon-sm": "size-8",
        "icon-lg": "size-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant = "default",
  size = "default",
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot.Root : "button"

  return (
    <Comp
      data-slot="button"
      data-variant={variant}
      data-size={size}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
