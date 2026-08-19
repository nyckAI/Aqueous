import fs from "node:fs";
import path from "node:path";
import { notFound } from "next/navigation";
import { componentRegistry } from "@/lib/component-registry";
import { ComponentPageClient } from "./ComponentPageClient";

export function generateStaticParams() {
  return componentRegistry.map((c) => ({ slug: c.slug }));
}

function readSourceFile(relativePath: string): string | null {
  const absolutePath = path.join(process.cwd(), "src/components/ui", relativePath);
  try {
    return fs.readFileSync(absolutePath, "utf8");
  } catch {
    return null;
  }
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

  const sourceTsx = readSourceFile(`${meta.slug}.tsx`);
  const sourceCss = readSourceFile(`${meta.slug}.css`);

  return (
    <ComponentPageClient
      slug={meta.slug}
      name={meta.name}
      description={meta.description}
      sourceTsx={sourceTsx}
      sourceCss={sourceCss}
    />
  );
}
