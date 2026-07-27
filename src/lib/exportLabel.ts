import { jsPDF } from "jspdf";
import { captureElementToPngDataUrl } from "@/lib/domCapture";

const PX_TO_PT = 0.75; // 72pt / 96px

interface ExportOptions {
  transparentBackground?: boolean;
}

async function captureDataUrl(el: HTMLElement, { transparentBackground }: ExportOptions) {
  return captureElementToPngDataUrl(el, {
    pixelRatio: 3,
    backgroundColor: transparentBackground ? undefined : "#ffffff",
  });
}

export async function exportLabelAsPng(el: HTMLElement, filename: string, options: ExportOptions = {}) {
  const dataUrl = await captureDataUrl(el, options);
  const link = document.createElement("a");
  link.download = filename.endsWith(".png") ? filename : `${filename}.png`;
  link.href = dataUrl;
  link.click();
}

export async function exportLabelAsPdf(el: HTMLElement, filename: string, options: ExportOptions = {}) {
  const dataUrl = await captureDataUrl(el, options);
  const { width, height } = el.getBoundingClientRect();
  const widthPt = width * PX_TO_PT;
  const heightPt = height * PX_TO_PT;

  const pdf = new jsPDF({
    orientation: widthPt >= heightPt ? "landscape" : "portrait",
    unit: "pt",
    format: [widthPt, heightPt],
  });

  pdf.addImage(dataUrl, "PNG", 0, 0, widthPt, heightPt);
  pdf.save(filename.endsWith(".pdf") ? filename : `${filename}.pdf`);
}
