import { mergeProps } from "@base-ui/react/merge-props"
import { useRender } from "@base-ui/react/use-render"

import { cn } from "@/lib/utils"
import "./badge.css"

type BadgeVariant =
  | "default"
  | "info"
  | "success"
  | "warning"
  | "destructive"
  | "outline"

function Badge({
  className,
  variant = "default",
  render,
  ...props
}: useRender.ComponentProps<"span"> & { variant?: BadgeVariant }) {
  return useRender({
    defaultTagName: "span",
    props: mergeProps<"span">(
      {
        className: cn("badge-root", className),
      },
      props
    ),
    render,
    state: {
      slot: "badge",
      variant,
    },
  })
}

export { Badge }
export type { BadgeVariant }
