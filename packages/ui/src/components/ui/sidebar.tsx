"use client"

import * as React from "react"
import { PanelLeftClose, PanelLeftOpen } from "lucide-react"
import type { LucideIcon } from "lucide-react"

import { cn } from "@/lib/utils"

type SidebarContextValue = {
  collapsed: boolean
  toggle: () => void
}

const SidebarContext = React.createContext<SidebarContextValue | null>(null)

function useSidebar() {
  const context = React.useContext(SidebarContext)
  if (!context) {
    throw new Error("Sidebar sub-components must be rendered inside <Sidebar>.")
  }
  return context
}

type SidebarProps = {
  collapsed: boolean
  onCollapsedChange: (collapsed: boolean) => void
  /** Expanded width, as a CSS length. Defaults to "250px". */
  width?: string
  /** Collapsed (icon-rail) width, as a CSS length. Defaults to "56px". */
  collapsedWidth?: string
} & Omit<React.ComponentProps<"aside">, "children"> & {
    children: React.ReactNode
  }

function Sidebar({
  collapsed,
  onCollapsedChange,
  width = "250px",
  collapsedWidth = "56px",
  className,
  children,
  style,
  ...props
}: SidebarProps) {
  const toggle = React.useCallback(
    () => onCollapsedChange(!collapsed),
    [collapsed, onCollapsedChange]
  )

  const value = React.useMemo(() => ({ collapsed, toggle }), [collapsed, toggle])

  return (
    <SidebarContext.Provider value={value}>
      <aside
        data-slot="sidebar"
        data-collapsed={collapsed}
        style={{ width: collapsed ? collapsedWidth : width, ...style }}
        className={cn(
          "flex h-full shrink-0 flex-col overflow-hidden border-r border-border-neutral bg-background-neutral transition-[width] duration-300 ease-in-out",
          className
        )}
        {...props}
      >
        {children}
      </aside>
    </SidebarContext.Provider>
  )
}

function SidebarHeader({ className, ...props }: React.ComponentProps<"div">) {
  const { collapsed } = useSidebar()
  return (
    <div
      data-slot="sidebar-header"
      className={cn(
        "flex w-full shrink-0 items-center gap-2 pt-4 transition-[padding] duration-300 ease-in-out",
        collapsed ? "justify-center px-2" : "justify-between px-5",
        className
      )}
      {...props}
    />
  )
}

function SidebarToggle({ className, ...props }: React.ComponentProps<"button">) {
  const { collapsed, toggle } = useSidebar()
  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
      data-slot="sidebar-toggle"
      className={cn(
        "flex size-8 shrink-0 items-center justify-center rounded-md text-icon-neutral transition-colors hover:bg-background-neutral-hover active:bg-background-neutral-pressed",
        className
      )}
      {...props}
    >
      {collapsed ? (
        <PanelLeftOpen className="size-5" strokeWidth={1.75} />
      ) : (
        <PanelLeftClose className="size-5" strokeWidth={1.75} />
      )}
    </button>
  )
}

/** Height, in px, of the bottom fade-mask zone shown while a SidebarNav has more content below the fold. */
const NAV_FADE_HEIGHT = 40

function SidebarNav({ className, style, ...props }: React.ComponentProps<"div">) {
  const { collapsed } = useSidebar()
  const scrollRef = React.useRef<HTMLDivElement>(null)
  const [showFade, setShowFade] = React.useState(false)

  React.useEffect(() => {
    const el = scrollRef.current
    if (!el) return

    function updateFade() {
      if (!el) return
      const hasOverflow = el.scrollHeight > el.clientHeight + 1
      const atBottom = el.scrollTop + el.clientHeight >= el.scrollHeight - 1
      setShowFade(hasOverflow && !atBottom)
    }

    updateFade()
    el.addEventListener("scroll", updateFade)
    const observer = new ResizeObserver(updateFade)
    observer.observe(el)
    return () => {
      el.removeEventListener("scroll", updateFade)
      observer.disconnect()
    }
  }, [])

  const fadeStyle = showFade
    ? {
        maskImage: `linear-gradient(to bottom, black calc(100% - ${NAV_FADE_HEIGHT}px), transparent 100%)`,
        WebkitMaskImage: `linear-gradient(to bottom, black calc(100% - ${NAV_FADE_HEIGHT}px), transparent 100%)`,
      }
    : undefined

  return (
    <div
      ref={scrollRef}
      data-slot="sidebar-nav"
      style={{ ...fadeStyle, ...style }}
      className={cn(
        "flex min-h-0 flex-1 flex-col gap-4 overflow-y-auto overflow-x-hidden pt-4 pb-3 transition-[padding] duration-300 ease-in-out",
        collapsed ? "px-2" : "px-5",
        className
      )}
      {...props}
    />
  )
}

function SidebarNavGroup({ className, ...props }: React.ComponentProps<"div">) {
  const { collapsed } = useSidebar()
  return (
    <div
      data-slot="sidebar-nav-group"
      className={cn("flex w-full flex-col", collapsed && "gap-2", className)}
      {...props}
    />
  )
}

function SidebarNavGroupLabel({
  className,
  ...props
}: React.ComponentProps<"p">) {
  const { collapsed } = useSidebar()
  if (collapsed) return null
  return (
    <div className="flex w-full items-center px-2 pb-1">
      <p
        data-slot="sidebar-nav-group-label"
        className={cn(
          "flex-1 font-[family-name:var(--font-family-body)] font-medium text-[length:var(--font-caption-md-size)] leading-[var(--font-caption-md-line-height)] tracking-[var(--font-caption-md-letter-spacing)] whitespace-nowrap text-text-tertiary",
          className
        )}
        {...props}
      />
    </div>
  )
}

type SidebarNavItemProps = {
  icon?: LucideIcon
  active?: boolean
  /** Extra classes for the label span — e.g. to override its text color. */
  labelClassName?: string
} & React.ComponentProps<"button">

function SidebarNavItem({
  icon: Icon,
  active,
  className,
  labelClassName,
  children,
  title,
  ...props
}: SidebarNavItemProps) {
  const { collapsed } = useSidebar()
  return (
    <button
      type="button"
      title={collapsed ? (title ?? (typeof children === "string" ? children : undefined)) : title}
      data-slot="sidebar-nav-item"
      data-active={active}
      className={cn(
        "flex w-full items-center gap-2 rounded-md bg-transparent p-2 text-left transition-colors",
        active
          ? "hover:bg-background-selected active:bg-background-selected-hover"
          : "hover:bg-background-neutral-hover active:bg-background-neutral-pressed",
        className
      )}
      {...props}
    >
      {Icon && (
        <Icon
          aria-hidden
          className={cn(
            "size-5 shrink-0",
            active ? "text-icon-selected" : "text-icon-neutral"
          )}
          strokeWidth={1.75}
        />
      )}
      {!collapsed && (
        <span
          className={cn(
            "truncate font-[family-name:var(--font-family-body)] font-medium text-[length:var(--font-button-md-size)] leading-[var(--font-button-md-line-height)] tracking-[var(--font-button-md-letter-spacing)] whitespace-nowrap",
            active ? "text-text-selected" : "text-text-neutral",
            labelClassName
          )}
        >
          {children}
        </span>
      )}
    </button>
  )
}

function SidebarFooter({ className, ...props }: React.ComponentProps<"div">) {
  const { collapsed } = useSidebar()
  return (
    <div
      data-slot="sidebar-footer"
      className={cn(
        "flex w-full shrink-0 flex-col gap-2 border-t border-border-neutral pt-3 pb-3 transition-[padding] duration-300 ease-in-out",
        collapsed ? "px-2" : "px-4",
        className
      )}
      {...props}
    />
  )
}

export {
  Sidebar,
  SidebarHeader,
  SidebarToggle,
  SidebarNav,
  SidebarNavGroup,
  SidebarNavGroupLabel,
  SidebarNavItem,
  SidebarFooter,
  useSidebar,
}
