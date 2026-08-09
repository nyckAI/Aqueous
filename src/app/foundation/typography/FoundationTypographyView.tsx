"use client";

const TYPEFACES = [
  {
    name: "Geist",
    variable: "var(--font-geist)",
    role: "Headings",
    description:
      "Geist is our primary display typeface. Its geometric clarity and tight tracking make it ideal for headings, titles, and any text that needs to command attention.",
  },
  {
    name: "Inter",
    variable: "var(--font-inter)",
    role: "Body",
    description:
      "Inter is optimized for screen readability at small sizes. We use it for body copy, UI labels, form inputs, and any long-form content where legibility matters most.",
  },
  {
    name: "Geist Mono",
    variable: "var(--font-geist-mono)",
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
    <div className="overflow-hidden rounded-xl border border-border-disabled">
      <div className="bg-background-neutral-hover px-6 py-8">
        <p
          className="text-[56px] leading-[1.1] tracking-tight text-text-primary"
          style={{ fontFamily: variable }}
        >
          Aa
        </p>
        <p
          className="mt-3 text-lg text-text-neutral"
          style={{ fontFamily: variable }}
        >
          ABCDEFGHIJKLMNOPQRSTUVWXYZ
        </p>
        <p
          className="mt-0.5 text-lg text-text-neutral"
          style={{ fontFamily: variable }}
        >
          abcdefghijklmnopqrstuvwxyz
        </p>
        <p
          className="mt-0.5 text-lg text-text-neutral"
          style={{ fontFamily: variable }}
        >
          0123456789 !@#$%&amp;*()
        </p>
      </div>
      <div className="px-6 py-5">
        <div className="flex items-baseline gap-3">
          <h3 className="text-base font-semibold text-text-primary">{name}</h3>
          <span className="rounded-full bg-background-neutral-hover px-2.5 py-0.5 text-xs font-medium text-text-neutral">
            {role}
          </span>
        </div>
        <p className="mt-2 text-sm leading-6 text-text-neutral">{description}</p>
      </div>
    </div>
  );
}

export function FoundationTypographyView() {
  return (
    <main className="flex flex-1 flex-col">
      <div className="bg-background-neutral-hover px-8 py-10">
        <p className="text-[13px] leading-[22px] text-text-neutral">Foundation</p>
        <h1 className="mt-1 text-2xl font-semibold tracking-tight text-text-primary">
          Typography
        </h1>
        <p className="mt-2 max-w-xl text-base leading-7 text-text-neutral">
          Typography establishes visual hierarchy and ensures readability across
          every surface. We pair three typefaces — one for display, one for
          body, and one for code.
        </p>
      </div>

      {/* ── Typefaces ── */}
      <section className="px-8 py-10">
        <h2 className="text-lg font-semibold text-text-primary">Typefaces</h2>
        <p className="mt-1 text-sm text-text-neutral">
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
