# Publishing updates to @nyckai/aqueous-ui

**Audience**: this document is written for an AI agent (or a human) operating
the release process for the Aqueous component library, `@nyckai/aqueous-ui`.
It assumes no prior context beyond what's written here — read it top to
bottom before touching anything, and follow it literally. Where a step has a
known failure mode, it's called out immediately after that step, not buried
in a separate troubleshooting section, so you hit the explanation exactly
when you need it.

If anything in this document turns out to be wrong (a command fails
differently than described, a file has moved), **stop and say so** rather
than improvising past it — this document should be corrected, not silently
worked around, since the next agent to read it needs it to still be true.

---

## 1. Architecture, in one paragraph

This repo is a pnpm + Turborepo monorepo. `apps/docs` is the internal
Next.js documentation site (private, never published). `packages/ui` is the
publishable library, `@nyckai/aqueous-ui`, published to **GitHub Packages**
(`https://npm.pkg.github.com`) under the `nyckAI` GitHub org. Not every
component in the docs site ships in the package — only ones marked
`published: true` in `apps/docs/src/lib/component-registry.ts`, which is the
single source of truth for "is this finished enough to ship."

Versioning and changelogs are automated with **Changesets**
(`@changesets/cli`). Releasing requires a manual step (see §6) because this
GitHub org does not grant Actions permission to open pull requests — that
was a deliberate choice, not an oversight; do not try to "fix" it by
enabling that permission without being asked.

## 2. Prerequisites — verify before doing anything

Run these and confirm the expected output before proceeding. If any of them
fail or look different, stop and report it rather than guessing around it.

```bash
node -v        # should be 22+ (see §7.2 for why this matters)
pnpm -v        # should resolve; this repo pins pnpm@9.15.0 via packageManager
gh auth status # should show a logged-in account with at least 'repo' scope
git remote -v  # origin should point at https://github.com/nyckAI/Aqueous.git
git status     # should be clean, or you're not starting from a known state
```

Then, from the repo root:

```bash
pnpm install
pnpm turbo run build typecheck
```

Both must succeed before you touch anything else. If they don't, the
problem predates your change — fix that first or stop and report it.

## 3. The publish manifest: `component-registry.ts`

`apps/docs/src/lib/component-registry.ts` exports `componentRegistry`, an
array of `{ slug, name, description, published }`. `published: true` means
two things simultaneously:

- the sidebar in the docs site shows a checkmark instead of a dash for it
- it is (supposed to be) present in `packages/ui/src/index.ts`,
  `packages/ui/tsup.config.ts`'s `COMPONENTS` array, and
  `packages/ui/package.json`'s `exports` map

**Nothing currently enforces that these three files agree with the
registry flag.** This is a known gap, not a hallucinated safety net — when
you flip a component to `published: true`, you must manually do the three
wiring steps in §4. If you're auditing whether the package is in sync with
the registry, diff the registry's `published: true` slugs against
`packages/ui/src/index.ts`'s export list by hand.

## 4. Path A — Adding a brand-new component to the package

Use this path when a component currently lives only in `apps/docs` (not yet
published) and is now ready to ship.

1. **Confirm it's actually ready.** At minimum: it uses Nyck design tokens
   (no raw hex values, no leftover shadcn `bg-muted`/`text-foreground`/etc.
   classes — grep the file for those patterns if unsure), it has a working
   docs page, and it doesn't import anything from a component that is
   itself unpublished.

2. **Move the files** (both `.tsx` and any co-located `.css`):
   ```bash
   git mv apps/docs/src/components/ui/<slug>.tsx packages/ui/src/components/ui/<slug>.tsx
   git mv apps/docs/src/components/ui/<slug>.css packages/ui/src/components/ui/<slug>.css   # if it exists
   ```
   If the component imports another component (e.g. via
   `@/components/ui/button`), and that dependency is already published,
   nothing needs to change in the import — `packages/ui` mirrors the exact
   `src/components/ui/*` path structure `apps/docs` uses, with a matching
   `@/*` → `./src/*` alias in `packages/ui/tsconfig.json`, specifically so
   import strings don't need rewriting on a move. If it imports something
   NOT yet published, that dependency must move first (or you're not
   actually ready for step 1).

3. **Add it to `packages/ui/src/index.ts`**: one `export * from
   "./components/ui/<slug>"` line, alphabetically placed among the others.

4. **Add it to `packages/ui/tsup.config.ts`**: append `"<slug>"` to the
   `COMPONENTS` array (alphabetically).

5. **Add it to `packages/ui/package.json`'s `exports` map**: copy the shape
   of an existing entry, e.g.:
   ```json
   "./<slug>": {
     "types": "./dist/components/ui/<slug>.d.ts",
     "import": "./dist/components/ui/<slug>.js"
   }
   ```

6. **Flip the registry flag**: in `apps/docs/src/lib/component-registry.ts`,
   set `published: true` for that slug.

7. **Update the docs site's demo import**: in
   `apps/docs/src/app/components/[slug]/component-demos.tsx`, move the
   component's import from `@/components/ui/<slug>` to the consolidated
   `@nyckai/aqueous-ui` import block.

8. **Check for other consumers** of the old path — anything else in
   `apps/docs` that imported this component locally (not just the demo
   file) needs the same import-path change:
   ```bash
   grep -rn "@/components/ui/<slug>\"" apps/docs/src
   ```

9. Continue to §5 (verify), then §6 (changeset + PR).

## 5. Path B — Editing an existing published component

If the component is already in `packages/ui/src/components/ui/`, just edit
it there directly. No export/manifest wiring needed — skip straight to
verification and §6.

## 6. Verify before writing a changeset

Every time, regardless of path:

```bash
pnpm install                          # only needed if package.json changed
pnpm turbo run build typecheck        # must be fully green
pnpm --filter docs smoke-test:ui      # imports every exports-map subpath for real
```

The smoke test (`apps/docs/scripts/smoke-test-aqueous-ui-exports.mjs`)
imports every subpath `packages/ui/package.json`'s `exports` map declares
and asserts each resolves to a non-empty module. This is what actually
catches a broken `exports` entry or a missed export — `tsc --noEmit`
alone will not catch it. If you added a new component (Path A) and skipped
steps 3–5, this is very likely where it'll surface as a failure.

Also, actually look at the component rendered in the docs site
(`pnpm --filter docs dev`, visit `/components/<slug>`) if the change is
visual. Passing typecheck says nothing about whether it looks right.

## 7. Write a changeset

```bash
pnpm changeset
```

This is interactive: it asks which package(s) changed (`@nyckai/aqueous-ui`
— `docs` is intentionally excluded from versioning, don't select it even if
offered), the bump type, and a summary. It writes a file to `.changeset/`.

If running it non-interactively (e.g. as an agent without a TTY), write the
file by hand instead — this is exactly what the interactive command
produces, and is equally valid:

```bash
cat > .changeset/<short-kebab-slug>.md <<'EOF'
---
"@nyckai/aqueous-ui": patch
---

One or two sentences describing the change from a consumer's perspective —
what changed and why it matters to them, not an internal implementation
narrative.
EOF
```

**Bump type**: `patch` for visual/token fixes, new variants, non-breaking
additions (this is most changes). `minor` for a meaningfully new capability
that's still backward-compatible (a new component, a new prop with a safe
default). `major` only for an actual breaking change (a renamed/removed
prop, a component split apart) — pair a `major` bump with a plan for how
consumers migrate; don't ship one casually.

### 7.1. Verify the changeset is correct

```bash
pnpm changeset status --verbose
```

This should report exactly the package(s) and bump type you intended. If it
says "Some packages have been changed but no changesets were found," you
have uncommitted/unrecorded changes beyond what your changeset covers —
either write another changeset for the rest, or check you're not
accidentally including unrelated diffs.

## 8. Commit, push, open a PR

```bash
git checkout -b <descriptive-branch-name>
git add -A
git commit -m "<describe the change>"
git push -u origin <branch-name>
gh pr create --base main --title "<title>" --body "<summary + test plan>"
```

Then **wait for CI**, don't merge blind:

```bash
gh pr checks <pr-number>
```

If checks are still `pending`, poll again after a short wait — don't spam
this in a tight loop. `ci.yml` runs `pnpm turbo run build typecheck` across
the whole workspace, then the same exports smoke test from §6, on GitHub's
own infrastructure. This is the real gate — passing it locally is necessary
but not sufficient, since CI has occasionally caught things local runs
didn't (see §10.1 and §10.2 for two real examples).

### 8.1. Known gotcha: a brand-new workflow file won't run on its own PR

If you are ever adding or modifying a `.github/workflows/*.yml` file
itself (not routine — flag it explicitly if you think this is needed),
know that GitHub does not execute a workflow via `pull_request` unless
that workflow file already exists on the base branch (`main`). A PR that
introduces a new workflow file will show zero checks, which looks like
CI silently didn't run rather than like a failure. This is expected;
it is not a sign anything is broken. It's not relevant to routine
component changes, since `ci.yml` already exists on `main`.

Once CI is green:

```bash
gh pr merge <pr-number> --merge --delete-branch=false
```

(`--delete-branch=false`: leave branch cleanup as a separate, deliberate
step — don't couple it to the merge.)

## 9. The release itself (manual, by design)

Merging into `main` triggers `.github/workflows/release.yml`. Here's
exactly what it does and does not do, given this org's permissions:

1. It runs `changeset version` (via the `pnpm version-packages` script),
   which consumes every pending changeset, bumps
   `packages/ui/package.json`'s version, and writes/updates
   `packages/ui/CHANGELOG.md`.
2. It commits that to a branch named `changeset-release/main` and pushes it.
3. It attempts to open a PR from that branch — **this step fails**, with
   the error `GitHub Actions is not permitted to create or approve pull
   requests`. This is expected and by design (see §1) — it is not a bug to
   fix. Do not attempt to grant that org-wide permission without being
   explicitly asked to; it was a deliberate, discussed tradeoff.

### 9.1. Finish the release by hand

After the workflow run fails at step 3 above, the `changeset-release/main`
branch already exists on the remote with the correct version bump and
changelog. Open the PR from it yourself:

```bash
git fetch origin changeset-release/main
gh pr create --base main --head changeset-release/main \
  --title "chore: version packages" \
  --body "Manually opened — see docs/publish-workflow.md §9."
```

Wait for its CI to pass (§8), then merge it the same way:

```bash
gh pr merge <pr-number> --merge --delete-branch=false
```

**This second merge is the one that actually publishes.** It re-triggers
`release.yml`; since there are now zero pending changesets (they were
consumed in step 1 above), the workflow skips the version/PR path entirely
and instead runs `pnpm release`, which is `turbo run build
--filter=@nyckai/aqueous-ui && changeset publish`. This builds the package
fresh and pushes it to GitHub Packages.

### 9.2. Verify the publish actually happened

Don't take a green checkmark as sufficient — read the actual log, since
"the workflow succeeded" and "the package published" are different claims:

```bash
gh run list --limit 3 --workflow=release.yml
gh run view <run-id> --log | grep -A3 "Successfully published\|not found in the registry"
```

You are looking for a literal `Successfully published: @nyckai/aqueous-ui@X.Y.Z`
line. If instead you see `X packages are already published` with no
"Successfully published" line, the version wasn't bumped correctly and
nothing new went out — check that step 9's version PR actually merged and
that its `package.json` version differs from what's currently on the
registry.

If you have a GitHub token scoped `read:packages`, you can independently
confirm from outside the CI logs:

```bash
npm view @nyckai/aqueous-ui version
```

A plain `repo`-scoped token (like a typical `gh auth token`) will 403 on
this — that's expected, not evidence of failure (see §10.4).

## 10. Troubleshooting — real failures encountered, and what fixed them

These are not hypothetical. Each of these actually happened once while
setting this pipeline up, survived a local build+typecheck pass, and was
only caught by an actual CI/release run. If something fails, check here
first before assuming it's novel.

### 10.1. A rename/find-replace across the repo misses `.css` files

When renaming anything that appears in code (a package scope, an import
path), if you filter `grep`/`sed` by file extension, **explicitly include
`.css`** — `apps/docs/src/app/globals.css` and
`packages/ui/src/styles/tokens.css` both contain literal package-name
strings (`@import "@nyckai/aqueous-ui/tokens.css"`) that a
`.ts/.tsx/.json/.md` -only filter will silently skip. This broke the real
Next.js build while `tsc --noEmit` and the component smoke test both
stayed green — CSS `@import` resolution is a bundler-time concern neither
of those checks touches. After any repo-wide rename, run:

```bash
grep -rln "<old-string>" . 2>/dev/null | grep -v node_modules | grep -v /dist/
```

with **no** `--include` filter at all, to be certain nothing is missed.

### 10.2. `@changesets/cli` requires Node 22.1+

`@changesets/cli@3.0.1`'s bin script calls
`module.enableCompileCache()` unconditionally at startup, which does not
exist before Node 22.1. If a GitHub Actions workflow pins
`node-version: 20` (a very common default), `changeset version` crashes
immediately with `TypeError: enableCompileCache is not a function`. All
three workflows in `.github/workflows/` are pinned to Node 22 for this
reason — don't downgrade them without checking this still holds for
whatever `@changesets/cli` version is current then.

### 10.3. A workspace package cannot depend on itself

If you need a script to resolve the published package's own public API
"as a real consumer would" (e.g. to smoke-test its exports map), do **not**
add the package as its own `devDependency` to create a self-referencing
`node_modules` symlink — Turborepo detects this as a dependency cycle and
refuses to build anything (`WARNING Package "@nyckai/aqueous-ui" depends
on itself`, followed by a hard stop). Instead, run that script from a
package that has a genuine, non-cyclic dependency on it —
`apps/docs/scripts/smoke-test-aqueous-ui-exports.mjs` exists in `apps/docs`
specifically for this reason, not in `packages/ui` itself.

### 10.4. Plain Node has no concept of CSS imports

Anything that imports components straight in Node (not through a bundler)
will fail on `import "./button.css"` with `Unknown file extension ".css"`.
This is not a bug in the package — every real consumer goes through a
bundler (webpack/Next/Vite), which handles this natively. The smoke test
works around it with a loader
(`apps/docs/scripts/css-noop-loader.mjs` + `register-css-noop-loader.mjs`)
that no-ops `.css` specifiers. If you write another Node script that
imports components directly, register that same loader
(`node --import ./scripts/register-css-noop-loader.mjs ...`) or it will
fail on the first component with a CSS file.

### 10.5. A brand-new workflow file doesn't run until it's on the default branch

Covered in §8.1 — repeated here because it's easy to mistake for "CI is
broken" when it's actually "CI hasn't been introduced to `main` yet."

### 10.6. `zsh` word-splitting breaks naive shell loops over file lists

If scripting a loop like `for f in $(grep -rl ...)`, plain `zsh` does not
word-split an unquoted variable on newlines the way `bash` does by default
— the whole multi-line list can collapse into a single argument, and any
bracketed path segment (this repo has
`apps/docs/src/app/components/[slug]/`) may also trigger glob-expansion
errors. Use a `while IFS= read -r f; do ...; done` loop reading from a pipe
instead of `for f in $(...)`, which is shell-agnostic and doesn't have
either problem.

## 11. What is NOT automated: consumer-side updates

Everything above gets a new version onto GitHub Packages. **It does not
push that update into any other developer's repository.** As of this
writing, a consumer finds out about a new version by manually running
`npm update @nyckai/aqueous-ui` (or `pnpm up @nyckai/aqueous-ui`) in their
own project — nothing notifies them automatically.

Automating that notification (a Renovate or Dependabot bot in each
consumer repo, opening a PR the moment a new version publishes) is a
known, deliberately deferred next step, not an oversight. If you are asked
to set that up, that is a distinct piece of work from anything in this
document — this document only covers getting a change from `packages/ui`
onto the registry, not distributing that update further.

## 12. Quick reference

```bash
# 1. Verify starting state
pnpm install && pnpm turbo run build typecheck

# 2. (New component only) wire up index.ts, tsup.config.ts, package.json exports,
#    component-registry.ts published:true, and the demo file's import — see §4

# 3. Verify again, including the real exports smoke test
pnpm turbo run build typecheck
pnpm --filter docs smoke-test:ui

# 4. Changeset
pnpm changeset
pnpm changeset status --verbose

# 5. PR
git checkout -b <branch> && git add -A && git commit -m "<msg>"
git push -u origin <branch>
gh pr create --base main --title "<title>" --body "<body>"
gh pr checks <pr-number>          # wait for green
gh pr merge <pr-number> --merge --delete-branch=false

# 6. Finish the release manually
git fetch origin changeset-release/main
gh pr create --base main --head changeset-release/main --title "chore: version packages"
gh pr checks <pr-number>          # wait for green
gh pr merge <pr-number> --merge --delete-branch=false

# 7. Verify it actually published
gh run list --limit 3 --workflow=release.yml
gh run view <run-id> --log | grep "Successfully published"
```
