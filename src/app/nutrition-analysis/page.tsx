import Link from "next/link";

export const metadata = {
  title: "Nutrition Analysis",
  description:
    "Learn how a nutrition analysis determines the calorie and nutrient values you'll enter into the nutrition facts label maker.",
  alternates: { canonical: "/nutrition-analysis" },
};

export default function NutritionAnalysisPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16">
      <h1 className="text-3xl font-bold text-neutral-900">Nutrition Analysis</h1>
      <p className="mt-4 text-sm leading-relaxed text-neutral-700">
        Not sure what numbers belong on your label? A nutrition analysis calculates the calorie and nutrient content
        of your recipe from its ingredients and portions, so the values you enter into the generator are accurate
        and defensible.
      </p>
      <p className="mt-4 text-sm leading-relaxed text-neutral-700">
        This is an informational page only &mdash; this demo site does not process nutrition analysis orders or
        payments. For an official analysis, a registered dietitian or an accredited food-testing lab can review your
        recipe and formal FDA labeling requirements.
      </p>
      <Link
        href="/labels"
        className="mt-8 inline-block rounded-md bg-emerald-700 px-6 py-3 text-sm font-semibold text-white transition hover:bg-emerald-800"
      >
        Continue to Label Selection
      </Link>
    </div>
  );
}
