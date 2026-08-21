"use client";

import { useCallback, useDeferredValue, useEffect, useMemo, useState } from "react";
import { Search } from "lucide-react";
import {
  backgroundColorTokens,
  borderColorTokens,
  textColorTokens,
  iconColorTokens,
  borderAttributeDescriptions,
  textAttributeDescriptions,
  iconAttributeDescriptions,
  groupTokensByAttribute,
  type ColorTokenEntry,
} from "@/lib/color-tokens";
import {
  allFontSizeTokens,
  weightTokens,
  familyTokens,
  fontSizeCategoryDescriptions,
  fontSizeCategoryFamilies,
  fontValueCategoryDescriptions,
  type FontSizeTokenEntry,
  type FontValueTokenEntry,
} from "@/lib/font-tokens";
import {
  spacingTokens,
  spacingScaleDescription,
  type SpacingTokenEntry,
} from "@/lib/spacing-tokens";
import "./TokenColorsView.css";

function matchesQuery(token: ColorTokenEntry, query: string) {
  const q = query.trim().toLowerCase();
  if (!q) return true;
  return (
    token.name.toLowerCase().includes(q) ||
    token.hex.toLowerCase().includes(q) ||
    token.primitive.toLowerCase().includes(q) ||
    token.attribute.toLowerCase().includes(q)
  );
}

function matchesFontSizeQuery(token: FontSizeTokenEntry, query: string) {
  const q = query.trim().toLowerCase();
  if (!q) return true;
  return (
    token.name.toLowerCase().includes(q) ||
    token.fontSize.toLowerCase().includes(q) ||
    token.category.toLowerCase().includes(q)
  );
}

function matchesFontValueQuery(token: FontValueTokenEntry, query: string) {
  const q = query.trim().toLowerCase();
  if (!q) return true;
  return (
    token.name.toLowerCase().includes(q) ||
    token.value.toLowerCase().includes(q) ||
    token.category.toLowerCase().includes(q)
  );
}

function matchesSpacingQuery(token: SpacingTokenEntry, query: string) {
  const q = query.trim().toLowerCase();
  if (!q) return true;
  return (
    token.name.toLowerCase().includes(q) || token.value.toLowerCase().includes(q)
  );
}

const FONT_SIZE_CATEGORIES = ["heading", "body", "caption", "button", "micro"] as const;

function slugify(attribute: string): string {
  return `bg-${attribute}`;
}

function useCopyFeedback() {
  const [copied, setCopied] = useState(false);

  async function copy(value: string) {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1200);
    } catch {
      setCopied(false);
    }
  }

  return { copied, copy };
}

function CopyableTokenName({ name }: { name: string }) {
  const { copied, copy } = useCopyFeedback();

  return (
    <div className="group/token relative inline-flex max-w-full">
      <span className="tc-tooltip pointer-events-none absolute -top-9 left-1/2 z-10 -translate-x-1/2 whitespace-nowrap rounded-md px-2.5 py-1.5 opacity-0 shadow-md transition-opacity group-hover/token:opacity-100">
        {copied ? "Copied!" : "Copy to clipboard"}
      </span>
      <button
        type="button"
        onClick={() => copy(name)}
        aria-label={copied ? `Copied ${name}` : `Copy token ${name}`}
        className="tc-token-name-button inline-flex max-w-full cursor-pointer items-center gap-1.5 rounded-md px-2 py-1 text-left transition-colors focus-visible:outline-2 focus-visible:outline-offset-2"
      >
        <code className="truncate">{name}</code>
      </button>
    </div>
  );
}

function LightValueCard({
  hex,
  primitive,
}: {
  hex: string;
  primitive: string;
}) {
  const { copied, copy } = useCopyFeedback();

  return (
    <div className="group relative w-full max-w-[200px]">
      <span className="tc-tooltip pointer-events-none absolute -top-9 left-1/2 z-10 -translate-x-1/2 whitespace-nowrap rounded-md px-2.5 py-1.5 opacity-0 shadow-md transition-opacity group-hover:opacity-100">
        {copied ? "Copied!" : "Copy to clipboard"}
      </span>
      <button
        type="button"
        onClick={() => copy(primitive)}
        aria-label={
          copied ? `Copied ${primitive}` : `Copy primitive ${primitive}`
        }
        className="tc-value-card w-full cursor-pointer overflow-hidden rounded-lg text-left transition-colors focus-visible:outline-2 focus-visible:outline-offset-2"
      >
        <div
          className="tc-value-swatch mx-2 mt-2 h-8 rounded-md"
          style={{ backgroundColor: hex }}
          title={hex}
        />
        <p className="tc-value-primitive flex items-center gap-1.5 px-3 py-2">
          <span className="truncate">{primitive}</span>
        </p>
      </button>
    </div>
  );
}

function DarkValuePlaceholder() {
  return (
    <div className="tc-dark-placeholder w-full max-w-[200px] overflow-hidden rounded-lg">
      <div className="tc-dark-swatch mx-2 mt-2 h-8 rounded-md" />
      <p className="tc-dark-value px-3 py-2">—</p>
    </div>
  );
}

function TokenRow({ token }: { token: ColorTokenEntry }) {
  return (
    <div className="grid grid-cols-[minmax(0,1.4fr)_minmax(180px,0.8fr)_minmax(180px,0.8fr)] items-center gap-6 py-5">
      <div className="min-w-0">
        <CopyableTokenName name={token.name} />
      </div>
      <LightValueCard hex={token.hex} primitive={token.primitive} />
      <DarkValuePlaceholder />
    </div>
  );
}

function FontSizeTokenRow({ token }: { token: FontSizeTokenEntry }) {
  const isHeading = token.category === "heading";
  return (
    <div className="grid grid-cols-[minmax(0,1.2fr)_minmax(200px,0.8fr)_minmax(0,1fr)] items-center gap-6 py-5">
      <div className="min-w-0">
        <CopyableTokenName name={token.name} />
      </div>
      <div className="tc-font-meta flex items-center gap-2">
        <span>{token.fontSize}</span>
        <span className="tc-font-meta-divider">/</span>
        <span>{token.lineHeight}</span>
        <span className="tc-font-meta-divider">/</span>
        <span>{token.letterSpacing}</span>
      </div>
      <p
        className="tc-font-preview truncate"
        style={{
          fontSize: token.fontSize,
          lineHeight: token.lineHeight,
          letterSpacing: token.letterSpacing,
          ...(isHeading && {
            fontWeight: "var(--font-weight-bold)",
            fontFamily: "var(--font-family-heading)",
          }),
        }}
      >
        The quick brown fox
      </p>
    </div>
  );
}

function FontValueTokenRow({ token }: { token: FontValueTokenEntry }) {
  const isWeight = token.category === "weight";
  return (
    <div className="grid grid-cols-[minmax(0,1.2fr)_minmax(200px,0.8fr)_minmax(0,1fr)] items-center gap-6 py-5">
      <div className="min-w-0">
        <CopyableTokenName name={token.name} />
      </div>
      <span className="tc-font-meta">{token.value}</span>
      <p
        className="tc-font-preview truncate"
        style={
          isWeight
            ? { fontWeight: Number(token.value) }
            : { fontFamily: token.value }
        }
      >
        The quick brown fox
      </p>
    </div>
  );
}

const MAX_SPACING_PX = Math.max(...spacingTokens.map((token) => token.px));

function SpacingTokenRow({ token }: { token: SpacingTokenEntry }) {
  return (
    <div className="grid grid-cols-[minmax(0,1.2fr)_minmax(200px,0.8fr)_minmax(0,1fr)] items-center gap-6 py-5">
      <div className="min-w-0">
        <CopyableTokenName name={token.name} />
      </div>
      <span className="tc-font-meta">{token.value}</span>
      <span className="tc-spacing-track block">
        <span
          className="tc-spacing-bar block"
          style={{ width: `${(token.px / MAX_SPACING_PX) * 100}%` }}
        />
      </span>
    </div>
  );
}

function TocButton({
  active,
  indent,
  onClick,
  children,
}: {
  active: boolean;
  indent?: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      data-active={active}
      className={`tc-toc-button block w-full cursor-pointer py-1.5 text-left transition-colors ${
        indent ? "pl-6" : "pl-3"
      }`}
    >
      {children}
    </button>
  );
}

const OBSERVED_IDS = [
  "color", "background", "border", "text", "icon",
  "font", "font-heading", "font-body", "font-caption",
  "font-button", "font-micro", "font-weight", "font-family",
  "spacing",
];

function TableOfContents({
  activeSection,
  onNavigate,
}: {
  activeSection: string;
  onNavigate: (id: string) => void;
}) {
  return (
    <nav
      aria-label="Table of contents"
      className="tc-toc-nav hidden w-56 shrink-0 xl:block"
    >
      <div className="sticky top-10">
        <p className="tc-toc-heading mb-3 pl-3">On this page</p>

        <TocButton active={activeSection === "top"} onClick={() => onNavigate("top")}>
          All Tokens
        </TocButton>

        <TocButton active={activeSection === "color"} onClick={() => onNavigate("color")}>
          Color
        </TocButton>

        <TocButton active={activeSection === "background"} indent onClick={() => onNavigate("background")}>
          Background
        </TocButton>

        <TocButton active={activeSection === "border"} indent onClick={() => onNavigate("border")}>
          Border
        </TocButton>

        <TocButton active={activeSection === "text"} indent onClick={() => onNavigate("text")}>
          Text
        </TocButton>

        <TocButton active={activeSection === "icon"} indent onClick={() => onNavigate("icon")}>
          Icon
        </TocButton>

        <TocButton active={activeSection === "font"} onClick={() => onNavigate("font")}>
          Font
        </TocButton>

        <TocButton active={activeSection === "font-heading"} indent onClick={() => onNavigate("font-heading")}>
          Heading
        </TocButton>

        <TocButton active={activeSection === "font-body"} indent onClick={() => onNavigate("font-body")}>
          Body
        </TocButton>

        <TocButton active={activeSection === "font-caption"} indent onClick={() => onNavigate("font-caption")}>
          Caption
        </TocButton>

        <TocButton active={activeSection === "font-button"} indent onClick={() => onNavigate("font-button")}>
          Button
        </TocButton>

        <TocButton active={activeSection === "font-micro"} indent onClick={() => onNavigate("font-micro")}>
          Micro
        </TocButton>

        <TocButton active={activeSection === "font-weight"} indent onClick={() => onNavigate("font-weight")}>
          Weight
        </TocButton>

        <TocButton active={activeSection === "font-family"} indent onClick={() => onNavigate("font-family")}>
          Family
        </TocButton>

        <TocButton active={activeSection === "spacing"} onClick={() => onNavigate("spacing")}>
          Spacing
        </TocButton>
      </div>
    </nav>
  );
}

export function TokenColorsView() {
  const [query, setQuery] = useState("");
  const [activeSection, setActiveSection] = useState("top");
  const deferredQuery = useDeferredValue(query);

  const scrollToSection = useCallback((id: string) => {
    if (id === "top") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      setActiveSection("top");
      return;
    }
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, []);

  useEffect(() => {
    const elements = OBSERVED_IDS
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        }
      },
      { rootMargin: "0px 0px -80% 0px" },
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const bgGroups = useMemo(() => {
    const filtered = backgroundColorTokens.filter((token) =>
      matchesQuery(token, deferredQuery),
    );
    return groupTokensByAttribute(filtered);
  }, [deferredQuery]);

  const borderGroups = useMemo(() => {
    const filtered = borderColorTokens.filter((token) =>
      matchesQuery(token, deferredQuery),
    );
    return groupTokensByAttribute(filtered, borderAttributeDescriptions, "Border");
  }, [deferredQuery]);

  const textGroups = useMemo(() => {
    const filtered = textColorTokens.filter((token) =>
      matchesQuery(token, deferredQuery),
    );
    return groupTokensByAttribute(filtered, textAttributeDescriptions, "Text");
  }, [deferredQuery]);

  const iconGroups = useMemo(() => {
    const filtered = iconColorTokens.filter((token) =>
      matchesQuery(token, deferredQuery),
    );
    return groupTokensByAttribute(filtered, iconAttributeDescriptions, "Icon");
  }, [deferredQuery]);

  const filteredFontSizeGroups = useMemo(() => {
    const filtered = allFontSizeTokens.filter((t) =>
      matchesFontSizeQuery(t, deferredQuery),
    );
    return FONT_SIZE_CATEGORIES.map((cat) => ({
      category: cat,
      label: cat.charAt(0).toUpperCase() + cat.slice(1),
      description: fontSizeCategoryDescriptions[cat] || "",
      tokens: filtered.filter((t) => t.category === cat),
    })).filter((g) => g.tokens.length > 0);
  }, [deferredQuery]);

  const filteredWeightTokens = useMemo(
    () => weightTokens.filter((t) => matchesFontValueQuery(t, deferredQuery)),
    [deferredQuery],
  );

  const filteredFamilyTokens = useMemo(
    () => familyTokens.filter((t) => matchesFontValueQuery(t, deferredQuery)),
    [deferredQuery],
  );

  const filteredSpacingTokens = useMemo(
    () => spacingTokens.filter((t) => matchesSpacingQuery(t, deferredQuery)),
    [deferredQuery],
  );

  return (
    <main className="flex flex-1 flex-col px-10 py-10">
      <h1 className="tc-page-title">Design Tokens</h1>

      <label className="relative mt-6 block max-w-xl">
        <span className="sr-only">Search tokens</span>
        <Search
          aria-hidden
          className="tc-search-icon pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2"
          strokeWidth={1.75}
        />
        <input
          type="search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Search by token, primitive, or hex…"
          className="tc-search-input w-full rounded-lg py-2.5 pr-3 pl-10 outline-none"
        />
      </label>

      <div className="mt-12 flex gap-8">
        <div className="min-w-0 flex-1">

        <div id="color" className="scroll-mt-8">
        <section id="background" className="scroll-mt-8">
          <h2 className="tc-section-title">Background</h2>

          <div className="mt-6">
            <div className="tc-column-headers grid grid-cols-[minmax(0,1.4fr)_minmax(180px,0.8fr)_minmax(180px,0.8fr)] gap-6 pb-3">
              <span>Token and description</span>
              <span>Light value</span>
              <span>Dark value</span>
            </div>

            {bgGroups.length === 0 ? (
              <p className="tc-empty-state py-8">
                No tokens match &ldquo;{query.trim()}&rdquo;.
              </p>
            ) : (
              bgGroups.map((group, groupIndex) => {
                const isLastGroup = groupIndex === bgGroups.length - 1;
                return (
                  <div
                    key={group.attribute}
                    id={slugify(group.attribute)}
                    className={isLastGroup ? undefined : "tc-group-divider"}
                  >
                    {group.tokens.map((token) => (
                      <TokenRow key={token.name} token={token} />
                    ))}
                    <p className="tc-group-description max-w-3xl pb-6">
                      {group.description}
                    </p>
                  </div>
                );
              })
            )}
          </div>
        </section>

        <section id="border" className="mt-16 scroll-mt-8">
          <h2 className="tc-section-title">Border</h2>

          <div className="mt-6">
            <div className="tc-column-headers grid grid-cols-[minmax(0,1.4fr)_minmax(180px,0.8fr)_minmax(180px,0.8fr)] gap-6 pb-3">
              <span>Token and description</span>
              <span>Light value</span>
              <span>Dark value</span>
            </div>

            {borderGroups.length === 0 ? (
              <p className="tc-empty-state py-8">
                No tokens match &ldquo;{query.trim()}&rdquo;.
              </p>
            ) : (
              borderGroups.map((group, groupIndex) => {
                const isLastGroup = groupIndex === borderGroups.length - 1;
                return (
                  <div
                    key={group.attribute}
                    id={`border-${group.attribute}`}
                    className={isLastGroup ? undefined : "tc-group-divider"}
                  >
                    {group.tokens.map((token) => (
                      <TokenRow key={token.name} token={token} />
                    ))}
                    <p className="tc-group-description max-w-3xl pb-6">
                      {group.description}
                    </p>
                  </div>
                );
              })
            )}
          </div>
        </section>

        <section id="text" className="mt-16 scroll-mt-8">
          <h2 className="tc-section-title">Text</h2>

          <div className="mt-6">
            <div className="tc-column-headers grid grid-cols-[minmax(0,1.4fr)_minmax(180px,0.8fr)_minmax(180px,0.8fr)] gap-6 pb-3">
              <span>Token and description</span>
              <span>Light value</span>
              <span>Dark value</span>
            </div>

            {textGroups.length === 0 ? (
              <p className="tc-empty-state py-8">
                No tokens match &ldquo;{query.trim()}&rdquo;.
              </p>
            ) : (
              textGroups.map((group, groupIndex) => {
                const isLastGroup = groupIndex === textGroups.length - 1;
                return (
                  <div
                    key={group.attribute}
                    id={`text-${group.attribute}`}
                    className={isLastGroup ? undefined : "tc-group-divider"}
                  >
                    {group.tokens.map((token) => (
                      <TokenRow key={token.name} token={token} />
                    ))}
                    <p className="tc-group-description max-w-3xl pb-6">
                      {group.description}
                    </p>
                  </div>
                );
              })
            )}
          </div>
        </section>

        <section id="icon" className="mt-16 scroll-mt-8">
          <h2 className="tc-section-title">Icon</h2>

          <div className="mt-6">
            <div className="tc-column-headers grid grid-cols-[minmax(0,1.4fr)_minmax(180px,0.8fr)_minmax(180px,0.8fr)] gap-6 pb-3">
              <span>Token and description</span>
              <span>Light value</span>
              <span>Dark value</span>
            </div>

            {iconGroups.length === 0 ? (
              <p className="tc-empty-state py-8">
                No tokens match &ldquo;{query.trim()}&rdquo;.
              </p>
            ) : (
              iconGroups.map((group, groupIndex) => {
                const isLastGroup = groupIndex === iconGroups.length - 1;
                return (
                  <div
                    key={group.attribute}
                    id={`icon-${group.attribute}`}
                    className={isLastGroup ? undefined : "tc-group-divider"}
                  >
                    {group.tokens.map((token) => (
                      <TokenRow key={token.name} token={token} />
                    ))}
                    <p className="tc-group-description max-w-3xl pb-6">
                      {group.description}
                    </p>
                  </div>
                );
              })
            )}
          </div>
        </section>
        </div>

        <section id="font" className="mt-16 scroll-mt-8">
          <h2 className="tc-section-title">Font</h2>

          {filteredFontSizeGroups.length > 0 && (
            <div className="mt-6">
              <div className="tc-column-headers grid grid-cols-[minmax(0,1.2fr)_minmax(200px,0.8fr)_minmax(0,1fr)] gap-6 pb-3">
                <span>Token</span>
                <span>Size / Line-height / Tracking</span>
                <span>Preview</span>
              </div>

              {filteredFontSizeGroups.map((group, gi, arr) => (
                <div
                  key={group.category}
                  id={`font-${group.category}`}
                  className={`scroll-mt-8${gi < arr.length - 1 ? " tc-group-divider" : ""}`}
                >
                  <div className="mt-6 flex items-baseline gap-2">
                    <h3 className="tc-group-heading">{group.label}</h3>
                    {fontSizeCategoryFamilies[group.category] && (
                      <span className="tc-group-family-badge rounded-full px-2 py-0.5">
                        {fontSizeCategoryFamilies[group.category]}
                      </span>
                    )}
                  </div>
                  {group.tokens.map((token) => (
                    <FontSizeTokenRow key={token.name} token={token} />
                  ))}
                  <p className="tc-group-description max-w-3xl pb-6">
                    {group.description}
                  </p>
                </div>
              ))}
            </div>
          )}

          {filteredWeightTokens.length > 0 && (
            <div id="font-weight" className="mt-10 scroll-mt-8">
              <div className="tc-column-headers grid grid-cols-[minmax(0,1.2fr)_minmax(200px,0.8fr)_minmax(0,1fr)] gap-6 pb-3">
                <span>Token</span>
                <span>Value</span>
                <span>Preview</span>
              </div>
              <h3 className="tc-group-heading mt-6">Weight</h3>
              {filteredWeightTokens.map((token) => (
                <FontValueTokenRow key={token.name} token={token} />
              ))}
              <p className="tc-group-description max-w-3xl pb-6">
                {fontValueCategoryDescriptions.weight}
              </p>
            </div>
          )}

          {filteredFamilyTokens.length > 0 && (
            <div id="font-family" className="mt-10 scroll-mt-8">
              <div className="tc-column-headers grid grid-cols-[minmax(0,1.2fr)_minmax(200px,0.8fr)_minmax(0,1fr)] gap-6 pb-3">
                <span>Token</span>
                <span>Value</span>
                <span>Preview</span>
              </div>
              <h3 className="tc-group-heading mt-6">Family</h3>
              {filteredFamilyTokens.map((token) => (
                <FontValueTokenRow key={token.name} token={token} />
              ))}
              <p className="tc-group-description max-w-3xl pb-6">
                {fontValueCategoryDescriptions.family}
              </p>
            </div>
          )}

          {filteredFontSizeGroups.length === 0 &&
            filteredWeightTokens.length === 0 &&
            filteredFamilyTokens.length === 0 && (
              <p className="tc-empty-state py-8">
                No tokens match &ldquo;{query.trim()}&rdquo;.
              </p>
            )}
        </section>

        <section id="spacing" className="mt-16 scroll-mt-8">
          <h2 className="tc-section-title">Spacing</h2>

          <div className="mt-6">
            <div className="tc-column-headers grid grid-cols-[minmax(0,1.2fr)_minmax(200px,0.8fr)_minmax(0,1fr)] gap-6 pb-3">
              <span>Token</span>
              <span>Value</span>
              <span>Preview</span>
            </div>

            {filteredSpacingTokens.length === 0 ? (
              <p className="tc-empty-state py-8">
                No tokens match &ldquo;{query.trim()}&rdquo;.
              </p>
            ) : (
              filteredSpacingTokens.map((token) => (
                <SpacingTokenRow key={token.name} token={token} />
              ))
            )}
            <p className="tc-group-description max-w-3xl pb-6">
              {spacingScaleDescription}
            </p>
          </div>
        </section>

        </div>

        <TableOfContents activeSection={activeSection} onNavigate={scrollToSection} />
      </div>
    </main>
  );
}
