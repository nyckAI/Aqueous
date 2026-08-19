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
    summary: "Rebuilt Badge and Button from Figma with token-driven variants, tokenized Breadcrumb, and fixed the brand-700 primitive.",
    changes: [
      {
        type: "changed",
        title: "Badge component redesign",
        description:
          "Rebuilt Badge from Figma with default, info, success, warning, destructive, and outline variants mapped to Nyck background/text/border tokens, replacing the prior shadcn default/secondary/destructive/outline/ghost/link variant set.",
        timestamp: "2026-08-19",
      },
      {
        type: "changed",
        title: "Breadcrumb component tokenized colors and typography",
        description:
          "List, link hover, page, separator, and ellipsis now reference --color-text-neutral, --color-text-primary, --color-icon-neutral, and body-sm typography tokens instead of Tailwind's muted-foreground/foreground theme colors.",
        timestamp: "2026-08-19",
      },
      {
        type: "changed",
        title: "Button component redesign (Main buttons)",
        description:
          "Rebuilt Button from Figma with default, primary, subtle, success, danger, warning, and info variants, each with hover/pressed/disabled states mapped to new brand/success/danger/warning emphasis background tokens and --color-text-contrast/--color-icon-contrast. Updated every internal consumer (dialog, sheet, toast, combobox, calendar, carousel, pagination, sidebar, alert-dialog, message-scroller, questionnaire, input-group, attachment) off the old outline/ghost/secondary/link variant names.",
        timestamp: "2026-08-19",
      },
      {
        type: "changed",
        title: "Button docs page reorganized by type and icon direction",
        description:
          "Preview now groups by usage type (Default, Primary, Subtle, Success, Danger, Warning, Info) with each section showing the no-icon/icon-left/icon-right/both-icons variants side by side, replacing the single row that always rendered both icons at once.",
        timestamp: "2026-08-19",
      },
      {
        type: "changed",
        title: "Sidebar collapse interaction redesigned",
        description:
          "Removed the always-visible collapse/expand icon buttons from the nav header and replaced them with a small rectangle handle on the sidebar's right border. Hovering it morphs the rectangle into a chevron (left when expanded, right when collapsed) and pinches the border inward slightly, and the collapsed rail nudges a few px wider on hover to hint at expansion.",
        timestamp: "2026-08-19",
      },
      {
        type: "changed",
        title: "Sidebar spacing, typography, and color audit against Figma",
        description:
          "Root padding corrected to 32px top / 12px bottom (was symmetric 36px), content padding to a uniform 16px (was an asymmetric 10px/16px), nav rows to 12px/8px padding with an 8px icon gap and 8px corner radius (was 8px/12px padding with a 10px radius), and rows within a group now sit flush with 12px only between groups (was 12-16px everywhere). Nav item labels now use the button-md typography token (14px/20px) instead of a hardcoded 16px, and section labels use the new --color-text-tertiary token instead of --color-text-neutral to match Figma's lighter caption color.",
        timestamp: "2026-08-19",
      },
      {
        type: "changed",
        title: "Sidebar typography fully token-driven",
        description:
          "Brand wordmark now uses the Heading/XS token (16px/22px, Geist) instead of a raw text-base/leading-[22px], nav item labels add the Button/MD letter-spacing token and explicit Inter family, and section labels move off an untethered raw 13px/22px value onto the Caption/MD token (12px/16px).",
        timestamp: "2026-08-19",
      },
      {
        type: "changed",
        title: "Sidebar selected/hover/pressed states reworked",
        description:
          "A selected nav item now shows only colored text (--color-text-selected, --color-icon-selected) with no background at rest; hovering a selected item reveals the selected background tint, and pressing it deepens one tier. Non-selected items now hover to the neutral gray background token instead of the brand tint they incorrectly used before.",
        timestamp: "2026-08-19",
      },
      {
        type: "changed",
        title: "Sidebar now hugs its content and dropped the drag-to-resize handle",
        description:
          "Rebuilt the layout as a normal flex row instead of a fixed-position rail with a JS-computed pixel width. The expanded nav now sizes itself to its widest label (w-fit) instead of a fixed/user-resizable width, remains pinned during page scroll via position: sticky, and the mouse-drag resize handle was removed entirely.",
        timestamp: "2026-08-19",
      },
      {
        type: "changed",
        title: "Collapse handle moved fully outside the nav bar",
        description:
          "The rectangle/chevron collapse control now renders in its own flex column to the right of the sidebar, offset clear of the border rather than centered on it, so it floats in the whitespace beside the nav. The nav's right border stays at the boundary (still pinching inward on hover) with the sidebar's scrollbar flush against it.",
        timestamp: "2026-08-19",
      },
      {
        type: "changed",
        title: "Sidebar padding matched to the full-page Figma reference",
        description:
          "Content padding settled at px-5 (20px), superseding an earlier px-8 (32px) pass. Nav item rows now use uniform p-2 (8px on all sides) instead of 12px horizontal/8px vertical, section labels get their own 8px inset so they align with the icon column below them, and the idle collapse-handle rectangle resized from 16x4px to the Figma-specified 12x2px.",
        timestamp: "2026-08-19",
      },
      {
        type: "changed",
        title: "Input page renamed to Textfield",
        description:
          "The registry entry is now { slug: \"textfield\", name: \"Textfield\" }, so the page moved from /components/input to /components/textfield and re-sorted alphabetically in the sidebar. The legacy shadcn Input stays in input.tsx for its existing input-group/sidebar consumers.",
        timestamp: "2026-08-19",
      },
      {
        type: "added",
        title: "Text Field and Search Field components",
        description:
          "Built both Nyck input designs from Figma in textfield.tsx/textfield.css: Search Field is a filled --color-background-accentgray input with a leading magnifier, and Text Field is a white input with a --color-border-input border. Both use 8px padding, an 8px radius, 20px icons, and body-sm typography, and both gain a brand focus ring plus disabled styling that the static Figma frames don't show. Text Field exposes a single icon + iconPosition prop so a leading and trailing icon can't be rendered together.",
        timestamp: "2026-08-19",
      },
      {
        type: "changed",
        title: "Label page now showcases text field labels and descriptions",
        description:
          "Replaced the generic Label + Input pairing with the Figma field composition: label + description, label only, and the focused state.",
        timestamp: "2026-08-19",
      },
      {
        type: "added",
        title: "TextFieldGroup, TextFieldLabel, and TextFieldDescription",
        description:
          "Added the label/description composition from Figma, reusing the existing TextField rather than re-implementing the input. The label uses the Caption/MD token (12px/16px, medium, --color-text-primary) and the description uses Micro/SM (10px/12px, medium, --color-text-neutral), with the group supplying Figma's 4px label-to-field gap and the description the remaining 4px for its 8px offset.",
        timestamp: "2026-08-19",
      },
      {
        type: "added",
        title: "Compact button size",
        description:
          "Added a compact size to Button from the Figma Compact Buttons component: 8px/4px padding for a 28px-tall button, versus the Main button's 12px/8px and 36px. Everything else (6px radius, 8px icon gap, 20px icons, Button/MD typography, and all seven type variants with their hover/pressed/disabled states) is shared with the Main size.",
        timestamp: "2026-08-19",
      },
      {
        type: "added",
        title: "Button docs page shows both button types",
        description:
          "Preview is now split into \"Main buttons\" and \"Compact buttons\" sections, each listing all seven types across the four icon directions.",
        timestamp: "2026-08-19",
      },
      {
        type: "fixed",
        title: "Main button padding collapsed when icons were present",
        description:
          "The default size carried leftover shadcn has-data-[icon=...] overrides that shrank horizontal padding from 12px to 10px whenever a data-icon slot was used, so icon-bearing Main buttons rendered 2px narrower than Figma specifies. Removed so padding stays a uniform 12px.",
        timestamp: "2026-08-19",
      },
      {
        type: "added",
        title: "--color-text-tertiary and --color-text-navigation tokens",
        description:
          "Added to match two text roles used in the Figma navigation design (text/tertiary = neutral-400, text/navigation = neutral-700) that had no equivalent in the existing Text semantic set.",
        timestamp: "2026-08-19",
      },
      {
        type: "fixed",
        title: "brand-700 primitive color value",
        description:
          "Corrected from #3C4E6B (an unrelated grayish-navy that didn't fit the brand scale's progression) to #073F94, matching the Main button's Primary/Info pressed state in Figma. The token was previously unused so no existing usage changed color.",
        timestamp: "2026-08-19",
      },
    ],
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
