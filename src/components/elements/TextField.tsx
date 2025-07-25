/* eslint-disable react/display-name */
import React, {
  InputHTMLAttributes,
  LegacyRef,
  ReactNode,
  forwardRef,
  useRef,
  useState,
} from "react";

interface TextFieldProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "size"> {
  label?: string;
  error?: string;
  className?: string;
  disabled?: boolean;
  placeholder?: string;
  LeftIcon?: ReactNode;
  numericOnly?: boolean;
  requiredMark?: boolean;
  rightIcon?: ReactNode;
  specialCharacters?: boolean;
  inputProps?: InputHTMLAttributes<HTMLInputElement>;
  type?: InputHTMLAttributes<HTMLInputElement>["type"];
  name?: InputHTMLAttributes<HTMLInputElement>["name"];
  value?: InputHTMLAttributes<HTMLInputElement>["value"];
  onChange?: InputHTMLAttributes<HTMLInputElement>["onChange"];
  onClick?: InputHTMLAttributes<HTMLInputElement>["onClick"];
}

const TextField = forwardRef(
  (
    {
      name,
      error,
      value,
      label,
      onClick,
      LeftIcon,
      onChange,
      disabled,
      rightIcon,
      inputProps,
      placeholder,
      type = "text",
      className = "",
      // specialCharacters = false,
      requiredMark = false,
      numericOnly = false,
    }: TextFieldProps,
    ref: LegacyRef<HTMLInputElement>
  ) => {
    const innerRef = useRef<HTMLInputElement | null>(null);
    const disabledClass = disabled
      ? " cursor-not-allowed !bg-lightGray !text-primaryGray"
      : "";

    const [inputValue, setInputValue] = useState<string>("");

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      let newValue = event.target.value;
      if (numericOnly) {
        newValue = newValue.replace(/[^0-9]/g, "");
      }
      //  else if (!specialCharacters) {
      //     newValue = newValue.replace(/[^\p{L}\p{N} ]/gu, "");
      // }
      else {
        newValue = newValue.replace(
          /(\u00a9|\u00ae|[\u2000-\u3300]|\ud83c[\ud000-\udfff]|\ud83d[\ud000-\udfff]|\ud83e[\ud000-\udfff])/g,
          ""
        );
      }

      setInputValue(newValue);
      if (typeof onChange !== "undefined") {
        event.target.value = newValue;
        onChange(event);
      }
    };

    return (
      <div className={`flex flex-col gap-1 ${className}`}>
        {label && (
          <label
            className={`block text-base font-medium leading-extra-tight pb-2 ${
              error ? "text-red-600" : "text-primaryBlack"
            }`}
          >
            {label}
            {requiredMark && (
              <span className={error ? "text-red-600" : "text-primaryRed"}>
                {" "}
                *
              </span>
            )}
          </label>
        )}
        <div className="relative">
          <input
            {...inputProps}
            ref={(el) => {
              innerRef.current = el;
              if (ref) {
                if (typeof ref === "function") {
                  ref(el);
                }
                // Do not assign to ref.current if it's an object ref, as it's read-only.
              }
            }}
            type={type}
            name={name}
            autoComplete="off"
            disabled={disabled}
            placeholder={placeholder}
            onChange={handleInputChange}
            inputMode={numericOnly ? "numeric" : "text"}
            pattern={numericOnly ? "[0-9]*" : undefined}
            value={typeof value !== "undefined" ? value : inputValue}
            className={`w-full py-[14px] px-[18px] h-12 border-[2px] rounded-lg border-lightGray bg-white text-base text-primaryBlack font-medium leading-extra-tight focus:outline-none focus:ring-0  placeholder-text-darkGray placeholder:font-normal placeholder:leading-extra-tight ${LeftIcon ? "pl-12" : ""} ${className}  ${disabledClass}`}
          />
          {rightIcon && (
            <div
              className="absolute inset-y-0 right-[21px] flex items-center cursor-pointer"
              onClick={onClick}
            >
              {rightIcon}
            </div>
          )}
          {LeftIcon && (
            <div
              className="absolute inset-y-0 left-[16px] flex items-center cursor-pointer"
              onClick={onClick}
            >
              {LeftIcon}
            </div>
          )}
        </div>
        {error && <p className="text-red-600 text-left text-sm">{error}</p>}
      </div>
    );
  }
);

export default TextField;
