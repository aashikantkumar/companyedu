import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { Slot } from "radix-ui"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "group/button inline-flex shrink-0 items-center justify-center gap-2 whitespace-nowrap rounded-[var(--radius-xl)] border border-transparent font-bold uppercase tracking-[0.08em] transition-all duration-200 outline-none focus-visible:ring-2 focus-visible:ring-[color:rgba(27,58,93,0.25)] focus-visible:ring-offset-2 focus-visible:ring-offset-white active:translate-y-px disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        primary:
          "bg-[linear-gradient(135deg,var(--primary)_0%,var(--primary-light)_100%)] text-white shadow-[0_4px_15px_rgba(23,65,108,0.3)] hover:-translate-y-0.5 hover:bg-[linear-gradient(135deg,var(--primary-dark)_0%,var(--primary)_100%)] hover:shadow-[0_8px_25px_rgba(23,65,108,0.4)]",
        secondary:
          "bg-[linear-gradient(135deg,var(--secondary)_0%,var(--secondary-dark)_100%)] text-white shadow-[0_4px_15px_rgba(246,131,14,0.3)] hover:-translate-y-0.5 hover:shadow-[0_8px_25px_rgba(246,131,14,0.4)]",
        outline:
          "border-2 border-[var(--primary)] bg-transparent text-[var(--primary)] hover:-translate-y-0.5 hover:bg-[var(--primary)] hover:text-white",
        white:
          "border-2 border-white bg-white text-[var(--primary)] shadow-[0_4px_15px_rgba(0,0,0,0.15)] hover:-translate-y-0.5 hover:bg-transparent hover:text-white hover:shadow-[0_8px_25px_rgba(0,0,0,0.2)]",
      },
      size: {
        default: "px-5 py-3 text-sm",
        sm: "px-4 py-2.5 text-xs",
        lg: "px-8 py-3.5 text-sm",
        icon: "size-10 rounded-full p-0",
        "icon-sm": "size-8 rounded-full p-0",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  }
)

function Button({
  className,
  variant = "primary",
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
