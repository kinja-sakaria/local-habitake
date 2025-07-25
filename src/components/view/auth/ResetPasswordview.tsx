/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useState } from "react";

// Compoments of the elements folder
import Text from "@/components/elements/Text";
import Button from "@/components/elements/Button";
import TextField from "@/components/elements/TextField";

// Assets
import { EyeIcon, EyeIconInvisible } from "@/components/assets";

import { paths } from "@/routes/paths";
import { useRouter } from "next/navigation";

export default function ResetPasswrodView() {
  const router = useRouter();
  const [showPassword, setshowPassword] = useState<boolean>(false);

  const togglePasswordVisibility = () => {
    setshowPassword(!showPassword);
  };

  return (
    <>
      <div className="text-2xl font-medium text-primaryBlack leading-[100%]">
        <Text
          size="large"
          weight="medium"
          className="text-primaryBlack leading-[100%]"
        >
          Reset Password
        </Text>
      </div>
      <div className="pt-10">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            router.push(paths.onboardingScreen.signIn);
          }}
        >
          <div>
            <TextField
              label="New Password"
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              rightIcon={
                showPassword ? (
                  <EyeIcon
                    stroke="#545A70"
                    onClick={togglePasswordVisibility}
                  />
                ) : (
                  <EyeIconInvisible
                    stroke="#545A70"
                    onClick={togglePasswordVisibility}
                  />
                )
              }
            />
          </div>

          <div className="pt-6">
            <TextField
              label="Confirm Password"
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              rightIcon={
                showPassword ? (
                  <EyeIcon
                    stroke="#545A70"
                    onClick={togglePasswordVisibility}
                  />
                ) : (
                  <EyeIconInvisible
                    stroke="#545A70"
                    onClick={togglePasswordVisibility}
                  />
                )
              }
            />
          </div>
          <div className="pt-56">
             <Button
              color="primary"
              rounded="full"
              size="large"
              className="w-full cursor-pointer"
              variant="contained"
              onClick={() => router.push(paths.onboardingScreen.signIn)}
            >
              Set Password
            </Button>
                 <div className="pt-7">
            <Text
              size="normal"
              weight="medium"
              textAlign="center"
              className="pb-7"
            >
              <a
                href={paths.onboardingScreen.forGetPassword}
                className=" text-primaryBlack leading-extra-tight cursor-pointer"
              >
                Back
              </a>
            </Text>
            </div>           
          </div>
        </form>
      </div>
    </>
  );
}
