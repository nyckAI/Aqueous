import * as React from "react"

import { cn } from "@/lib/utils"
import "./textarea.css"

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        "textarea-root flex field-sizing-content min-h-16 w-full rounded-lg border px-2.5 py-2 transition-colors outline-none",
        className
      )}
      {...props}
    />
  )
}

export { Textarea }
