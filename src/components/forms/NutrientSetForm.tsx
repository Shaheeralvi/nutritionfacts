"use client";

import { TextField } from "@/components/ui/TextField";
import { AmountDV, AmountOnly, NutrientSet } from "@/lib/types";

interface NutrientSetFormProps {
  nutrients: NutrientSet;
  onChange: (next: NutrientSet) => void;
  simplified?: boolean;
  showMonoPolyFat?: boolean;
  ageGroup?: "adult" | "infant" | "children";
}

function AmountDVRow({
  label,
  value,
  onChange,
  showDV = true,
}: {
  label: string;
  value: AmountDV | AmountOnly;
  onChange: (v: { amount: string; dv?: string }) => void;
  showDV?: boolean;
}) {
  const dv = "dv" in value ? value.dv : undefined;
  return (
    <div className="grid grid-cols-2 gap-2">
      <TextField
        label={`${label} amount`}
        value={value.amount}
        onChange={(v) => onChange({ amount: v, dv })}
        placeholder="Amount"
        className={showDV ? "" : "col-span-2"}
      />
      {showDV && (
        <TextField
          label={`${label} %DV`}
          value={dv ?? ""}
          onChange={(v) => onChange({ amount: value.amount, dv: v })}
          placeholder="%DV"
        />
      )}
    </div>
  );
}

export function NutrientSetForm({
  nutrients,
  onChange,
  simplified = false,
  showMonoPolyFat = false,
  ageGroup = "adult",
}: NutrientSetFormProps) {
  function set<K extends keyof NutrientSet>(key: K, value: NutrientSet[K]) {
    onChange({ ...nutrients, [key]: value });
  }

  const showCholesterol = ageGroup !== "infant";
  const showSatTransFat = true;

  return (
    <div className="flex flex-col gap-3">
      <TextField
        label="Calories"
        value={nutrients.calories}
        onChange={(v) => set("calories", v)}
        placeholder="Calories"
      />

      <AmountDVRow
        label="Total Fat"
        value={nutrients.totalFat}
        onChange={(v) => set("totalFat", { amount: v.amount, dv: v.dv ?? "" })}
      />

      {showSatTransFat && (
        <>
          <AmountDVRow
            label="Saturated Fat"
            value={nutrients.saturatedFat}
            onChange={(v) => set("saturatedFat", { amount: v.amount, dv: v.dv ?? "" })}
          />
          <AmountDVRow
            label="Trans Fat"
            value={nutrients.transFat}
            onChange={(v) => set("transFat", { amount: v.amount })}
            showDV={false}
          />
        </>
      )}

      {showMonoPolyFat && (
        <>
          <AmountDVRow
            label="Polyunsaturated Fat"
            value={nutrients.polyunsaturatedFat}
            onChange={(v) => set("polyunsaturatedFat", { amount: v.amount })}
            showDV={false}
          />
          <AmountDVRow
            label="Monounsaturated Fat"
            value={nutrients.monounsaturatedFat}
            onChange={(v) => set("monounsaturatedFat", { amount: v.amount })}
            showDV={false}
          />
        </>
      )}

      {showCholesterol && !simplified && (
        <AmountDVRow
          label="Cholesterol"
          value={nutrients.cholesterol}
          onChange={(v) => set("cholesterol", { amount: v.amount, dv: v.dv ?? "" })}
        />
      )}

      <AmountDVRow
        label="Sodium"
        value={nutrients.sodium}
        onChange={(v) => set("sodium", { amount: v.amount, dv: v.dv ?? "" })}
      />

      <AmountDVRow
        label="Total Carb."
        value={nutrients.totalCarb}
        onChange={(v) => set("totalCarb", { amount: v.amount, dv: v.dv ?? "" })}
      />

      {!simplified && (
        <AmountDVRow
          label="Dietary Fiber"
          value={nutrients.dietaryFiber}
          onChange={(v) => set("dietaryFiber", { amount: v.amount, dv: v.dv ?? "" })}
        />
      )}

      <AmountDVRow
        label="Total Sugars"
        value={nutrients.totalSugars}
        onChange={(v) => set("totalSugars", { amount: v.amount })}
        showDV={false}
      />

      {!simplified && (
        <AmountDVRow
          label="Added Sugars"
          value={nutrients.addedSugars}
          onChange={(v) => set("addedSugars", { amount: v.amount, dv: v.dv ?? "" })}
        />
      )}

      <AmountDVRow
        label="Protein"
        value={nutrients.protein}
        onChange={(v) => set("protein", { amount: v.amount })}
        showDV={false}
      />

      {!simplified && (
        <>
          <div className="mt-2 border-t border-neutral-200 pt-2 text-xs font-semibold uppercase text-neutral-400">
            Vitamins &amp; Minerals
          </div>
          <AmountDVRow
            label="Vitamin D"
            value={nutrients.vitaminD}
            onChange={(v) => set("vitaminD", { amount: v.amount, dv: v.dv ?? "" })}
          />
          <AmountDVRow
            label="Calcium"
            value={nutrients.calcium}
            onChange={(v) => set("calcium", { amount: v.amount, dv: v.dv ?? "" })}
          />
          <AmountDVRow
            label="Iron"
            value={nutrients.iron}
            onChange={(v) => set("iron", { amount: v.amount, dv: v.dv ?? "" })}
          />
          <AmountDVRow
            label="Potassium"
            value={nutrients.potassium}
            onChange={(v) => set("potassium", { amount: v.amount, dv: v.dv ?? "" })}
          />
        </>
      )}
    </div>
  );
}
