import type { LucideIcon } from "lucide-react";
import { LayoutDashboard, Palette, SwatchBook, Type } from "lucide-react";

export type NavItem = {
  label: string;
  href: string;
  icon: LucideIcon;
};

export type NavSection = {
  title: string;
  items: NavItem[];
};

/** Design system docs sections */
export const navSections: NavSection[] = [
  {
    title: "",
    items: [
      {
        label: "Overview",
        href: "/overview",
        icon: LayoutDashboard,
      },
    ],
  },
  {
    title: "Foundation",
    items: [
      {
        label: "Colors",
        href: "/foundation/colors",
        icon: Palette,
      },
      {
        label: "Typography",
        href: "/foundation/typography",
        icon: Type,
      },
    ],
  },
  {
    title: "Tokens",
    items: [
      {
        label: "All Tokens",
        href: "/tokens/colors",
        icon: SwatchBook,
      },
    ],
  },
  {
    title: "Components",
    items: [],
  },
];
