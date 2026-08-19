"use client";

import { useState } from "react";

export function ComponentPage({
  name,
  description,
  preview,
  code,
  sourceTsx,
  sourceCss,
}: {
  name: string;
  description: string;
  preview: React.ReactNode;
  code: string;
  sourceTsx?: string | null;
  sourceCss?: string | null;
}) {
  const [tab, setTab] = useState<"preview" | "code" | "source">("preview");
  const [sourceFile, setSourceFile] = useState<"tsx" | "css">("tsx");
  const [copied, setCopied] = useState(false);

  const hasSource = Boolean(sourceTsx || sourceCss);
  const activeSource = sourceFile === "css" && sourceCss ? sourceCss : sourceTsx ?? sourceCss ?? "";

  async function copyText(text: string) {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {}
  }

  const handleCopy = () => copyText(tab === "source" ? activeSource : code);

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
            Usage
          </button>
          {hasSource && (
            <button
              type="button"
              onClick={() => setTab("source")}
              className={`cursor-pointer border-b-2 px-4 py-2 text-sm font-medium transition-colors ${
                tab === "source"
                  ? "border-border-brand text-text-brand"
                  : "border-transparent text-text-neutral hover:text-text-primary"
              }`}
            >
              Source
            </button>
          )}
        </div>

        {tab === "preview" && (
          <div className="mt-6 rounded-xl border border-border-neutral bg-background-neutral p-8">
            <div className="flex min-h-[200px] items-center justify-center">
              {preview}
            </div>
          </div>
        )}

        {tab === "code" && (
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

        {tab === "source" && hasSource && (
          <div className="mt-6">
            <p className="mb-3 text-sm text-text-neutral">
              The actual implementation of this component, read directly from{" "}
              <code className="rounded bg-background-accentgray px-1.5 py-0.5 text-xs">
                src/components/ui/
              </code>
              .
            </p>
            {sourceTsx && sourceCss && (
              <div className="mb-3 flex gap-1">
                <button
                  type="button"
                  onClick={() => setSourceFile("tsx")}
                  className={`cursor-pointer rounded-md px-3 py-1.5 text-xs font-medium transition-colors ${
                    sourceFile === "tsx"
                      ? "bg-background-accentgray text-text-primary"
                      : "text-text-neutral hover:text-text-primary"
                  }`}
                >
                  {name.toLowerCase()}.tsx
                </button>
                <button
                  type="button"
                  onClick={() => setSourceFile("css")}
                  className={`cursor-pointer rounded-md px-3 py-1.5 text-xs font-medium transition-colors ${
                    sourceFile === "css"
                      ? "bg-background-accentgray text-text-primary"
                      : "text-text-neutral hover:text-text-primary"
                  }`}
                >
                  {name.toLowerCase()}.css
                </button>
              </div>
            )}
            <div className="relative">
              <button
                type="button"
                onClick={handleCopy}
                className="absolute top-3 right-3 z-10 cursor-pointer rounded-md bg-background-accentgray px-2.5 py-1 text-xs font-medium text-text-neutral transition-colors hover:bg-background-accentgray-hover"
              >
                {copied ? "Copied!" : "Copy"}
              </button>
              <pre className="max-h-[600px] overflow-auto rounded-xl border border-border-neutral bg-brand-900 p-6 text-sm leading-6 text-white">
                <code>{activeSource}</code>
              </pre>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
