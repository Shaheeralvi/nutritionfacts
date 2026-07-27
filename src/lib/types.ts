export interface AmountDV {
  amount: string;
  dv: string;
}

export interface AmountOnly {
  amount: string;
}

export interface ExtraNutrient {
  id: string;
  label: string;
  amount: string;
  dv: string;
  unit: string;
}

export interface NutrientSet {
  calories: string;
  totalFat: AmountDV;
  saturatedFat: AmountDV;
  transFat: AmountOnly;
  polyunsaturatedFat: AmountOnly;
  monounsaturatedFat: AmountOnly;
  cholesterol: AmountDV;
  sodium: AmountDV;
  totalCarb: AmountDV;
  dietaryFiber: AmountDV;
  totalSugars: AmountOnly;
  addedSugars: AmountDV;
  protein: AmountOnly;
  vitaminD: AmountDV;
  calcium: AmountDV;
  iron: AmountDV;
  potassium: AmountDV;
  extraNutrients: ExtraNutrient[];
}

export interface LabelColumn {
  id: string;
  label: string;
  servingsPerContainer: string;
  servingSize: string;
  nutrients: NutrientSet;
}

export interface LabelData {
  columns: LabelColumn[];
  ingredients: string;
  contains: string;
  showIngredientList: boolean;
  showIngredientBorder: boolean;
  manufacturerName: string;
  manufacturerAddress: string;
  transparentBackground: boolean;
  labelWidth: number;
  showMonoPolyFat: boolean;
  microLayout: "stacked" | "sideBySide";
}

export type RendererKey =
  | "vertical"
  | "multiColumn"
  | "linear"
  | "tabular";

export type AgeGroup = "adult" | "infant" | "children";

export interface LabelConfig {
  slug: string;
  title: string;
  shortTitle: string;
  group: "Vertical Display" | "Linear Display" | "Tabular Display";
  renderer: RendererKey;
  description: string;
  simplified?: boolean;
  bilingual?: boolean;
  ageGroup?: AgeGroup;
  columnCount: number;
  columnLabels?: string[];
  defaultWidth: number;
}
