"use client";

/**
 * Visual preview of the "Nyck R&D" Figma sidebar redesign
 * (file vFCWXR0kS73KArwJ7DMZlt, node 3867:710) — not the real docs-site
 * nav. Interactions mirror Sidebar.tsx (same hover/active token classes,
 * same collapse-to-icon-rail behavior) with content and a few font sizes
 * swapped to match the Figma. Kept as a standalone component so the real
 * Sidebar.tsx / docs nav are untouched.
 */

import { useEffect, useRef, useState } from "react";
import {
  Building2,
  ChevronsUpDown,
  MessageCircle,
  Mail,
  Calendar,
  Settings,
  MessageCirclePlus,
  Wrench,
  FileText,
  ClipboardCheck,
  Truck,
  Package,
  Warehouse,
  Layers,
  PanelLeftClose,
  PanelLeftOpen,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { SidebarIcon } from "./SidebarIcon";

type DemoNavItem = {
  label: string;
  icon: LucideIcon;
  active?: boolean;
};

type DemoNavGroup = {
  title: string;
  items: DemoNavItem[];
};

const demoGroups: DemoNavGroup[] = [
  {
    title: "Nyck Workspace",
    items: [
      { label: "AI Controls", icon: MessageCircle, active: true },
      { label: "Email", icon: Mail },
      { label: "Schedule", icon: Calendar },
    ],
  },
  {
    title: "Purchasing",
    items: [
      { label: "Work order", icon: Wrench },
      { label: "Draft POs", icon: FileText },
      { label: "Purchase orders", icon: ClipboardCheck },
    ],
  },
  {
    title: "Data",
    items: [
      { label: "Suppliers", icon: Truck },
      { label: "Items", icon: Package },
      { label: "Inventory", icon: Warehouse },
      { label: "Bill of materials", icon: Layers },
    ],
  },
];

function DemoNavLink({
  label,
  icon,
  active,
  collapsed,
}: DemoNavItem & { collapsed: boolean }) {
  return (
    <button
      type="button"
      title={collapsed ? label : undefined}
      className={`flex w-full items-center gap-2 rounded-md bg-transparent p-2 text-left transition-colors ${
        active
          ? "hover:bg-background-selected active:bg-background-selected-hover"
          : "hover:bg-background-neutral-hover active:bg-background-neutral-pressed"
      }`}
    >
      <SidebarIcon icon={icon} active={active} />
      {!collapsed && (
        <span
          className={`truncate font-[family-name:var(--font-family-body)] font-medium text-[length:var(--font-button-md-size)] leading-[var(--font-button-md-line-height)] tracking-[var(--font-button-md-letter-spacing)] whitespace-nowrap ${
            active ? "text-text-selected" : "text-text-neutral"
          }`}
        >
          {label}
        </span>
      )}
    </button>
  );
}

function FooterButton({
  icon,
  label,
  collapsed,
  tone = "navigation",
}: {
  icon: LucideIcon;
  label: string;
  collapsed: boolean;
  /** Settings uses text/navigation, Give feedback uses text/neutral — per Figma. */
  tone?: "navigation" | "neutral";
}) {
  return (
    <button
      type="button"
      title={collapsed ? label : undefined}
      className="flex w-full items-center gap-2 rounded-md bg-transparent p-2 text-left transition-colors hover:bg-background-neutral-hover active:bg-background-neutral-pressed"
    >
      <SidebarIcon icon={icon} />
      {!collapsed && (
        <span
          className={`truncate font-[family-name:var(--font-family-body)] font-medium text-[length:var(--font-button-md-size)] leading-[var(--font-button-md-line-height)] tracking-[var(--font-button-md-letter-spacing)] whitespace-nowrap ${
            tone === "neutral" ? "text-text-neutral" : "text-text-navigation"
          }`}
        >
          {label}
        </span>
      )}
    </button>
  );
}

/** Height, in px, of the bottom fade-mask zone. */
const FADE_HEIGHT = 40;

export function FigmaSidebarDemo({
  collapsed,
  onToggle,
}: {
  collapsed: boolean;
  onToggle: () => void;
}) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [showFade, setShowFade] = useState(false);

  // Show the bottom fade only while there's more content below the fold —
  // it disappears once the list is scrolled all the way down, since there's
  // nothing left to hint at.
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    function updateFade() {
      if (!el) return;
      const hasOverflow = el.scrollHeight > el.clientHeight + 1;
      const atBottom = el.scrollTop + el.clientHeight >= el.scrollHeight - 1;
      setShowFade(hasOverflow && !atBottom);
    }

    updateFade();
    el.addEventListener("scroll", updateFade);
    const observer = new ResizeObserver(updateFade);
    observer.observe(el);
    return () => {
      el.removeEventListener("scroll", updateFade);
      observer.disconnect();
    };
  }, []);

  const fadeStyle = showFade
    ? {
        maskImage: `linear-gradient(to bottom, black calc(100% - ${FADE_HEIGHT}px), transparent 100%)`,
        WebkitMaskImage: `linear-gradient(to bottom, black calc(100% - ${FADE_HEIGHT}px), transparent 100%)`,
      }
    : undefined;

  return (
    <aside
      className={`flex h-full shrink-0 flex-col overflow-hidden border-r border-border-neutral bg-background-neutral transition-[width] duration-300 ease-in-out ${
        collapsed ? "w-14" : "w-62.5"
      }`}
    >
      {/* Nyck brand header — logo + collapse/expand toggle */}
      <div
        className={`flex w-full shrink-0 items-center gap-2 pt-4 transition-[padding] duration-300 ease-in-out ${
          collapsed ? "justify-center px-2" : "justify-between px-5"
        }`}
      >
        {!collapsed && (
          <span className="flex min-w-0 items-center gap-2 overflow-hidden">
            <img
              src="/sidebar/Nyck_Logo_Blue.svg"
              alt=""
              width={17}
              height={19}
              className="h-4.75 w-4.25 shrink-0"
            />
            <span className="truncate font-[family-name:var(--font-family-body)] font-bold text-[length:var(--font-heading-sm-size)] text-text-brand">
              Nyck AI
            </span>
          </span>
        )}
        <button
          type="button"
          onClick={onToggle}
          aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
          className="flex size-8 shrink-0 items-center justify-center rounded-md text-icon-neutral transition-colors hover:bg-background-neutral-hover active:bg-background-neutral-pressed"
        >
          {collapsed ? (
            <PanelLeftOpen className="size-5" strokeWidth={1.75} />
          ) : (
            <PanelLeftClose className="size-5" strokeWidth={1.75} />
          )}
        </button>
      </div>

      {/* Site switcher */}
      <div
        className={`flex w-full shrink-0 flex-col border-b border-border-neutral pt-6 pb-3 transition-[padding] duration-300 ease-in-out ${
          collapsed ? "px-2" : "px-5"
        }`}
      >
        <button
          type="button"
          title={collapsed ? "Elkhart Components" : undefined}
          className="flex w-full items-center justify-between gap-2 rounded-lg bg-background-neutral p-1 text-left transition-colors hover:bg-background-neutral-hover"
        >
          <span className="flex items-center gap-2 overflow-hidden">
            <Building2
              aria-hidden
              className="size-8 shrink-0 text-icon-brand"
              strokeWidth={1.5}
            />
            {!collapsed && (
              <span className="flex min-w-0 flex-col">
                <span className="truncate font-[family-name:var(--font-family-body)] font-medium text-[length:var(--font-micro-sm-size)] tracking-wide text-icon-secondary uppercase">
                  Site
                </span>
                <span className="truncate font-[family-name:var(--font-family-body)] font-medium text-[length:var(--font-body-sm-size)] text-icon-primary">
                  Elkhart Components
                </span>
              </span>
            )}
          </span>
          {!collapsed && (
            <ChevronsUpDown
              aria-hidden
              className="size-5 shrink-0 text-icon-secondary"
              strokeWidth={1.75}
            />
          )}
        </button>
      </div>

      {/* Nav groups */}
      <div
        ref={scrollRef}
        style={fadeStyle}
        className={`flex min-h-0 flex-1 flex-col gap-4 overflow-y-auto overflow-x-hidden pt-4 pb-3 transition-[padding] duration-300 ease-in-out ${
          collapsed ? "px-2" : "px-5"
        }`}
      >
        {demoGroups.map((group) => (
          <div
            key={group.title}
            className={`flex w-full flex-col ${collapsed ? "gap-2" : ""}`}
          >
            {!collapsed && (
              <div className="flex w-full items-center px-2 pb-1">
                <p className="flex-1 font-[family-name:var(--font-family-body)] font-medium text-[length:var(--font-caption-md-size)] leading-[var(--font-caption-md-line-height)] tracking-[var(--font-caption-md-letter-spacing)] whitespace-nowrap text-text-tertiary">
                  {group.title}
                </p>
              </div>
            )}
            {group.items.map((item) => (
              <DemoNavLink key={item.label} {...item} collapsed={collapsed} />
            ))}
          </div>
        ))}
      </div>

      {/* Bottom container — Settings / Give feedback / account switcher */}
      <div
        className={`flex w-full shrink-0 flex-col gap-2 border-t border-border-neutral pt-3 pb-3 transition-[padding] duration-300 ease-in-out ${
          collapsed ? "px-2" : "px-4"
        }`}
      >
        <FooterButton icon={Settings} label="Settings" collapsed={collapsed} />
        <FooterButton
          icon={MessageCirclePlus}
          label="Give feedback"
          collapsed={collapsed}
          tone="neutral"
        />
        <button
          type="button"
          title={collapsed ? "Alex Rivera" : undefined}
          className="flex w-full items-center gap-2 rounded-md bg-transparent p-2 text-left transition-colors hover:bg-background-neutral-hover active:bg-background-neutral-pressed"
        >
          <span
            aria-hidden
            className="flex size-8 shrink-0 items-center justify-center rounded-full bg-background-brand font-[family-name:var(--font-family-body)] text-[length:var(--font-caption-md-size)] font-medium text-white"
          >
            AR
          </span>
          {!collapsed && (
            <>
              <span className="flex min-w-0 flex-1 flex-col overflow-hidden">
                <span className="truncate font-[family-name:var(--font-family-body)] font-medium text-[length:var(--font-caption-md-size)] text-text-tertiary">
                  e-tailer Pennsylvania
                </span>
                <span className="truncate font-[family-name:var(--font-family-body)] font-medium text-[length:var(--font-heading-sm-size)] text-text-navigation">
                  Alex Rivera
                </span>
              </span>
              <ChevronsUpDown
                aria-hidden
                className="size-4 shrink-0 text-icon-secondary"
                strokeWidth={1.75}
              />
            </>
          )}
        </button>
      </div>
    </aside>
  );
}
