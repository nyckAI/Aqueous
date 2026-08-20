---
"@nyckai/aqueous-ui": patch
---

Fix `@nyckai/aqueous-ui/tokens.css` resolving to a nonexistent file for real installs. The exports map pointed at `./src/styles/tokens.css`, but the package only publishes `dist/` — `src/` is excluded — so any consumer installing from the registry got a hard resolve error the moment their bundler touched the tokens import. This only worked in this repo's own workspace-linked testing, where the pnpm symlink exposes the whole `packages/ui` directory including `src/`. `tokens.css` is now copied into `dist/` at build time and the exports map points there instead.
