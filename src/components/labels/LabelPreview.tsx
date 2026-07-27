import { forwardRef } from "react";
import { LabelConfig, LabelData } from "@/lib/types";
import { VerticalLabel } from "@/components/labels/VerticalLabel";
import { MultiColumnLabel } from "@/components/labels/MultiColumnLabel";
import { LinearLabel } from "@/components/labels/LinearLabel";
import { TabularLabel } from "@/components/labels/TabularLabel";

interface LabelPreviewProps {
  config: LabelConfig;
  data: LabelData;
}

export const LabelPreview = forwardRef<HTMLDivElement, LabelPreviewProps>(function LabelPreview(
  { config, data },
  ref,
) {
  return (
    <div ref={ref} className="inline-block">
      {config.renderer === "vertical" && <VerticalLabel config={config} data={data} />}
      {config.renderer === "multiColumn" && <MultiColumnLabel config={config} data={data} />}
      {config.renderer === "linear" && <LinearLabel data={data} />}
      {config.renderer === "tabular" && <TabularLabel data={data} />}
    </div>
  );
});
