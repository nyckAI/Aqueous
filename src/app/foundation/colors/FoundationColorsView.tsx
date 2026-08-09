"use client";

import { useState } from "react";
import {
  Brand,
  Neutral,
  Green,
  Red,
  Orange,
  Yellow,
  Purple,
  Pink,
  Teal,
  Slate,
} from "@/Design System/Foundations/colors";

function getContrastColor(hex: string): string {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
  return luminance > 0.55 ? "#000000" : "#FFFFFF";
}

type ColorScale = Record<string, string>;

interface PaletteGroup {
  name: string;
  colors: { label: string; hex: string }[];
}

function buildPalette(name: string, scale: ColorScale): PaletteGroup {
  return {
    name,
    colors: Object.entries(scale).map(([key, hex]) => {
      const label = key
        .replace(/^[a-z]+-/, (match) => match.charAt(0).toUpperCase() + match.slice(1))
        .replace("-", " ");
      return {
        label: formatLabel(name, key),
        hex,
      };
    }),
  };
}

function formatLabel(groupName: string, key: string): string {
  if (key === "White" || key === "Black") return key;
  const num = key.replace(/^[a-z]+-/, "");
  return `${groupName} ${num}`;
}

const palettes: PaletteGroup[] = [
  buildPalette("Brand", Brand),
  buildPalette("Neutral", Neutral),
  buildPalette("Green", Green),
  buildPalette("Red", Red),
  buildPalette("Orange", Orange),
  buildPalette("Yellow", Yellow),
  buildPalette("Purple", Purple),
  buildPalette("Pink", Pink),
  buildPalette("Teal", Teal),
  buildPalette("Slate", Slate),
];

function ColorSwatch({
  label,
  hex,
}: {
  label: string;
  hex: string;
}) {
  const [copied, setCopied] = useState(false);
  const textColor = getContrastColor(hex);

  async function handleClick() {
    try {
      await navigator.clipboard.writeText(hex);
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
      className="group/swatch relative flex w-full cursor-pointer items-center justify-between px-4 py-3 text-left transition-opacity hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-white"
      style={{ backgroundColor: hex, color: textColor }}
      aria-label={`${label}: ${hex}. Click to copy.`}
    >
      <span className="text-sm font-medium">{label}</span>
      <span
        className="text-xs opacity-0 transition-opacity group-hover/swatch:opacity-100"
        aria-hidden
      >
        {copied ? "Copied!" : hex}
      </span>
    </button>
  );
}

function PaletteColumn({ palette }: { palette: PaletteGroup }) {
  return (
    <div className="min-w-0">
      <h3 className="mb-3 text-sm font-semibold text-text-primary">
        {palette.name}
      </h3>
      <div className="overflow-hidden rounded-lg border border-border-disabled">
        {palette.colors.map((color) => (
          <ColorSwatch
            key={color.label}
            label={color.label}
            hex={color.hex}
          />
        ))}
      </div>
    </div>
  );
}

export function FoundationColorsView() {
  return (
    <main className="flex flex-1 flex-col">
      <div className="bg-background-neutral-hover px-8 py-10">
        <p className="text-[13px] leading-[22px] text-text-neutral">Foundation</p>
        <h1 className="mt-1 text-2xl font-semibold tracking-tight text-text-primary">
          Colors
        </h1>
        <p className="mt-2 max-w-xl text-base leading-7 text-text-neutral">
          Color allows us to distinguish from other brands and create a sense of
          identity in our marketing &amp; product.
        </p>
      </div>

      <section className="px-8 py-10">
        <h2 className="text-lg font-semibold text-text-primary">The Palette</h2>
        <p className="mt-1 text-sm text-text-neutral">
          Click any swatch to copy its hex value.
        </p>

        <div className="mt-6 grid grid-cols-2 gap-6 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
          {palettes.map((palette) => (
            <PaletteColumn key={palette.name} palette={palette} />
          ))}
        </div>
      </section>
    </main>
  );
}
