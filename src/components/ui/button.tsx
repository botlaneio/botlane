import type { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
};

const variants = {
  primary: "bg-white text-black hover:bg-zinc-200",
  secondary: "border border-white/20 bg-white/10 text-white hover:bg-white/15",
  ghost: "text-zinc-300 hover:bg-white/10 hover:text-white",
};

export function Button({
  children,
  className = "",
  type = "button",
  variant = "primary",
  ...props
}: ButtonProps) {
  return (
    <button
      className={`inline-flex h-10 items-center justify-center rounded-md px-4 text-sm font-medium transition disabled:cursor-not-allowed disabled:opacity-60 ${variants[variant]} ${className}`}
      type={type}
      {...props}
    >
      {children}
    </button>
  );
}
