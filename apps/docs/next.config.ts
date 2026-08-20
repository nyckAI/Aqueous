import type { NextConfig } from "next";
import path from "path";

const isGithubPages = process.env.GITHUB_PAGES === "true";

const nextConfig: NextConfig = {
  output: "export",
  basePath: isGithubPages ? "/Aqueous" : "",
  images: {
    unoptimized: true,
  },
  // @nyckai/aqueous-ui is a workspace package shipping pre-built ESM (not
  // pre-bundled for Next specifically) — transpiling it here ensures Next
  // resolves its "react"/"react-dom" against this app's own copies instead
  // of a second instance, which otherwise breaks React context providers
  // (Toast, Tooltip) with a "createContext is not a function" RSC error.
  transpilePackages: ["@nyckai/aqueous-ui"],
  turbopack: {
    // Points at the monorepo root (not this app's own dir) so Turbopack
    // correctly traces files through pnpm's symlinked node_modules.
    root: path.join(__dirname, "..", ".."),
  },
};

export default nextConfig;
