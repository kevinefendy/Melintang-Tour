import { cn } from "@/lib/utils";
import { Star } from "lucide-react";
import type { ButtonHTMLAttributes, ReactNode } from "react";

type Variant = "primary" | "secondary" | "outline" | "ghost" | "light";
type Size = "sm" | "md" | "lg";

const variants: Record<Variant, string> = {
  primary: "bg-ocean text-white hover:bg-ocean-dark shadow-lg shadow-ocean/20",
  secondary: "bg-navy text-white hover:bg-navy-light",
  outline: "border border-slate-300 bg-white text-navy hover:border-ocean hover:text-ocean",
  ghost: "text-navy hover:bg-slate-100",
  light: "bg-white text-navy hover:bg-slate-100",
};

const sizes: Record<Size, string> = {
  sm: "h-9 px-4 text-sm",
  md: "h-11 px-6 text-sm",
  lg: "h-13 px-8 py-3.5 text-base",
};

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
}

export function Button({ variant = "primary", size = "md", className, ...props }: ButtonProps) {
  return (
    <button
      className={cn(
        "inline-flex cursor-pointer items-center justify-center gap-2 rounded-full font-heading font-bold transition-all active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-50",
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    />
  );
}

export function Badge({ children, tone = "blue", className }: { children: ReactNode; tone?: "blue" | "dark" | "amber" | "green" | "white"; className?: string }) {
  const tones = {
    blue: "bg-sky/15 text-ocean-dark",
    dark: "bg-navy text-white",
    amber: "bg-amber-100 text-amber-800",
    green: "bg-emerald-100 text-emerald-800",
    white: "bg-white/90 text-navy backdrop-blur",
  };
  return (
    <span className={cn("inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-wider", tones[tone], className)}>
      {children}
    </span>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  desc,
  align = "left",
  action,
}: {
  eyebrow: string;
  title: string;
  desc?: string;
  align?: "left" | "center";
  action?: ReactNode;
}) {
  return (
    <div className={cn("mb-10 flex flex-col gap-4", align === "center" ? "items-center text-center" : "items-start", action && "md:flex-row md:items-end md:justify-between")}>
      <div className={cn("max-w-2xl", align === "center" && "mx-auto")}>
        <p className="text-xs font-extrabold uppercase tracking-[0.25em] text-ocean">{eyebrow}</p>
        <h2 className="mt-3 font-heading text-3xl font-extrabold tracking-tight text-navy md:text-4xl">{title}</h2>
        {desc && <p className="mt-3 leading-relaxed text-slate-600">{desc}</p>}
      </div>
      {action}
    </div>
  );
}

export function Rating({ value, count, className }: { value: number; count?: number; className?: string }) {
  return (
    <span className={cn("inline-flex items-center gap-1.5 text-sm font-semibold text-navy", className)}>
      <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
      {value.toFixed(1)}
      {count !== undefined && <span className="font-normal text-slate-500">({count})</span>}
    </span>
  );
}
