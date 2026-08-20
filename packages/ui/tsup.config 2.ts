import { defineConfig } from "tsup"

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
})
