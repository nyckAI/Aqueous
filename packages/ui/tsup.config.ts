import { defineConfig } from "tsup"
import { cp } from "node:fs/promises"

const COMPONENTS = [
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
  "skeleton",
  "slider",
  "spinner",
  "switch",
  "textarea",
  "textfield",
  "time-field",
  "toast",
  "toggle",
  "toggle-group",
  "tooltip",
]

const entry: Record<string, string> = {
  index: "src/index.ts",
}
for (const name of COMPONENTS) {
  entry[`components/ui/${name}`] = `src/components/ui/${name}.tsx`
}

export default defineConfig({
  entry,
  format: ["esm"],
  dts: true,
  splitting: false,
  sourcemap: true,
  clean: true,
  external: ["react", "react-dom"],
  // Each component's `import "./x.css"` side-effect import is bundled into a
  // co-located dist/components/ui/x.css by tsup's built-in CSS handling.
  loader: {
    ".css": "copy",
  },
  // tokens.css isn't imported by any JS entry (it's meant for consumers to
  // import directly, per the "./tokens.css" exports map entry) so tsup's
  // CSS-import handling above never touches it. The package only ships
  // dist/ (see package.json's "files" field) — src/ is NOT part of what
  // actually gets published — so without this copy, the exports map's
  // "./tokens.css" entry points at a file that doesn't exist for any real
  // installed consumer. This was invisible in workspace-linked testing
  // (the pnpm symlink exposes the whole packages/ui directory, src/
  // included) and only surfaced when actually installing the published
  // tarball into a separate app.
  onSuccess: async () => {
    await cp("src/styles/tokens.css", "dist/tokens.css")
  },
})
