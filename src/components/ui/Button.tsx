import { ButtonHTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "ghost";
  size?: "default" | "sm" | "lg";
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", ...props }, ref) => {
    return (
      <button
        className={cn(
          "inline-flex items-center justify-center font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
          {
            "bg-stone-900 text-white hover:bg-stone-800": variant === "default",
            "border-2 border-stone-200 bg-transparent hover:bg-stone-50": variant === "outline",
            "hover:bg-stone-100": variant === "ghost",
            "h-10 px-4 py-2 rounded-lg": size === "default",
            "h-8 px-3 text-sm rounded-md": size === "sm",
            "h-12 px-6 text-lg rounded-xl": size === "lg",
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
