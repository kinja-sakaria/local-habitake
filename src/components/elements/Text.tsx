import {
  HTMLAttributes,
  InputHTMLAttributes,
  LegacyRef,
  forwardRef,
  useMemo,
} from "react";

const Text = forwardRef(
  (props: PropsType, ref: LegacyRef<HTMLParagraphElement>) => {
    const {
      onClick,
      children,
      className,
      size = "normal",
      weight = "normal",
      textAlign = "left",
    } = props;

    // Get Tailwindcss font-size text-sm
    const fontSize = useMemo(() => {
      if (size === "xs") return "text-xs";
      if (size === "small") return "text-sm";
      if (size === "normal") return "text-base";
      if (size === "lg") return "text-lg";
      if (size === "xl") return "text-xl";
      if (size === "large") return "text-2xl";
      if (size === "larger") return "text-3xl";
    }, [size]);

    // Get Tailwindcss font-weight class
    const fontWeight = useMemo(() => {
      if (weight === "light") return "font-light"; //300
      if (weight === "normal") return "font-normal"; //400
      if (weight === "medium") return "font-medium"; //500
      if (weight === "bold") return "font-semibold";
      if (weight === "extrabold") return "font-bold";
      return "font-normal";
    }, [weight]);

    // Get Classname list
    const getClassName = useMemo(() => {
      let classList = fontSize + " " + fontWeight;

      // Add text-align class based on the textAlign prop
      if (textAlign) {
        classList += " ";
        if (textAlign === "left") {
          classList += "text-left";
        } else if (textAlign === "center") {
          classList += "text-center";
        } else if (textAlign === "right") {
          classList += "text-right";
        } else if (textAlign === "justify") {
          classList += "text-justify";
        }
      }

      if (className) classList = classList + " " + className;
      return classList;
    }, [fontSize, fontWeight, textAlign, className]);

    return (
      <p ref={ref} className={getClassName} onClick={onClick}>
        {children}
      </p>
    );
  },
);
// Adding display name to the component
Text.displayName = "Text";
export default Text;

interface PropsType extends HTMLAttributes<HTMLParagraphElement> {
  /**
   * Font Size
   * @default 'normal'
   */
  size?: "xs" | "small" | "normal" | "xl" | "lg" | "large" | "larger";
  /**
   * Font Weight
   * @default 'normal'
   */
  weight?: "light" | "normal" | "medium" | "bold" | "extrabold";
  /**
   * Text Alignment
   * @default 'left'
   */
  textAlign?: "left" | "center" | "right" | "justify";
  onClick?: InputHTMLAttributes<HTMLInputElement>["onClick"];
}
