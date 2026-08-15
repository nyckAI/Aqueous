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
