"use client";
import React, { useState } from "react";
import Text from "@/components/elements/Text";
import Button from "@/components/elements/Button";
import Heading from "@/components/elements/Heading";

import {
  CommercialIcon,
  LuxuryIcon,
  RentalIcon,
  ResidentialIcon,
} from "@/components/assets";

export default function PropertyTypeForm() {
  const [seo, setSeo] = useState("public");
  const [category, setCategory] = useState("sell");
  const [condition, setCondition] = useState("secondary");
  const [propertyType, setPropertyType] = useState("residential");

  return (
    <div
      className=" bg-white rounded-2xl p-10 mobile:p-5"
      style={{ boxShadow: "0px 0px 20px 0px rgba(12, 37, 65, 0.1)" }}
    >
      <Heading
        variant="h6"
        weight="bold"
        className="text-primaryBlack mb-8 mobile:mb-4"
      >
        Property Type
      </Heading>

      <div className="mb-8 mobile:mb-4">
        <Text
          size="normal"
          weight="medium"
          className="text-primaryBlack mb-3 md:leading-extra-tight"
        >
          Category *
        </Text>
        <div className="flex gap-3">
          <Button
            rounded="medium"
            color={`${category === "sell" ? "dark" : "gray-border"}`}
            variant="contained"
            className={`md:min-w-[131px] mobile:min-w-6 md:min-h-10 mobile:min-h-9 py-2.5 px-5 text-base font-normal leading-extra-tight`}
            onClick={() => setCategory("sell")}
          >
            Sell property
          </Button>
          <Button
            rounded="medium"
            color={`${category === "rent" ? "dark" : "gray-border"}`}
            variant="contained"
            className={`md:min-w-[131px] mobile:min-w-6 md:min-h-10 mobile:min-h-9 py-2.5 px-5 text-base font-normal leading-extra-tight`}
            onClick={() => setCategory("rent")}
          >
            Rent property
          </Button>
        </div>
      </div>

      <div className="mb-5 mobile:mb-3">
        <Text
          size="normal"
          weight="medium"
          className="text-primaryBlack mb-3 md:leading-extra-tight"
        >
          Property type *
        </Text>
        <div className="grid grid-cols-4 mobile:grid-cols-2 gap-4">
          {["residential", "commercial", "luxury", "rental"].map((type) => {
            const isActive = propertyType === type;

            const renderIcon = () => {
              switch (type) {
                case "residential":
                  return (
                    <ResidentialIcon className="w-8 h-8 hover:text-white fill-none" />
                  );
                case "commercial":
                  return (
                    <CommercialIcon className="w-8 h-8 hover:text-white fill-none" />
                  );
                case "luxury":
                  return (
                    <LuxuryIcon className="w-8 h-8 hover:text-white fill-none" />
                  );
                case "rental":
                  return (
                    <RentalIcon className="w-8 h-8 hover:text-white fill-none" />
                  );
                default:
                  return null;
              }
            };

            return (
              <div
                key={type}
                onClick={() => setPropertyType(type)}
                className={`flex flex-col items-center justify-center border rounded-xl py-4 cursor-pointer transition ${
                  isActive
                    ? "bg-green text-white"
                    : " hover:bg-green hover:text-white text-primaryBlack"
                }`}
              >
                {renderIcon()}
                <Text size="normal" weight="medium" className="capitalize mt-3">
                  {type}
                </Text>
              </div>
            );
          })}
        </div>
      </div>

      <div className="mb-5 mobile:mb-3">
        <Text
          size="normal"
          weight="medium"
          className="text-primaryBlack mb-3 md:leading-extra-tight"
        >
          Condition of the property *
        </Text>
        <div className="space-y-4">
          <label className="flex items-center gap-2">
            <input
              type="radio"
              checked={condition === "secondary"}
              onChange={() => setCondition("secondary")}
              className="accent-green text-base font-normal md:leading-extra-tight w-4 h-4"
            />
            Secondary market
          </label>
          <label className="flex items-center gap-2">
            <input
              type="radio"
              checked={condition === "new"}
              onChange={() => setCondition("new")}
              className="accent-green text-base font-normal md:leading-extra-tight w-4 h-4"
            />
            New building
          </label>
        </div>
      </div>
      <div className="mb-5 mobile:mb-3">
        <Text
          size="normal"
          weight="medium"
          className="text-primaryBlack mb-3 md:leading-extra-tight"
        >
          SEO-Optimized *
        </Text>
        <div className="space-y-4">
          <label className="flex items-center gap-2">
            <input
              type="radio"
              checked={seo === "public"}
              onChange={() => setSeo("public")}
              className="accent-green text-base font-normal md:leading-extra-tight w-4 h-4"
            />
            Public
          </label>
          <label className="flex items-center gap-2">
            <input
              type="radio"
              checked={seo === "private"}
              onChange={() => setSeo("private")}
              className="accent-green text-base font-normal md:leading-extra-tight w-4 h-4"
            />
            Private
          </label>
        </div>
      </div>
    </div>
  );
}
