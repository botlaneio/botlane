import type { ReactNode } from "react";

type CardProps = {
  children: ReactNode;
  className?: string;
};

export function Card({ children, className = "" }: CardProps) {
  return (
    <section className={`rounded-lg border border-white/10 bg-white/[0.04] shadow-2xl ${className}`}>
      {children}
    </section>
  );
}
