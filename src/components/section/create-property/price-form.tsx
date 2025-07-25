"use client";
import React from "react";

import Heading from "@/components/elements/Heading";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import DropdownInput from "@/components/elements/DropDownInput";

export default function PriceForm() {
  return (
    <div className="pt-10 mobile:pt-5">
      <div
        className=" bg-white rounded-2xl p-10 mobile:p-5"
        style={{ boxShadow: "0px 0px 20px 0px rgba(12, 37, 65, 0.1)" }}
      >
        <Heading
          variant="h6"
          weight="bold"
          className="text-primaryBlack mb-8 mobile:mb-4"
        >
          Price
        </Heading>
        <div className="flex flex-col gap-2 w-full max-w-md">
          <label className="text-base font-medium text-primaryBlack">
            Price <span className="text-primaryBlack">*</span>
          </label>

          <div className="flex gap-2">
            {/* Currency Dropdown */}
            <div className="relative ">
             
              <DropdownInput
                options={[
                  { label: "$", value: "$" },
                  { label: "€", value: "€" },
                  { label: "₹", value: "₹" },
                ]}
                className="flex-shrink-0  h-full w-full min-w-24"
                placeholder="Max Price"
                customStyle="!rounded-lg "
              />

              {/* Dropdown icon */}
              <div className="pointer-events-none absolute inset-y-0 right-2 flex items-center text-primaryGray ">
                <FontAwesomeIcon icon={faChevronDown} className="w-4 h-4" />
              </div>
            </div>

            {/* Price Input */}
            <input
              type="number"
              placeholder="Enter price"
              className="h-full w-full  min-h-12 border border-lightGray rounded-lg px-4 py-2.5 text-base font-normal focus:outline-none focus:border-primary"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
