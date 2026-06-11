import { ButtonHTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "ghost" | "white" | "outline-white";
  size?: "default" | "sm" | "lg";
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", ...props }, ref) => {
    return (
      <button
        className={cn(
          "inline-flex items-center justify-center font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#4A3023] disabled:pointer-events-none disabled:opacity-50 rounded-full",
          {
            "bg-[#111111] text-[#F7F3EA] hover:bg-[#4A3023]": variant === "default",
            "border border-[#9A8172] text-[#111111] hover:bg-[#111111] hover:border-[#111111] hover:text-[#F7F3EA]": variant === "outline",
            "hover:bg-[#E8DED1]/50": variant === "ghost",
            "bg-[#F7F3EA] text-[#111111] hover:bg-[#E8DED1] shadow-[0_4px_14px_0_rgba(0,0,0,0.05)]": variant === "white",
            "border border-[#9A8172] text-[#F7F3EA] hover:bg-[#F7F3EA] hover:text-[#111111] backdrop-blur-sm": variant === "outline-white",
            "h-10 px-6": size === "default",
            "h-8 px-4 text-xs uppercase tracking-wider": size === "sm",
            "h-14 px-10 text-sm tracking-[0.2em] uppercase": size === "lg",
          },
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";

export { Button };
