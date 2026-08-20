import type { LucideIcon } from "lucide-react";
import {
  LayoutDashboard,
  Palette,
  SwatchBook,
  Type,
  Shapes,
  Component,
  Minus,
  Check,
} from "lucide-react";
import { componentRegistry } from "@/lib/component-registry";

/**
 * Slugs audited against Nyck design tokens — shown with a checkmark instead
 * of the default dash in the "All Components" nav list.
 */
const tokenAuditedSlugs = new Set([
  "accordion",
  "alert",
  "alert-dialog",
  "attachment",
  "avatar",
  "badge",
  "breadcrumb",
  "button",
  "calendar",
  "checkbox",
  "label",
  "radio-group",
  "sidebar",
  "skeleton",
  "slider",
  "spinner",
  "switch",
  "textarea",
  "textfield",
  "toast",
  "toggle",
  "toggle-group",
  "tooltip",
]);

export type NavItem = {
  label: string;
  href: string;
  icon: LucideIcon;
  /** Nested items shown in a collapsible disclosure beneath this item. */
  children?: NavItem[];
};

export type NavSection = {
  title: string;
  items: NavItem[];
};

const componentNavItems: NavItem[] = [
  {
    label: "All Components",
    href: "/components",
    icon: Component,
    children: componentRegistry
      .slice()
      .sort((a, b) => a.name.localeCompare(b.name))
      .map((c) => ({
        label: c.name,
        href: `/components/${c.slug}`,
        icon: tokenAuditedSlugs.has(c.slug) ? Check : Minus,
      })),
  },
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
