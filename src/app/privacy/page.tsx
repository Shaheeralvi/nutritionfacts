export const metadata = {
  title: "Privacy Policy",
  description: "Privacy policy for the nutrition facts label maker. The tool runs entirely in your browser and does not store your data.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16">
      <h1 className="text-3xl font-bold text-neutral-900">Privacy Policy</h1>
      <div className="mt-6 flex flex-col gap-4 text-sm leading-relaxed text-neutral-700">
        <p>
          The label generator runs entirely in your browser. The nutrition data, ingredients, and manufacturer
          information you type into the form are used only to render your live preview and the downloaded image
          &mdash; they are not sent to or stored on any server.
        </p>
        <p>
          If you contact us by email, we&apos;ll use the information you provide only to respond to your message.
        </p>
        <p>This policy may be updated periodically to reflect changes to the site.</p>
      </div>
    </div>
  );
}
