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
import "./FoundationColorsView.css";

function getContrastColor(hex: string): string {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
  return luminance > 0.55 ? Neutral.Black : Neutral.White;
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
      className="fc-swatch group/swatch relative flex w-full cursor-pointer items-center justify-between px-4 py-3 text-left transition-opacity hover:opacity-90"
      style={{ backgroundColor: hex, color: textColor }}
      aria-label={`${label}: ${hex}. Click to copy.`}
    >
      <span className="fc-swatch-label">{label}</span>
      <span
        className="fc-swatch-hex opacity-0 transition-opacity group-hover/swatch:opacity-100"
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
      <h3 className="fc-palette-name mb-3">{palette.name}</h3>
      <div className="fc-palette-list overflow-hidden rounded-lg">
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
      <div className="fc-header px-8 py-10">
        <p className="fc-eyebrow">Foundation</p>
        <h1 className="fc-title mt-1">Colors</h1>
        <p className="fc-description mt-2 max-w-xl">
          Color allows us to distinguish from other brands and create a sense of
          identity in our marketing &amp; product.
        </p>
      </div>

      <section className="px-8 py-10">
        <h2 className="fc-section-title">The Palette</h2>
        <p className="fc-section-caption mt-1">
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
