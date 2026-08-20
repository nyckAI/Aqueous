// Plain Node has no concept of CSS imports — only bundlers (webpack, Next,
// Vite) know how to handle `import "./x.css"`. Real consumers always run
// these components through a bundler, so this loader stands in for that:
// it no-ops any .css specifier and defers everything else to Node's normal
// resolution, letting the smoke test validate the actual JS/exports-map
// correctness without needing a full bundler just to run a script.
export async function load(url, context, nextLoad) {
  if (url.endsWith(".css")) {
    return { format: "module", source: "export default undefined;", shortCircuit: true }
  }
  return nextLoad(url, context)
}
