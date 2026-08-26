# @nyckai/aqueous-ui

## 1.2.0

### Minor Changes

- 8109ed5: Add the Pagination component (`Pagination`, `PaginationContent`, `PaginationItem`, `PaginationLink`, `PaginationPrevious`, `PaginationNext`, `PaginationEllipsis`) for page navigation.

## 1.1.0

### Minor Changes

- Added a spacing token scale (`--space-3xs` through `--space-7xl`) to `tokens.css`, and a corresponding Foundation → Spacing showcase page and Tokens page section in the docs app.

## 1.0.0

### Major Changes

- First stable release of `@nyckai/aqueous-ui`. All 23 published components (Accordion, Alert, Alert Dialog, Attachment, Avatar, Badge, Breadcrumb, Button, Calendar, Checkbox, Label, Radio Group, Skeleton, Slider, Spinner, Switch, Textarea, Textfield, Time Field, Toast, Toggle, Toggle Group, and Tooltip) are retokenized onto Nyck design tokens and considered stable for general use.

## 0.1.3

### Patch Changes

- 123279c: Fix `@nyckai/aqueous-ui/tokens.css` resolving to a nonexistent file for real installs. The exports map pointed at `./src/styles/tokens.css`, but the package only publishes `dist/` — `src/` is excluded — so any consumer installing from the registry got a hard resolve error the moment their bundler touched the tokens import. This only worked in this repo's own workspace-linked testing, where the pnpm symlink exposes the whole `packages/ui` directory including `src/`. `tokens.css` is now copied into `dist/` at build time and the exports map points there instead.

## 0.1.2

### Patch Changes

- b65bddd: Wire up publishing to GitHub Packages: registry config in .npmrc and publishConfig, a repository field, and CI permissions/token for the release workflow to actually publish. Renamed the package scope from @nyck to @nyckai to match the nyckAI GitHub org the repo now lives under (GitHub Packages requires the npm scope to match the repo owner exactly, and npm scopes must be lowercase). No component or API changes.

## 0.1.1

### Patch Changes

- Adopt Changesets for version and changelog automation. No component or API changes — this records the tooling change itself as the first entry under the new release process.
