// Imports every subpath export @nyckai/aqueous-ui declares in its "exports" map
// and asserts it resolves to at least one non-empty export. Run after
// `pnpm build` (via the root `pnpm turbo run build` in CI) — catches a broken
// exports map, a missing dist file, or a component that silently bundled to
// nothing, none of which `tsc --noEmit` or a bundler build would necessarily
// catch.
//
// Lives in apps/docs (not packages/ui) so it resolves @nyckai/aqueous-ui
// through this app's real workspace dependency — a package depending on
// itself just to test itself creates a cycle Turbo refuses to build.

import { readFileSync } from "node:fs"
import { fileURLToPath } from "node:url"
import path from "node:path"

const here = path.dirname(fileURLToPath(import.meta.url))
const pkg = JSON.parse(
  readFileSync(path.join(here, "..", "..", "..", "packages", "ui", "package.json"), "utf8")
)

const subpaths = Object.keys(pkg.exports).filter(
  (key) => key !== "./tokens.css"
)

let failed = false

for (const subpath of subpaths) {
  const specifier = subpath === "." ? pkg.name : `${pkg.name}${subpath.slice(1)}`
  try {
    const mod = await import(specifier)
    const exportNames = Object.keys(mod)
    if (exportNames.length === 0) {
      console.error(`✗ ${specifier} — resolved but exports nothing`)
      failed = true
      continue
    }
    console.log(`✓ ${specifier} — ${exportNames.join(", ")}`)
  } catch (err) {
    console.error(`✗ ${specifier} — failed to import:`, err.message)
    failed = true
  }
}

if (failed) {
  console.error("\nSmoke test failed — see above.")
  process.exit(1)
}

console.log(`\nAll ${subpaths.length} exports resolved correctly.`)
