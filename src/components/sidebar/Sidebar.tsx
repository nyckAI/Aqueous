"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Settings, MessageSquarePlus } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { navSections, type NavItem } from "./nav-data";
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

/**
 * A nav item with nested children, shown as a link with a chevron toggle
 * beside it. Collapsing the sidebar always hides the children — there's no
 * room for a flat list of icon-only rows in the icon rail.
 */
function NavDisclosure({
  item,
  active,
  collapsed,
  open,
  onToggle,
  pathname,
}: {
  item: NavItem;
  active: boolean;
  collapsed: boolean;
  open: boolean;
  onToggle: () => void;
  pathname: string;
}) {
  return (
    <div className="flex w-full flex-col">
      <div className="relative flex w-full items-center">
        <NavLink
          href={item.href}
          label={item.label}
          icon={item.icon}
          active={active}
          collapsed={collapsed}
        />
        {!collapsed && (
          <button
            type="button"
            onClick={onToggle}
            aria-expanded={open}
            aria-label={open ? `Collapse ${item.label}` : `Expand ${item.label}`}
            className="absolute top-1/2 right-1 flex size-6 -translate-y-1/2 shrink-0 cursor-pointer items-center justify-center rounded-md text-icon-neutral transition-colors hover:bg-background-neutral-hover hover:text-icon-primary"
          >
            <ChevronDown
              className={`size-4 transition-transform ${open ? "rotate-180" : ""}`}
            />
          </button>
        )}
      </div>
      {!collapsed && open && (
        <div className="flex w-full flex-col pl-7">
          {item.children?.map((child) => (
            <NavLink
              key={child.href}
              href={child.href}
              label={child.label}
              icon={child.icon}
              active={isActivePath(pathname, child.href)}
              collapsed={false}
            />
          ))}
        </div>
      )}
    </div>
  );
}

/** Placeholder row for the BottomContainer — Settings / Give feedback. */
function FooterButton({
  icon,
  label,
  collapsed,
}: {
  icon: LucideIcon;
  label: string;
  collapsed: boolean;
}) {
  return (
    <button
      type="button"
      title={collapsed ? label : undefined}
      className="flex w-full items-center gap-2 rounded-md bg-transparent p-2 text-left transition-colors hover:bg-background-neutral-hover active:bg-background-neutral-pressed"
    >
      <SidebarIcon icon={icon} />
      {!collapsed && (
        <span className="truncate font-[family-name:var(--font-family-body)] text-[16px] leading-normal font-medium text-text-navigation">
          {label}
        </span>
      )}
    </button>
  );
}

/** Height, in px, of the bottom fade-mask zone. */
const FADE_HEIGHT = 40;

export function Sidebar({
  collapsed,
  onToggle,
}: {
  collapsed: boolean;
  onToggle: () => void;
}) {
  const pathname = usePathname();
  const [handleHovered, setHandleHovered] = useState(false);
  const [openDisclosures, setOpenDisclosures] = useState<Set<string>>(new Set());
  const scrollRef = useRef<HTMLDivElement>(null);
  const [showFade, setShowFade] = useState(false);

  // A disclosure is open if the user toggled it open, or if the current
  // page is one of its children — you can't collapse away the section
  // containing the page you're on.
  function isDisclosureOpen(item: NavItem) {
    return (
      openDisclosures.has(item.href) ||
      (item.children?.some((child) => isActivePath(pathname, child.href)) ?? false)
    );
  }

  function toggleDisclosure(href: string) {
    setOpenDisclosures((prev) => {
      const next = new Set(prev);
      if (next.has(href)) {
        next.delete(href);
      } else {
        next.add(href);
      }
      return next;
    });
  }

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
    <>
      <aside
        className={`sticky top-0 flex h-dvh shrink-0 flex-col overflow-hidden bg-background-neutral transition-[width] duration-300 ease-in-out ${
          collapsed ? (handleHovered ? "w-[62px]" : "w-14") : "w-[300px]"
        }`}
      >
        {/* Brand header — does not scroll */}
        <div
          className={`flex w-full shrink-0 items-center pt-8 pb-3 transition-[padding] duration-300 ease-in-out ${
            collapsed ? "px-2" : "px-5"
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

        {/* Nav sections — scrolls, with a fade hinting at more content below */}
        <div
          ref={scrollRef}
          style={fadeStyle}
          className={`flex min-h-0 flex-1 flex-col gap-3 overflow-y-auto overflow-x-hidden pb-3 transition-[padding] duration-300 ease-in-out ${
            collapsed ? "px-2" : "px-5"
          }`}
        >
          {navSections.map((section, sectionIndex) => (
            <div
              key={section.title || `section-${sectionIndex}`}
              className={`flex w-full flex-col ${collapsed ? "gap-2" : ""}`}
            >
              {section.title && !collapsed && (
                <div className="flex w-full items-center px-2">
                  <p className="flex-1 font-[family-name:var(--font-family-body)] font-normal text-[length:var(--font-caption-md-size)] leading-[var(--font-caption-md-line-height)] tracking-[var(--font-caption-md-letter-spacing)] whitespace-nowrap text-text-tertiary">
                    {section.title}
                  </p>
                </div>
              )}
              {section.items.map((item) =>
                item.children && item.children.length > 0 ? (
                  <NavDisclosure
                    key={item.href}
                    item={item}
                    active={isActivePath(pathname, item.href)}
                    collapsed={collapsed}
                    open={isDisclosureOpen(item)}
                    onToggle={() => toggleDisclosure(item.href)}
                    pathname={pathname}
                  />
                ) : (
                  <NavLink
                    key={item.href}
                    href={item.href}
                    label={item.label}
                    icon={item.icon}
                    active={isActivePath(pathname, item.href)}
                    collapsed={collapsed}
                  />
                )
              )}
            </div>
          ))}
        </div>

        {/* BottomContainer — pinned below the scroll area, does not scroll */}
        <div
          className={`flex w-full shrink-0 flex-col border-t border-border-neutral pt-3 pb-3 gap-2 transition-[padding] duration-300 ease-in-out ${
            collapsed ? "px-2" : "px-4"
          }`}
        >
          <FooterButton icon={Settings} label="Settings" collapsed={collapsed} />
          <FooterButton
            icon={MessageSquarePlus}
            label="Give feedback"
            collapsed={collapsed}
          />
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
