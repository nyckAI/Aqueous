import * as React from "react"
import { Input as InputPrimitive } from "@base-ui/react/input"
import { Search, type LucideIcon } from "lucide-react"

import { cn } from "@/lib/utils"
import "./textfield.css"

/**
 * Text Field — the standard Nyck text input.
 *
 * Takes at most one icon. `icon` + `iconPosition` is deliberately a single
 * slot rather than separate start/end props, so a leading *and* trailing
 * icon cannot be rendered together.
 */
function TextField({
  className,
  icon: Icon,
  iconPosition = "start",
  ...props
}: React.ComponentProps<"input"> & {
  icon?: LucideIcon
  iconPosition?: "start" | "end"
}) {
  const iconEl = Icon ? (
    <Icon aria-hidden className="textfield-icon size-5" strokeWidth={1.75} />
  ) : null

  return (
    <div data-slot="text-field" className={cn("textfield-root", className)}>
      {iconPosition === "start" && iconEl}
      <InputPrimitive
        data-slot="text-field-input"
        className="textfield-input"
        {...props}
      />
      {iconPosition === "end" && iconEl}
    </div>
  )
}

/**
 * Opaque Text Field — filled input on an accent-gray background.
 * Defaults to a leading magnifier for its usual search role, but accepts
 * any leading `icon` so it can be reused for other opaque, borderless
 * fields (e.g. the calendar's time field uses a clock).
 */
function OpaqueTextField({
  className,
  icon: Icon = Search,
  placeholder = "Search",
  type = "search",
  ...props
}: React.ComponentProps<"input"> & { icon?: LucideIcon }) {
  return (
    <div data-slot="opaque-text-field" className={cn("opaquetextfield-root", className)}>
      <Icon aria-hidden className="opaquetextfield-icon size-5" strokeWidth={1.75} />
      <InputPrimitive
        type={type}
        data-slot="opaque-text-field-input"
        className="opaquetextfield-input"
        placeholder={placeholder}
        {...props}
      />
    </div>
  )
}

/**
 * Groups a label, a field, and a description into one form control.
 * Supplies the 4px label-to-field gap; TextFieldDescription adds the rest.
 */
function TextFieldGroup({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="text-field-group"
      className={cn("textfield-group", className)}
      {...props}
    />
  )
}

/** Label shown above a text field. */
function TextFieldLabel({ className, ...props }: React.ComponentProps<"label">) {
  return (
    <label
      data-slot="text-field-label"
      className={cn("textfield-label", className)}
      {...props}
    />
  )
}

/** Helper text shown below a text field. */
function TextFieldDescription({ className, ...props }: React.ComponentProps<"p">) {
  return (
    <p
      data-slot="text-field-description"
      className={cn("textfield-description", className)}
      {...props}
    />
  )
}

export {
  TextField,
  OpaqueTextField,
  TextFieldGroup,
  TextFieldLabel,
  TextFieldDescription,
}
