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

/** Search Field — filled search input with a leading magnifier. */
function SearchField({
  className,
  placeholder = "Search",
  ...props
}: React.ComponentProps<"input">) {
  return (
    <div data-slot="search-field" className={cn("searchfield-root", className)}>
      <Search aria-hidden className="searchfield-icon size-5" strokeWidth={1.75} />
      <InputPrimitive
        type="search"
        data-slot="search-field-input"
        className="searchfield-input"
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
  SearchField,
  TextFieldGroup,
  TextFieldLabel,
  TextFieldDescription,
}
