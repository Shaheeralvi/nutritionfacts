export const metadata = {
  title: "Disclaimer",
  description: "Disclaimer for the nutrition facts label maker: labels are visual templates only, not verified for regulatory compliance.",
  alternates: { canonical: "/disclaimer" },
};

export default function DisclaimerPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16">
      <h1 className="text-3xl font-bold text-neutral-900">Disclaimer</h1>
      <div className="mt-6 flex flex-col gap-4 text-sm leading-relaxed text-neutral-700">
        <p>
          The labels produced by this tool are visual templates only. This site does not verify the accuracy of any
          nutrition values you enter, and does not guarantee that a generated label meets FDA or any other
          regulatory requirement.
        </p>
        <p>
          It is your responsibility to confirm that your product&apos;s nutrition facts, serving sizes, ingredient
          list, and allergen statements are accurate and compliant with applicable food labeling regulations before
          using a generated label commercially.
        </p>
        <p>
          This tool is provided &ldquo;as is&rdquo; without warranties of any kind, express or implied.
        </p>
      </div>
    </div>
  );
}
