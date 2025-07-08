import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground shadow-xs hover:bg-primary/90",
        destructive:
          "bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        outline:
          "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
        secondary:
          "bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80",
        ghost:
          "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
        link: "text-primary underline-offset-4 hover:underline",
        // Cyberpunk Variants
        cyber: "relative bg-transparent border-2 border-primary text-primary font-orbitron font-bold tracking-wide hover:shadow-2xl hover:shadow-primary/50 hover:scale-105 overflow-hidden transition-all duration-300 before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-primary/20 before:to-transparent before:-translate-x-full hover:before:translate-x-full before:transition-transform before:duration-1000",
        hacker: "relative bg-background/80 border-2 border-primary/50 text-primary backdrop-blur-sm font-fira-code font-bold hover:border-primary hover:shadow-lg hover:shadow-primary/30 transition-all duration-300 after:absolute after:top-0 after:left-0 after:w-full after:h-0.5 after:bg-gradient-to-r after:from-transparent after:via-primary after:to-transparent after:animate-pulse",
        matrix: "relative bg-primary/10 border border-primary/30 text-primary font-rajdhani font-bold hover:bg-primary/20 hover:border-primary/60 hover:shadow-md hover:shadow-primary/20 transition-all duration-300 after:absolute after:inset-0 after:border-2 after:border-primary/20 after:rounded-md after:animate-pulse after:opacity-0 hover:after:opacity-100",
        portal: "relative bg-gradient-to-r from-primary/20 via-primary/30 to-primary/20 border-2 border-primary text-primary font-orbitron font-bold hover:shadow-2xl hover:shadow-primary/50 hover:scale-110 transition-all duration-500 before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-primary/10 before:to-transparent before:animate-pulse",
      },
      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
        xl: "h-12 rounded-lg px-8 py-4 text-lg has-[>svg]:px-6",
        xxl: "h-16 rounded-xl px-12 py-6 text-xl has-[>svg]:px-8",
        icon: "size-9",
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
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot : "button"

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
