"use client";

import Link from "next/link";
import { useState } from "react";
import { labelConfigs, labelGroups } from "@/lib/labelConfigs";
import { SITE_NAME } from "@/lib/site";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/labels", label: "Label Selection" },
  { href: "/nutrition-analysis", label: "Nutrition Analysis" },
  { href: "/contact-us", label: "Contact Us" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-neutral-200/80 bg-white/85 backdrop-blur supports-[backdrop-filter]:bg-white/70">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <Link href="/" className="flex items-center gap-2 text-base font-bold tracking-tight text-neutral-900">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-700 text-sm font-black text-white">
            N
          </span>
          <span className="hidden sm:inline">{SITE_NAME}</span>
          <span className="sm:hidden">NFL Maker</span>
        </Link>
        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          className="rounded-md border border-neutral-300 px-3 py-1.5 text-sm font-medium text-neutral-700 lg:hidden"
        >
          Menu
        </button>
        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-neutral-600 transition hover:text-emerald-800"
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/labels"
            className="rounded-md bg-emerald-700 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-emerald-800"
          >
            Get Started
          </Link>
        </nav>
      </div>

      {open && (
        <nav className="max-h-[75vh] overflow-y-auto border-t border-neutral-200 px-4 py-4 lg:hidden">
          {navLinks.map((l) => (
            <Link key={l.href} href={l.href} className="block py-1.5 text-sm font-medium text-neutral-700">
              {l.label}
            </Link>
          ))}
          {labelGroups.map((group) => (
            <div key={group} className="pt-3">
              <div className="text-xs font-semibold uppercase text-neutral-400">{group}</div>
              {labelConfigs
                .filter((c) => c.group === group)
                .map((c) => (
                  <Link key={c.slug} href={`/labels/${c.slug}`} className="block py-1 text-sm text-neutral-600">
                    {c.shortTitle}
                  </Link>
                ))}
            </div>
          ))}
        </nav>
      )}
    </header>
  );
}
