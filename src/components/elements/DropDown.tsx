/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import React, {
  forwardRef,
  ReactNode,
  useEffect,
  useRef,
  useState,
} from "react";

interface DropDownProps {
  error?: string;
  label?: string;
  options: string[];
  className?: string;
  defaultValue?: string;
  rightIcon?: ReactNode;
  requiredMark?: boolean;
  onChange?: (value: string) => void;
}

const DropDown = forwardRef<HTMLDivElement, DropDownProps>(
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  (
    {
      error,
      label,
      className = "",
      rightIcon,
      options,
      defaultValue,
      requiredMark = false,
      onChange,
    },
    _ref
  ) => {
    const [selectedRole, setSelectedRole] = useState(
      defaultValue || options[0] || ""
    );
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    // Close dropdown on outside click
    useEffect(() => {
      function handleClickOutside(event: MouseEvent) {
        if (
          dropdownRef.current &&
          !dropdownRef.current.contains(event.target as Node)
        ) {
          setIsOpen(false);
        }
      }

      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, []);

    const handleSelect = (value: string) => {
      setSelectedRole(value);
      setIsOpen(false);
      if (onChange) onChange(value);
    };

    return (
      <div
        className={`w-full flex flex-col gap-1 ${className}`}
        ref={dropdownRef}
      >
        {/* {label && (
          <label className="block text-base font-medium text-primaryBlack leading-extra-tight pb-2">
            {label}
          </label>
        )} */}
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
          <div
            className="py-[14px] px-[18px] h-12 flex items-center justify-between border-[2px] rounded-lg border-lightGray bg-white text-base text-primaryBlack font-medium leading-extra-tight cursor-pointer"
            onClick={() => setIsOpen((prev) => !prev)}
          >
            <span className="leading-extra-tight font-medium">
              {selectedRole}
            </span>
            {rightIcon ? (
              rightIcon
            ) : (
              <svg
                className={`w-4 h-4 transition-transform ${isOpen ? "rotate-180" : ""}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            )}
          </div>

          {isOpen && (
            <>
              <ul className="absolute z-10 pt-[10px] w-full bg-white rounded-lg lg:shadow-[0_12px_20px_4px_rgba(0,0,0,0.08)] tablet:border tablet:border-lightGray mobile:border mobile:border-lightGray text-base text-primaryBlack font-semibold leading-extra-tight">
                {options.map((option) => (
                  <li
                    key={option}
                    onClick={() => handleSelect(option)}
                    className="px-4 py-3 tablet:py-2 mobile:py-2 hover:bg-borderGray cursor-pointer mb-3"
                  >
                    {option}
                  </li>
                ))}
              </ul>
            </>
          )}
        </div>
        {error && <p className="text-red-600 text-left text-sm">{error}</p>}
      </div>
    );
  }
);

DropDown.displayName = "DropDown";

export default DropDown;
