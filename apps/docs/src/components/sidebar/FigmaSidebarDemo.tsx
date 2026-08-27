"use client";

/**
 * Visual preview of the "Nyck R&D" Figma sidebar redesign
 * (file vFCWXR0kS73KArwJ7DMZlt, node 3867:710) — not the real docs-site
 * nav. Composes the published Sidebar primitives from @nyckai/aqueous-ui;
 * the Nyck brand mark, site switcher, and demo nav content here are
 * app-specific and stay outside the library. Kept as a standalone
 * component so the real Sidebar.tsx / docs nav are untouched.
 */

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
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import {
  Sidebar,
  SidebarHeader,
  SidebarToggle,
  SidebarNav,
  SidebarNavGroup,
  SidebarNavGroupLabel,
  SidebarNavItem,
  SidebarFooter,
} from "@nyckai/aqueous-ui";

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

export function FigmaSidebarDemo({
  collapsed,
  onToggle,
}: {
  collapsed: boolean;
  onToggle: () => void;
}) {
  return (
    <Sidebar collapsed={collapsed} onCollapsedChange={onToggle}>
      {/* Nyck brand header — logo + collapse/expand toggle */}
      <SidebarHeader>
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
        <SidebarToggle />
      </SidebarHeader>

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
      <SidebarNav>
        {demoGroups.map((group) => (
          <SidebarNavGroup key={group.title}>
            <SidebarNavGroupLabel>{group.title}</SidebarNavGroupLabel>
            {group.items.map((item) => (
              <SidebarNavItem key={item.label} icon={item.icon} active={item.active}>
                {item.label}
              </SidebarNavItem>
            ))}
          </SidebarNavGroup>
        ))}
      </SidebarNav>

      {/* Bottom container — Settings / Give feedback / account switcher */}
      <SidebarFooter>
        <SidebarNavItem icon={Settings} labelClassName="text-text-navigation">
          Settings
        </SidebarNavItem>
        <SidebarNavItem icon={MessageCirclePlus}>Give feedback</SidebarNavItem>
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
      </SidebarFooter>
    </Sidebar>
  );
}
