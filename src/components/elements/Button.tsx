
"use client";

import { ButtonHTMLAttributes, forwardRef, useMemo, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  children: ReactNode;
  variant?: "contained" | "outlined";
  rounded?: "none" | "medium" | "full";
  color?: "primary" | "dark" | "black" | "gray";
  size?: "small" | "normal" | "large" | "medium" | "none";
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  const {
    children,
    className,
    size = "none",
    rounded = "none",
    color = "primary",
    variant = "contained",
    ...otherProps
  } = props;

  const colorClass = useMemo(() => {
    if (color === "primary") {
      if (variant === "contained") return "bg-primaryBlue text-white";
    }
    if (color === "dark") {
      if (variant === "contained") return "bg-secondaryGreen text-white";
      
    }
    if (color === "black") {
      if (variant === "outlined") return "bg-white text-primaryBlack border border-primaryBlack";    
    }
    if (color === "gray") {
      if (variant === "contained") return "bg-[#DCDCDC] text-primaryBlack";    
    }
    return "";
  }, [color, variant]);

  const roundedClass = useMemo(() => {
    if (rounded === "none") return "rounded-none";
    if (rounded === "medium") return "rounded-[30px]";
    if (rounded === "full") return "rounded-[40px]";
    return "";
  }, [rounded]);

  const sizeClass = useMemo(() => {
    if (size === "small") return "min-h-[36px] text-sm px-4";
    if (size === "normal") return "min-h-[34px] text-sm px-2";
    if (size === "medium") return "min-h-[44px] text-bse px-4";
    if (size === "large") return "min-h-[56px] text-lg px-6";
    // min-h-[56px]
    return "";
  }, [size]);

  const getClassName = useMemo(() => {
    let classList = colorClass;
    if (sizeClass) classList = classList + " " + sizeClass;
    if (roundedClass) classList = classList + " " + roundedClass;
    if (className) classList = classList + " " + className;
    return classList;
  }, [className, colorClass, roundedClass, sizeClass]);

  return (
    <button
      ref={ref}
      className={`font-medium select-none border flex items-center justify-center gap-[6px] disabled:cursor-not-allowed disabled:bg-disableGray disable:text-white ${getClassName}`}
      {...otherProps}
    >
      {children}
    </button>
  );
});
Button.displayName = "Button";

export default Button;
