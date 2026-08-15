"use client";

import { ComponentPage } from "@/components/ComponentPage";
import { getComponentDemo } from "./component-demos";

export function ComponentPageClient({
  slug,
  name,
  description,
}: {
  slug: string;
  name: string;
  description: string;
}) {
  const demo = getComponentDemo(slug);

  if (!demo) {
    return (
      <main className="flex flex-1 flex-col px-10 py-10">
        <h1 className="text-[32px] font-bold tracking-tight text-text-primary">
          {name}
        </h1>
        <p className="mt-2 max-w-2xl text-base text-text-neutral">
          {description}
        </p>
        <div className="mt-8 flex min-h-[200px] items-center justify-center rounded-xl border border-border-neutral bg-background-neutral p-8">
          <p className="text-sm text-text-neutral">Coming soon</p>
        </div>
      </main>
    );
  }

  return (
    <ComponentPage
      name={name}
      description={description}
      preview={demo.preview}
      code={demo.code}
    />
  );
}
