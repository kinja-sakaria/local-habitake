import { createPortal } from "react-dom";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  ForwardedRef,
  forwardRef,
  HTMLAttributes,
  SelectHTMLAttributes,
  useEffect,
  useRef,
  useState,
} from "react";

const DropdownInput = forwardRef<HTMLSelectElement, DropdownPropsType>(
  (props, ref: ForwardedRef<HTMLSelectElement>) => {
    const {
      name,
      value,
      onChange,
      className,
      error = false,
      placeholder,
      rightIcon,
      options = [],
      selectProps,
      labelProps,
      customStyle,
      disabled,
      label,
      required = false,
    } = props;

    const disabledClass = disabled ? "opacity-50 cursor-not-allowed" : "";

    const [focus, setFocus] = useState(false);
    const [dropdownPosition, setDropdownPosition] = useState<{
      top: number;
      left: number;
      width: number;
    }>({
      top: 0,
      left: 0,
      width: 0,
    });

    const innerRef = useRef<HTMLSelectElement | null>(null);
    const dropdownRef = useRef<HTMLDivElement | null>(null);

    const [selectValue, setSelectValue] =
      useState<DropdownPropsType["value"]>("");

    useEffect(() => {
      setSelectValue(value);
    }, [value]);

    const handleSelectChange = (
      event: React.ChangeEvent<HTMLSelectElement>
    ) => {
      setSelectValue(event.target.value);
      if (typeof onChange !== "undefined") {
        onChange(event);
      }
    };

    const handleOptionClick = (optionValue: string | number) => {
      setSelectValue(optionValue);
      if (innerRef.current) {
        innerRef.current.value = String(optionValue);
        const event = new Event("change", { bubbles: true });
        innerRef.current.dispatchEvent(event);
      }
      setFocus(false);
    };

    const handleToggleDropdown = () => {
      if (!disabled) {
        const rect = dropdownRef.current?.getBoundingClientRect();
        if (rect) {
          setDropdownPosition({
            top: rect.top + rect.height + window.scrollY,
            left: rect.left + window.scrollX,
            width: rect.width,
          });
        }
        setFocus((prev) => !prev);
      }
    };

    useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
        const dropdownEl = dropdownRef.current;
        const portalDropdown = document.getElementById("dropdown-portal-list");
        if (
          dropdownEl &&
          !dropdownEl.contains(event.target as Node) &&
          portalDropdown &&
          !portalDropdown.contains(event.target as Node)
        ) {
          setFocus(false);
        }
      };

      const handleScroll = () => {
        setFocus(false);
      };

      if (focus) {
        document.addEventListener("mousedown", handleClickOutside);
        window.addEventListener("scroll", handleScroll, true); // true = capture phase, catches scroll on parents too
      } else {
        document.removeEventListener("mousedown", handleClickOutside);
        window.removeEventListener("scroll", handleScroll, true);
      }

      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
        window.removeEventListener("scroll", handleScroll, true);
      };
    }, [focus]);

    return (
      <>
        <div ref={dropdownRef} className="relative z-10 w-full select-none">
          {label && (
            <label
              className="block text-sm font-normal text-dark-gray mb-[5px]"
              htmlFor={name}
              {...labelProps}
            >
              {label} {required && <span className="text-red-600">*</span>}
            </label>
          )}
          <div
            className={`relative flex flex-col w-full border border-lightGray rounded-[20px] bg-white dropdown-select py-2.5 px-4 ${disabledClass} ${customStyle}`}
          >
            <select
              {...selectProps}
              ref={(el) => {
                innerRef.current = el;
                if (ref) {
                  if (typeof ref === "function") ref(el);
                  else ref.current = el;
                }
              }}
              name={name}
              value={selectValue}
              onChange={handleSelectChange}
              className="absolute w-full h-full opacity-0 pointer-events-none appearance-none"
              disabled={disabled}
            >
              {placeholder && (
                <option value="" disabled>
                  {placeholder}
                </option>
              )}
              {options.map((option, index) => (
                <option key={index} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>

            <div
              className={`flex items-center justify-between gap-2.5 cursor-pointer ${className}`}
              onClick={handleToggleDropdown}
            >
              <span className="text-primaryGray text-base font-normal">
                {options.find((option) => option.value === selectValue)
                  ?.label || placeholder}
              </span>
              {rightIcon || (
                <FontAwesomeIcon icon={faChevronDown} className="w-3 h-3" />
              )}
            </div>
          </div>
          {error && <p className="text-red-600 text-left text-sm">{error}</p>}
        </div>

        {focus &&
          createPortal(
            <ul
              id="dropdown-portal-list"
              className="z-[9999] bg-white border border-light-gray rounded-md shadow-lg max-h-[150px] overflow-y-auto"
              style={{
                position: "absolute",
                top: dropdownPosition.top,
                left: dropdownPosition.left,
                width: dropdownPosition.width,
              }}
            >
              {options.map((option, index) => (
                <li
                  key={index}
                  onClick={() => handleOptionClick(option.value)}
                  className="px-4 py-2 text-[14px] font-medium leading-[22px] cursor-pointer hover:bg-light-gray text-primaryBlack hover:bg-green hover:text-white"
                >
                  {option.label}
                </li>
              ))}
            </ul>,
            document.body
          )}
      </>
    );
  }
);

DropdownInput.displayName = "DropdownInput";

export default DropdownInput;
interface DropdownPropsType {
  name?: SelectHTMLAttributes<HTMLSelectElement>["name"];
  placeholder?: string;
  value?: SelectHTMLAttributes<HTMLSelectElement>["value"];
  onChange?: SelectHTMLAttributes<HTMLSelectElement>["onChange"];
  error?: boolean | string;
  rightIcon?: React.ReactNode;
  className?: string;
  customStyle?: string;
  selectProps?: SelectHTMLAttributes<HTMLSelectElement>;
  labelProps?: HTMLAttributes<HTMLLabelElement>;
  disabled?: boolean;
  options: {
    style?: string;
    label: string;
    value: string | number;
  }[];
  label?: string;
  required?: boolean;
}
