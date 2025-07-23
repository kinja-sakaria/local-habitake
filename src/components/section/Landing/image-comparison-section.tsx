/* eslint-disable @next/next/no-img-element */
"use client";
import { useState } from "react";

import Text from "@/components/elements/Text";

import { AiImageIcon, TablerAiIcon } from "@/components/assets";

// ----------------------------------------------------------------------

export default function ImageComparisonSlider() {
  const [position, setPosition] = useState(50);

  return (
    <section className="grid place-items-center container mx-auto lg:max-w-screen-xl lg:py-[120px] tablet:py-[60px] mobile:py-[30px]">
      {/* Image Comparison Section */}
      <div
        className="relative grid place-content-center overflow-hidden rounded-xl"
        style={{ "--position": `${position}%` } as React.CSSProperties}
      >
        <div className="relative w-full md:aspect-[3/1] mobile:aspect-[2/1]">
          <img
            className="absolute inset-0 h-full w-[var(--position)] object-cover object-left grayscale"
            src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
            alt="black and white"
          />
          <img
            className="h-full w-full object-cover object-left"
            src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
            alt="color photo"
          />

          {/* Labels at the bottom */}
          <div className="absolute md:bottom-4 mobile:bottom-1 left-4 z-10 rounded-3xl bg-white/20 md:px-4 md:py-1.5 mobile:px-2 mobile:py-1 md:text-2xl mobile:text-xs font-medium text-white">
            Original
          </div>
          <div className="absolute md:bottom-4 mobile:bottom-1 right-4 z-10 rounded-3xl bg-white/20 md:px-4 md:py-1.5 mobile:px-2 mobile:py-1 md:text-2xl mobile:text-xs font-medium text-black">
            AI-Enhanced
          </div>
        </div>

        <input
          type="range"
          min="0"
          max="100"
          value={position}
          onChange={(e) => setPosition(Number(e.target.value))}
          aria-label="Percentage of before photo shown"
          className="absolute inset-0 h-full w-full  cursor-pointer opacity-0"
        />

        <div
          className="pointer-events-none absolute inset-0 h-full w-0.5 bg-white"
          style={{ left: `${position}%`, transform: "translateX(-50%)" }}
        />
        <div
          className="pointer-events-none absolute top-1/2 -translate-y-1/2 -translate-x-1/2 rounded-full border-2 border-white p-2 text-black shadow-sm md:h-12 md:w-12"
          style={{ left: `${position}%` }}
        ></div>
      </div>

      {/* Below icons & text */}
      <div className="grid mobile:grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 md:gap-10 mobile:gap-3 justify-items-center lg:pt-20 tablet:pt-10 mobile:pt-5">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="flex items-center gap-3">
            <div className="w-[70px] h-[70px] lg:w-[90px] lg:h-[90px] mobile:w-11 mobile:h-11 bg-green md:rounded-3xl mobile:rounded-xl flex items-center justify-center shrink-0">
              {i % 2 === 0 ? (
                <TablerAiIcon className="w-[36px] h-[36px] lg:w-[52px] lg:h-[52px] mobile:w-6 mobile:h-6 text-white" />
              ) : (
                <AiImageIcon className="w-[36px] h-[36px] lg:w-[52px] lg:h-[52px] mobile:w-6 mobile:h-6 text-white" />
              )}
            </div>
            <Text
              size="large"
              weight="medium"
              className="text-black mobile:text-sm"
            >
              Lorem ipsum dolor sit
            </Text>
          </div>
        ))}
      </div>
    </section>
  );
}
