import Link from "next/link";
import { componentRegistry } from "@/lib/component-registry";

export default function ComponentsPage() {
  return (
    <main className="flex flex-1 flex-col px-10 py-10">
      <h1 className="text-[32px] font-bold tracking-tight text-text-primary">
        Components
      </h1>
      <p className="mt-2 max-w-2xl text-base text-text-neutral">
        Browse all available UI components. Each component is based on shadcn/ui
        and will be restyled to match the Nyck design system.
      </p>

      <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {componentRegistry.map((comp) => (
          <Link
            key={comp.slug}
            href={`/components/${comp.slug}`}
            className="group rounded-xl border border-border-neutral bg-background-neutral p-5 transition-colors hover:border-border-brand hover:bg-background-brand"
          >
            <h3 className="text-sm font-semibold text-text-primary group-hover:text-text-brand">
              {comp.name}
            </h3>
            <p className="mt-1 text-sm text-text-neutral">{comp.description}</p>
          </Link>
        ))}
      </div>
    </main>
  );
}
