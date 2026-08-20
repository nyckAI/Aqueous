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
    version: "0.7.0",
    date: "2026-08-19",
    author: "Jason Jeong",
    summary: "Widened the sidebar to 300px, collapsed the component list into a disclosure, added a bottom fade with a placeholder footer, and retokenized Calendar, Alert, Toast, Checkbox, and Select onto Nyck design tokens.",
    changes: [
      {
        type: "changed",
        title: "Sidebar collapse handle recolored and given a tooltip",
        description:
          "The idle rectangle indicator and its hover chevron now use text-icon-primary/bg-icon-primary instead of bg-border-neutral, and hovering the handle now shows a \"Collapse\"/\"Expand\" tooltip depending on state.",
        timestamp: "2026-08-19",
      },
      {
        type: "changed",
        title: "Sidebar collapse animation no longer appears to shrink from the center",
        description:
          "The nav's horizontal padding (px-5→px-2) and each row's icon/label alignment were snapping instantly while only the <aside>'s width animated, so content visibly re-centered mid-transition. Removed the instant justify-center/items-center toggles on NavLink, FooterButton, the header, and the nav/footer containers — icons now stay pinned to the left edge throughout — and added a matching transition-[padding] alongside the width transition (bumped to 300ms ease-in-out) so the whole rail now reads as a single continuous right-to-left collapse.",
        timestamp: "2026-08-19",
      },
      {
        type: "changed",
        title: "Checkmarks added to audited components in the sidebar nav list",
        description:
          "Accordion, Alert, Alert Dialog, Avatar, Badge, Breadcrumb, Button, Label, Sidebar, and Toast now show a checkmark instead of the default dash in the \"All Components\" list, marking them as reviewed against Nyck design tokens.",
        timestamp: "2026-08-19",
      },
      {
        type: "changed",
        title: "Sidebar docs page now shows the real site navigation",
        description:
          "Replaced the generic shadcn SidebarProvider/SidebarMenu mock (a fake \"Platform/Overview/Settings\" menu that didn't reflect anything actually built) with the actual Sidebar component from src/components/sidebar/Sidebar.tsx — the same collapsible nav rendered on every page of this site, wired to its own local collapsed state and clipped into a bounded preview box via a .sticky height override. Removed the now-unused generic sidebar primitive imports and the LayoutDashboard/Settings icon imports they depended on; updated the registry description to describe the real nav instead of the primitive.",
        timestamp: "2026-08-19",
      },
      {
        type: "changed",
        title: "Calendar Basic and Date & Time no longer stretch to Large's width",
        description:
          ".calendar-container now sets align-self: flex-start and width: fit-content, since the default flex align-items: stretch on a column layout was forcing the single-month variants to match the two-month Large variant's width whenever they shared a flex column parent.",
        timestamp: "2026-08-19",
      },
      {
        type: "changed",
        title: "Alert icon size fixed to 20×20px",
        description:
          "AlertIcon's wrapping div was sized size-5 (20px) but its child lucide icon had no size class, so it rendered at lucide's default 24px and overflowed the box. Added [&>svg]:size-full so the icon fills its 20×20 container exactly.",
        timestamp: "2026-08-19",
      },
      {
        type: "changed",
        title: "Toast retokenized from Figma onto Nyck tokens",
        description:
          "Rebuilt toast.tsx/added toast.css to match the Figma Toasts component: replaced bg-popover/text-popover-foreground/shadow-lg/rounded-2xl with --color-background-neutral, --color-border-neutral, and an 8px radius; title/description now use Body/SM typography at Figma's 24px/22px line heights; the leading status icon is recolored per type (--color-icon-success/-info/-warning/-danger/-primary) and corrected from 16px to the Figma-specified 20px. Swapped icon glyphs to match the Figma reference exactly: CircleCheckIcon→CheckIcon (success), InfoIcon→BellIcon (info), OctagonXIcon→XIcon (error) — Figma's toasts use plain check/bell/X glyphs, not the circled/octagon variants the shadcn defaults shipped with. Close button recolored from text-muted-foreground to --color-icon-neutral/--color-icon-primary on hover.",
        timestamp: "2026-08-19",
      },
      {
        type: "changed",
        title: "Checkbox retokenized onto Nyck tokens",
        description:
          "Resting border now uses --color-border-input instead of shadcn's border-input; the checked state's bg-primary/text-primary-foreground (shadcn's near-black/white theme pair) is now sourced from the --black/--white primitives directly, preserving the exact same visual since no semantic \"checked\" background token exists yet. Focus ring and aria-invalid states are left on the shared shadcn theme vars, matching the precedent already set in Button.",
        timestamp: "2026-08-19",
      },
      {
        type: "changed",
        title: "Select trigger redesigned to match Text Field",
        description:
          "Replaced border-input/bg-transparent/shadcn focus-ring classes with the same tokens Text Field uses: --color-background-neutral, --color-border-input (default) / --color-border-focused (focus), --color-text-primary/--color-text-neutral (placeholder), and Body/SM typography. Radius corrected from Tailwind's rounded-lg (10px in this app's scale) to an explicit 8px to match Text Field exactly. SelectContent/SelectItem menu styling is unchanged (out of scope — this pass only covers the closed-state trigger).",
        timestamp: "2026-08-19",
      },
      {
        type: "removed",
        title: "Card and Drawer components removed",
        description:
          "Deleted card.tsx/drawer.tsx and their docs pages/demos entirely; neither was referenced anywhere else in the codebase.",
        timestamp: "2026-08-19",
      },
      {
        type: "changed",
        title: "Sidebar widened to 300px",
        description:
          "Expanded width changed from w-fit (hugging the widest visible label) to a fixed w-[300px], since collapsing \"All Components\" into a disclosure removed the long component names that were previously driving the hug-content width.",
        timestamp: "2026-08-19",
      },
      {
        type: "changed",
        title: "\"All Components\" collapsed into a disclosure",
        description:
          "The flat list of all 35 component links no longer renders inline in the sidebar; it's now nested under an \"All Components\" row with a chevron toggle, closed by default. The disclosure auto-opens (and can't be manually closed) whenever the current page is one of its children, so the active item is never hidden.",
        timestamp: "2026-08-19",
      },
      {
        type: "changed",
        title: "Disclosure chevron direction fixed",
        description:
          "Was rotating from a sideways (collapsed) to a downward (open) arrow, backwards from the conventional \"chevron-down means expand, chevron-up means collapse\" pattern. Now points down when closed and rotates 180deg to point up when open.",
        timestamp: "2026-08-19",
      },
      {
        type: "added",
        title: "Calendar redesigned from Figma with Basic, Large, and Date & Time variants",
        description:
          "Retokenized the react-day-picker-backed Calendar off shadcn's bg-primary/bg-muted/text-muted-foreground classes onto Nyck tokens (caption uses Heading/XS, weekdays Micro/SM uppercase, days Caption/MD; range endpoints and single-select get a solid --color-background-brand-emphasis fill with --color-text-contrast, range middle gets a flat --color-background-selected band, matching Figma's brand-200 tint exactly). Added three composed exports on top of the retokenized primitive: CalendarBasic (single month), CalendarLarge (From/To TextField pair above two side-by-side months), and CalendarDateTime (single month plus an OpaqueTextField time chip and a Button variant=\"primary\" \"Done\" action) — reusing existing TextField/OpaqueTextField/Button components rather than building new inputs.",
        timestamp: "2026-08-19",
      },
      {
        type: "added",
        title: "BottomContainer with Settings / Give feedback",
        description:
          "Built the Figma BottomContainer as a pinned (non-scrolling) footer at the bottom of the sidebar: border-top divider, 12px top/bottom padding, 16px sides, 8px gap between the two rows, each row using 16px Inter Medium text in --color-text-navigation. Since this docs site has no real settings or feedback destinations yet, both rows are non-navigating placeholder buttons.",
        timestamp: "2026-08-19",
      },
      {
        type: "added",
        title: "Bottom fade on the scrollable nav list",
        description:
          "The sidebar was restructured into three parts — a fixed header, a scrollable middle, and the pinned BottomContainer — so a mask-image gradient can fade the middle list's last ~40px into transparent right where it meets the footer's divider, hinting that more items are scrollable below. The fade is computed from actual overflow (via ResizeObserver + scroll position), so it only appears when there's more content below the fold, and disappears once scrolled to the bottom.",
        timestamp: "2026-08-19",
      },
      {
        type: "added",
        title: "Alert Dialog redesigned from Figma with 5 variants",
        description:
          "Rebuilt Alert Dialog around the Figma \"Message Modals\" component: default, danger, success, warning, and info, each with a 44px variant-colored icon chip (CircleAlert), a Heading/SM Semibold title colored to match, a Body/SM description in --color-text-neutral, and a plain right-aligned actions row using the existing Button component (no color/props changes needed there — the Figma \"Main Buttons\" instance in the modal already matches Button's default variant exactly). Replaced the old grid-based AlertDialogHeader/media-above-title layout and the gray border-t footer strip, neither of which the Figma design has. Added a new --color-background-neutral-emphasis token for the Default variant's icon chip (Figma's background/neutral-emphasis, mapped to neutral-100 — an existing primitive with no prior semantic name).",
        timestamp: "2026-08-19",
      },
    ],
  },
  {
    version: "0.6.0",
    date: "2026-08-19",
    author: "Jason Jeong",
    summary: "Redesigned Badge, Button, and the navigation from Figma, added Text Field and Search Field with labels and descriptions, and expanded the semantic token set.",
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
