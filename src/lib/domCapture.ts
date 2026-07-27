// Lightweight replacement for html-to-image's rasterization step.
// html-to-image's full computed-style clone (every CSS property, every
// stylesheet rule, plus font/image fetching) was observed to hang
// indefinitely in some browser environments. This copies only the CSS
// properties our label components actually use, which is fast and
// reliable, then rasterizes via an SVG <foreignObject> + <canvas>.

const STYLE_PROPS = [
  "color",
  "background-color",
  "background-image",
  "font-family",
  "font-size",
  "font-weight",
  "font-style",
  "line-height",
  "letter-spacing",
  "text-align",
  "text-decoration-line",
  "text-transform",
  "white-space",
  "display",
  "flex-direction",
  "flex-wrap",
  "justify-content",
  "align-items",
  "align-content",
  "flex-grow",
  "flex-shrink",
  "flex-basis",
  "gap",
  "grid-template-columns",
  "grid-template-rows",
  "grid-column",
  "grid-row",
  "width",
  "height",
  "min-width",
  "min-height",
  "max-width",
  "max-height",
  "box-sizing",
  "padding-top",
  "padding-right",
  "padding-bottom",
  "padding-left",
  "margin-top",
  "margin-right",
  "margin-bottom",
  "margin-left",
  "border-top-width",
  "border-right-width",
  "border-bottom-width",
  "border-left-width",
  "border-top-style",
  "border-right-style",
  "border-bottom-style",
  "border-left-style",
  "border-top-color",
  "border-right-color",
  "border-bottom-color",
  "border-left-color",
  "border-collapse",
  "border-spacing",
  "border-radius",
  "overflow",
  "position",
  "top",
  "left",
  "right",
  "bottom",
  "opacity",
  "vertical-align",
  "list-style",
  "text-indent",
] as const;

function inlineComputedStyles(source: Element, target: HTMLElement) {
  const computed = window.getComputedStyle(source);
  const declarations: string[] = [];
  for (const prop of STYLE_PROPS) {
    const value = computed.getPropertyValue(prop);
    if (value) declarations.push(`${prop}:${value}`);
  }
  target.setAttribute("style", declarations.join(";"));

  const sourceChildren = Array.from(source.children);
  const targetChildren = Array.from(target.children);
  for (let i = 0; i < sourceChildren.length; i++) {
    const sc = sourceChildren[i];
    const tc = targetChildren[i];
    if (tc instanceof HTMLElement) inlineComputedStyles(sc, tc);
  }
}

interface CaptureOptions {
  backgroundColor?: string;
  pixelRatio?: number;
}

export async function captureElementToPngDataUrl(el: HTMLElement, options: CaptureOptions = {}): Promise<string> {
  const { backgroundColor, pixelRatio = 2 } = options;
  const rect = el.getBoundingClientRect();
  const width = Math.ceil(rect.width);
  const height = Math.ceil(rect.height);

  const clone = el.cloneNode(true) as HTMLElement;
  inlineComputedStyles(el, clone);
  clone.style.margin = "0";

  const wrapperStyle = [
    `width:${width}px`,
    `height:${height}px`,
    backgroundColor ? `background:${backgroundColor}` : "",
    "display:flex",
    "align-items:flex-start",
    "justify-content:flex-start",
  ]
    .filter(Boolean)
    .join(";");

  const svgString =
    `<svg xmlns="http://www.w3.org/2000/svg" width="${width * pixelRatio}" height="${height * pixelRatio}" viewBox="0 0 ${width} ${height}">` +
    `<foreignObject width="100%" height="100%">` +
    `<div xmlns="http://www.w3.org/1999/xhtml" style="${wrapperStyle}">${clone.outerHTML}</div>` +
    `</foreignObject></svg>`;

  const url = `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svgString)}`;
  const img = new Image();

  await new Promise<void>((resolve, reject) => {
    const timeout = setTimeout(() => reject(new Error("Timed out rendering label to image.")), 15000);
    img.onload = () => {
      clearTimeout(timeout);
      resolve();
    };
    img.onerror = () => {
      clearTimeout(timeout);
      reject(new Error("Failed to render label to image."));
    };
    img.src = url;
  });

  const canvas = document.createElement("canvas");
  canvas.width = width * pixelRatio;
  canvas.height = height * pixelRatio;
  const ctx = canvas.getContext("2d");
  if (!ctx) throw new Error("Canvas is not supported in this browser.");
  ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

  return canvas.toDataURL("image/png");
}
