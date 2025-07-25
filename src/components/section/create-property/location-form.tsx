"use client";
import DropDown from "@/components/elements/DropDown";
import Heading from "@/components/elements/Heading";
import TextField from "@/components/elements/TextField";
import React from "react";

export default function LocationForm() {
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
          Location
        </Heading>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8  mobile:gap-4">
          {/* Country */}
          <div>
            <DropDown
              requiredMark
              label="Country"
              options={["India", "French", "UK", "UAE"]}
              className="lg:w-full md:w-full"
            />
          </div>

          {/* State */}
          <div>
            <DropDown
              requiredMark
              label="State"
              options={["India", "French", "UK", "UAE"]}
              className="lg:w-full md:w-full"
            />
          </div>

          {/* District */}
          <div>
            <DropDown
              requiredMark
              label="District"
              options={["India", "French", "UK", "UAE"]}
              className="lg:w-full md:w-full"
            />
          </div>

          {/* Zip Code */}
          <div>
            <TextField label="Zip code" requiredMark placeholder="Enter here" />
          </div>

          {/* Street Address (Full Width) */}
          <div className="md:col-span-2">
            <TextField
              requiredMark
              label="Street address"
              placeholder="Enter here"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
