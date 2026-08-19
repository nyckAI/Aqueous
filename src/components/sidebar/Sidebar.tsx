"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import type { LucideIcon } from "lucide-react";
import { navSections } from "./nav-data";
import { SidebarIcon } from "./SidebarIcon";
import { SidebarCollapseHandle } from "./SidebarCollapseHandle";

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
      className={`flex w-full items-center gap-2 rounded-md bg-transparent p-2 transition-colors ${
        collapsed ? "justify-center" : ""
      } ${
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
    </Link>
  );
}

export function Sidebar({
  collapsed,
  onToggle,
}: {
  collapsed: boolean;
  onToggle: () => void;
}) {
  const pathname = usePathname();
  const [handleHovered, setHandleHovered] = useState(false);

  return (
    <>
      <aside
        className={`sticky top-0 h-dvh shrink-0 overflow-y-auto overflow-x-hidden bg-background-neutral transition-[width] duration-200 ${
          collapsed ? (handleHovered ? "w-[62px]" : "w-14") : "w-fit"
        }`}
      >
        <div
          className={`flex h-full flex-col pt-8 pb-3 ${
            collapsed ? "items-center px-2" : "px-5"
          }`}
        >
          <div className={`flex w-full flex-col gap-3 ${collapsed ? "items-center" : ""}`}>
            {/* Brand header */}
            <div
              className={`flex w-full items-center ${
                collapsed ? "justify-center" : ""
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
                  <span className="whitespace-nowrap font-[family-name:var(--font-family-heading)] font-bold text-[length:var(--font-heading-xs-size)] leading-[var(--font-heading-xs-line-height)] tracking-[var(--font-heading-xs-letter-spacing)] text-text-primary">
                    Nyck AI
                  </span>
                )}
              </div>
            </div>

            {/* Nav sections */}
            {navSections.map((section, sectionIndex) => (
              <div
                key={section.title || `section-${sectionIndex}`}
                className={`flex w-full flex-col ${collapsed ? "items-center gap-2" : ""}`}
              >
                {section.title && !collapsed && (
                  <div className="flex w-full items-center px-2">
                    <p className="flex-1 font-[family-name:var(--font-family-body)] font-normal text-[length:var(--font-caption-md-size)] leading-[var(--font-caption-md-line-height)] tracking-[var(--font-caption-md-letter-spacing)] whitespace-nowrap text-text-tertiary">
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
        </div>
      </aside>

      {/* Collapse / expand handle — sits outside the nav bar, to its right */}
      <SidebarCollapseHandle
        collapsed={collapsed}
        hovered={handleHovered}
        onToggle={onToggle}
        onHoverChange={setHandleHovered}
      />
    </>
  );
}
