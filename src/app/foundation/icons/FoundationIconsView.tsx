"use client";

import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import * as LucideIcons from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { LUCIDE_ICON_NAMES } from "@/lib/lucide-icon-names";
import "./FoundationIconsView.css";

const icons = LucideIcons as unknown as Record<string, LucideIcon>;

function normalize(value: string): string {
  return value.toLowerCase().replace(/[^a-z0-9]/g, "");
}

function IconCard({ name }: { name: string }) {
  const Icon = icons[name];
  const [copied, setCopied] = useState(false);

  if (!Icon) return null;

  async function handleClick() {
    try {
      await navigator.clipboard.writeText(`import { ${name} } from "lucide-react";`);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1200);
    } catch {
      /* clipboard unavailable */
    }
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      className="fi-card group relative flex flex-col items-center justify-center gap-2 rounded-lg px-2 py-4"
      title={copied ? "Copied import!" : name}
    >
      <Icon className="fi-card-glyph size-5" />
      <span className="fi-card-name truncate px-1 text-center">
        {copied ? "Copied!" : name}
      </span>
    </button>
  );
}

export function FoundationIconsView() {
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = normalize(query);
    if (!q) return LUCIDE_ICON_NAMES;
    return LUCIDE_ICON_NAMES.filter((name) => normalize(name).includes(q));
  }, [query]);

  return (
    <main className="flex flex-1 flex-col">
      <div className="fi-header px-8 py-10">
        <p className="fi-eyebrow">Foundation</p>
        <h1 className="fi-title mt-1">Icons</h1>
        <p className="fi-description mt-2 max-w-xl">
          We use{" "}
          <a
            href="https://lucide.dev"
            target="_blank"
            rel="noreferrer"
            className="underline underline-offset-2"
          >
            Lucide
          </a>{" "}
          as our icon library throughout the product. Below is the full
          directory — click any icon to copy its import statement.
        </p>
      </div>

      <section className="px-8 py-10">
        <div className="flex items-center justify-between gap-4">
          <div>
            <h2 className="fi-section-title">Icon Directory</h2>
            <p className="fi-section-caption mt-1">
              Showing {filtered.length.toLocaleString()} of{" "}
              {LUCIDE_ICON_NAMES.length.toLocaleString()} icons.
            </p>
          </div>

          <div className="fi-search relative w-full max-w-xs">
            <Search className="fi-search-icon pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search icons..."
              className="fi-search-input w-full rounded-lg py-2 pl-9 pr-3 text-sm outline-none"
            />
          </div>
        </div>

        <div className="mt-6 grid grid-cols-4 gap-2 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-10 xl:grid-cols-12">
          {filtered.map((name) => (
            <IconCard key={name} name={name} />
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="fi-section-caption mt-10 text-center">
            No icons match &quot;{query}&quot;.
          </p>
        )}
      </section>
    </main>
  );
}
