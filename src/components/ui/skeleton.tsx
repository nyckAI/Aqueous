import { cn } from "@/lib/utils"
import "./skeleton.css"

function Skeleton({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="skeleton"
      className={cn("skeleton-root animate-pulse rounded-md", className)}
      {...props}
    />
  )
}

export { Skeleton }
