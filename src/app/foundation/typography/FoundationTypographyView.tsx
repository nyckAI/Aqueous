"use client";

import "./FoundationTypographyView.css";

const TYPEFACES = [
  {
    name: "Geist",
    variable: "var(--font-family-heading)",
    role: "Headings",
    description:
      "Geist is our primary display typeface. Its geometric clarity and tight tracking make it ideal for headings, titles, and any text that needs to command attention.",
  },
  {
    name: "Inter",
    variable: "var(--font-family-body)",
    role: "Body",
    description:
      "Inter is optimized for screen readability at small sizes. We use it for body copy, UI labels, form inputs, and any long-form content where legibility matters most.",
  },
  {
    name: "Geist Mono",
    variable: "var(--font-family-mono)",
    role: "Code",
    description:
      "Geist Mono is used for code snippets, token names, and any context where a monospaced font aids comprehension — terminal output, data tables, and technical values.",
  },
] as const;

function TypefaceCard({
  name,
  variable,
  role,
  description,
}: (typeof TYPEFACES)[number]) {
  return (
    <div className="ft-card overflow-hidden rounded-xl">
      <div className="ft-card-preview px-6 py-8">
        <p className="ft-glyph" style={{ fontFamily: variable }}>
          Aa
        </p>
        <p className="ft-sample mt-3" style={{ fontFamily: variable }}>
          ABCDEFGHIJKLMNOPQRSTUVWXYZ
        </p>
        <p className="ft-sample mt-0.5" style={{ fontFamily: variable }}>
          abcdefghijklmnopqrstuvwxyz
        </p>
        <p className="ft-sample mt-0.5" style={{ fontFamily: variable }}>
          0123456789 !@#$%&amp;*()
        </p>
      </div>
      <div className="px-6 py-5">
        <div className="flex items-baseline gap-3">
          <h3 className="ft-card-name">{name}</h3>
          <span className="ft-card-role rounded-full px-2.5 py-0.5">
            {role}
          </span>
        </div>
        <p className="ft-card-description mt-2">{description}</p>
      </div>
    </div>
  );
}

export function FoundationTypographyView() {
  return (
    <main className="flex flex-1 flex-col">
      <div className="ft-header px-8 py-10">
        <p className="ft-eyebrow">Foundation</p>
        <h1 className="ft-title mt-1">Typography</h1>
        <p className="ft-description mt-2 max-w-xl">
          Typography establishes visual hierarchy and ensures readability across
          every surface. We pair three typefaces — one for display, one for
          body, and one for code.
        </p>
      </div>

      {/* ── Typefaces ── */}
      <section className="px-8 py-10">
        <h2 className="ft-section-title">Typefaces</h2>
        <p className="ft-section-caption mt-1">
          Each typeface serves a distinct role in our typographic system.
        </p>

        <div className="mt-6 grid gap-6 lg:grid-cols-3">
          {TYPEFACES.map((t) => (
            <TypefaceCard key={t.name} {...t} />
          ))}
        </div>
      </section>
    </main>
  );
}
