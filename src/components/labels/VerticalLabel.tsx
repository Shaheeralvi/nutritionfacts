import { LabelColumn, LabelConfig, LabelData } from "@/lib/types";
import { FONT, ThickRule, ThinRule } from "@/components/labels/shared";

const T = {
  servingsPerContainer: { en: "servings per container", es: "porciones por envase" },
  servingSize: { en: "Serving size", es: "Tamaño de la porción" },
  amountPerServing: { en: "Amount per serving", es: "Cantidad por porción" },
  calories: { en: "Calories", es: "Calorías" },
  dailyValue: { en: "% Daily Value*", es: "% Valor Diario*" },
  totalFat: { en: "Total Fat", es: "Grasa Total" },
  saturatedFat: { en: "Saturated Fat", es: "Grasa Saturada" },
  transFat: { en: "Trans", es: "Grasa" },
  transFat2: { en: "Fat", es: "Trans" },
  polyFat: { en: "Polyunsaturated Fat", es: "Grasa Poliinsaturada" },
  monoFat: { en: "Monounsaturated Fat", es: "Grasa Monoinsaturada" },
  cholesterol: { en: "Cholesterol", es: "Colesterol" },
  sodium: { en: "Sodium", es: "Sodio" },
  totalCarb: { en: "Total Carbohydrate", es: "Carbohidrato Total" },
  fiber: { en: "Dietary Fiber", es: "Fibra Dietética" },
  totalSugars: { en: "Total Sugars", es: "Azúcares Totales" },
  addedSugars: { en: "Includes", es: "Incluye" },
  addedSugars2: { en: "Added Sugars", es: "Azúcares Añadidos" },
  protein: { en: "Protein", es: "Proteína" },
  vitaminD: { en: "Vitamin D", es: "Vitamina D" },
  calcium: { en: "Calcium", es: "Calcio" },
  iron: { en: "Iron", es: "Hierro" },
  potassium: { en: "Potassium", es: "Potasio" },
  ingredients: { en: "Ingredients:", es: "Ingredientes:" },
  contains: { en: "Contains:", es: "Contiene:" },
  footnote: {
    en: "The % Daily Value (DV) tells you how much a nutrient in a serving of food contributes to a daily diet. 2,000 calories a day is used for general nutrition advice.",
    es: "El % de Valor Diario (VD) le dice cuánto un nutriente en una porción de alimento contribuye a una dieta diaria. 2,000 calorías al día se utilizan para consejos de nutrición general.",
  },
  infantNote: {
    en: "This label format is intended for use on foods represented for infants through 12 months of age.",
    es: "",
  },
  childrenNote: {
    en: "This label format is intended for use on foods represented for children 1 through 3 years of age.",
    es: "",
  },
};

function bi(bilingual: boolean, en: string, es: string) {
  return bilingual ? `${en} / ${es}` : en;
}

function Row({
  name,
  amount,
  dv,
  bold = true,
  indent = 0,
  showDv = true,
  small = false,
}: {
  name: string;
  amount?: string;
  dv?: string;
  bold?: boolean;
  indent?: 0 | 1 | 2;
  showDv?: boolean;
  small?: boolean;
}) {
  return (
    <div
      className={`flex items-baseline justify-between border-b border-black ${small ? "text-[11px]" : "text-[13px]"} leading-[1.15] py-[1px]`}
    >
      <span style={{ paddingLeft: indent * 12 }}>
        <span style={{ fontWeight: bold ? 700 : 400 }}>{name}</span>
        {amount ? ` ${amount}` : ""}
      </span>
      {showDv && <span className="font-bold">{dv}</span>}
    </div>
  );
}

export function VerticalLabel({ config, data }: { config: LabelConfig; data: LabelData }) {
  const col: LabelColumn = data.columns[0];
  const n = col.nutrients;
  const bilingual = Boolean(config.bilingual);
  const simplified = Boolean(config.simplified);
  const ageGroup = config.ageGroup ?? "adult";
  const showCholesterol = ageGroup !== "infant" && !simplified;
  const sideBySide = data.microLayout === "sideBySide";

  const microItems = [
    { label: bi(bilingual, T.vitaminD.en, T.vitaminD.es), amount: n.vitaminD.amount, dv: n.vitaminD.dv },
    { label: bi(bilingual, T.calcium.en, T.calcium.es), amount: n.calcium.amount, dv: n.calcium.dv },
    { label: bi(bilingual, T.iron.en, T.iron.es), amount: n.iron.amount, dv: n.iron.dv },
    { label: bi(bilingual, T.potassium.en, T.potassium.es), amount: n.potassium.amount, dv: n.potassium.dv },
    ...n.extraNutrients.map((e) => ({ label: e.label, amount: `${e.amount}${e.unit}`, dv: e.dv })),
  ];

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
      <div className="text-[28px] font-black leading-none tracking-tight">
        {bi(bilingual, "Nutrition Facts", "Datos de Nutrición")}
      </div>
      <ThinRule />
      <div className="pt-1 text-[12px]">
        {col.servingsPerContainer} {bi(bilingual, T.servingsPerContainer.en, T.servingsPerContainer.es)}
      </div>
      <div className="flex items-end justify-between border-b-[6px] border-black pb-1">
        <span className="text-[19px] font-bold">{bi(bilingual, T.servingSize.en, T.servingSize.es)}</span>
        <span className="text-[19px] font-bold">{col.servingSize}</span>
      </div>

      <div className="flex items-baseline justify-between pt-1">
        <span className="text-[13px] font-bold">{bi(bilingual, T.amountPerServing.en, T.amountPerServing.es)}</span>
      </div>
      <div className="flex items-center justify-between border-b-4 border-black">
        <span className="text-[24px] font-black">{bi(bilingual, T.calories.en, T.calories.es)}</span>
        <span className="text-[34px] font-black leading-none">{n.calories}</span>
      </div>

      <div className="flex justify-end border-b border-black py-[2px] text-[11px] font-bold">
        {bi(bilingual, T.dailyValue.en, T.dailyValue.es)}
      </div>

      <Row name={bi(bilingual, T.totalFat.en, T.totalFat.es)} amount={n.totalFat.amount} dv={n.totalFat.dv} />
      <Row name={bi(bilingual, T.saturatedFat.en, T.saturatedFat.es)} amount={n.saturatedFat.amount} dv={n.saturatedFat.dv} indent={1} bold={false} />
      <Row
        name={`${bi(bilingual, T.transFat.en, T.transFat.es)} ${bi(bilingual, T.transFat2.en, T.transFat2.es)}`}
        amount={n.transFat.amount}
        indent={1}
        bold={false}
        showDv={false}
      />
      {data.showMonoPolyFat && (
        <>
          <Row name={bi(bilingual, T.polyFat.en, T.polyFat.es)} amount={n.polyunsaturatedFat.amount} indent={1} bold={false} showDv={false} />
          <Row name={bi(bilingual, T.monoFat.en, T.monoFat.es)} amount={n.monounsaturatedFat.amount} indent={1} bold={false} showDv={false} />
        </>
      )}
      {showCholesterol && (
        <Row name={bi(bilingual, T.cholesterol.en, T.cholesterol.es)} amount={n.cholesterol.amount} dv={n.cholesterol.dv} />
      )}
      <Row name={bi(bilingual, T.sodium.en, T.sodium.es)} amount={n.sodium.amount} dv={n.sodium.dv} />
      <Row name={bi(bilingual, T.totalCarb.en, T.totalCarb.es)} amount={n.totalCarb.amount} dv={n.totalCarb.dv} />
      {!simplified && (
        <Row name={bi(bilingual, T.fiber.en, T.fiber.es)} amount={n.dietaryFiber.amount} dv={n.dietaryFiber.dv} indent={1} bold={false} />
      )}
      <Row name={bi(bilingual, T.totalSugars.en, T.totalSugars.es)} amount={n.totalSugars.amount} indent={1} bold={false} showDv={false} />
      {!simplified && (
        <Row
          name={`${bi(bilingual, T.addedSugars.en, T.addedSugars.es)} ${n.addedSugars.amount} ${bi(bilingual, T.addedSugars2.en, T.addedSugars2.es)}`}
          dv={n.addedSugars.dv}
          indent={2}
          bold={false}
        />
      )}
      <Row name={bi(bilingual, T.protein.en, T.protein.es)} amount={n.protein.amount} showDv={false} />

      <ThickRule height={8} />

      {!simplified &&
        (sideBySide ? (
          <div className="grid grid-cols-2 gap-x-3">
            {microItems.map((m, i) => (
              <Row key={i} name={m.label} amount={m.amount} dv={m.dv} bold={false} small />
            ))}
          </div>
        ) : (
          microItems.map((m, i) => <Row key={i} name={m.label} amount={m.amount} dv={m.dv} bold={false} />)
        ))}

      <ThickRule height={8} />

      <p className="pt-1 text-[9px] leading-tight">{bi(bilingual, T.footnote.en, T.footnote.es)}</p>

      {ageGroup === "infant" && <p className="pt-1 text-[9px] italic leading-tight">{T.infantNote.en}</p>}
      {ageGroup === "children" && <p className="pt-1 text-[9px] italic leading-tight">{T.childrenNote.en}</p>}

      {data.showIngredientList && (
        <div
          className="mt-2 pt-2 text-[10px] leading-snug"
          style={{ borderTop: data.showIngredientBorder ? "1px solid #000" : undefined }}
        >
          <p>
            <span className="font-bold">{bi(bilingual, T.ingredients.en, T.ingredients.es)}</span> {data.ingredients}
          </p>
          {data.contains && (
            <p className="pt-1">
              <span className="font-bold">{bi(bilingual, T.contains.en, T.contains.es)}</span> {data.contains}
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
