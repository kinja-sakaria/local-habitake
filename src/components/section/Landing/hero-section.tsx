/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useEffect, useRef, useState } from "react";

import Text from "@/components/elements/Text";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons/faSearch";

// ----------------------------------------------------------------------
interface DropdownProps {
  label: string;
  options: string[];
  selected: string;
  onSelect: (value: string) => void;
  isOpen: boolean;
  toggleOpen: () => void;
}
const Dropdown: React.FC<DropdownProps> = ({
  label,
  options,
  selected,
  onSelect,
  isOpen,
  toggleOpen,
}) => {
  return (
    <div className="flex-1 px-2 relative overflow-visible">
      <Text
        size="large"
        weight="normal"
        className="leading-extra-tight text-white md:mb-2 mobile:text-lg"
      >
        {label}
      </Text>
      <div
        className="w-full bg-transparent outline-none appearance-none text-white/60 md:text-lg mobile:text-sm font-normal leading-extra-tight cursor-pointer"
        onClick={toggleOpen}
      >
        {selected}
      </div>

      {isOpen && (
        <div className="absolute md:top-[80px] tablet:top- lg:right-[-9px] lg:w-64 tablet:w-40 mobile:w-32 rounded-bl-3xl rounded-br-3xl mobile:rounded-xl bg-white/25 text-white p-2 lg:space-y-2 z-20 shadow-[0px_4px_4px_0px_rgba(0,0,0,0.11)] backdrop-blur-[30px] overflow-hidden h-full min-h-48 overflow-y-scroll">
          {options.map((item) => (
            <div
              key={item}
              className="hover:bg-white/10 lg:px-4 lg:py-2 tablet:py-1 tablet:px-2 mobile:py-1 mobile:px-2 rounded-lg cursor-pointer"
              onClick={() => {
                onSelect(item);
                toggleOpen();
              }}
            >
              {item}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

// ----------------------------------------------------------------------
export default function HeroSection() {
  const [type, setType] = useState<string>("Select");
  const [purpose, setPurpose] = useState<string>("Select");
  const [open, setOpen] = useState<"purpose" | "type" | null>(null);
  const [activeTab, setActiveTab] = useState<"buy" | "rent">("buy");

  const dropdownRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setOpen(null);
      }
    }

    function handleScroll() {
      setOpen(null);
    }

    document.addEventListener("mousedown", handleClickOutside);
    window.addEventListener("scroll", handleScroll, true);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("scroll", handleScroll, true);
    };
  }, []);

  return (
    <>
      <section
        className="relative overflow-visible md:py-48 mobile:pt-28 mobile:pb-16 lg:min-h-screen"
        id="main-banner"
      >
        <div className="md:min-h-[894px] h-full mobile:h-[650px] absolute top-0 left-0 w-full z-0">
          <img
            src="assets/images/hero-section-img.png"
            alt="hero-section"
            className="w-full h-full object-cover "
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        <div className="container mx-auto lg:max-w-screen-xl">
          <div className=" relative z-10 h-100 lg:mt-16">
            <div>
              <h1 className="md:text-[80px] mobile:text-3xl font-semibold text-white leading-extra-tight flex flex-col mobile:flex-row sm:flex-row justify-start gap-2 flex-wrap">
                <span>Transform your</span>

                {/* Avatar group */}
                <span className="flex md:-space-x-4 mobile:-space-x-2 items-center">
                  <img
                    src="assets/images/avatar.jpg"
                    alt="avatar1"
                    className="rounded-full object-cover border-2 border-white w-[60px] h-[60px] mobile:w-8 mobile:h-8"
                  />
                  <img
                    src="assets/images/avatar2.jpg"
                    alt="avatar2"
                    className="rounded-full object-cover border-2 border-white w-[60px] h-[60px] mobile:w-8 mobile:h-8"
                  />
                  <img
                    src="assets/images/avatar.jpg"
                    alt="avatar3"
                    className="rounded-full object-cover border-2 border-white w-[60px] h-[60px] mobile:w-8 mobile:h-8"
                  />
                </span>
              </h1>
              <h1 className="md:text-[80px] mobile:text-3xl font-bold leading-extra-tight mt-2 text-white">
                Property with{" "}
                <i
                  style={{ fontFamily: "Playfair Display" }}
                  className="font-medium md:text-[80px] leading-extra-tight"
                >
                  AI Visualization
                </i>
              </h1>
              <p className="md:text-[26px] md:font-normal !mobile:text-sm md:leading-[44px] md:pt-6 mobile:pt-3 text-white ">
                See how your property could look with AI-powered transformations{" "}
                {/* <br /> */}
                before you buy or sell!
              </p>
              {/* Tabs */}
              <div className="mt-8 flex justify-start ">
                <button
                  onClick={() => setActiveTab("buy")}
                  className={`px-6 py-3 rounded-t-2xl  ${activeTab === "buy" ? "bg-white text-black" : "bg-transparent text-white "} hover:bg-white hover:text-black border-t border-r border-l border-white/20 text-lg`}
                >
                  Buy Property
                </button>
                <button
                  onClick={() => setActiveTab("rent")}
                  className={`px-6 py-3 rounded-t-2xl ${activeTab === "rent" ? "bg-white text-black" : "bg-transparent text-white "} hover:bg-white hover:text-black border-t border-r border-l border-white/20 text-lg`}
                >
                  Rent Property
                </button>
              </div>

              {/* Search bar */}
              <div className="max-w-[902px]  bg-white/[24%] rounded-e-xl rounded-bl-xl  backdrop-blur-md  p-4 flex flex-col gap-4 md:flex-row md:items-center mobile:rounded-e-xl mobile:rounded-bl-xl md:p-2">
                <div className="flex-1 px-2">
                  <Text
                    size="large"
                    weight="normal"
                    className="leading-extra-tight text-white md:mb-2 mobile:text-lg"
                  >
                    Location
                  </Text>
                  <input
                    type="text"
                    placeholder="Search destination"
                    className="w-full bg-transparent outline-none md:text-lg mobile:text-sm leading-extra-tight text-white placeholder:text-white/60"
                  />
                </div>
                <div
                  ref={dropdownRef}
                  className="mobile:flex mobile:flex-row md:contents"
                >
                  <div className="hidden md:block border-l border-white/[12%] h-16" />
                  <div className="flex-1 md:px-2 relative overflow-visible">
                    {/* Purpose */}
                    <Dropdown
                      label="Purpose"
                      options={[
                        "Residential",
                        "Commercial",
                        "Rental",
                        "Luxury",
                        "Lavish",
                      ]}
                      selected={purpose}
                      onSelect={setPurpose}
                      isOpen={open === "purpose"}
                      toggleOpen={() =>
                        setOpen(open === "purpose" ? null : "purpose")
                      }
                    />
                  </div>
                  <div className="hidden md:block border-l border-white/[12%] h-16" />
                  {/* Type */}
                  <Dropdown
                    label="Type"
                    options={[
                      "Residential",
                      "Commercial",
                      "Rental",
                      "Luxury",
                      "Lavish",
                    ]}
                    selected={type}
                    onSelect={setType}
                    isOpen={open === "type"}
                    toggleOpen={() => setOpen(open === "type" ? null : "type")}
                  />
                </div>
                {/* Search Button */}
                <div className=" md:self-auto md:ml-4 ">
                  <div className="flex items-center justify-center w-[85px] h-[85px] rounded-xl bg-green cursor-pointer mobile:w-full mobile:h-full mobile:py-4">
                    <FontAwesomeIcon
                      icon={faSearch}
                      className="w-10 h-10 mobile:h-5 mobile:w-5 text-white"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
