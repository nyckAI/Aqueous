import type { LucideIcon } from "lucide-react";
import {
  LayoutDashboard,
  Palette,
  SwatchBook,
  Type,
  Shapes,
  Component,
  Minus,
} from "lucide-react";
import { componentRegistry } from "@/lib/component-registry";

export type NavItem = {
  label: string;
  href: string;
  icon: LucideIcon;
};

export type NavSection = {
  title: string;
  items: NavItem[];
};

const componentNavItems: NavItem[] = [
  { label: "All Components", href: "/components", icon: Component },
  ...componentRegistry
    .slice()
    .sort((a, b) => a.name.localeCompare(b.name))
    .map((c) => ({
      label: c.name,
      href: `/components/${c.slug}`,
      icon: Minus,
    })),
];

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
      {
        label: "Icons",
        href: "/foundation/icons",
        icon: Shapes,
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
    items: componentNavItems,
  },
];
