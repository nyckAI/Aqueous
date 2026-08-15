"use client";

import { useState } from "react";

export function ComponentPage({
  name,
  description,
  preview,
  code,
}: {
  name: string;
  description: string;
  preview: React.ReactNode;
  code: string;
}) {
  const [tab, setTab] = useState<"preview" | "code">("preview");
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {}
  }

  return (
    <main className="flex flex-1 flex-col px-10 py-10">
      <h1 className="text-[32px] font-bold tracking-tight text-text-primary">
        {name}
      </h1>
      <p className="mt-2 max-w-2xl text-base text-text-neutral">{description}</p>

      <div className="mt-8">
        <div className="flex items-center gap-1 border-b border-border-neutral">
          <button
            type="button"
            onClick={() => setTab("preview")}
            className={`cursor-pointer border-b-2 px-4 py-2 text-sm font-medium transition-colors ${
              tab === "preview"
                ? "border-border-brand text-text-brand"
                : "border-transparent text-text-neutral hover:text-text-primary"
            }`}
          >
            Preview
          </button>
          <button
            type="button"
            onClick={() => setTab("code")}
            className={`cursor-pointer border-b-2 px-4 py-2 text-sm font-medium transition-colors ${
              tab === "code"
                ? "border-border-brand text-text-brand"
                : "border-transparent text-text-neutral hover:text-text-primary"
            }`}
          >
            Code
          </button>
        </div>

        {tab === "preview" ? (
          <div className="mt-6 rounded-xl border border-border-neutral bg-background-neutral p-8">
            <div className="flex min-h-[200px] items-center justify-center">
              {preview}
            </div>
          </div>
        ) : (
          <div className="relative mt-6">
            <button
              type="button"
              onClick={handleCopy}
              className="absolute top-3 right-3 z-10 cursor-pointer rounded-md bg-background-accentgray px-2.5 py-1 text-xs font-medium text-text-neutral transition-colors hover:bg-background-accentgray-hover"
            >
              {copied ? "Copied!" : "Copy"}
            </button>
            <pre className="overflow-x-auto rounded-xl border border-border-neutral bg-brand-900 p-6 text-sm leading-6 text-white">
              <code>{code}</code>
            </pre>
          </div>
        )}
      </div>
    </main>
  );
}
