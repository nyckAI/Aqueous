export type ChangeType = "added" | "changed" | "removed" | "fixed";

export type ChangeEntry = {
  type: ChangeType;
  title: string;
  description: string;
  timestamp: string;
};

export type VersionEntry = {
  version: string;
  date: string;
  author: string;
  summary: string;
  changes: ChangeEntry[];
};

export const changelog: VersionEntry[] = [
  {
    version: "Unreleased",
    date: "",
    author: "Jason Jeong",
    summary: "",
    changes: [],
  },
  {
    version: "0.5.0",
    date: "2026-08-19",
    author: "Jason Jeong",
    summary: "Restructured the Alert component and tokenized typography in Accordion and Alert.",
    changes: [
      {
        type: "changed",
        title: "Accordion component tokenized typography",
        description:
          "Trigger and content font size, line height, letter spacing, and font weight now reference typography tokens instead of hardcoded values.",
        timestamp: "2026-08-19",
      },
      {
        type: "changed",
        title: "Alert component restructure and tokenized typography",
        description:
          "Rebuilt Alert with new AlertIcon, AlertBody, AlertContent, AlertActions, and AlertClose subcomponents, moved variant coloring to icon-only via .alert-icon, and switched title/description/action text to typography tokens.",
        timestamp: "2026-08-19",
      },
    ],
  },
  {
    version: "0.4.0",
    date: "2026-08-15",
    author: "Jason Jeong",
    summary: "Integrated 35 shadcn/ui base components with live previews, code snippets, and dynamic sidebar navigation.",
    changes: [
      {
        type: "added",
        title: "35 shadcn/ui base components",
        description:
          "Installed Accordion, Alert, Alert Dialog, Avatar, Badge, Breadcrumb, Button, Calendar, Card, Checkbox, Collapsible, Dialog, Drawer, Dropdown Menu, Hover Card, Input, Input OTP, Label, Pagination, Popover, Progress, Radio Group, Scroll Area, Select, Separator, Sheet, Skeleton, Slider, Spinner, Switch, Table, Tabs, Textarea, Toggle, and Tooltip as unstyled base skeletons.",
        timestamp: "2026-08-15",
      },
      {
        type: "added",
        title: "Component preview and code pages",
        description:
          "Each component has a dedicated page at /components/[slug] with a Preview tab showing a live interactive demo and a Code tab with copy-to-clipboard source.",
        timestamp: "2026-08-15",
      },
      {
        type: "added",
        title: "Component index page",
        description:
          "Added /components with a grid of linked cards for all 35 components, each displaying name and description.",
        timestamp: "2026-08-15",
      },
      {
        type: "added",
        title: "Dynamic sidebar component navigation",
        description:
          "Components section in the sidebar is now auto-generated from the component registry and sorted alphabetically. New components added to the registry appear automatically.",
        timestamp: "2026-08-15",
      },
      {
        type: "added",
        title: "Component registry",
        description:
          "Created a central component registry at src/lib/component-registry.ts that drives the sidebar, static route generation, and component index page.",
        timestamp: "2026-08-15",
      },
      {
        type: "changed",
        title: "Overview page component count",
        description:
          "Component count stat card now dynamically reads from the component registry instead of showing 0.",
        timestamp: "2026-08-15",
      },
    ],
  },
  {
    version: "0.3.0",
    date: "2026-08-06",
    author: "Jason Jeong",
    summary: "Overhauled text and icon tokens, migrated site to semantic color tokens, redesigned changelog, and added overview metrics.",
    changes: [
      {
        type: "changed",
        title: "Text semantic tokens overhaul",
        description:
          "Replaced secondary, tertiary, and navigation text tokens with a full set: primary, brand, neutral, disabled, selected, danger, warning, success, info, and 9 accent categories (gray, green, red, orange, yellow, purple, pink, teal, slate).",
        timestamp: "2026-08-06",
      },
      {
        type: "changed",
        title: "Icon semantic tokens overhaul",
        description:
          "Replaced secondary and inverse icon tokens with a full set: primary, brand, neutral, disabled, selected, danger, warning, success, info, and 9 accent categories (gray, green, red, orange, yellow, purple, pink, teal, slate).",
        timestamp: "2026-08-06",
      },
      {
        type: "changed",
        title: "Full semantic color token migration",
        description:
          "Migrated every hardcoded color across the site to design system tokens. Restructured globals.css to register background, text, icon, and border semantic tokens in the Tailwind theme. No component references a raw color outside the design system.",
        timestamp: "2026-08-06",
      },
      {
        type: "changed",
        title: "Changelog redesign",
        description:
          "Changelog entries are now collapsible cards with a summary, formatted date, and author. Expanding a card reveals the full change list.",
        timestamp: "2026-08-06",
      },
      {
        type: "added",
        title: "Text and Icon sections on All Tokens page",
        description:
          "Renders text and icon tokens with the same grouped format as background and border tokens, including descriptions and copy-to-clipboard.",
        timestamp: "2026-08-06",
      },
      {
        type: "added",
        title: "Text and Icon filters in table of contents",
        description:
          "Added Text and Icon as filterable categories in the token page sidebar.",
        timestamp: "2026-08-06",
      },
      {
        type: "added",
        title: "Overview page metrics",
        description:
          "Added token count and component count stat cards alongside the version display on the overview page.",
        timestamp: "2026-08-06",
      },
      {
        type: "added",
        title: "Sidebar nav hover and pressed states",
        description:
          "Navigation links now use brand background tokens for hover and pressed interactions.",
        timestamp: "2026-08-06",
      },
    ],
  },
  {
    version: "0.2.0",
    date: "2026-07-31",
    author: "Jason Jeong",
    summary: "Added border tokens, token page sections, table of contents filtering, overview page, and foundation colors.",
    changes: [
      {
        type: "added",
        title: "Border semantic tokens",
        description:
          "18 tokens covering brand, focused, input, selected, danger, warning, success, info, disabled, and 9 accent categories.",
        timestamp: "2026-07-31",
      },
      {
        type: "added",
        title: "Border section on All Tokens page",
        description:
          "Renders border tokens with the same grouped format as background tokens, including descriptions and copy-to-clipboard.",
        timestamp: "2026-07-31",
      },
      {
        type: "added",
        title: "Table of contents filtering",
        description:
          "Clicking Background, Border, or All Tokens in the sidebar now filters the visible sections.",
        timestamp: "2026-07-31",
      },
      {
        type: "added",
        title: "Overview page",
        description:
          "Added /overview as the new landing page with design system title, placeholder description, version display, and full changelog.",
        timestamp: "2026-07-31",
      },
      {
        type: "added",
        title: "Foundation colors page implementation",
        description:
          "Built interactive palette view with vertical swatch columns for all 10 primitive color families, auto-contrast text, hover hex reveal, and click-to-copy clipboard support.",
        timestamp: "2026-07-31",
      },
    ],
  },
  {
    version: "0.1.0",
    date: "2026-07-30",
    author: "Jason Jeong",
    summary: "Initial release with primitive color palettes, semantic tokens, token viewer, and sidebar navigation.",
    changes: [
      {
        type: "added",
        title: "Primitive color palettes",
        description:
          "Brand, Neutral, Green, Red, Orange, Yellow, Purple, Pink, Teal, Slate scales with full numeric ranges (50-950).",
        timestamp: "2026-07-30T15:39:00-05:00",
      },
      {
        type: "added",
        title: "Background semantic tokens",
        description:
          "40 tokens covering brand, neutral, selected, danger, warning, success, info, and 9 accent categories, each with default/hover/pressed/disabled states.",
        timestamp: "2026-07-30T15:39:00-05:00",
      },
      {
        type: "added",
        title: "Text semantic tokens",
        description:
          "Initial text color tokens including primary and brand.",
        timestamp: "2026-07-30T15:39:00-05:00",
      },
      {
        type: "added",
        title: "Icon semantic tokens",
        description:
          "Initial icon color tokens including primary and brand.",
        timestamp: "2026-07-30T15:39:00-05:00",
      },
      {
        type: "added",
        title: "All Tokens page",
        description:
          "Searchable token reference at /tokens/colors with grouped rows, copyable token names, light value preview cards, and dark value placeholders.",
        timestamp: "2026-07-30T15:39:00-05:00",
      },
      {
        type: "added",
        title: "Primitive color foundation page",
        description:
          "Visual palette display at /foundation/colors with vertical swatch columns for all 10 color families and click-to-copy hex values.",
        timestamp: "2026-07-30T15:39:00-05:00",
      },
      {
        type: "added",
        title: "Sidebar navigation",
        description:
          "Global sidebar with icon-based nav, section grouping, and avatar.",
        timestamp: "2026-07-30T15:39:00-05:00",
      },
      {
        type: "added",
        title: "Slate primitive scale",
        description:
          "Added full slate-50 through slate-950 range.",
        timestamp: "2026-07-30T15:48:00-05:00",
      },
      {
        type: "added",
        title: "Typography foundation file",
        description:
          "Created typography.ts scaffold.",
        timestamp: "2026-07-30T19:49:00-05:00",
      },
      {
        type: "added",
        title: "Token page redesign",
        description:
          "Updated layout with table-of-contents sidebar, attribute group descriptions, and improved column grid.",
        timestamp: "2026-07-30T19:49:00-05:00",
      },
    ],
  },
];
