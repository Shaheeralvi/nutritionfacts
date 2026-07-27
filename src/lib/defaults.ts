import { LabelColumn, LabelData, NutrientSet } from "./types";

let uid = 0;
function nextId() {
  uid += 1;
  return `col-${uid}-${Date.now()}`;
}

export function defaultNutrientSet(): NutrientSet {
  return {
    calories: "230",
    totalFat: { amount: "8g", dv: "10%" },
    saturatedFat: { amount: "1g", dv: "5%" },
    transFat: { amount: "0g" },
    polyunsaturatedFat: { amount: "" },
    monounsaturatedFat: { amount: "" },
    cholesterol: { amount: "0mg", dv: "0%" },
    sodium: { amount: "160mg", dv: "7%" },
    totalCarb: { amount: "37g", dv: "13%" },
    dietaryFiber: { amount: "4g", dv: "14%" },
    totalSugars: { amount: "12g" },
    addedSugars: { amount: "10g", dv: "20%" },
    protein: { amount: "3g" },
    vitaminD: { amount: "2mcg", dv: "10%" },
    calcium: { amount: "260mg", dv: "20%" },
    iron: { amount: "8mg", dv: "45%" },
    potassium: { amount: "240mg", dv: "6%" },
    extraNutrients: [],
  };
}

export function defaultColumn(label = "Per serving"): LabelColumn {
  return {
    id: nextId(),
    label,
    servingsPerContainer: "8",
    servingSize: "2/3 cup (55g)",
    nutrients: defaultNutrientSet(),
  };
}

export function defaultLabelData(columnCount: number, columnLabels?: string[]): LabelData {
  const columns: LabelColumn[] = [];
  for (let i = 0; i < columnCount; i++) {
    columns.push(defaultColumn(columnLabels?.[i] ?? `Column ${i + 1}`));
  }
  return {
    columns,
    ingredients:
      "BULGUR WHEAT, SAUCE (WATER, HALF AND HALF [MILK, CREAM], PARMESAN CHEESE [PASTEURIZED SKIM MILK, CULTURES, SALT, ENZYMES], CHEDDAR CHEESE.",
    contains: "WHEAT, MILK.",
    showIngredientList: false,
    showIngredientBorder: false,
    manufacturerName: "Any Cookie Company",
    manufacturerAddress: "Street address, city, state, and zip code.",
    transparentBackground: false,
    labelWidth: 260,
    showMonoPolyFat: false,
    microLayout: "stacked",
  };
}
