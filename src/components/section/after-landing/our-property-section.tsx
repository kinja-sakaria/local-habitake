/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useState } from "react";

import "swiper/css";
import "swiper/css/free-mode";

import { paths } from "@/routes/paths";

import Text from "@/components/elements/Text";
import Button from "@/components/elements/Button";
import Heading from "@/components/elements/Heading";

import { properties } from "@/data/properties";

import {
  BedIcon,
  LikeIcon,
  ShareIcon,
  SparkleIcon,
  ViewerIcon,
} from "@/components/assets";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBath,
  faHeart,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import {
  PropertiesSectionProps,
  PropertyCardProps,
  UseRoleProps,
} from "@/types/property";
import { faCommentDots } from "@fortawesome/free-regular-svg-icons";

// ---------------------------------------------
// Title
// ---------------------------------------------
const TitleContent = ({ router, userRole }: PropertiesSectionProps) => {
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
          {userRole === "buyer" ? " Nearby Listings" : "Our Properties "}
        </Heading>
        {userRole !== "buyer" && (
          <Text
            size="lg"
            weight="normal"
            className="text-[#6E7379] md:leading-extra-tight mt-4"
          >
            Lorem ipsum dolor sit amet consectetur.
          </Text>
        )}
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

// PropertyCard
// ---------------------------------------------
const PropertyCard: React.FC<PropertyCardProps> = ({
  property,
  isActive,
  onMouseEnter,
  onMouseLeave,
  userRole,
}) => (
  <div
    onMouseEnter={onMouseEnter}
    onMouseLeave={onMouseLeave}
    className="group relative overflow-hidden rounded-3xl cursor-pointer transition-all duration-500 hover:shadow-[14px_16px_16px_0px_rgba(12,37,65,0.16)] h-[480px]  tablet:h-80 mobile:h-60 md:mb-10 mobile:mb-5"
  >
    <img
      src={property.image}
      alt={property.title}
      className="w-full h-full object-cover transition-all duration-500"
    />
    <div
      className={`absolute inset-0 text-white transform transition-all duration-500 p-4 flex flex-col justify-end ${
        isActive ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
      }`}
      style={{
        background: `
          linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),
          linear-gradient(180deg, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0.9) 87.5%)
        `,
      }}
    >
      {userRole === "buyer" && <TopLeftRighIcon />}
      <p className="text-white font-bold md:text-[28px] mobile:text-lg md:mb-3 mobile:mb-1 md:leading-extra-tight">
        {property.price}
      </p>
      <Heading
        variant="h4"
        weight="bold"
        className="text-white md:leading-extra-tight md:mb-3.5 mobile:mb-1 mobile:text-xl"
      >
        {property.title}
      </Heading>
      <div className="flex justify-between items-center mobile:flex-col mobile:justify-start mobile:items-start mobile:gap-y-1">
          <Text
            size="lg"
            weight="normal"
            className="text-white flex items-center gap-1.5 md:leading-extra-tight mobile:text-base"
          >
            <FontAwesomeIcon
              icon={faLocationDot}
              className="text-secondaryGreen w-5 h-5 mobile:w-5 mobile:h-5"
            />
            {property.location}
          </Text>
          <div className="flex md:gap-8 mobile:gap-x-3 mobile:gap-y-2 mobile:flex-wrap items-center text-white text-xs md:mt-4">
            <div className="flex items-center gap-2.5">
              <BedIcon className="w-6 h-6 mobile:w-5 mobile:h-5" />
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
                className="text-secondaryGreen w-6 h-6 mobile:w-5 mobile:h-5"
              />
              <Text
                size="normal"
                weight="normal"
                className="text-white leading-extra-tight"
              >
                {property.bathrooms} Bathrooms
              </Text>
            </div>

            <div className="flex items-center gap-2.5">
              <ViewerIcon className=" w-6 h-6 mobile:w-5 mobile:h-5" />
              <Text
                size="normal"
                weight="normal"
                className="text-white leading-extra-tight"
              >
                {property.views} people views
              </Text>
            </div>
        </div>
        {userRole === "buyer" ? (
          <Button
            size="large"
            rounded="full"
            color="dark"
            variant="contained"
            className="!md:px-3 mobile:px-2 border-none md:min-w-24 mobile:min-w-20 !md:min-h-12 mobile:min-h-10 transition-all duration-500 mobile:text-base"
          >
            Available
          </Button>
        ) : (
          <Button
            size="large"
            rounded="full"
            color="dark"
            variant="contained"
            className="!md:px-3 mobile:px-2 border-none md:min-w-32 mobile:min-w-6 !min-h-12 !mobile:min-h-5 transition-all duration-500 mobile:text-base"
          >
            Pending Approval
          </Button>
        )}
      </div>
    </div>
  </div>
);

// Top Left-Right Icon
// ---------------------------------------------
const TopLeftRighIcon = () => {
  return (
    <>
      <button className="absolute top-4 left-4 w-9 h-9 mobile:w-5 mobile:h-5 bg-white rounded-[10px] flex items-center justify-center text-[#FF0000] z-10">
        <FontAwesomeIcon icon={faHeart} className="w-5 h-5 mobile:w-2 mobile:h-2" />
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

const PropertiesGrid: React.FC<UseRoleProps> = ({ userRole }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);
  const [rightActiveIndex, setRightActiveIndex] = useState<number | null>(null);

  const leftSideCards = properties.filter((_, index) => (index + 1) % 2 !== 0);
  const rightSideCards = properties.filter((_, index) => (index + 1) % 2 === 0);

  return (
    <div className="lg:pt-[60px] tablet:pt-[30px] mobile:pt-5">
      <div className="flex w-full justify-center items-center md:gap-10 mobile:gap-0 tablet:flex-col mobile:flex-col">
        {[leftSideCards, rightSideCards].map((side, columnIdx) => (
          <div
            key={columnIdx}
            className="hover:w-[70%] w-1/2 tablet:w-full tablet:hover:w-full mobile:w-full mobile:hover:w-full"
          >
            {side.map((property, index) => (
              <PropertyCard
                key={property.id}
                property={property}
                userRole={userRole}
                isActive={
                  columnIdx === 0
                    ? activeIndex === index
                    : rightActiveIndex === index
                }
                onMouseEnter={() =>
                  columnIdx === 0
                    ? setActiveIndex(index)
                    : setRightActiveIndex(index)
                }
                onMouseLeave={() =>
                  columnIdx === 0
                    ? setActiveIndex(null)
                    : setRightActiveIndex(null)
                }
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

// Main Component
// ---------------------------------------------
export default function OurPropertiesSection({
  router,
  userRole,
}: PropertiesSectionProps) {
  return (
    <section className="bg-[#F8F8F8]">
      <div className="container mx-auto lg:max-w-screen-xl lg:py-20 tablet:py-[60px] mobile:py-[30px]">
        <TitleContent router={router} userRole={userRole} />

        <PropertiesGrid userRole={userRole} />
      </div>
    </section>
  );
}
