import { LabelConfig, LabelData, NutrientSet } from "@/lib/types";
import { FONT, ThickRule, ThinRule } from "@/components/labels/shared";

interface Line {
  name: string;
  key: keyof NutrientSet;
  indent?: 0 | 1 | 2;
  bold?: boolean;
  showDv?: boolean;
}

const LINES: Line[] = [
  { name: "Total Fat", key: "totalFat" },
  { name: "Saturated Fat", key: "saturatedFat", indent: 1, bold: false },
  { name: "Trans Fat", key: "transFat", indent: 1, bold: false, showDv: false },
  { name: "Cholesterol", key: "cholesterol" },
  { name: "Sodium", key: "sodium" },
  { name: "Total Carb.", key: "totalCarb" },
  { name: "Dietary Fiber", key: "dietaryFiber", indent: 1, bold: false },
  { name: "Total Sugars", key: "totalSugars", indent: 1, bold: false, showDv: false },
  { name: "Added Sugars", key: "addedSugars", indent: 2, bold: false },
  { name: "Protein", key: "protein", showDv: false },
];

function cell(n: NutrientSet, key: keyof NutrientSet): { amount: string; dv?: string } {
  const v = n[key];
  if (typeof v === "string" || Array.isArray(v)) return { amount: "" };
  return v as { amount: string; dv?: string };
}

export function MultiColumnLabel({ data }: { config: LabelConfig; data: LabelData }) {
  const cols = data.columns;
  const first = cols[0];

  return (
    <div
      style={{
        ...FONT,
        width: data.labelWidth,
        background: data.transparentBackground ? "transparent" : "#fff",
        border: "1px solid #000",
        color: "#000",
        padding: 8,
      }}
      className="select-none"
    >
      <div className="text-[26px] font-black leading-none tracking-tight">Nutrition Facts</div>
      <ThinRule />
      <div className="pt-1 text-[11px]">{first.servingsPerContainer} servings per container</div>
      <div className="border-b-[6px] border-black pb-1 text-[13px] font-bold">Serving size {first.servingSize}</div>

      <div className="grid" style={{ gridTemplateColumns: `1fr repeat(${cols.length}, 62px)` }}>
        <div />
        {cols.map((c) => (
          <div key={c.id} className="pl-1 text-center text-[10px] font-bold leading-tight">
            {c.label}
          </div>
        ))}
        <div className="text-[12px] font-bold">Calories</div>
        {cols.map((c) => (
          <div key={c.id} className="pl-1 text-center text-[20px] font-black leading-none">
            {c.nutrients.calories}
          </div>
        ))}
      </div>

      <ThickRule height={6} />

      <div className="grid text-right text-[10px] font-bold" style={{ gridTemplateColumns: `1fr repeat(${cols.length}, 62px)` }}>
        <div />
        {cols.map((c) => (
          <div key={c.id} className="border-b border-black pb-[2px] pl-1">
            %DV*
          </div>
        ))}
      </div>

      {LINES.map((line) => (
        <div
          key={line.key}
          className="grid items-baseline border-b border-black text-[12px] leading-tight"
          style={{ gridTemplateColumns: `1fr repeat(${cols.length}, 62px)` }}
        >
          <span style={{ paddingLeft: (line.indent ?? 0) * 10, fontWeight: line.bold === false ? 400 : 700 }}>
            {line.name} {cell(first.nutrients, line.key).amount}
          </span>
          {cols.map((c) => {
            const v = cell(c.nutrients, line.key);
            return (
              <span key={c.id} className="pl-1 text-right font-bold">
                {line.showDv === false ? "" : v.dv}
              </span>
            );
          })}
        </div>
      ))}

      <ThickRule height={8} />

      <div className="grid text-[12px] leading-tight" style={{ gridTemplateColumns: `1fr repeat(${cols.length}, 62px)` }}>
        {(["vitaminD", "calcium", "iron", "potassium"] as const).map((key) => {
          const label = { vitaminD: "Vitamin D", calcium: "Calcium", iron: "Iron", potassium: "Potassium" }[key];
          return (
            <div key={key} className="col-span-full grid items-baseline border-b border-black" style={{ gridTemplateColumns: `1fr repeat(${cols.length}, 62px)` }}>
              <span>
                {label} {cell(first.nutrients, key).amount}
              </span>
              {cols.map((c) => (
                <span key={c.id} className="pl-1 text-right font-bold">
                  {cell(c.nutrients, key).dv}
                </span>
              ))}
            </div>
          );
        })}
      </div>

      <ThickRule height={8} />

      <p className="pt-1 text-[9px] leading-tight">
        * The % Daily Value (DV) tells you how much a nutrient in a serving of food contributes to a daily diet. 2,000
        calories a day is used for general nutrition advice.
      </p>

      {data.showIngredientList && (
        <div
          className="mt-2 pt-2 text-[10px] leading-snug"
          style={{ borderTop: data.showIngredientBorder ? "1px solid #000" : undefined }}
        >
          <p>
            <span className="font-bold">Ingredients:</span> {data.ingredients}
          </p>
          {data.contains && (
            <p className="pt-1">
              <span className="font-bold">Contains:</span> {data.contains}
            </p>
          )}
          {(data.manufacturerName || data.manufacturerAddress) && (
            <p className="pt-1">
              {data.manufacturerName}
              {data.manufacturerName && data.manufacturerAddress ? ", " : ""}
              {data.manufacturerAddress}
            </p>
          )}
        </div>
      )}
    </div>
  );
}
