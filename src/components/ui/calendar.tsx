"use client"

import * as React from "react"
import {
  DayPicker,
  getDefaultClassNames,
  type DayButton,
  type Locale,
} from "react-day-picker"
import { ChevronLeftIcon, ChevronRightIcon, ChevronDownIcon, ArrowRight, Calendar as CalendarIcon, Clock } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button, buttonVariants } from "@/components/ui/button"
import { TextField, OpaqueTextField } from "@/components/ui/textfield"
import "./calendar.css"

function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  captionLayout = "label",
  buttonVariant = "subtle",
  locale,
  formatters,
  components,
  ...props
}: React.ComponentProps<typeof DayPicker> & {
  buttonVariant?: React.ComponentProps<typeof Button>["variant"]
}) {
  const defaultClassNames = getDefaultClassNames()

  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={cn(
        "group/calendar [--cell-radius:var(--radius-md)] [--cell-size:--spacing(7)]",
        String.raw`rtl:**:[.rdp-button\_next>svg]:rotate-180`,
        String.raw`rtl:**:[.rdp-button\_previous>svg]:rotate-180`,
        className
      )}
      captionLayout={captionLayout}
      locale={locale}
      formatters={{
        formatMonthDropdown: (date) =>
          date.toLocaleString(locale?.code, { month: "short" }),
        ...formatters,
      }}
      classNames={{
        root: cn("w-fit", defaultClassNames.root),
        months: cn(
          "relative flex flex-col gap-4 md:flex-row",
          defaultClassNames.months
        ),
        month: cn("flex w-full flex-col gap-3.5", defaultClassNames.month),
        nav: cn(
          "absolute inset-x-0 top-0 flex w-full items-center justify-between gap-1",
          defaultClassNames.nav
        ),
        button_previous: cn(
          buttonVariants({ variant: buttonVariant }),
          "calendar-chevron size-(--cell-size) bg-transparent p-0 select-none aria-disabled:opacity-50",
          defaultClassNames.button_previous
        ),
        button_next: cn(
          buttonVariants({ variant: buttonVariant }),
          "calendar-chevron size-(--cell-size) bg-transparent p-0 select-none aria-disabled:opacity-50",
          defaultClassNames.button_next
        ),
        month_caption: cn(
          "calendar-caption flex h-(--cell-size) w-full items-center justify-center px-(--cell-size)",
          defaultClassNames.month_caption
        ),
        dropdowns: cn(
          "flex h-(--cell-size) w-full items-center justify-center gap-1.5 text-sm font-medium",
          defaultClassNames.dropdowns
        ),
        dropdown_root: cn(
          "relative rounded-(--cell-radius)",
          defaultClassNames.dropdown_root
        ),
        dropdown: cn(
          "absolute inset-0 bg-background-neutral opacity-0",
          defaultClassNames.dropdown
        ),
        caption_label: cn(
          "calendar-caption select-none",
          captionLayout !== "label" &&
            "flex items-center gap-1 rounded-(--cell-radius) [&>svg]:size-3.5",
          defaultClassNames.caption_label
        ),
        month_grid: cn("w-full border-collapse", defaultClassNames.month_grid),
        weekdays: cn("flex gap-2", defaultClassNames.weekdays),
        weekday: cn(
          "calendar-weekday flex-1 select-none text-center",
          defaultClassNames.weekday
        ),
        week: cn("mt-0.5 flex w-full gap-2", defaultClassNames.week),
        week_number_header: cn(
          "w-(--cell-size) select-none",
          defaultClassNames.week_number_header
        ),
        week_number: cn(
          "calendar-weekday select-none",
          defaultClassNames.week_number
        ),
        day: cn(
          "group/day relative aspect-square h-full w-full p-0 text-center select-none",
          defaultClassNames.day
        ),
        range_start: defaultClassNames.range_start,
        range_middle: defaultClassNames.range_middle,
        range_end: defaultClassNames.range_end,
        today: defaultClassNames.today,
        outside: defaultClassNames.outside,
        disabled: cn("opacity-50", defaultClassNames.disabled),
        hidden: cn("invisible", defaultClassNames.hidden),
        ...classNames,
      }}
      components={{
        Root: ({ className, rootRef, ...props }) => {
          return (
            <div
              data-slot="calendar"
              ref={rootRef}
              className={cn(className)}
              {...props}
            />
          )
        },
        Chevron: ({ className, orientation, ...props }) => {
          if (orientation === "left") {
            return (
              <ChevronLeftIcon className={cn("size-4", className)} {...props} />
            )
          }

          if (orientation === "right") {
            return (
              <ChevronRightIcon className={cn("size-4", className)} {...props} />
            )
          }

          return (
            <ChevronDownIcon className={cn("size-4", className)} {...props} />
          )
        },
        DayButton: ({ ...props }) => (
          <CalendarDayButton locale={locale} {...props} />
        ),
        WeekNumber: ({ children, ...props }) => {
          return (
            <td {...props}>
              <div className="flex size-(--cell-size) items-center justify-center text-center">
                {children}
              </div>
            </td>
          )
        },
        ...components,
      }}
      {...props}
    />
  )
}

function CalendarDayButton({
  className,
  day,
  modifiers,
  locale,
  ...props
}: React.ComponentProps<typeof DayButton> & { locale?: Partial<Locale> }) {
  const defaultClassNames = getDefaultClassNames()

  const ref = React.useRef<HTMLButtonElement>(null)
  React.useEffect(() => {
    if (modifiers.focused) ref.current?.focus()
  }, [modifiers.focused])

  return (
    <Button
      variant="subtle"
      size="icon"
      data-day={day.date.toLocaleDateString(locale?.code)}
      data-selected-single={
        modifiers.selected &&
        !modifiers.range_start &&
        !modifiers.range_end &&
        !modifiers.range_middle
      }
      data-range-start={modifiers.range_start}
      data-range-end={modifiers.range_end}
      data-range-middle={modifiers.range_middle}
      data-outside={modifiers.outside}
      data-today={modifiers.today}
      className={cn(
        "calendar-day relative isolate z-10 flex aspect-square size-auto w-full min-w-(--cell-size) flex-col gap-1 rounded-(--cell-radius) border-0 bg-transparent leading-none group-data-[focused=true]/day:relative group-data-[focused=true]/day:z-10 group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:ring-[3px] group-data-[focused=true]/day:ring-ring/50 [&>span]:text-xs [&>span]:opacity-70",
        defaultClassNames.day,
        className
      )}
      {...props}
    />
  )
}

/** Basic Calendar — single month, no extra chrome. */
function CalendarBasic({
  className,
  ...props
}: React.ComponentProps<typeof Calendar>) {
  return (
    <div className={cn("calendar-container", className)}>
      <Calendar mode="range" numberOfMonths={1} {...props} />
    </div>
  )
}

/**
 * Large Calendar — a date-range picker: "From"/"To" text fields above two
 * side-by-side months.
 */
function CalendarLarge({
  className,
  fromLabel = "From",
  toLabel = "To",
  ...props
}: React.ComponentProps<typeof Calendar> & {
  fromLabel?: string
  toLabel?: string
}) {
  return (
    <div className={cn("calendar-container", className)}>
      <div className="calendar-rangefields">
        <div className="calendar-rangefield">
          <span className="calendar-rangefield-label">{fromLabel}</span>
          <TextField icon={CalendarIcon} placeholder="MM/DD/YYYY" />
        </div>
        <ArrowRight className="calendar-rangefields-arrow size-5" strokeWidth={1.75} />
        <div className="calendar-rangefield">
          <span className="calendar-rangefield-label">{toLabel}</span>
          <TextField icon={CalendarIcon} placeholder="MM/DD/YYYY" />
        </div>
      </div>
      <div className="calendar-months">
        <Calendar mode="range" numberOfMonths={2} {...props} />
      </div>
    </div>
  )
}

/**
 * Date & Time Calendar — a single month plus a time field and a confirm
 * action, for pickers that need a specific time as well as a date.
 */
function CalendarDateTime({
  className,
  onDone,
  doneLabel = "Done",
  defaultTime = "12:00 AM",
  ...props
}: React.ComponentProps<typeof Calendar> & {
  onDone?: () => void
  doneLabel?: string
  defaultTime?: string
}) {
  return (
    <div className={cn("calendar-container", className)}>
      <Calendar mode="single" numberOfMonths={1} {...props} />
      <div className="calendar-datetime-row">
        <OpaqueTextField
          icon={Clock}
          type="text"
          defaultValue={defaultTime}
          aria-label="Time"
          className="w-fit"
        />
        <Button variant="primary" onClick={onDone}>
          {doneLabel}
        </Button>
      </div>
    </div>
  )
}

export {
  Calendar,
  CalendarDayButton,
  CalendarBasic,
  CalendarLarge,
  CalendarDateTime,
}
