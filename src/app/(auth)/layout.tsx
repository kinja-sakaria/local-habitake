/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";
import { usePathname, useRouter } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const pathname = usePathname();

  const imageMap: Record<string, string> = {
    "/sign-in": "assets/images/signin-screen.jpg",
    "/sign-up": "assets/images/signup-screen.jpg",
    "/forget-password": "assets/images/forgetpass-screen.jpg",
    "/reset-password": "assets/images/resetpassword-screen.jpg",
    "/contact-info": "assets/images/identity-verification-screen.jpg",
    "/property-type": "assets/images/identity-verification-screen.jpg",
    "/agency-branding": "assets/images/identity-verification-screen.jpg",
    "/add-team-member": "assets/images/identity-verification-screen.jpg",
    "/select-location": "assets/images/identity-verification-screen.jpg",
    "/identity-verification": "assets/images/identity-verification-screen.jpg",
  };

  const imageUrl = imageMap[pathname] || "assets/signup-screen.jpg";
  const showBackButtonPaths = [
    "/select-location",
    "/property-type",
    "/contact-info",
  ];

  return (
    <>
      <main className="flex w-full relative z-10 h-screen">
        {/* Background image for mobile & tablet */}
        <div className="absolute inset-0 lg:hidden">
          <img
            src={imageUrl}
            alt="Auth screen background"
            className="object-cover w-full h-full"
          />
          <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        </div>

        <div className="flex w-full relative z-10">
          {/* Left: Auth form with scroll */}
          <div className="w-full lg:w-[40%] h-screen overflow-y-auto flex flex-col  px-6 py-[100px] sm:px-10 md:px-16 lg:px-14 xl:px-24 lg:justify-evenly">
            <div className="lg:bg-none lg:shadow-none md:bg-white mobile:bg-white md:rounded-lg md:shadow-lg md:opacity-90 mobile:rounded-lg mobile:shadow-lg mobile:opacity-90 lg:opacity-100 mobile:p-10 md:p-12 lg:p-0 flex flex-col">
              <div className="h-full min-h-[400px] tablet:overflow-y-hidden mobile:overflow-y-hidden">
                {showBackButtonPaths.includes(pathname) && (
                  <div
                    className="pb-[42px] mobile:pb-7 cursor-pointer"
                    onClick={() => router.back()}
                  >
                    <FontAwesomeIcon
                      icon={faArrowLeft}
                      className="w-6 h-6 text-primaryBlack"
                    />
                  </div>
                )}
                <div className="w-40 sm:w-48 pb-[60px] mobile:pb-[30px]">
                  <img
                    src="assets/images/habitake-logo.jpg"
                    alt="habitake Logo"
                    className="w-full h-auto"
                  />
                </div>
                {children}
              </div>
            </div>
          </div>

          {/* Right: Image fixed height */}
          {/* <div className="hidden lg:flex lg:w-[60%] h-full overflow-hidden relative">
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url('${imageUrl}')` }}
            />
            <img
              src={imageUrl}
              alt="Login Image"
              className="w-full h-full object-cover"
            />
          </div> */}
          <div className="lg:w-3/5 lg:flex h-full bg-bgImage hidden ">
            <img
              src={imageUrl}
              alt="Login Image"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </main>
    </>
  );
}
