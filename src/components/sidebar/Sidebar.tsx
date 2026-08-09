"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { LucideIcon } from "lucide-react";
import { PanelLeft, PanelLeftOpen } from "lucide-react";
import { navSections } from "./nav-data";
import { SidebarIcon } from "./SidebarIcon";

function isActivePath(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

function NavLink({
  href,
  label,
  icon,
  active,
  collapsed,
}: {
  href: string;
  label: string;
  icon: LucideIcon;
  active: boolean;
  collapsed: boolean;
}) {
  return (
    <Link
      href={href}
      title={collapsed ? label : undefined}
      className={`flex w-full items-center rounded-lg transition-colors ${
        collapsed ? "justify-center px-0 py-2.5" : "gap-2 px-2 py-3"
      } ${
        active
          ? "bg-background-brand hover:bg-background-brand-hover active:bg-background-brand-pressed"
          : "bg-transparent hover:bg-background-brand active:bg-background-brand-hover"
      }`}
    >
      <SidebarIcon icon={icon} active={active} />
      {!collapsed && (
        <span
          className={`truncate text-base font-medium leading-none ${
            active ? "text-text-brand" : "text-text-neutral"
          }`}
        >
          {label}
        </span>
      )}
    </Link>
  );
}

export function Sidebar({
  width,
  collapsed,
  resizing,
  onToggle,
  onResizeStart,
}: {
  width: number;
  collapsed: boolean;
  resizing: boolean;
  onToggle: () => void;
  onResizeStart: (e: React.MouseEvent) => void;
}) {
  const pathname = usePathname();
  const transitionClass = resizing
    ? ""
    : "transition-[width] duration-200";

  return (
    <aside
      className={`fixed inset-y-0 left-0 z-30 flex flex-col overflow-y-auto overflow-x-hidden border-r border-border-neutral bg-background-neutral py-9 ${
        collapsed ? "items-center px-2" : "pl-2.5 pr-4"
      } ${transitionClass}`}
      style={{ width }}
    >
      <div className={`flex w-full flex-col gap-4 ${collapsed ? "items-center" : ""}`}>
        {/* Brand header */}
        <div
          className={`flex w-full items-center px-2 ${
            collapsed ? "justify-center" : "justify-between"
          }`}
        >
          <div className="flex items-center gap-2.5">
            <div className="relative flex size-[30px] shrink-0 items-center justify-center rounded-lg bg-brand-500">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/sidebar/logo-n.svg"
                alt=""
                width={17}
                height={19}
                className="h-[19px] w-[17px]"
              />
            </div>
            {!collapsed && (
              <span className="whitespace-nowrap text-base font-bold leading-[22px] text-text-primary">
                Nyck AI
              </span>
            )}
          </div>
          {!collapsed && (
            <button
              type="button"
              onClick={onToggle}
              aria-label="Collapse sidebar"
              className="flex size-5 shrink-0 cursor-pointer items-center justify-center"
            >
              <SidebarIcon icon={PanelLeft} tone="primary" />
            </button>
          )}
        </div>

        {/* Expand button when collapsed */}
        {collapsed && (
          <button
            type="button"
            onClick={onToggle}
            aria-label="Expand sidebar"
            className="flex size-8 shrink-0 cursor-pointer items-center justify-center rounded-lg transition-colors hover:bg-background-brand active:bg-background-brand-hover"
          >
            <SidebarIcon icon={PanelLeftOpen} tone="primary" />
          </button>
        )}

        {/* Nav sections */}
        {navSections.map((section, sectionIndex) => (
          <div
            key={section.title || `section-${sectionIndex}`}
            className={`flex w-full flex-col ${
              sectionIndex === 0 ? "gap-3" : "gap-2"
            } ${collapsed ? "items-center" : ""}`}
          >
            {section.title && !collapsed && (
              <div className="flex w-full items-center px-2">
                <p className="flex-1 text-[13px] leading-5.5 text-text-neutral">
                  {section.title}
                </p>
              </div>
            )}
            {section.items.map((item) => (
              <NavLink
                key={item.href}
                href={item.href}
                label={item.label}
                icon={item.icon}
                active={isActivePath(pathname, item.href)}
                collapsed={collapsed}
              />
            ))}
          </div>
        ))}
      </div>

      {/* Resize handle */}
      {!collapsed && (
        <div
          onMouseDown={onResizeStart}
          className="absolute inset-y-0 right-0 w-1 cursor-col-resize hover:bg-border-brand active:bg-border-brand"
        />
      )}
    </aside>
  );
}
