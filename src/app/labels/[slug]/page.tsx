import Link from "next/link";
import { notFound } from "next/navigation";
import { LabelGenerator } from "@/components/LabelGenerator";
import { getLabelConfig, labelConfigs } from "@/lib/labelConfigs";

export function generateStaticParams() {
  return labelConfigs.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const config = getLabelConfig(slug);
  if (!config) return {};
  return {
    title: `${config.title} Nutrition Facts Label Maker`,
    description: `Create a free ${config.title} Nutrition Facts label: ${config.description} Fill in your data with a live preview and download a print-ready, high-resolution image.`,
    alternates: { canonical: `/labels/${config.slug}` },
  };
}

export default async function LabelPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const config = getLabelConfig(slug);
  if (!config) notFound();

  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <nav className="text-xs text-neutral-500">
        <Link href="/" className="hover:text-emerald-800">
          Home
        </Link>{" "}
        /{" "}
        <Link href="/labels" className="hover:text-emerald-800">
          Label Selection
        </Link>{" "}
        / <span className="text-neutral-700">{config.title}</span>
      </nav>
      <h1 className="mt-3 text-3xl font-bold text-neutral-900">{config.title}</h1>
      <p className="mt-2 max-w-2xl text-sm text-neutral-600">{config.description}</p>

      <div className="mt-10">
        <LabelGenerator config={config} />
      </div>
    </div>
  );
}
