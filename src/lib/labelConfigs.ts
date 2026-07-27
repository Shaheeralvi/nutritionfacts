import { LabelConfig } from "./types";

export const labelConfigs: LabelConfig[] = [
  {
    slug: "standard-vertical",
    title: "Standard Vertical",
    shortTitle: "Standard Vertical",
    group: "Vertical Display",
    renderer: "vertical",
    description:
      "The most common Nutrition Facts label format, used on the majority of packaged foods.",
    columnCount: 1,
    defaultWidth: 260,
  },
  {
    slug: "simplified-display",
    title: "Simplified Display",
    shortTitle: "Simplified Display",
    group: "Vertical Display",
    renderer: "vertical",
    description:
      "For foods that contain insignificant amounts of 8 or more of the mandatory nutrients.",
    simplified: true,
    columnCount: 1,
    defaultWidth: 260,
  },
  {
    slug: "vertical-display-with-micronutrients-listed-side-by-side",
    title: "Vertical Display with Micronutrients Listed Side-by-Side",
    shortTitle: "Micronutrients Side-by-Side",
    group: "Vertical Display",
    renderer: "vertical",
    description:
      "Standard vertical label with the vitamins & minerals section arranged in two columns to save vertical space.",
    columnCount: 1,
    defaultWidth: 300,
  },
  {
    slug: "infants-through-12-months-of-age",
    title: "Infants through 12 Months of Age",
    shortTitle: "Infants (0-12 Months)",
    group: "Vertical Display",
    renderer: "vertical",
    description: "Nutrition Facts label format for foods intended for infants through 12 months of age.",
    ageGroup: "infant",
    columnCount: 1,
    defaultWidth: 260,
  },
  {
    slug: "children-1-3-years",
    title: "Children 1-3 Years",
    shortTitle: "Children 1-3 Years",
    group: "Vertical Display",
    renderer: "vertical",
    description: "Nutrition Facts label format for foods intended specifically for children 1 through 3 years old.",
    ageGroup: "children",
    columnCount: 1,
    defaultWidth: 260,
  },
  {
    slug: "bilingual-english-spanish",
    title: "English/Spanish Bilingual Nutrition Facts Label",
    shortTitle: "English/Spanish Bilingual",
    group: "Vertical Display",
    renderer: "vertical",
    bilingual: true,
    description: "Standard vertical label with every field shown in both English and Spanish.",
    columnCount: 1,
    defaultWidth: 300,
  },
  {
    slug: "dual-column-display-per-serving-and-per-container",
    title: "Dual Column Display, Per Serving and Per Container",
    shortTitle: "Dual Column: Per Serving/Container",
    group: "Vertical Display",
    renderer: "multiColumn",
    description:
      "Required for certain multi-serving containers that could reasonably be consumed in one sitting. Lists values per serving and per container.",
    columnCount: 2,
    columnLabels: ["Per serving", "Per container"],
    defaultWidth: 320,
  },
  {
    slug: "dual-columns-two-forms-of-the-same-food",
    title: "Dual Columns, Two Forms of the Same Food",
    shortTitle: "Dual Column: Two Forms",
    group: "Vertical Display",
    renderer: "multiColumn",
    description:
      "Used when a food is sold in one form but typically prepared differently, e.g. 'As Packaged' and 'As Prepared'.",
    columnCount: 2,
    columnLabels: ["As Packaged", "As Prepared"],
    defaultWidth: 320,
  },
  {
    slug: "aggregate-display",
    title: "Aggregate Display",
    shortTitle: "Aggregate Display",
    group: "Vertical Display",
    renderer: "multiColumn",
    description:
      "For variety packs or assortments, listing nutrition information for each different food side by side on one label.",
    columnCount: 3,
    columnLabels: ["Flavor A", "Flavor B", "Flavor C"],
    defaultWidth: 380,
  },
  {
    slug: "linear-display-for-small-or-intermediate-sized-packages",
    title: "Linear Display for Small or Intermediate-Sized Packages",
    shortTitle: "Linear Display",
    group: "Linear Display",
    renderer: "linear",
    description:
      "A condensed, run-in paragraph format for packages with very little available label space.",
    columnCount: 1,
    defaultWidth: 320,
  },
  {
    slug: "tabular-display-for-small-or-intermediate-sized-packages",
    title: "Tabular Display for Small or Intermediate-Sized Packages",
    shortTitle: "Tabular (Small Package)",
    group: "Tabular Display",
    renderer: "tabular",
    description:
      "A grid/table layout used for small or intermediate-sized packages that do not have room for the standard vertical format.",
    columnCount: 1,
    defaultWidth: 340,
  },
  {
    slug: "tabular-format",
    title: "Tabular Format",
    shortTitle: "Tabular Format",
    group: "Tabular Display",
    renderer: "tabular",
    description: "The general tabular Nutrition Facts layout, arranging nutrients in a table rather than a vertical strip.",
    columnCount: 1,
    defaultWidth: 380,
  },
  {
    slug: "tabular-dual-column-display",
    title: "Tabular Dual Column Display",
    shortTitle: "Tabular Dual Column",
    group: "Tabular Display",
    renderer: "tabular",
    description: "Tabular layout with two data columns, for per serving and per container (or two food forms).",
    columnCount: 2,
    columnLabels: ["Per serving", "Per container"],
    defaultWidth: 420,
  },
];

export function getLabelConfig(slug: string): LabelConfig | undefined {
  return labelConfigs.find((c) => c.slug === slug);
}

export const labelGroups = ["Vertical Display", "Linear Display", "Tabular Display"] as const;
