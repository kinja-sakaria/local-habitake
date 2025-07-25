"use client";

import Button from "@/components/elements/Button";
import React from "react";

export default function SubmitBtn() {
  return (
    <div className="pt-10 mobile:pt-5">
      <div className="flex justify-center items-center gap-10 mobile:gap-5 mobile:flex-col-reverse">
        <Button
          rounded="full"
          variant="contained"
          size="large"
          className="w-full cursor-pointer !bg-disableGray "
        >
          Cancel
        </Button>
        <Button
          color="primary"
          rounded="full"
          variant="contained"
          size="large"
          className="w-full cursor-pointer"
        >
          Create
        </Button>
      </div>
    </div>
  );
}
