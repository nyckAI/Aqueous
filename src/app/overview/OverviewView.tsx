"use client";

import { useState } from "react";
import { ChevronRight } from "lucide-react";
import { changelog, type ChangeType, type VersionEntry } from "@/lib/changelog";
import { totalTokenCount } from "@/lib/color-tokens";
import packageJson from "../../../package.json";

import { componentRegistry } from "@/lib/component-registry";

const COMPONENT_COUNT = componentRegistry.length;

const typeLabels: Record<ChangeType, string> = {
  added: "Added",
  changed: "Changed",
  removed: "Removed",
  fixed: "Fixed",
};

const typeDotColors: Record<ChangeType, string> = {
  added: "bg-icon-success",
  changed: "bg-icon-brand",
  removed: "bg-icon-danger",
  fixed: "bg-icon-warning",
};

function formatDate(dateStr: string): string {
  if (dateStr === "Unreleased") return "Unreleased";
  const date = new Date(dateStr + "T00:00:00");
  return date.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

function StatCard({
  label,
  value,
}: {
  label: string;
  value: string | number;
}) {
  return (
    <div className="flex flex-col gap-1 rounded-xl border border-border-disabled bg-background-neutral px-6 py-5">
      <span className="text-sm text-text-neutral">{label}</span>
      <span className="font-mono text-2xl font-bold tracking-tight text-text-primary">
        {value}
      </span>
    </div>
  );
}

function ChangeTypeBadge({ type }: { type: ChangeType }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-md bg-background-neutral-hover px-2 py-0.5 text-xs font-medium text-text-neutral">
      <span className={`size-1.5 rounded-full ${typeDotColors[type]}`} />
      {typeLabels[type]}
    </span>
  );
}

function ReleaseSection({ release }: { release: VersionEntry }) {
  const [open, setOpen] = useState(false);

  const dateAuthor =
    release.date === "Unreleased"
      ? `Unreleased • ${release.author}`
      : `${formatDate(release.date)} • ${release.author}`;

  return (
    <div className="rounded-xl border border-border-disabled bg-background-neutral">
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className="flex w-full cursor-pointer items-start gap-3 px-6 py-5 text-left"
      >
        <ChevronRight
          className={`mt-0.5 size-4 shrink-0 text-text-neutral transition-transform ${open ? "rotate-90" : ""}`}
          strokeWidth={2}
        />

        <div className="min-w-0 flex-1">
          <div className="flex items-baseline gap-3">
            <h3 className="text-base font-semibold text-text-primary">
              v{release.version}
            </h3>
            <span className="text-sm text-text-neutral">{dateAuthor}</span>
          </div>

          <p className="mt-1 text-sm leading-relaxed text-text-neutral">
            {release.summary}
          </p>
        </div>
      </button>

      {open && (
        <div className="border-t border-border-disabled px-6 py-5">
          <div className="flex flex-col gap-4 border-l-2 border-border-disabled pl-5">
            {release.changes.map((change, i) => (
              <div key={i}>
                <div className="flex items-center gap-2">
                  <ChangeTypeBadge type={change.type} />
                </div>
                <p className="mt-1.5 text-sm font-medium text-text-primary">
                  {change.title}
                </p>
                <p className="mt-0.5 text-sm leading-relaxed text-text-neutral">
                  {change.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export function OverviewView() {
  return (
    <main className="flex flex-1 flex-col px-10 py-10">
      <div className="max-w-3xl">
        <h1 className="text-[32px] font-bold tracking-tight text-text-primary">
          Aqueous Design System
        </h1>
        <p className="mt-3 text-base leading-relaxed text-text-neutral">
          Placeholder description — add your design system overview here.
        </p>
      </div>

      <div className="mt-8 grid max-w-3xl grid-cols-3 gap-4">
        <StatCard label="Version" value={`v${packageJson.version}`} />
        <StatCard label="Tokens" value={totalTokenCount} />
        <StatCard label="Components" value={COMPONENT_COUNT} />
      </div>

      <section className="mt-14 max-w-3xl">
        <h2 className="text-xl font-bold text-text-primary">Changelog</h2>

        <div className="mt-6 flex flex-col gap-4">
          {changelog.map((release) => (
            <ReleaseSection key={release.version} release={release} />
          ))}
        </div>
      </section>
    </main>
  );
}
