"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";

export function SidebarCollapseHandle({
  collapsed,
  hovered,
  onToggle,
  onHoverChange,
}: {
  collapsed: boolean;
  hovered: boolean;
  onToggle: () => void;
  onHoverChange: (hovered: boolean) => void;
}) {
  return (
    <div className="pointer-events-none sticky top-0 flex h-dvh w-5 shrink-0 items-center">
      {/* Nav's right border, sitting at the boundary — pinches inward while the handle is hovered */}
      <div
        className={`absolute left-0 w-px bg-border-neutral transition-all duration-200 ${
          hovered ? "inset-y-3" : "inset-y-0"
        }`}
      />

      {/* Collapse / expand handle — sits fully to the right of the border, outside the nav */}
      <button
        type="button"
        onClick={onToggle}
        onMouseEnter={() => onHoverChange(true)}
        onMouseLeave={() => onHoverChange(false)}
        aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
        className="pointer-events-auto relative ml-auto flex h-8 w-4 shrink-0 cursor-pointer items-center justify-center rounded-sm text-icon-neutral transition-colors hover:text-icon-primary"
      >
        <span
          className={`absolute transition-all duration-200 ${
            hovered ? "scale-50 opacity-0" : "scale-100 opacity-100"
          }`}
        >
          <span className="block h-3 w-0.5 rounded-full bg-border-neutral" />
        </span>
        <span
          className={`absolute transition-all duration-200 ${
            hovered ? "scale-100 opacity-100" : "scale-50 opacity-0"
          }`}
        >
          {collapsed ? (
            <ChevronRight className="size-3.5" strokeWidth={2} />
          ) : (
            <ChevronLeft className="size-3.5" strokeWidth={2} />
          )}
        </span>
      </button>
    </div>
  );
}
