import { Fragment } from "react";
import { LabelData, NutrientSet } from "@/lib/types";
import { FONT } from "@/components/labels/shared";

interface Line {
  name: string;
  key: keyof NutrientSet;
  showDv?: boolean;
}

const LINES: Line[] = [
  { name: "Total Fat", key: "totalFat" },
  { name: "Sat. Fat", key: "saturatedFat" },
  { name: "Trans Fat", key: "transFat", showDv: false },
  { name: "Cholesterol", key: "cholesterol" },
  { name: "Sodium", key: "sodium" },
  { name: "Total Carb.", key: "totalCarb" },
  { name: "Fiber", key: "dietaryFiber" },
  { name: "Total Sugars", key: "totalSugars", showDv: false },
  { name: "Added Sugars", key: "addedSugars" },
  { name: "Protein", key: "protein", showDv: false },
];

const MICRO_LINES: { name: string; key: "vitaminD" | "calcium" | "iron" | "potassium" }[] = [
  { name: "Vitamin D", key: "vitaminD" },
  { name: "Calcium", key: "calcium" },
  { name: "Iron", key: "iron" },
  { name: "Potassium", key: "potassium" },
];

function cell(n: NutrientSet, key: keyof NutrientSet): { amount: string; dv?: string } {
  const v = n[key];
  if (typeof v === "string" || Array.isArray(v)) return { amount: "" };
  return v as { amount: string; dv?: string };
}

const cellCls = "border border-black px-1 py-[1px]";

export function TabularLabel({ data }: { data: LabelData }) {
  const cols = data.columns;
  const first = cols[0];
  const multi = cols.length > 1;

  return (
    <div
      style={{
        ...FONT,
        width: data.labelWidth,
        background: data.transparentBackground ? "transparent" : "#fff",
        color: "#000",
      }}
      className="select-none border-2 border-black p-2"
    >
      <div className="text-[20px] font-black leading-none">Nutrition Facts</div>
      <div className="flex flex-wrap items-baseline gap-x-3 pt-1 text-[11px]">
        <span>{first.servingsPerContainer} servings per container</span>
        <span className="font-bold">Serving size {first.servingSize}</span>
      </div>

      <table className="mt-2 w-full border-collapse text-[11px]">
        <thead>
          <tr>
            <th className={`${cellCls} text-left`}>Nutrient</th>
            <th className={`${cellCls} text-left`}>Amount</th>
            {multi ? (
              cols.map((c) => (
                <th key={c.id} className={`${cellCls} text-center`} colSpan={2}>
                  {c.label}
                </th>
              ))
            ) : (
              <th className={`${cellCls} text-left`}>%DV*</th>
            )}
          </tr>
          {multi && (
            <tr>
              <th className={cellCls} />
              <th className={cellCls} />
              {cols.map((c) => (
                <Fragment key={c.id}>
                  <th className={`${cellCls} text-center font-normal`}>Amt</th>
                  <th className={`${cellCls} text-center font-normal`}>%DV</th>
                </Fragment>
              ))}
            </tr>
          )}
        </thead>
        <tbody>
          <tr>
            <td className={`${cellCls} font-bold`}>Calories</td>
            <td className={cellCls} colSpan={multi ? cols.length * 2 + 1 : 1}>
              {cols.map((c) => c.nutrients.calories).join(" / ")}
            </td>
          </tr>
          {LINES.map((line) => (
            <tr key={line.key}>
              <td className={cellCls}>{line.name}</td>
              <td className={cellCls}>{cell(first.nutrients, line.key).amount}</td>
              {multi ? (
                cols.map((c) => (
                  <Fragment key={c.id}>
                    <td className={`${cellCls} text-center`}>{cell(c.nutrients, line.key).amount}</td>
                    <td className={`${cellCls} text-center`}>
                      {line.showDv === false ? "" : cell(c.nutrients, line.key).dv}
                    </td>
                  </Fragment>
                ))
              ) : (
                <td className={cellCls}>{line.showDv === false ? "" : cell(first.nutrients, line.key).dv}</td>
              )}
            </tr>
          ))}
        </tbody>
      </table>

      <table className="mt-2 w-full border-collapse text-[11px]">
        <tbody>
          <tr>
            {MICRO_LINES.map((m) => (
              <td key={m.key} className={`${cellCls} text-center`}>
                <div className="font-bold">{m.name}</div>
                <div>{cell(first.nutrients, m.key).amount}</div>
                <div className="font-bold">{cell(first.nutrients, m.key).dv}</div>
              </td>
            ))}
          </tr>
        </tbody>
      </table>

      <p className="pt-2 text-[9px] leading-tight">
        * The % Daily Value (DV) tells you how much a nutrient in a serving of food contributes to a daily diet.
        2,000 calories a day is used for general nutrition advice.
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
