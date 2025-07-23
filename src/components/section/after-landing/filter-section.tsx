"use client";
import React, { useState } from "react";
import { LocationIcon } from "@/components/assets";

import DropdownInput from "@/components/elements/DropDownInput";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter, faXmark } from "@fortawesome/free-solid-svg-icons";

// Filter UI
// ---------------------------------------------
const FilterForm = () => {
  const roomOptions = ["1", "2", "3", "4+"];

  return (
    <>
    <div className="overflow-x-scroll scrollbar-hide">
      <div className="flex gap-6 items-center lg:max-w-screen-xl py-2 relative  mobile:flex-col mobile:items-start">
        <div className="flex-shrink-0 flex items-center bg-white rounded-[20px] px-4 py-2.5 mobile:w-full lg:min-w-[250px] border border-lightGray">
          <LocationIcon className="mr-1.5 w-5 h-5" fill="#545A70" />
          <input
            type="text"
            placeholder="Location"
            className="bg-transparent border-none outline-none text-primaryGray placeholder-primaryGray text-base font-normal w-full"
          />
        </div>

        <DropdownInput
          options={[
            { label: "40L", value: "40L" },
            { label: "50L", value: "50L" },
            { label: "60L", value: "60L" },
          ]}
          className="flex-shrink-0 min-w-[143px] "
          placeholder="Max Price"
        />
        <DropdownInput
          options={[
            { label: "10L", value: "10L" },
            { label: "20L", value: "20L" },
            { label: "30L", value: "30L" },
          ]}
          className="flex-shrink-0 min-w-[138px]"
          placeholder="Min Price"
        />
        <DropdownInput
          options={[
            { label: "Apartment", value: "Apartment" },
            { label: "Villa", value: "Villa" },
            { label: "Plot", value: "Plot" },
          ]}
          className="flex-shrink-0 min-w-[173px]"
          placeholder="Property Type"
        />

        <div className="flex-shrink-0 flex items-center gap-5 border border-lightGray rounded-[20px] bg-white text-primaryGray py-2.5 px-4 cursor-pointer mobile:w-full mobile:justify-between">
          Rooms
          <div className="flex gap-1">
            {roomOptions.map((room) => (
              <div
                key={room}
                className="bg-[#EBE9F0] text-primaryGray text-base font-normal flex items-center gap-1.5 justify-center w-[26px] h-[26px] rounded-md hover:text-white hover:bg-green"
              >
                {room}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

// Main Component
// ---------------------------------------------
export default function FilterSection() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="md:border-b border-lightGray">
      <section className="container mx-auto lg:max-w-screen-xl lg:pt-[60px] lg:pb-[31px] tablet:py-[30px] mobile:pt-[30px] mobile:pb-0">
        {/* Desktop Filters */}
        <div className="mobile:hidden md:block">
          <FilterForm />
        </div>

        {/* Mobile Filter Button */}
        <div className="md:hidden flex justify-end">
          <button
            onClick={() => setIsOpen(true)}
            className="flex items-center gap-2 px-4 py-2 rounded-md bg-primaryBlue text-white"
          >
            <FontAwesomeIcon icon={faFilter} />
            Filters
          </button>
        </div>

        {/* Mobile Drawer with Overlay */}
        {isOpen && (
          <div className="fixed inset-0 z-50 flex">
            {/* Overlay */}
            <div
              onClick={() => setIsOpen(false)}
              className="flex-1 bg-black bg-opacity-50"
            />

            {/* Drawer */}
            <div className="relative w-[90%] top-[82px] max-w-sm bg-white shadow-lg p-6 transform transition-transform duration-300 translate-x-0">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold">Filters</h2>
                <button onClick={() => setIsOpen(false)}>
                  <FontAwesomeIcon icon={faXmark} size="lg" />
                </button>
              </div>

              <FilterForm />  

              <button
                onClick={() => setIsOpen(false)}
                className="mt-6 w-full bg-primaryBlue text-white py-2 rounded-md"
              >
                Apply Filters
              </button>
            </div>
          </div>
        )}
      </section>
    </div>
  );
}
