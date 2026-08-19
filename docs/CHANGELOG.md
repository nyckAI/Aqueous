# Changelog

All notable changes to the Aqueous Design System are documented here.
Format follows [Semantic Versioning](https://semver.org/): `MAJOR.MINOR.PATCH`.

<!--
=== AI INSTRUCTIONS — UPDATING THIS CHANGELOG ===

When you make changes to the design system, update BOTH this file and `src/lib/changelog.ts`.

## What to log

Any change to the design system: new tokens, renamed tokens, removed tokens, new components,
new foundation files, new or updated pages in the documentation site, structural changes to
the token architecture, or fixes to existing values.

## Entry format (this file)

Each entry is a single bullet under a category heading (Added, Changed, Removed, Fixed):

- **Short title** — One-sentence description of what changed and its scope `YYYY-MM-DD HH:MM TZ`

Rules:
- Title should name the specific thing (e.g. "Border semantic tokens", not "New tokens").
- Description should state the count and list the categories/variants covered.
- Timestamp is when the work was done. Use `YYYY-MM-DD HH:MM TZ` when the time is known,
  or `YYYY-MM-DD` if only the date is available.
- Use the correct category: Added (new), Changed (modified existing), Removed (deleted), Fixed (bug fix).

## Mirror entry in `src/lib/changelog.ts`

For every entry here, add a matching object to the `changelog` array in `src/lib/changelog.ts`.
This typed data file powers the dashboard. The entry shape:

  {
    type: "added" | "changed" | "removed" | "fixed",
    title: "Short title",
    description: "One-sentence description matching this file.",
    timestamp: "ISO 8601 or YYYY-MM-DD"
  }

Add the entry to the `changes` array of the matching version object. If the version object
does not exist yet, create one at the top of the `changelog` array.

## Version ordering

- `[Unreleased]` is always the LAST section in this file (bottom), containing work not yet tagged.
- Released versions are listed above it in reverse chronological order (newest first).
- In `src/lib/changelog.ts`, the `changelog` array is also ordered newest first, with the
  "Unreleased" entry at index 0.

## Cutting a release

1. Rename `[Unreleased]` to `[X.Y.Z] — YYYY-MM-DD` in this file.
2. In `src/lib/changelog.ts`, change `version: "Unreleased"` to `"X.Y.Z"` and update `date`.
3. Add a new empty `[Unreleased]` section at the bottom of this file, and a new
   `{ version: "Unreleased", date: "", changes: [] }` at index 0 of the array.
4. Update `version` in `package.json` to `X.Y.Z`.
5. Commit and tag: `git tag vX.Y.Z`.

## Version bumping rules

- PATCH (0.0.X): fixing a token value, correcting a hex code, typo in a description.
- MINOR (0.X.0): adding new tokens, new foundation files, new components, new pages.
- MAJOR (X.0.0): renaming or removing tokens/components that consumers already use.

=== END AI INSTRUCTIONS ===
-->

---

## [Unreleased]

### Changed

- **Badge component redesign** — Rebuilt Badge from Figma with default, info, success, warning, destructive, and outline variants mapped to Nyck background/text/border tokens, replacing the prior shadcn default/secondary/destructive/outline/ghost/link variant set `2026-08-19`
- **Breadcrumb component tokenized colors and typography** — List, link hover, page, separator, and ellipsis now reference `--color-text-neutral`, `--color-text-primary`, `--color-icon-neutral`, and body-sm typography tokens instead of Tailwind's `muted-foreground`/`foreground` theme colors `2026-08-19`
- **Button component redesign (Main buttons)** — Rebuilt Button from Figma with default, primary, subtle, success, danger, warning, and info variants, each with hover/pressed/disabled states mapped to new brand/success/danger/warning emphasis background tokens and `--color-text-contrast`/`--color-icon-contrast`; updated every internal consumer (dialog, sheet, toast, combobox, calendar, carousel, pagination, sidebar, alert-dialog, message-scroller, questionnaire, input-group, attachment) off the old outline/ghost/secondary/link variant names `2026-08-19`
- **Button docs page reorganized by type and icon direction** — Preview now groups by usage type (Default, Primary, Subtle, Success, Danger, Warning, Info) with each section showing the no-icon/icon-left/icon-right/both-icons variants side by side, replacing the single row that always rendered both icons at once `2026-08-19`
- **Sidebar collapse interaction redesigned** — Removed the always-visible collapse/expand icon buttons from the nav header and replaced them with a small rectangle handle on the sidebar's right border; hovering it morphs the rectangle into a chevron (left when expanded, right when collapsed) and pinches the border inward slightly, and the collapsed rail nudges a few px wider on hover to hint at expansion `2026-08-19`
- **Sidebar spacing, typography, and color audit against Figma** — Root padding corrected to 32px top / 12px bottom (was symmetric 36px), content padding to a uniform 16px (was an asymmetric 10px/16px), nav rows to 12px/8px padding with an 8px icon gap and 8px corner radius (was 8px/12px padding with a 10px radius), and rows within a group now sit flush with 12px only between groups (was 12–16px everywhere). Nav item labels now use the button-md typography token (14px/20px) instead of a hardcoded 16px, and section labels (Foundation, Tokens, Components, …) use the new `--color-text-tertiary` token instead of `--color-text-neutral` to match Figma's lighter caption color `2026-08-19`
- **Sidebar typography fully token-driven** — Brand wordmark now uses the Heading/XS token (16px/22px, Geist) instead of a raw `text-base`/`leading-[22px]`, nav item labels add the Button/MD letter-spacing token and explicit Inter family, and section labels move off an untethered raw 13px/22px value onto the Caption/MD token (12px/16px) `2026-08-19`
- **Sidebar selected/hover/pressed states reworked** — A selected nav item now shows only colored text (`--color-text-selected`, `--color-icon-selected`) with no background at rest; hovering a selected item reveals the selected background tint, and pressing it deepens one tier. Non-selected items now hover to the neutral gray background token instead of the brand tint they incorrectly used before `2026-08-19`
- **Sidebar now hugs its content and dropped the drag-to-resize handle** — Rebuilt the layout as a normal flex row instead of a fixed-position rail with a JS-computed pixel width; the expanded nav now sizes itself to its widest label (`w-fit`) instead of a fixed/user-resizable width, remains pinned during page scroll via `position: sticky`, and the mouse-drag resize handle was removed entirely `2026-08-19`
- **Collapse handle moved fully outside the nav bar** — The rectangle/chevron collapse control now renders in its own flex column to the right of the sidebar, offset clear of the border rather than centered on it, so it floats in the whitespace beside the nav; the nav's right border stays at the boundary (still pinching inward on hover) with the sidebar's scrollbar flush against it `2026-08-19`
- **Sidebar padding matched to the full-page Figma reference** — Content padding settled at `px-5` (20px), superseding an earlier `px-8` (32px) pass; nav item rows now use uniform `p-2` (8px on all sides) instead of 12px horizontal/8px vertical; section labels get their own 8px inset so they align with the icon column below them; and the idle collapse-handle rectangle resized from 16×4px to the Figma-specified 12×2px `2026-08-19`

- **Label page now showcases text field labels and descriptions** — Replaced the generic `Label` + `Input` pairing with the Figma field composition: label + description, label only, and the focused state `2026-08-19`
- **Input page renamed to Textfield** — The registry entry is now `{ slug: "textfield", name: "Textfield" }`, so the page moved from `/components/input` to `/components/textfield` and re-sorted alphabetically in the sidebar; the legacy shadcn `Input` stays in `input.tsx` for its existing `input-group`/`sidebar` consumers `2026-08-19`

### Added

- **Text Field and Search Field components** — Built both Nyck input designs from Figma in `textfield.tsx`/`textfield.css`: Search Field is a filled `--color-background-accentgray` input with a leading magnifier, and Text Field is a white input with a `--color-border-input` border. Both use 8px padding, an 8px radius, 20px icons, and body-sm typography, and both gain a brand focus ring plus disabled styling that the static Figma frames don't show. Text Field exposes a single `icon` + `iconPosition` prop so a leading and trailing icon can't be rendered together `2026-08-19`
- **TextFieldGroup, TextFieldLabel, and TextFieldDescription** — Added the label/description composition from Figma, reusing the existing TextField rather than re-implementing the input: the label uses the Caption/MD token (12px/16px, medium, `--color-text-primary`) and the description uses Micro/SM (10px/12px, medium, `--color-text-neutral`), with the group supplying Figma's 4px label-to-field gap and the description the remaining 4px for its 8px offset `2026-08-19`
- **Compact button size** — Added a `compact` size to Button from the Figma Compact Buttons component: 8px/4px padding for a 28px-tall button, versus the Main button's 12px/8px and 36px. Everything else (6px radius, 8px icon gap, 20px icons, Button/MD typography, and all seven type variants with their hover/pressed/disabled states) is shared with the Main size `2026-08-19`
- **Button docs page shows both button types** — Preview is now split into "Main buttons" and "Compact buttons" sections, each listing all seven types across the four icon directions `2026-08-19`
- **`--color-text-tertiary` and `--color-text-navigation` tokens** — Added to match two text roles used in the Figma navigation design (`text/tertiary` = neutral-400, `text/navigation` = neutral-700) that had no equivalent in the existing Text semantic set `2026-08-19`

### Fixed

- **Main button padding collapsed when icons were present** — The `default` size carried leftover shadcn `has-data-[icon=…]` overrides that shrank horizontal padding from 12px to 10px whenever a `data-icon` slot was used, so icon-bearing Main buttons rendered 2px narrower than Figma specifies; removed so padding stays a uniform 12px `2026-08-19`
- **`brand-700` primitive color value** — Corrected from `#3C4E6B` (an unrelated grayish-navy that didn't fit the brand scale's progression) to `#073F94`, matching the Main button's Primary/Info pressed state in Figma; the token was previously unused so no existing usage changed color `2026-08-19`

---

## [0.5.0] — 2026-08-19

### Changed

- **Accordion component tokenized typography** — Trigger and content font size, line height, letter spacing, and font weight now reference typography tokens instead of hardcoded values `2026-08-19`
- **Alert component restructure and tokenized typography** — Rebuilt Alert with new AlertIcon, AlertBody, AlertContent, AlertActions, and AlertClose subcomponents, moved variant coloring to icon-only via `.alert-icon`, and switched title/description/action text to typography tokens `2026-08-19`

---

## [0.4.0] — 2026-08-15

### Added

- **35 shadcn/ui base components** — Installed Accordion, Alert, Alert Dialog, Avatar, Badge, Breadcrumb, Button, Calendar, Card, Checkbox, Collapsible, Dialog, Drawer, Dropdown Menu, Hover Card, Input, Input OTP, Label, Pagination, Popover, Progress, Radio Group, Scroll Area, Select, Separator, Sheet, Skeleton, Slider, Spinner, Switch, Table, Tabs, Textarea, Toggle, and Tooltip as unstyled base skeletons `2026-08-15`
- **Component preview and code pages** — Each component has a dedicated page at `/components/[slug]` with a Preview tab showing a live interactive demo and a Code tab with copy-to-clipboard source `2026-08-15`
- **Component index page** — Added `/components` with a grid of linked cards for all 35 components, each displaying name and description `2026-08-15`
- **Dynamic sidebar component navigation** — Components section in the sidebar is auto-generated from the component registry and sorted alphabetically; new components appear automatically `2026-08-15`
- **Component registry** — Created a central component registry at `src/lib/component-registry.ts` that drives the sidebar, static route generation, and component index page `2026-08-15`

### Changed

- **Overview page component count** — Component count stat card now dynamically reads from the component registry instead of showing 0 `2026-08-15`

---

## [0.1.0] — 2026-07-30

### Added

- **Primitive color palettes** — Brand, Neutral, Green, Red, Orange, Yellow, Purple, Pink, Teal, Slate scales with full numeric ranges (50–950) `2026-07-30 15:39 CDT`
- **Background semantic tokens** — 40 tokens covering brand, neutral, selected, danger, warning, success, info, and 9 accent categories, each with default/hover/pressed/disabled states `2026-07-30 15:39 CDT`
- **Text semantic tok2ens** — primary, secondary, tertiary, navigation, and brand text colors `2026-07-30 15:39 CDT`
- **Icon semantic tokens** — primary, secondary, brand, and inverse icon colors `2026-07-30 15:39 CDT`
- **All Tokens page** — searchable token reference at `/tokens/colors` with grouped rows, copyable token names, light value preview cards, and dark value placeholders `2026-07-30 15:39 CDT`
- **Primitive color foundation page** — visual palette display at `/foundation/colors` with vertical swatch columns for all 10 color families and click-to-copy hex values `2026-07-30 15:39 CDT`
- **Sidebar navigation** — global sidebar with icon-based nav, section grouping, and avatar `2026-07-30 15:39 CDT`
- **Slate primitive scale** — added full slate-50 through slate-950 range `2026-07-30 15:48 CDT`
- **Typography foundation file** — created `typography.ts` scaffold `2026-07-30 19:49 CDT`
- **Token page redesign** — updated layout with table-of-contents sidebar, attribute group descriptions, and improved column grid `2026-07-30 19:49 CDT`

---

## [0.2.0] — 2026-07-31

### Added

- **Border semantic tokens** — 18 tokens covering brand, focused, input, selected, danger, warning, success, info, disabled, and 9 accent categories `2026-07-31`
- **Border section on All Tokens page** — renders border tokens with the same grouped format as background tokens, including descriptions and copy-to-clipboard `2026-07-31`
- **Table of contents filtering** — clicking Background, Border, or All Tokens in the sidebar now filters the visible sections `2026-07-31`
- **Overview page** — added `/overview` as the new landing page with design system title, placeholder description, version display, and full changelog `2026-07-31`
- **Foundation colors page implementation** — built interactive palette view with vertical swatch columns for all 10 primitive color families, auto-contrast text, hover hex reveal, and click-to-copy clipboard support `2026-07-31`
