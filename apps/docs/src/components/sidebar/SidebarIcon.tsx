import type { LucideIcon } from "lucide-react";

type SidebarIconProps = {
  icon: LucideIcon;
  active?: boolean;
  tone?: "primary" | "secondary" | "brand";
  className?: string;
};

export function SidebarIcon({
  icon: Icon,
  active = false,
  tone = "secondary",
  className = "",
}: SidebarIconProps) {
  const colorClass = active
    ? "text-icon-selected"
    : tone === "primary"
      ? "text-icon-primary"
      : tone === "brand"
        ? "text-icon-brand"
        : "text-icon-neutral";

  return (
    <Icon
      aria-hidden
      className={`size-5 shrink-0 ${colorClass} ${className}`}
      strokeWidth={1.75}
    />
  );
}
