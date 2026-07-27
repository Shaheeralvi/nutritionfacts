"use client";

import { Checkbox } from "@/components/ui/Checkbox";
import { TextAreaField } from "@/components/ui/TextAreaField";
import { TextField } from "@/components/ui/TextField";
import { LabelData } from "@/lib/types";

interface CommonOptionsFormProps {
  data: LabelData;
  onChange: (next: LabelData) => void;
  minWidth: number;
  maxWidth: number;
  allowMonoPolyFat?: boolean;
}

export function CommonOptionsForm({ data, onChange, minWidth, maxWidth, allowMonoPolyFat }: CommonOptionsFormProps) {
  return (
    <div className="flex flex-col gap-6">
      <div>
        <h3 className="mb-2 text-sm font-semibold text-neutral-800">Panel Width</h3>
        <label className="flex flex-col gap-1 text-xs font-medium text-neutral-600">
          Label Width ({data.labelWidth}px)
          <input
            type="range"
            min={minWidth}
            max={maxWidth}
            value={data.labelWidth}
            onChange={(e) => onChange({ ...data, labelWidth: Number(e.target.value) })}
            className="accent-emerald-700"
          />
        </label>
        <button
          type="button"
          onClick={() => onChange({ ...data, labelWidth: Math.round((minWidth + maxWidth) / 2) })}
          className="mt-2 rounded border border-neutral-300 px-3 py-1 text-xs font-medium text-neutral-600 hover:bg-neutral-50"
        >
          Reset
        </button>
      </div>

      <div>
        <h3 className="mb-2 text-sm font-semibold text-neutral-800">Options</h3>
        <div className="flex flex-col gap-3">
          <Checkbox
            label="Transparent Background"
            checked={data.transparentBackground}
            onChange={(v) => onChange({ ...data, transparentBackground: v })}
            hint={data.transparentBackground ? "The background is transparent" : "The background color is set to white"}
          />
          {allowMonoPolyFat && (
            <Checkbox
              label="List Monounsaturated & Polyunsaturated Fat"
              checked={data.showMonoPolyFat}
              onChange={(v) => onChange({ ...data, showMonoPolyFat: v })}
            />
          )}
          <Checkbox
            label="Add Ingredient List & Manufacturer Information"
            checked={data.showIngredientList}
            onChange={(v) => onChange({ ...data, showIngredientList: v })}
          />
        </div>
      </div>

      {data.showIngredientList && (
        <div className="flex flex-col gap-4 rounded-lg border border-neutral-200 p-4">
          <h3 className="text-sm font-semibold text-neutral-800">Ingredient List</h3>
          <TextAreaField
            label="Ingredients"
            value={data.ingredients}
            onChange={(v) => onChange({ ...data, ingredients: v })}
            placeholder="Ingredients List"
          />
          <TextField
            label="Contains"
            value={data.contains}
            onChange={(v) => onChange({ ...data, contains: v })}
            placeholder="Any required allergy labeling"
          />
          <Checkbox
            label="Show Ingredient list border?"
            checked={data.showIngredientBorder}
            onChange={(v) => onChange({ ...data, showIngredientBorder: v })}
          />

          <h3 className="text-sm font-semibold text-neutral-800">Manufacturer Name &amp; Address</h3>
          <p className="text-xs text-neutral-500">
            Food labels must list the name and address of the manufacturer, packer, or distributor.
          </p>
          <TextField
            label="Name"
            value={data.manufacturerName}
            onChange={(v) => onChange({ ...data, manufacturerName: v })}
            placeholder="Name of the manufacturer, packer or distributor"
          />
          <TextField
            label="Address"
            value={data.manufacturerAddress}
            onChange={(v) => onChange({ ...data, manufacturerAddress: v })}
            placeholder="Address of the manufacturer, packer or distributor"
          />
        </div>
      )}
    </div>
  );
}
