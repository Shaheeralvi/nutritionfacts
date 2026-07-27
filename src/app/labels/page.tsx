import Link from "next/link";
import { labelConfigs, labelGroups } from "@/lib/labelConfigs";

export const metadata = {
  title: "Label Selection",
  description:
    "Browse all 13 FDA-compliant Nutrition Facts label formats supported by this free nutrition facts label maker — vertical, linear, tabular, dual-column, bilingual, and more.",
  alternates: { canonical: "/labels" },
};

export default function LabelsPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16">
      <h1 className="text-3xl font-bold text-neutral-900">Step 1: Label Format</h1>
      <p className="mt-2 max-w-2xl text-sm text-neutral-600">
        Select the label format that best suits your product. Every format leads to the same 3-step process: fill in
        your nutrition data and download a print-ready image.
      </p>

      {labelGroups.map((group) => (
        <section key={group} className="mt-10">
          <h2 className="text-lg font-semibold text-neutral-900">{group}</h2>
          <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {labelConfigs
              .filter((c) => c.group === group)
              .map((c) => (
                <Link
                  key={c.slug}
                  href={`/labels/${c.slug}`}
                  className="flex flex-col justify-between rounded-lg border border-neutral-200 p-5 transition hover:border-emerald-700 hover:shadow-sm"
                >
                  <div>
                    <h3 className="font-semibold text-neutral-900">{c.title}</h3>
                    <p className="mt-2 text-xs text-neutral-500">{c.description}</p>
                  </div>
                  <span className="mt-4 text-sm font-medium text-emerald-700">Select &rarr;</span>
                </Link>
              ))}
          </div>
        </section>
      ))}
    </div>
  );
}
