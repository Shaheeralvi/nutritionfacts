"use client";

import { NutrientSetForm } from "@/components/forms/NutrientSetForm";
import { TextField } from "@/components/ui/TextField";
import { AgeGroup, LabelColumn } from "@/lib/types";

interface ColumnFormProps {
  column: LabelColumn;
  onChange: (next: LabelColumn) => void;
  simplified?: boolean;
  showMonoPolyFat?: boolean;
  ageGroup?: AgeGroup;
  showColumnLabel?: boolean;
  showServings?: boolean;
}

export function ColumnForm({
  column,
  onChange,
  simplified,
  showMonoPolyFat,
  ageGroup,
  showColumnLabel = false,
  showServings = true,
}: ColumnFormProps) {
  return (
    <div className="flex flex-col gap-3 rounded-lg border border-neutral-200 p-4">
      {showColumnLabel && (
        <TextField
          label="Column Label"
          value={column.label}
          onChange={(v) => onChange({ ...column, label: v })}
          placeholder="e.g. Per serving"
        />
      )}
      {showServings && (
        <div className="grid grid-cols-2 gap-2">
          <TextField
            label="Servings"
            value={column.servingsPerContainer}
            onChange={(v) => onChange({ ...column, servingsPerContainer: v })}
          />
          <TextField
            label="Size"
            value={column.servingSize}
            onChange={(v) => onChange({ ...column, servingSize: v })}
          />
        </div>
      )}
      <NutrientSetForm
        nutrients={column.nutrients}
        onChange={(n) => onChange({ ...column, nutrients: n })}
        simplified={simplified}
        showMonoPolyFat={showMonoPolyFat}
        ageGroup={ageGroup}
      />
    </div>
  );
}
