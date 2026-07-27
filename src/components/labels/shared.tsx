export const FONT = { fontFamily: "Arial, Helvetica, sans-serif" };

export function ThickRule({ height = 10 }: { height?: number }) {
  return <div style={{ background: "#000", height }} />;
}

export function MediumRule({ height = 5 }: { height?: number }) {
  return <div style={{ background: "#000", height }} />;
}

export function ThinRule() {
  return <div style={{ background: "#000", height: 1 }} />;
}

export function fmtCal(calories: string) {
  return calories || "0";
}

interface NutrientRowProps {
  name: string;
  amount?: string;
  dv?: string;
  bold?: boolean;
  indent?: 0 | 1 | 2;
  showDv?: boolean;
  suffix?: string;
  bilingualName?: string;
}

export function NutrientRow({ name, amount, dv, bold, indent = 0, showDv = true, suffix, bilingualName }: NutrientRowProps) {
  return (
    <div className="flex items-baseline justify-between border-b border-black py-[2px] text-[13px] leading-tight">
      <span style={{ paddingLeft: indent * 14, fontWeight: bold ? 700 : 400 }}>
        {bold ? <span className="font-bold">{name}</span> : name}
        {bilingualName && <span className="italic font-normal"> / {bilingualName}</span>}
        {amount && !suffix ? ` ${amount}` : ""}
        {suffix ? <span className="font-normal"> {suffix}</span> : null}
      </span>
      {showDv && <span className="font-bold">{dv}</span>}
    </div>
  );
}
