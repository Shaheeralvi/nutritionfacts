import Link from "next/link";
import { labelConfigs } from "@/lib/labelConfigs";
import { SITE_NAME } from "@/lib/site";

const siteLinks = [
  { href: "/", label: "Home" },
  { href: "/labels", label: "Label Selection" },
  { href: "/nutrition-analysis", label: "Nutrition Analysis" },
  { href: "/contact-us", label: "Contact Us" },
];

const legalLinks = [
  { href: "/disclaimer", label: "Disclaimer" },
  { href: "/terms", label: "Terms & Conditions" },
  { href: "/privacy", label: "Privacy Policy" },
];

const verticalFormats = labelConfigs.filter((c) => c.group === "Vertical Display");
const compactFormats = labelConfigs.filter((c) => c.group !== "Vertical Display");

function FooterColumn({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <div className="text-xs font-semibold uppercase tracking-wider text-neutral-500">{title}</div>
      <ul className="mt-3 flex flex-col gap-2">{children}</ul>
    </div>
  );
}

function FooterLink({ href, label }: { href: string; label: string }) {
  return (
    <li>
      <Link href={href} className="text-sm text-neutral-600 transition hover:text-emerald-700">
        {label}
      </Link>
    </li>
  );
}

export function Footer() {
  return (
    <footer className="mt-20 border-t border-neutral-200 bg-neutral-50">
      <div className="mx-auto max-w-6xl px-4 py-14">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-6">
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 text-base font-bold tracking-tight text-neutral-900">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-700 text-sm font-black text-white">
                N
              </span>
              {SITE_NAME}
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-neutral-600">
              Build free, FDA-compliant Nutrition Facts labels for packaged foods &mdash; right in your browser, with
              a live preview and print-ready PNG or PDF downloads.
            </p>
            <Link
              href="/labels"
              className="mt-5 inline-block rounded-md bg-emerald-700 px-4 py-2 text-sm font-semibold text-white transition hover:bg-emerald-800"
            >
              Browse Label Formats
            </Link>
          </div>

          <FooterColumn title="Site">
            {siteLinks.map((l) => (
              <FooterLink key={l.href} {...l} />
            ))}
          </FooterColumn>

          <FooterColumn title="Vertical Display">
            {verticalFormats.map((c) => (
              <FooterLink key={c.slug} href={`/labels/${c.slug}`} label={c.shortTitle} />
            ))}
          </FooterColumn>

          <FooterColumn title="Linear & Tabular Display">
            {compactFormats.map((c) => (
              <FooterLink key={c.slug} href={`/labels/${c.slug}`} label={c.shortTitle} />
            ))}
          </FooterColumn>

          <FooterColumn title="Legal">
            {legalLinks.map((l) => (
              <FooterLink key={l.href} {...l} />
            ))}
          </FooterColumn>
        </div>
      </div>

      <div className="border-t border-neutral-200">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-2 px-4 py-6 text-xs text-neutral-500 sm:flex-row sm:justify-between">
          <p>&copy; {new Date().getFullYear()} {SITE_NAME}. All rights reserved.</p>
          <p>Nutrition Facts labels formatted for the FDA&apos;s current label rules.</p>
        </div>
      </div>
    </footer>
  );
}
