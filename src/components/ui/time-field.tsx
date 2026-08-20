"use client"

import * as React from "react"
import { Clock } from "lucide-react"

import { OpaqueTextField } from "@/components/ui/textfield"

/** 24-hour internal representation: hours 0-23, minutes 0-59. */
export type TimeValue = {
  hours: number
  minutes: number
}

function pad2(n: number) {
  return n.toString().padStart(2, "0")
}

/** Formats a 24-hour time value as the field's canonical "H:MM AM/PM" display. */
function formatTimeValue({ hours, minutes }: TimeValue): string {
  const period = hours >= 12 ? "PM" : "AM"
  const hours12 = hours % 12 === 0 ? 12 : hours % 12
  return `${hours12}:${pad2(minutes)} ${period}`
}

const MERIDIEM_RE = /(am|pm|a|p)\s*$/i

/**
 * Parses free-typed time text ("2p", "230pm", "2:30 PM", "14:30") into a
 * 24-hour value. Returns null when the text isn't a recognizable time.
 */
function parseTimeValue(raw: string): TimeValue | null {
  const input = raw.trim().toLowerCase()
  if (!input) return null

  const meridiemMatch = input.match(MERIDIEM_RE)
  const meridiem = meridiemMatch ? (meridiemMatch[1][0] as "a" | "p") : null
  const digits = input.replace(MERIDIEM_RE, "").replace(/[^0-9]/g, "")
  if (!digits) return null

  let hours: number
  let minutes: number
  if (digits.length <= 2) {
    hours = parseInt(digits, 10)
    minutes = 0
  } else if (digits.length === 3) {
    hours = parseInt(digits.slice(0, 1), 10)
    minutes = parseInt(digits.slice(1), 10)
  } else {
    hours = parseInt(digits.slice(0, -2), 10)
    minutes = parseInt(digits.slice(-2), 10)
  }

  if (Number.isNaN(hours) || Number.isNaN(minutes) || minutes > 59) return null

  if (meridiem === "p") {
    if (hours > 12) return null
    hours = (hours % 12) + 12
  } else if (meridiem === "a") {
    if (hours > 12) return null
    hours = hours % 12
  }

  if (hours > 23 || hours < 0) return null

  return { hours, minutes }
}

/**
 * A free-text time input: type a time in almost any shorthand ("2p",
 * "230pm", "14:30") and on blur/Enter it parses and reformats to a
 * canonical "H:MM AM/PM" value. Invalid text reverts to the last valid time.
 */
function TimeField({
  className,
  defaultValue = "12:00 AM",
  value,
  onValueChange,
  onBlur,
  onKeyDown,
  placeholder = "Enter a time",
  ...props
}: Omit<React.ComponentProps<typeof OpaqueTextField>, "value" | "onChange" | "defaultValue"> & {
  defaultValue?: string
  value?: TimeValue
  onValueChange?: (value: TimeValue) => void
}) {
  const initialValue = React.useMemo(
    () => value ?? parseTimeValue(defaultValue) ?? { hours: 0, minutes: 0 },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  )
  const lastValidRef = React.useRef<TimeValue>(initialValue)
  const [text, setText] = React.useState(() => formatTimeValue(initialValue))

  React.useEffect(() => {
    if (value) {
      lastValidRef.current = value
      setText(formatTimeValue(value))
    }
  }, [value])

  const commit = () => {
    const parsed = parseTimeValue(text)
    if (parsed) {
      lastValidRef.current = parsed
      setText(formatTimeValue(parsed))
      onValueChange?.(parsed)
    } else {
      setText(formatTimeValue(lastValidRef.current))
    }
  }

  return (
    <OpaqueTextField
      icon={Clock}
      type="text"
      inputMode="numeric"
      aria-label="Time"
      placeholder={placeholder}
      className={className}
      value={text}
      onChange={(e) => setText(e.target.value)}
      onBlur={(e) => {
        commit()
        onBlur?.(e)
      }}
      onKeyDown={(e) => {
        if (e.key === "Enter") {
          e.preventDefault()
          commit()
          e.currentTarget.blur()
        }
        onKeyDown?.(e)
      }}
      {...props}
    />
  )
}

export { TimeField, parseTimeValue, formatTimeValue }
