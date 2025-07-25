"use client";
import React from "react";
import Heading from "@/components/elements/Heading";
import TextField from "@/components/elements/TextField";

export default function ContactInfoForm() {
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
          Contact Info
        </Heading>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8  mobile:gap-4">
          <div>
            <TextField
              label="First Name"
              requiredMark
              placeholder="Enter here"
            />
          </div>
          <div>
            <TextField
              label="Last Name "
              requiredMark
              placeholder="Enter here"
            />
          </div>
          <div>
            <TextField
              label="Email"
              requiredMark
              placeholder="Enter here"
            />
          </div>
          <div>
            <TextField
              label="Phone Number"
              requiredMark
              placeholder="Enter here"
              numericOnly
            />
          </div>
        </div>
      </div>
    </div>
  );
}
