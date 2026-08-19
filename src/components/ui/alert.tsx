import * as React from "react"
import { X } from "lucide-react"

import { cn } from "@/lib/utils"
import "./alert.css"

type AlertVariant = "default" | "info" | "success" | "warning" | "error"

function Alert({
  className,
  variant = "default",
  ...props
}: React.ComponentProps<"div"> & { variant?: AlertVariant }) {
  return (
    <div
      data-slot="alert"
      data-variant={variant}
      role="alert"
      className={cn("alert-root flex items-start justify-between gap-3 rounded-lg p-4", className)}
      {...props}
    />
  )
}

function AlertIcon({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="alert-icon"
      className={cn("alert-icon size-5 shrink-0", className)}
      {...props}
    />
  )
}

function AlertBody({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="alert-body"
      className={cn("flex min-w-0 flex-1 items-start gap-3", className)}
      {...props}
    />
  )
}

function AlertContent({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="alert-content"
      className={cn("flex min-w-0 flex-1 flex-col items-start gap-2", className)}
      {...props}
    />
  )
}

function AlertTitle({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="alert-title"
      className={cn("alert-title", className)}
      {...props}
    />
  )
}

function AlertDescription({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="alert-description"
      className={cn("alert-description", className)}
      {...props}
    />
  )
}

function AlertActions({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="alert-actions"
      className={cn("flex items-start gap-3", className)}
      {...props}
    />
  )
}

function AlertAction({ className, ...props }: React.ComponentProps<"button">) {
  return (
    <button
      type="button"
      data-slot="alert-action"
      className={cn("alert-action cursor-pointer", className)}
      {...props}
    />
  )
}

function AlertClose({ className, ...props }: React.ComponentProps<"button">) {
  return (
    <button
      type="button"
      data-slot="alert-close"
      aria-label="Dismiss"
      className={cn("alert-close size-5 shrink-0 cursor-pointer", className)}
      {...props}
    >
      <X className="size-full" />
    </button>
  )
}

export {
  Alert,
  AlertIcon,
  AlertBody,
  AlertContent,
  AlertTitle,
  AlertDescription,
  AlertActions,
  AlertAction,
  AlertClose,
}
