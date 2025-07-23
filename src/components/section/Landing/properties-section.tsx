/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import "swiper/css";
import "swiper/css/free-mode";
import { FreeMode } from "swiper/modules";
import { BedIcon } from "@/components/assets";
import { properties } from "@/data/properties";
import { Swiper, SwiperSlide } from "swiper/react";

import Text from "@/components/elements/Text";
import Button from "@/components/elements/Button";
import Heading from "@/components/elements/Heading";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBath, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { paths } from "@/routes/paths";
import { TitleContentProps } from "@/types/property";

interface PropertiesSectionProps {
  userRole: "buyer" | "seller" | "agency" | string;
}

// ---------------------------------------------

const TitleContent = ({ router }: TitleContentProps) => {
  return (
    <div className="flex justify-between items-center mobile:flex-col mobile:gap-y-3">
      <div>
        <Button
          color="dark"
          variant="contained"
          rounded="medium"
          size="normal"
          className="text-white md:py-4 mobile:py-2 border-none min-w-32"
        >
          Properties
        </Button>
        <Heading
          variant="h2"
          weight="semibold"
          className="text-primaryBlack leading-extra-tight mt-2 mobile:text-4xl"
        >
          Latest Properties
        </Heading>
        <Text
          size="lg"
          weight="normal"
          className="text-[#6E7379] md:leading-extra-tight mt-4"
        >
          Lorem ipsum dolor sit amet consectetur. Morbi purus tincidunt
          vestibulum id lectus nam at.
        </Text>
      </div>

      <Button
        color="primary"
        rounded="full"
        className="!min-h-12 cursor-pointer text-lg leading-extra-tight min-w-28 mobile:self-end mobile:!min-h-5 mobile:py-3"
        variant="contained"
        onClick={() => router.push(paths.propertyListing)}
      >
        View all
      </Button>
    </div>
  );
};

// Button Component
// ---------------------------------------------

const RentBuyBtn = ({ userRole }: PropertiesSectionProps) => {
  const [activeTab, setActiveTab] = useState<"buy" | "rent" | "sale">("rent");

  return (
    <div className="flex justify-start items-center gap-2.5">
      <Button
        size="medium"
        rounded="full"
        onClick={() => setActiveTab("rent")}
        color={activeTab === "rent" ? "dark" : "gray"}
        variant={activeTab === "rent" ? "contained" : "contained"}
        className={`hover:text-white hover:bg-green md:py-4 mobile:py-2 border-none md:min-w-32 mobile:min-w-24`}
      >
        Rent
      </Button>
      {userRole === "seller" && (
        <Button
          size="medium"
          rounded="full"
          onClick={() => setActiveTab("sale")}
          color={activeTab === "sale" ? "dark" : "gray"}
          variant={activeTab === "sale" ? "contained" : "contained"}
          className={`hover:text-white hover:bg-green md:py-4 mobile:py-2 border-none md:min-w-32 mobile:min-w-24`}
        >
          Sale
        </Button>
      )}
      <Button
        size="medium"
        rounded="full"
        onClick={() => setActiveTab("buy")}
        color={activeTab === "buy" ? "dark" : "gray"}
        variant={activeTab === "buy" ? "contained" : "contained"}
        className={`hover:text-white hover:bg-green md:py-4 mobile:py-2 border-none md:min-w-32 mobile:min-w-24`}
      >
        Buy
      </Button>
    </div>
  );
};

// Main Component
// ---------------------------------------------
export default function PropertiesSection({
  userRole,
}: PropertiesSectionProps) {
    const router = useRouter();
  const [isMobile, setIsMobile] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <section className="container mx-auto lg:max-w-screen-xl lg:py-20 tablet:py-[60px] mobile:py-[30px]">
      <TitleContent router={router}/>
      <div className="lg:pt-[60px] lg:pb-8 tablet:pt-[30px] tablet:pb-4 mobile:pt-5 mobile:pb-3">
        <RentBuyBtn userRole={userRole} />
      </div>
      <div
        className="w-full overflow-x-hidden px-4 sm:px-6 py-6 sm:py-8 custom-carousel"
        onMouseLeave={() => !isMobile && setActiveIndex(0)}
      >
        <Swiper
          slidesPerView="auto"
          spaceBetween={16}
          freeMode={true}
          modules={[FreeMode]}
          className="!overflow-visible"
        >
          {properties.map((property, index) => {
            const isActive = activeIndex === index;

            return (
              <SwiperSlide
                key={index}
                onMouseEnter={() => !isMobile && setActiveIndex(index)}
                onClick={() => isMobile && setActiveIndex(index)}
                className={`group relative h-[350px] sm:h-[400px] transition-all duration-500 ease-in-out rounded-3xl overflow-hidden flex-shrink-0
                ${isActive ? "!w-[90vw] sm:!w-[700px]" : "!w-[60vw] sm:!w-[210px]"}`}
              >
                <img
                  src={property.image}
                  alt={`Property ${index + 1}`}
                  className="w-full h-full object-cover"
                />

                {property.title && (
                  <div
                    className={`absolute inset-0  text-white transform transition-all duration-500 p-4 flex flex-col justify-end
                    ${isActive ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}
                    ${isMobile && isActive ? "translate-y-0 opacity-100" : ""}
                  `}
                    style={{
                      background: `
                        linear-gradient(0deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
                        linear-gradient(180deg, rgba(0, 0, 0, 0) 23.38%, rgba(0, 0, 0, 0.9) 100%)
                        `,
                    }}
                  >
                    <p className="text-white font-bold md:text-[28px] mobile:text-lg mb-3 mobile:mb-2 leading-extra-tight">
                      {property.price}
                    </p>
                    <Heading
                      variant="h4"
                      weight="bold"
                      className="text-white leading-extra-tight mb-3.5 mobile:text-xl"
                    >
                      {property.title}
                    </Heading>
                    <div className="flex justify-between items-center mobile:flex-col mobile:justify-start mobile:items-start mobile:gap-y-3">
                      <div>
                        <Text
                          size="lg"
                          weight="normal"
                          className="text-white flex items-center gap-1.5 leading-extra-tight"
                        >
                          <FontAwesomeIcon
                            icon={faLocationDot}
                            className="text-secondaryGreen w-5 h-5"
                          />
                          {property.location}
                        </Text>
                        <div className="flex gap-8 items-center text-white text-xs mt-4">
                          <div className="flex items-center gap-2.5">
                            <BedIcon className="w-6 h-6" />
                            <Text
                              size="normal"
                              weight="normal"
                              className="text-white leading-extra-tight"
                            >
                              {property.bedrooms} Bedrooms
                            </Text>
                          </div>
                          <div className="flex items-center gap-2.5">
                            <FontAwesomeIcon
                              icon={faBath}
                              className="text-secondaryGreen w-6 h-6"
                            />
                            <Text
                              size="normal"
                              weight="normal"
                              className="text-white leading-extra-tight"
                            >
                              {property.bathrooms} Bathrooms
                            </Text>
                          </div>
                        </div>
                      </div>
                      <Button
                        size="large"
                        rounded="full"
                        color="dark"
                        variant="contained"
                        className="!md:px-3 !mobile:px-2 border-none min-w-32 !min-h-12 transition-all duration-500"
                        onClick={() => router.push(paths.propertyDetails)}
                      >
                        View details
                      </Button>
                    </div>
                  </div>
                )}
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
}
