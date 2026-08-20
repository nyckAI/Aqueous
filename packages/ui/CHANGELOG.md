# @nyckai/aqueous-ui

## 0.1.2

### Patch Changes

- b65bddd: Wire up publishing to GitHub Packages: registry config in .npmrc and publishConfig, a repository field, and CI permissions/token for the release workflow to actually publish. Renamed the package scope from @nyck to @nyckai to match the nyckAI GitHub org the repo now lives under (GitHub Packages requires the npm scope to match the repo owner exactly, and npm scopes must be lowercase). No component or API changes.

## 0.1.1

### Patch Changes

- Adopt Changesets for version and changelog automation. No component or API changes — this records the tooling change itself as the first entry under the new release process.
