/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

// Components of the elements folder
import Text from "@/components/elements/Text";
import Button from "@/components/elements/Button";
import { paths } from "@/routes/paths";

const propertyOptions = [
  { label: "Residential", image: "/assets/images/residential-img.jpg" },
  { label: "Commercial", image: "/assets/images/commercial-img.jpg" },
  { label: "Rental", image: "/assets/images/rental-img.jpg" },
  { label: "Luxury", image: "/assets/images/luxury-img.jpg" },
];

export default function PropertyTypeView() {
  const router = useRouter();
  const [selected, setSelected] = useState<string[]>([]);

  const toggleSelection = (label: string) => {
    setSelected((prev) =>
      prev.includes(label)
        ? prev.filter((item) => item !== label)
        : [...prev, label]
    );
  };

  return (
    <>
      <div className="text-2xl font-medium text-primaryBlack mobile:leading-8">
        Select your preferable Property Type
      </div>
      <Text
        size="lg"
        weight="normal"
        className="pt-4 text-primaryLight leading-[100%] mobile:leading-6"
      >
        You can edit this later on your account setting.
      </Text>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          router.push(paths.onboardingScreen.contactInfo);
        }}
      >
        <div className="pt-8 grid grid-cols-1 sm:grid-cols-2 gap-[14px]">
          {/*  gap-y-[10px] gap-x-[14px] */}
          {propertyOptions.map((option) => (
            <div
              key={option.label}
              onClick={() => toggleSelection(option.label)}
              className="relative rounded-[15px] overflow-hidden cursor-pointer group"
            >
              <img
                src={option.image}
                alt={option.label}
                className="w-full h-24 object-cover"
              />

              {/* Gradient overlay */}
              <div
                className="absolute inset-0 top-10"
                style={{
                  background:
                    "linear-gradient(0deg, #000929 39.29%, rgba(0, 9, 41, 0) 100%)",
                }}
              />

              {/* Check icon */}
              {selected.includes(option.label) ? (
                <div
                  className="absolute top-2 left-2 w-6 h-6 flex items-center justify-center text-white text-sm rounded-full"
                  style={{
                    background:
                      "radial-gradient(116.28% 116.28% at 0% -16.28%, #1F4C6B 4.69%, #01A669 98.31%)",
                  }}
                >
                  ✓
                </div>
              ) : (
                <div className="absolute top-2 left-2 w-6 h-6 flex items-center justify-center text-[#234F68] text-sm bg-white rounded-full">
                  ✓
                </div>
              )}
              <div className="absolute bottom-2 p-3 text-white font-semibold text-base leading-extra-tight">
                {option.label}
              </div>
            </div>
          ))}
        </div>
        <div className="pt-7">
          <input
            type="text"
            placeholder="Add Budget"
            className="w-full rounded-[10px] py-[21px] px-4 placeholder-darkGray bg-primaryGrayDark focus:outline-none text-sm font-normal leading-extra-tight"
          />
        </div>
        <div className="pt-40">
          <Text size="normal" weight="medium" textAlign="center">
            <a
              href={paths.onboardingScreen.contactInfo}
              className="text-primaryBlack leading-extra-tight cursor-pointer"
            >
              Skip
            </a>
          </Text>
        </div>
        <div className="pt-7">
          <Button
            color="primary"
            rounded="full"
            variant="contained"
            size="large"
            className="w-full cursor-pointer"
          >
            Next
          </Button>
        </div>
      </form>
    </>
  );
}
