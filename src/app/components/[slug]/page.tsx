import { notFound } from "next/navigation";
import { componentRegistry } from "@/lib/component-registry";
import { ComponentPageClient } from "./ComponentPageClient";

export function generateStaticParams() {
  return componentRegistry.map((c) => ({ slug: c.slug }));
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const meta = componentRegistry.find((c) => c.slug === slug);

  if (!meta) {
    notFound();
  }

  return (
    <ComponentPageClient
      slug={meta.slug}
      name={meta.name}
      description={meta.description}
    />
  );
}
