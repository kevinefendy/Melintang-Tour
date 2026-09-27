import { cn } from "@/lib/utils";
import { Star } from "lucide-react";
import type { ButtonHTMLAttributes, ReactNode } from "react";

type Variant = "primary" | "secondary" | "outline" | "ghost" | "light";
type Size = "sm" | "md" | "lg";

const variants: Record<Variant, string> = {
  primary: "bg-ocean text-white hover:bg-ocean-dark",
  secondary: "bg-navy text-white hover:bg-navy-light",
  outline: "border border-slate-300 bg-white text-navy hover:border-ocean hover:text-ocean",
  ghost: "text-navy hover:bg-slate-100",
  light: "bg-white text-navy hover:bg-slate-100",
};

const sizes: Record<Size, string> = {
  sm: "h-8 px-3.5 text-[13px]",
  md: "h-10 px-5 text-sm",
  lg: "px-6 py-2.5 text-[15px]",
};

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
}

export function Button({ variant = "primary", size = "md", className, ...props }: ButtonProps) {
  return (
    <button
      className={cn(
        "inline-flex cursor-pointer items-center justify-center gap-2 rounded-lg font-heading font-bold transition-all active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-50",
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    />
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
    <div className={cn("mb-7 flex flex-col gap-3", align === "center" ? "items-center text-center" : "items-start", action && "md:flex-row md:items-end md:justify-between")}>
      <div className={cn("max-w-2xl", align === "center" && "mx-auto")}>
        <p className="text-xs font-extrabold uppercase tracking-[0.25em] text-ocean">{eyebrow}</p>
        <h2 className="mt-2 font-heading text-2xl font-extrabold tracking-tight text-navy md:text-3xl">{title}</h2>
        {desc && <p className="mt-2 text-[15px] leading-relaxed text-slate-600">{desc}</p>}
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
