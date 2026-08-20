"use client";

import { useState } from "react";
import { ChevronRight } from "lucide-react";
import { changelog, type ChangeType, type VersionEntry } from "@/lib/changelog";
import { totalTokenCount } from "@/lib/color-tokens";
import packageJson from "../../../package.json";
import { componentRegistry } from "@/lib/component-registry";
import "./OverviewView.css";

const COMPONENT_COUNT = componentRegistry.length;

const typeLabels: Record<ChangeType, string> = {
  added: "Added",
  changed: "Changed",
  removed: "Removed",
  fixed: "Fixed",
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
    <div className="ov-stat-card flex flex-col gap-1 rounded-xl px-6 py-5">
      <span className="ov-stat-label">{label}</span>
      <span className="ov-stat-value">{value}</span>
    </div>
  );
}

function ChangeTypeBadge({ type }: { type: ChangeType }) {
  return (
    <span className="ov-badge inline-flex items-center gap-1.5 rounded-md px-2 py-0.5">
      <span className="ov-badge-dot size-1.5 rounded-full" data-type={type} />
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
    <div className="ov-release-card rounded-xl">
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className="flex w-full cursor-pointer items-start gap-3 px-6 py-5 text-left"
      >
        <ChevronRight
          className={`ov-release-chevron mt-0.5 size-4 shrink-0 transition-transform ${open ? "rotate-90" : ""}`}
          strokeWidth={2}
        />

        <div className="min-w-0 flex-1">
          <div className="flex items-baseline gap-3">
            <h3 className="ov-release-version">v{release.version}</h3>
            <span className="ov-release-date">{dateAuthor}</span>
          </div>

          <p className="ov-release-summary mt-1">{release.summary}</p>
        </div>
      </button>

      {open && (
        <div className="ov-release-body px-6 py-5">
          <div className="ov-release-rail flex flex-col gap-4 pl-5">
            {release.changes.map((change, i) => (
              <div key={i}>
                <div className="flex items-center gap-2">
                  <ChangeTypeBadge type={change.type} />
                </div>
                <p className="ov-change-title mt-1.5">{change.title}</p>
                <p className="ov-change-description mt-0.5">
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
        <h1 className="ov-title">Aqueous Design System</h1>
        <p className="ov-description mt-3">
          Placeholder description — add your design system overview here.
        </p>
      </div>

      <div className="mt-8 grid max-w-3xl grid-cols-3 gap-4">
        <StatCard label="Version" value={`v${packageJson.version}`} />
        <StatCard label="Tokens" value={totalTokenCount} />
        <StatCard label="Components" value={COMPONENT_COUNT} />
      </div>

      <section className="mt-14 max-w-3xl">
        <h2 className="ov-section-title">Changelog</h2>

        <div className="mt-6 flex flex-col gap-4">
          {changelog.map((release) => (
            <ReleaseSection key={release.version} release={release} />
          ))}
        </div>
      </section>
    </main>
  );
}
