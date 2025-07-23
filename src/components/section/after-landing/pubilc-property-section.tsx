/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useEffect, useState } from "react";

import "swiper/css";
import "swiper/css/free-mode";
import { FreeMode } from "swiper/modules";

import { paths } from "@/routes/paths";

import {
  BedIcon,
  LikeIcon,
  ShareIcon,
  SparkleIcon,
  ViewerIcon,
} from "@/components/assets";
import { properties } from "@/data/properties";
import { Swiper, SwiperSlide } from "swiper/react";

import Text from "@/components/elements/Text";
import Button from "@/components/elements/Button";
import Heading from "@/components/elements/Heading";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBath,
  faHeart,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";

import { faCommentDots } from "@fortawesome/free-regular-svg-icons";
import { PropertiesSectionProps, TitleContentProps } from "@/types/property";

type TabType = "residential" | "commercial" | "rental" | "luxury" | "all";

// ---------------------------------------------

const TitleContent = ({ router }: TitleContentProps) => {
  return (
    <div className="flex justify-between items-center mobile:flex-col mobile:gap-y-3 mobile:items-start">
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
          Public Properties
        </Heading>
        <Text
          size="lg"
          weight="normal"
          className="text-[#6E7379] md:leading-extra-tight mt-4"
        >
          Lorem ipsum dolor sit amet consectetur.
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
const RentBuyBtn = ({ userRole, router }: PropertiesSectionProps) => {
  const [activeTab, setActiveTab] = useState<TabType>("residential");

  const tabs: TabType[] =
    userRole === "buyer"
      ? ["all", "residential", "commercial", "rental", "luxury"]
      : ["residential", "commercial", "rental", "luxury"];

  return (
    <div className="flex flex-wrap items-center gap-2.5 tablet:gap-y-6">
      {tabs.map((tab) => (
        <Button
          key={tab}
          size="medium"
          rounded="full"
          onClick={() => setActiveTab(tab)}
          color={activeTab === tab ? "dark" : "gray"}
          variant="contained"
          className="hover:text-white hover:bg-green md:py-4 mobile:py-2 border-none md:min-w-32 mobile:min-w-24"
        >
          {tab.charAt(0).toUpperCase() + tab.slice(1)}
        </Button>
      ))}

      {userRole === "buyer" && (
        <Button
          color="primary"
          rounded="full"
          className="ml-auto !min-h-12 cursor-pointer text-lg leading-extra-tight min-w-28 mobile:self-end mobile:!min-h-5 mobile:py-3"
          variant="contained"
          onClick={() => router.push(paths.propertyListing)}
        >
          View all
        </Button>
      )}
    </div>
  );
};

// Top Left-Right Icon
// ---------------------------------------------
const TopLeftRighIcon = () => {
  return (
    <>
      <button className="absolute top-4 left-4 w-9 h-9 bg-white rounded-[10px] flex items-center justify-center text-[#FF0000] z-10">
        <FontAwesomeIcon icon={faHeart} className="w-5 h-5" />
      </button>
      {/* Icons (Top Right) */}

      <div className="absolute top-4 right-4 flex flex-col gap-3.5 z-10">
        <button className="w-9 h-9 bg-white/[24%] rounded-lg flex items-center justify-center text-white">
          <LikeIcon className="w-5 h-5" />
        </button>
        <button className="w-9 h-9 bg-white/[24%] rounded-lg flex items-center justify-center text-white">
          <FontAwesomeIcon icon={faCommentDots} className="w-5 h-5" />
        </button>
        <button className="w-9 h-9 bg-white/[24%] rounded-lg flex items-center justify-center text-white">
          <ShareIcon className="w-5 h-5" />
        </button>
        <button className="w-9 h-9 bg-white/[24%] rounded-lg flex items-center justify-center text-white">
          <SparkleIcon className="w-5 h-5" />
        </button>
      </div>
    </>
  );
};

// Main Component
// ---------------------------------------------
export default function PublicPropertiesSection({
  router,
  userRole,
}: PropertiesSectionProps) {
  const [isMobile, setIsMobile] = useState(false);
  const [activeIndex, setActiveIndex] = useState(1);

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
      {userRole !== "buyer" && <TitleContent router={router} />}

      <div
        className={`mobile:border mobile:border-lightGray mt-3 ${userRole === "buyer" && "mobile:border-none mobile:mt-0"}`}
      />
      <div
        className={`lg:pt-[60px] lg:pb-8 tablet:pt-[30px] tablet:pb-4 mobile:pt-5 mobile:pb-3 ${userRole === "buyer" && "lg:pt-0 tablet:pt-0 mobile:pt-0"}`}
      >
        <RentBuyBtn userRole={userRole} router={router}/>
      </div>
      <div
        className="w-full overflow-x-hidden custom-carousel"
        onMouseLeave={() => !isMobile && setActiveIndex(1)}
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
                    {userRole === "buyer" && <TopLeftRighIcon />}
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
                          {userRole === "buyer" && (
                            <div className="flex items-center gap-2.5">
                              <ViewerIcon className=" w-6 h-6" />
                              <Text
                                size="normal"
                                weight="normal"
                                className="text-white leading-extra-tight"
                              >
                                {property.views} people views
                              </Text>
                            </div>
                          )}
                        </div>
                      </div>
                      {userRole === "buyer" ? (
                        <Button
                          size="large"
                          rounded="full"
                          className="!md:px-3 !mobile:px-2 border-none min-w-24 !min-h-12 transition-all duration-500 bg-[#333A54]"
                        >
                          Sold
                        </Button>
                      ) : (
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
                      )}
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
