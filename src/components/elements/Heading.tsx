import {
    HTMLAttributes,
    LegacyRef,
    createElement,
    forwardRef,
    useMemo,
  } from "react";
  
  const Heading = forwardRef(
    (props: PropsType, ref: LegacyRef<HTMLHeadingElement>) => {
      const {
        variant = "h1",
        weight = "bold",
        className = "",
        children,
        ...otherProps
      } = props;
  
      // Get Tailwindcss font-size class
      const fontSize = useMemo(() => {
        if (variant === "h1") return "text-[80px]";
        if (variant === "h2") return "text-[72px]";
        if (variant === "h3") return "text-[64px]";
        if (variant === "h4") return "text-[40px]";
        if (variant === "h5") return "text-[36px]";
        if (variant === "h6") return "text-[32px]";
      }, [variant]);
  
      // Get Tailwindcss font-weight class
      const fontWeight = useMemo(() => {
        if (weight === "light") return "font-light";
        if (weight === "normal") return "font-normal";
        if (weight === "medium") return "font-medium";
        if (weight === "semibold") return "font-semibold";
        if (weight === "bold") return "font-bold"; 
        return "font-normal";
      }, [weight]);
  
      // Get Classname list
      const getClassName = useMemo(() => {
        let classList = fontSize + " " + fontWeight;
        if (className) classList = classList + " " + className;
        return classList;
      }, [className, fontSize, fontWeight]);
  
      return createElement(
        variant,
        { ref, className: getClassName, ...otherProps },
        children,
      );
    },
  );
  // Adding display name to the component
  Heading.displayName = "Heading";
  
  export default Heading;
  
  interface PropsType extends HTMLAttributes<HTMLHeadingElement> {
    /**
     * Heading Tags
     * @default 'h1'
     */
    variant?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
    /**
     * Font Weight
     * @default 'bold'
     */
    weight?: "light" | "normal" | "medium" | "semibold" | "bold";
  }
  