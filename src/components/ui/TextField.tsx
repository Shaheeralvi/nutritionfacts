"use client";

interface TextFieldProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  className?: string;
}

export function TextField({ label, value, onChange, placeholder = "Amount", className = "" }: TextFieldProps) {
  return (
    <label className={`flex flex-col gap-1 text-xs font-medium text-neutral-600 ${className}`}>
      {label}
      <input
        type="text"
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        className="rounded border border-neutral-300 px-2 py-1.5 text-sm text-neutral-900 focus:border-neutral-900 focus:outline-none"
      />
    </label>
  );
}
