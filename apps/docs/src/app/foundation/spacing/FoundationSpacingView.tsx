"use client";

import { useState } from "react";
import { spacingTokens } from "@/lib/spacing-tokens";
import "./FoundationSpacingView.css";

const MAX_PX = Math.max(...spacingTokens.map((token) => token.px));

function SpacingRow({ name, value, px }: { name: string; value: string; px: number }) {
  const [copied, setCopied] = useState(false);

  async function handleClick() {
    try {
      await navigator.clipboard.writeText(`var(--${name})`);
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
      className="fs-row group/row flex w-full cursor-pointer items-center gap-6 px-4 py-4 text-left transition-colors"
      aria-label={`${name}: ${value}. Click to copy.`}
    >
      <span className="fs-row-name w-40 shrink-0 truncate">{name}</span>
      <span className="fs-row-value w-14 shrink-0">{value}</span>
      <span className="fs-row-track flex-1">
        <span
          className="fs-row-bar block"
          style={{ width: `${(px / MAX_PX) * 100}%` }}
        />
      </span>
      <span className="fs-row-copy w-16 shrink-0 text-right opacity-0 transition-opacity group-hover/row:opacity-100">
        {copied ? "Copied!" : "Copy"}
      </span>
    </button>
  );
}

export function FoundationSpacingView() {
  return (
    <main className="flex flex-1 flex-col">
      <div className="fs-header px-8 py-10">
        <p className="fs-eyebrow">Foundation</p>
        <h1 className="fs-title mt-1">Spacing</h1>
        <p className="fs-description mt-2 max-w-xl">
          A shared scale for padding, margin, and gap that keeps density
          consistent across the product.
        </p>
      </div>

      <section className="px-8 py-10">
        <h2 className="fs-section-title">The Scale</h2>
        <p className="fs-section-caption mt-1">
          Click any row to copy its CSS variable.
        </p>

        <div className="fs-list mt-6 max-w-3xl overflow-hidden rounded-lg">
          {spacingTokens.map((token) => (
            <SpacingRow
              key={token.name}
              name={token.name}
              value={token.value}
              px={token.px}
            />
          ))}
        </div>
      </section>
    </main>
  );
}
