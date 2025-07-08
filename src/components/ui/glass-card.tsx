import * as React from "react"
import { cn } from "@/lib/utils"

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  as?: React.ElementType
}

const GlassCard = React.forwardRef<HTMLDivElement, GlassCardProps>(
  ({ className, as: Comp = "div", ...props }, ref) => (
    <Comp
      ref={ref}
      className={cn(
        "bg-black/20 backdrop-blur-lg",
        "border border-primary/20",
        "rounded-2xl shadow-2xl shadow-primary/10",
        className
      )}
      {...props}
    />
  )
)
GlassCard.displayName = "GlassCard"

export { GlassCard } 