import type { Metadata } from "next";
import Link from "next/link";
import { labelConfigs, labelGroups } from "@/lib/labelConfigs";
import { SITE_NAME, SITE_URL } from "@/lib/site";

const homeTitle = "Nutrition Facts Label Maker | Free FDA Label Generator";
const homeDescription =
  "Nutrition Facts Label Maker: build a free, FDA-compliant Nutrition Facts label for any packaged food. Choose from 13 official formats, fill in your data with a live preview, and download a print-ready image.";

export const metadata: Metadata = {
  title: homeTitle,
  description: homeDescription,
  alternates: { canonical: "/" },
  openGraph: {
    title: homeTitle,
    description: homeDescription,
    url: SITE_URL,
  },
};

const stats = [
  { value: "13", label: "FDA Label Formats" },
  { value: "100%", label: "Free to Use" },
  { value: "0", label: "Sign-ups Required" },
  { value: "HD", label: "Print-Ready PNG" },
];

const features = [
  {
    title: "FDA 2016-Compliant Layouts",
    body: "Every format follows the FDA's current Nutrition Facts label rules, including the bolded calorie count and the Added Sugars line.",
    icon: (
      <path d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
    ),
  },
  {
    title: "Real-Time Live Preview",
    body: "Your label redraws instantly as you type, so you always see exactly what you're about to download.",
    icon: <path d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178ZM15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />,
  },
  {
    title: "Every Layout Covered",
    body: "Vertical, linear, tabular, dual-column, aggregate, bilingual, and infant/children formats — all in one place.",
    icon: <path d="M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6ZM3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25ZM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25V6ZM13.5 15.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25A2.25 2.25 0 0 1 13.5 18v-2.25Z" />,
  },
  {
    title: "Adjustable Panel Width",
    body: "Drag a single slider to resize any label so it fits your exact packaging dimensions, front or back of pack.",
    icon: <path d="M7.5 21 3 16.5m0 0L7.5 12M3 16.5h18M16.5 3 21 7.5m0 0L16.5 12M21 7.5H3" />,
  },
  {
    title: "Ingredients & Manufacturer Info",
    body: "Add a formatted ingredient list, allergen statement, and manufacturer name & address to any label with one toggle.",
    icon: <path d="M12 4.5v15m7.5-7.5h-15" />,
  },
  {
    title: "High-Resolution Downloads",
    body: "Export a crisp, watermark-free PNG at 3x resolution — ready to hand straight to your printer or packaging designer.",
    icon: <path d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />,
  },
];

const steps = [
  {
    n: 1,
    title: "Choose a label format",
    body: "Pick from 13 official FDA Nutrition Facts layouts based on your product and packaging.",
  },
  {
    n: 2,
    title: "Fill in your nutrition data",
    body: "Enter calories, macronutrients, vitamins, ingredients, and manufacturer details — watch the label update live.",
  },
  {
    n: 3,
    title: "Download & print",
    body: "Export a free, high-resolution PNG that's ready to send straight to your packaging printer.",
  },
];

const faqs = [
  {
    q: "Is this nutrition facts label maker free to use?",
    a: "Yes. Every label format, the live preview, and the high-resolution PNG download are completely free, with no watermark and no sign-up required.",
  },
  {
    q: "Are the labels FDA compliant?",
    a: "Each layout is modeled on the FDA's 2016 Nutrition Facts label rules. That said, this tool only formats the numbers you enter — you're responsible for verifying your product's nutrition data and confirming the finished label meets applicable regulations before printing.",
  },
  {
    q: "What file format do I get when I download my label?",
    a: "Labels are exported as a high-resolution PNG image (roughly 3x scale), suitable for print media, packaging artwork, and web use.",
  },
  {
    q: "Can I use a transparent background?",
    a: "Yes. Every label format has a transparent-background toggle so you can drop the panel directly onto existing packaging artwork.",
  },
  {
    q: "Which format should I use for a small package?",
    a: "For packages with very little label space, use the Linear Display or one of the Tabular Display formats — both are designed by the FDA specifically for small and intermediate-sized packages.",
  },
  {
    q: "Does this tool store or upload my nutrition data?",
    a: "No. The generator runs entirely in your browser — your nutrition data, ingredients, and images never leave your device or get sent to a server.",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

const softwareJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: SITE_NAME,
  url: SITE_URL,
  applicationCategory: "DesignApplication",
  operatingSystem: "Any (browser-based)",
  description: homeDescription,
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
};

export default function Home() {
  return (
    <div className="bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareJsonLd) }}
      />

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-neutral-100 bg-gradient-to-b from-emerald-50/70 via-white to-white">
        <div className="mx-auto max-w-6xl px-4 pt-20 pb-16 text-center">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-emerald-700">
            Free &amp; FDA-Compliant Formats
          </span>
          <h1 className="mx-auto mt-5 max-w-3xl text-4xl font-bold tracking-tight text-neutral-900 sm:text-6xl">
            Nutrition Facts Label Maker
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-neutral-600">
            A free <strong className="font-semibold text-neutral-800">nutrition facts label maker</strong>{" "}
            for packaged food products. Pick an FDA-compliant format, fill in your data, and download a
            print-ready, high-resolution image &mdash; no design software required.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/labels"
              className="rounded-md bg-emerald-700 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-emerald-800"
            >
              Browse Label Formats
            </Link>
            <Link
              href="#how-it-works"
              className="rounded-md border border-neutral-300 bg-white px-6 py-3 text-sm font-semibold text-neutral-700 transition hover:border-emerald-700 hover:text-emerald-800"
            >
              See How It Works
            </Link>
          </div>

          <dl className="mx-auto mt-16 grid max-w-3xl grid-cols-2 gap-6 sm:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="rounded-xl border border-neutral-100 bg-white/70 px-4 py-5 shadow-sm">
                <dt className="text-2xl font-bold text-emerald-700">{s.value}</dt>
                <dd className="mt-1 text-xs font-medium text-neutral-500">{s.label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Features */}
      <section className="mx-auto max-w-6xl px-4 py-20">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-neutral-900">
            Everything you need to label a packaged food product
          </h2>
          <p className="mt-3 text-neutral-600">
            A complete, browser-based Nutrition Facts label maker built around the FDA&apos;s official layouts.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <div
              key={f.title}
              className="rounded-xl border border-neutral-200 p-6 transition hover:border-emerald-200 hover:shadow-md"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-emerald-50 text-emerald-700">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-6 w-6">
                  {f.icon}
                </svg>
              </div>
              <h3 className="mt-4 font-semibold text-neutral-900">{f.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-neutral-600">{f.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section id="how-it-works" className="border-y border-neutral-100 bg-neutral-50 py-20">
        <div className="mx-auto max-w-6xl px-4">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-neutral-900">How it works</h2>
            <p className="mt-3 text-neutral-600">Create your Nutrition Facts label today in 3 simple steps.</p>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-3">
            {steps.map((s) => (
              <div key={s.n} className="relative rounded-xl bg-white p-6 text-center shadow-sm">
                <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-emerald-700 text-lg font-bold text-white">
                  {s.n}
                </div>
                <h3 className="mt-4 text-lg font-semibold text-neutral-900">{s.title}</h3>
                <p className="mt-2 text-sm text-neutral-600">{s.body}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link
              href="/labels"
              className="inline-block rounded-md bg-emerald-700 px-6 py-3 text-sm font-semibold text-white transition hover:bg-emerald-800"
            >
              Start Building Your Label
            </Link>
          </div>
        </div>
      </section>

      {/* Explore all formats - internal links to every label page */}
      <section className="mx-auto max-w-6xl px-4 py-20">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-neutral-900">Explore every label format</h2>
          <p className="mt-3 text-neutral-600">
            Jump straight into any of the 13 FDA Nutrition Facts layouts supported by the generator.
          </p>
        </div>

        {labelGroups.map((group) => (
          <div key={group} className="mt-10">
            <h3 className="text-sm font-semibold uppercase tracking-wide text-emerald-700">{group}</h3>
            <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {labelConfigs
                .filter((c) => c.group === group)
                .map((c) => (
                  <Link
                    key={c.slug}
                    href={`/labels/${c.slug}`}
                    className="group flex flex-col justify-between rounded-lg border border-neutral-200 p-5 transition hover:border-emerald-700 hover:shadow-sm"
                  >
                    <div>
                      <h4 className="font-semibold text-neutral-900">{c.title}</h4>
                      <p className="mt-2 text-xs text-neutral-500">{c.description}</p>
                    </div>
                    <span className="mt-4 text-sm font-medium text-emerald-700 group-hover:underline">
                      Create this label &rarr;
                    </span>
                  </Link>
                ))}
            </div>
          </div>
        ))}
      </section>

      {/* Other resources */}
      <section className="border-y border-neutral-100 bg-neutral-50 py-20">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-center text-3xl font-bold tracking-tight text-neutral-900">More resources</h2>
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3">
            <Link
              href="/labels"
              className="rounded-xl bg-white p-6 shadow-sm transition hover:shadow-md"
            >
              <h3 className="font-semibold text-neutral-900">Label Selection</h3>
              <p className="mt-2 text-sm text-neutral-600">
                Browse the full catalog of Nutrition Facts label formats grouped by display type.
              </p>
              <span className="mt-4 inline-block text-sm font-medium text-emerald-700">View all formats &rarr;</span>
            </Link>
            <Link
              href="/nutrition-analysis"
              className="rounded-xl bg-white p-6 shadow-sm transition hover:shadow-md"
            >
              <h3 className="font-semibold text-neutral-900">Nutrition Analysis</h3>
              <p className="mt-2 text-sm text-neutral-600">
                Not sure what numbers belong on your label? Learn how a nutrition analysis works.
              </p>
              <span className="mt-4 inline-block text-sm font-medium text-emerald-700">Learn more &rarr;</span>
            </Link>
            <Link
              href="/contact-us"
              className="rounded-xl bg-white p-6 shadow-sm transition hover:shadow-md"
            >
              <h3 className="font-semibold text-neutral-900">Contact Us</h3>
              <p className="mt-2 text-sm text-neutral-600">
                Found a bug or need a label format we don&apos;t support yet? Get in touch.
              </p>
              <span className="mt-4 inline-block text-sm font-medium text-emerald-700">Email us &rarr;</span>
            </Link>
          </div>
        </div>
      </section>

      {/* SEO content */}
      <section className="mx-auto max-w-3xl px-4 py-20">
        <h2 className="text-2xl font-bold text-neutral-900">What is the FDA Nutrition Facts label?</h2>
        <p className="mt-4 text-sm leading-relaxed text-neutral-700">
          The Nutrition Facts label is the standardized panel the U.S. Food and Drug Administration requires on most
          packaged foods and beverages sold in the United States. It lists serving size, calories, macronutrients
          such as total fat, sodium, and total carbohydrate, and key vitamins and minerals as a percentage of the
          Daily Value. A nutrition facts label maker like this one lets you build that panel from your product&apos;s
          data instead of laying it out by hand in a design program.
        </p>

        <h2 className="mt-10 text-2xl font-bold text-neutral-900">Which label format should you use?</h2>
        <p className="mt-4 text-sm leading-relaxed text-neutral-700">
          The FDA publishes several approved layouts, and the right one depends on your packaging. Most products use
          the{" "}
          <Link href="/labels/standard-vertical" className="text-emerald-700 underline hover:text-emerald-800">
            Standard Vertical
          </Link>{" "}
          format. Foods with insignificant amounts of most nutrients can use the{" "}
          <Link href="/labels/simplified-display" className="text-emerald-700 underline hover:text-emerald-800">
            Simplified Display
          </Link>
          . Multi-serving containers that could reasonably be finished in one sitting often need a{" "}
          <Link
            href="/labels/dual-column-display-per-serving-and-per-container"
            className="text-emerald-700 underline hover:text-emerald-800"
          >
            dual-column
          </Link>{" "}
          label, while small or intermediate-sized packages &mdash; think a single-serving candy bar or a spice
          packet &mdash; typically use the{" "}
          <Link
            href="/labels/linear-display-for-small-or-intermediate-sized-packages"
            className="text-emerald-700 underline hover:text-emerald-800"
          >
            Linear
          </Link>{" "}
          or{" "}
          <Link href="/labels/tabular-format" className="text-emerald-700 underline hover:text-emerald-800">
            Tabular
          </Link>{" "}
          display instead. Products made specifically for infants or children 1&ndash;3 years old have their own
          dedicated formats as well.
        </p>

        <h2 className="mt-10 text-2xl font-bold text-neutral-900">The FDA&apos;s 2016 label update</h2>
        <p className="mt-4 text-sm leading-relaxed text-neutral-700">
          In 2016 the FDA finalized updated rules for the Nutrition Facts label on packaged foods, reflecting current
          science on diet and chronic disease. The changes make it easier for shoppers to make informed choices
          &mdash; including a larger, bolder calorie count and a new &ldquo;Added Sugars&rdquo; line. Manufacturers
          with $10 million or more in annual food sales were required to transition to the new label by January 1,
          2020; smaller manufacturers had until January 1, 2021. Every format in this generator reflects that
          updated layout.
        </p>
        <p className="mt-4 text-xs text-neutral-500">
          Reference: FDA,{" "}
          <a
            href="https://www.fda.gov/food/food-labeling-nutrition/changes-nutrition-facts-label"
            target="_blank"
            rel="noreferrer"
            className="underline hover:text-emerald-800"
          >
            Changes to the Nutrition Facts Label
          </a>
          .
        </p>
      </section>

      {/* FAQ */}
      <section className="border-t border-neutral-100 bg-neutral-50 py-20">
        <div className="mx-auto max-w-3xl px-4">
          <h2 className="text-3xl font-bold tracking-tight text-neutral-900">Frequently asked questions</h2>
          <div className="mt-10 flex flex-col divide-y divide-neutral-200 rounded-xl border border-neutral-200 bg-white">
            {faqs.map((f) => (
              <details key={f.q} className="group p-6 open:bg-emerald-50/40">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-neutral-900">
                  {f.q}
                  <span className="text-emerald-700 transition group-open:rotate-45">+</span>
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-neutral-600">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="mx-auto max-w-6xl px-4 py-20 text-center">
        <h2 className="text-3xl font-bold tracking-tight text-neutral-900">Ready to build your label?</h2>
        <p className="mx-auto mt-3 max-w-xl text-neutral-600">
          Pick a format and have a print-ready Nutrition Facts label in minutes &mdash; completely free.
        </p>
        <Link
          href="/labels"
          className="mt-8 inline-block rounded-md bg-emerald-700 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-emerald-800"
        >
          Start Here
        </Link>
      </section>
    </div>
  );
}
