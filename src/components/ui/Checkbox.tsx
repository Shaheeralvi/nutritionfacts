"use client";

interface CheckboxProps {
  label: string;
  checked: boolean;
  onChange: (value: boolean) => void;
  hint?: string;
}

export function Checkbox({ label, checked, onChange, hint }: CheckboxProps) {
  return (
    <label className="flex items-start gap-2 text-sm text-neutral-700">
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        className="mt-0.5 h-4 w-4 accent-emerald-700"
      />
      <span>
        {label}
        {hint ? <span className="block text-xs text-neutral-400">{hint}</span> : null}
      </span>
    </label>
  );
}
