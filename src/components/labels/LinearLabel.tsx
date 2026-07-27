import { LabelData } from "@/lib/types";
import { FONT } from "@/components/labels/shared";

function seg(label: string, amount: string, dv?: string) {
  if (!amount) return "";
  const dvPart = dv ? ` (${dv} DV)` : "";
  return `${label} ${amount}${dvPart}.`;
}

export function LinearLabel({ data }: { data: LabelData }) {
  const col = data.columns[0];
  const n = col.nutrients;

  const parts = [
    seg("Total Fat", n.totalFat.amount, n.totalFat.dv),
    seg("Sat. Fat", n.saturatedFat.amount, n.saturatedFat.dv),
    n.transFat.amount ? `Trans Fat ${n.transFat.amount}.` : "",
    seg("Cholest.", n.cholesterol.amount, n.cholesterol.dv),
    seg("Sodium", n.sodium.amount, n.sodium.dv),
    seg("Total Carb.", n.totalCarb.amount, n.totalCarb.dv),
    seg("Fiber", n.dietaryFiber.amount, n.dietaryFiber.dv),
    n.totalSugars.amount
      ? `Total Sugars ${n.totalSugars.amount}${
          n.addedSugars.amount ? ` (Incl. ${n.addedSugars.amount} Added Sugars, ${n.addedSugars.dv} DV)` : ""
        }.`
      : "",
    n.protein.amount ? `Protein ${n.protein.amount}.` : "",
    seg("Vit. D", n.vitaminD.amount, n.vitaminD.dv),
    seg("Calcium", n.calcium.amount, n.calcium.dv),
    seg("Iron", n.iron.amount, n.iron.dv),
    seg("Potass.", n.potassium.amount, n.potassium.dv),
  ].filter(Boolean);

  return (
    <div
      style={{
        ...FONT,
        width: data.labelWidth,
        background: data.transparentBackground ? "transparent" : "#fff",
        color: "#000",
      }}
      className="select-none border-2 border-black p-2 text-[10px] leading-snug"
    >
      <span className="font-black text-[13px]">Nutrition Facts. </span>
      <span>
        Serv. size {col.servingSize}. {col.servingsPerContainer} servings per container. Amount per serving:{" "}
      </span>
      <span className="font-bold">Calories {n.calories}. </span>
      {parts.join(" ")}
      <div className="pt-1 text-[9px] italic">
        * The % Daily Value (DV) tells you how much a nutrient in a serving of food contributes to a daily diet.
        2,000 calories a day is used for general nutrition advice.
      </div>

      {data.showIngredientList && (
        <div
          className="mt-2 pt-2 text-[10px] leading-snug"
          style={{ borderTop: data.showIngredientBorder ? "1px solid #000" : undefined }}
        >
          <span className="font-bold">Ingredients: </span>
          {data.ingredients}
          {data.contains && (
            <>
              {" "}
              <span className="font-bold">Contains:</span> {data.contains}
            </>
          )}
          {(data.manufacturerName || data.manufacturerAddress) && (
            <div className="pt-1">
              {data.manufacturerName}
              {data.manufacturerName && data.manufacturerAddress ? ", " : ""}
              {data.manufacturerAddress}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
