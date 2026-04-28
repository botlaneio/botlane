import type { InputHTMLAttributes } from "react";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  name: string;
};

export function Input({ className = "", id, label, name, ...props }: InputProps) {
  const inputId = id ?? name;

  return (
    <label className="grid gap-2 text-sm font-medium text-zinc-200" htmlFor={inputId}>
      {label}
      <input
        className={`h-10 rounded-md border border-white/15 bg-white/10 px-3 text-sm text-white outline-none transition placeholder:text-zinc-500 focus:border-white/50 focus:ring-2 focus:ring-white/10 ${className}`}
        id={inputId}
        name={name}
        {...props}
      />
    </label>
  );
}
