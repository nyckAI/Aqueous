# @nyckai/aqueous-ui

Nyck's Aqueous design system — published React components, built on
[Base UI](https://base-ui.com) primitives and Tailwind CSS v4.

Every component here has been audited against Nyck design tokens (see the
`published: true` flag in the docs site's `component-registry.ts`, which
is this package's actual publish manifest). Components still in progress
stay in the docs app and never ship here.

## Requirements

This package ships components styled with Tailwind utility classes plus a
handful of custom CSS files that reference Nyck's design tokens as CSS
custom properties. Your app needs:

- React 19+
- Tailwind CSS v4+
- Node/bundler support for ESM (this package ships ESM only)

Tailwind is a **hard peer dependency** — if your app has no Tailwind
pipeline at all, components will render unstyled. There's no
Tailwind-free build of this package.

## Install

This package publishes to [GitHub Packages](https://npm.pkg.github.com),
not the public npm registry — it's internal to Nyck. GitHub Packages
requires authentication for both installing and publishing, even though
the package itself is scoped `restricted` (private) rather than public.

Add to your app's `.npmrc` (create one at your project root if you don't
have one):

```ini
@nyckai:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=${NODE_AUTH_TOKEN}
```

Then set `NODE_AUTH_TOKEN` in your shell (locally) or as a repo secret
(in CI) to a token with `read:packages` scope:

- **Locally**: a [personal access token](https://github.com/settings/tokens)
  (classic, `read:packages` scope) for your own GitHub account, since
  you'll need access to the `nyckAI` org's packages.
- **In CI**: the workflow's own `GITHUB_TOKEN` works automatically as
  long as the job's permissions include `packages: read` and the runner
  is in an org the token can see packages for.

Then install as normal:

```bash
npm install @nyckai/aqueous-ui tailwindcss
```

## Set up your global CSS (one time)

In your app's root CSS file (e.g. `app/globals.css` in Next.js):

```css
@import "tailwindcss";
@import "@nyckai/aqueous-ui/tokens.css";
@source "../node_modules/@nyckai/aqueous-ui/dist";
```

- **`@import "@nyckai/aqueous-ui/tokens.css"`** registers every Nyck design
  token (brand/neutral/red/green/... color scales, typography sizes,
  radius scale) as real Tailwind theme values via `@theme inline` — so
  utilities like `bg-background-brand-emphasis` exist in your build, not
  just as inert CSS variables.
- **`@source "../node_modules/@nyckai/aqueous-ui/dist"`** is the line that
  actually makes this work. Tailwind v4 excludes `node_modules` from its
  automatic content scanning by default, so without this line every
  utility class used inside this package's compiled components produces
  zero CSS. Adjust the relative path if your global CSS file isn't one
  level below your app root.

Font: Nyck's typeface is Inter. `tokens.css` sets
`--font-family-body`/`--font-family-heading` to
`Inter, ui-sans-serif, system-ui, sans-serif` — this degrades gracefully
to system fonts if you haven't loaded Inter yourself. If you have loaded
it (e.g. via `next/font/google`), override those two variables after the
import to point at your own loaded font instead.

## Use it

```tsx
import { Button, Checkbox, Toaster, toast } from "@nyckai/aqueous-ui";

function SignUpForm() {
  return (
    <Toaster>
      <Checkbox id="terms" />
      <Button variant="primary" onClick={() => toast.add({ title: "Saved!" })}>
        Save
      </Button>
    </Toaster>
  );
}
```

Or import a single component for a smaller import surface:

```tsx
import { Button } from "@nyckai/aqueous-ui/button";
```

No provider or theme wrapper is required — once the global CSS import
above is in place, every component renders in Nyck's actual brand colors,
spacing, and typography automatically.

## Updating

- **Visual/token-only changes** (a recolor, a radius fix, a new variant):
  bump the version, rebuild — no code changes needed on your end.
- **Breaking API changes** (a renamed prop, a split component): shipped
  as a semver-major bump, paired with a codemod where practical. Watch
  this package with Renovate/Dependabot in your repo to get an automatic
  PR the moment a new version publishes.

## Inside this monorepo (Aqueous contributors)

If you're working inside the Aqueous repo itself rather than consuming
the published package, `apps/docs` already wires this up as a live
example — see `apps/docs/src/app/globals.css`. It points `@source` at
`packages/ui/src` (this package's live source, via the pnpm workspace
link) rather than `dist`, so changes to a component show up in the docs
site immediately without a rebuild.
