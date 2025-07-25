/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/no-unused-vars */

"use client";
import React, { useState } from "react";

// Components of the elements folder
import Text from "@/components/elements/Text";
import Button from "@/components/elements/Button";

// Assets
import { UploadPhoto } from "@/components/assets";

import { paths } from "@/routes/paths";
import { useRouter } from "next/navigation";

export default function AgencyBrandView() {
  const router = useRouter();
  const [file, setFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const allowedTypes = ["image/png", "image/jpeg", "image/jpg", "image/webp"];

    if (e.target.files && e.target.files[0]) {
      const selectedFile = e.target.files[0];

      if (!allowedTypes.includes(selectedFile.type)) {
        alert(
          "Please upload a valid image file (PNG, JPG, JPEG, GIF, or WEBP)"
        );
        return;
      }

      setFile(selectedFile);
      setPreviewUrl(URL.createObjectURL(selectedFile));
    }
  };

  return (
    <>
      <div className="text-2xl font-medium text-primaryBlack leading-[100%]">
        Agency Branding
      </div>
      <p className="font-normal text-lg mobile:text-base leading-[100%] text-primaryLight pt-4">
        Welcome! We&lsquo;re thrilled to have you
      </p>
      <div className="pt-10">
        {/* Form for Agency Branding */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            router.push(paths.onboardingScreen.addTeamMember);
          }}
        >
          <div className="relative border-2 border-dashed border-disableGray rounded-md w-full h-[220px] flex flex-col items-center justify-center bg-[#E6E6EA] overflow-hidden">
            <input
              type="file"
              accept="image/png, image/jpeg, image/jpg, image/webp"
              className="absolute inset-0 opacity-0 cursor-pointer"
              onChange={handleFileChange}
            />
            {previewUrl ? (
              <img
                src={previewUrl}
                alt="Preview"
                className="object-contain max-h-full"
              />
            ) : (
              <div className="flex flex-col items-center">
                <UploadPhoto />
                <Text
                  size="normal"
                  weight="bold"
                  className="text-primaryGray leading-extra-tight pt-2"
                >
                  Upload Logo
                </Text>
              </div>
            )}
          </div>
          {/* {file && (
                            <p className="text-xs text-gray-600 mt-1 truncate">{file.name}</p>
                        )} */}
          <div className="pt-40">
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
          <div className="pt-7">
            <Text size="normal" weight="medium" textAlign="center">
              <a
                href={paths.onboardingScreen.signUp}
                className=" text-primaryBlack leading-extra-tight cursor-pointer "
              >
                Back
              </a>
            </Text>
          </div>
        </form>
      </div>
    </>
  );
}
