export const metadata = {
  title: "Contact Us",
  description: "Get in touch about the nutrition facts label maker — report a bug or request a new label format.",
  alternates: { canonical: "/contact-us" },
};

export default function ContactUsPage() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-16">
      <h1 className="text-3xl font-bold text-neutral-900">Contact Us</h1>
      <p className="mt-4 text-sm leading-relaxed text-neutral-700">
        Have a question, found a bug, or want to request a new label format? Reach out and we&apos;ll get back to
        you.
      </p>
      <a
        href="mailto:hello@example.com?subject=Nutrition%20Facts%20Labels%20Generator"
        className="mt-8 inline-block rounded-md bg-emerald-700 px-6 py-3 text-sm font-semibold text-white transition hover:bg-emerald-800"
      >
        Email Us
      </a>
    </div>
  );
}
