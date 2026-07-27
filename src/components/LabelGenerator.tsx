"use client";

import { useRef, useState } from "react";
import { ColumnForm } from "@/components/forms/ColumnForm";
import { CommonOptionsForm } from "@/components/forms/CommonOptionsForm";
import { LabelPreview } from "@/components/labels/LabelPreview";
import { Checkbox } from "@/components/ui/Checkbox";
import { defaultLabelData } from "@/lib/defaults";
import { exportLabelAsPdf, exportLabelAsPng } from "@/lib/exportLabel";
import { LabelColumn, LabelConfig, LabelData } from "@/lib/types";

type DownloadKind = "png" | "pdf" | null;

export function LabelGenerator({ config }: { config: LabelConfig }) {
  const [data, setData] = useState<LabelData>(() => {
    const base = defaultLabelData(config.columnCount, config.columnLabels);
    base.labelWidth = config.defaultWidth;
    if (config.slug === "vertical-display-with-micronutrients-listed-side-by-side") {
      base.microLayout = "sideBySide";
    }
    return base;
  });
  const [downloading, setDownloading] = useState<DownloadKind>(null);
  const previewRef = useRef<HTMLDivElement>(null);

  const minWidth = Math.max(180, config.defaultWidth - 100);
  const maxWidth = config.defaultWidth + 220;

  function updateColumn(index: number, next: LabelColumn) {
    setData((prev) => {
      const columns = [...prev.columns];
      columns[index] = next;
      return { ...prev, columns };
    });
  }

  const showMicroToggle = config.renderer === "vertical" && !config.simplified && !config.bilingual;

  async function handleDownloadPng() {
    if (!previewRef.current) return;
    setDownloading("png");
    try {
      await exportLabelAsPng(previewRef.current, `${config.slug}-nutrition-facts-label`, {
        transparentBackground: data.transparentBackground,
      });
    } finally {
      setDownloading(null);
    }
  }

  async function handleDownloadPdf() {
    if (!previewRef.current) return;
    setDownloading("pdf");
    try {
      await exportLabelAsPdf(previewRef.current, `${config.slug}-nutrition-facts-label`, {
        transparentBackground: data.transparentBackground,
      });
    } finally {
      setDownloading(null);
    }
  }

  const columnLabelsEditable = config.renderer === "multiColumn" || (config.renderer === "tabular" && config.columnCount > 1);

  return (
    <div className="grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,1fr)_auto]">
      <div className="flex flex-col gap-6">
        <h2 className="text-lg font-semibold text-neutral-900">Step 2: Fill the form</h2>
        <p className="text-xs text-neutral-500">
          Desktop is recommended. Values shown are FOR REFERENCE ONLY &mdash; verify your nutrition data before
          publishing a label.
        </p>

        <h3 className="text-sm font-semibold text-neutral-800">Nutrition Facts</h3>
        <div className="flex flex-col gap-4">
          {data.columns.map((column, i) => (
            <ColumnForm
              key={column.id}
              column={column}
              onChange={(next) => updateColumn(i, next)}
              simplified={config.simplified}
              showMonoPolyFat={data.showMonoPolyFat}
              ageGroup={config.ageGroup}
              showColumnLabel={columnLabelsEditable}
            />
          ))}
        </div>

        {showMicroToggle && (
          <Checkbox
            label="List micronutrients side-by-side"
            checked={data.microLayout === "sideBySide"}
            onChange={(v) => setData((prev) => ({ ...prev, microLayout: v ? "sideBySide" : "stacked" }))}
            hint="Arranges Vitamin D, Calcium, Iron & Potassium in two columns to save vertical space."
          />
        )}

        <CommonOptionsForm
          data={data}
          onChange={setData}
          minWidth={minWidth}
          maxWidth={maxWidth}
          allowMonoPolyFat={config.simplified}
        />

        <div className="border-t border-neutral-200 pt-6">
          <h2 className="mb-2 text-lg font-semibold text-neutral-900">Step 3: Download</h2>
          <p className="mb-3 text-xs text-neutral-500">
            Download a high-resolution PNG for packaging artwork, or a print-ready PDF sized exactly to your label.
          </p>
          <div className="flex flex-wrap gap-3">
            <button
              type="button"
              onClick={handleDownloadPng}
              disabled={downloading !== null}
              className="rounded-md bg-emerald-700 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-emerald-800 disabled:opacity-60"
            >
              {downloading === "png" ? "Preparing…" : "Download PNG"}
            </button>
            <button
              type="button"
              onClick={handleDownloadPdf}
              disabled={downloading !== null}
              className="rounded-md border border-emerald-700 px-5 py-2.5 text-sm font-semibold text-emerald-700 transition hover:bg-emerald-50 disabled:opacity-60"
            >
              {downloading === "pdf" ? "Preparing…" : "Download PDF"}
            </button>
          </div>
        </div>
      </div>

      <div className="lg:sticky lg:top-6 lg:self-start">
        <div className="mb-2 text-center text-xs font-semibold uppercase tracking-wide text-neutral-400">
          Preview
        </div>
        <div className="overflow-auto rounded-lg border border-dashed border-neutral-300 bg-neutral-50 p-6">
          <LabelPreview ref={previewRef} config={config} data={data} />
        </div>
      </div>
    </div>
  );
}
