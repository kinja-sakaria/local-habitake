/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React, { useCallback, useState } from "react";

import { ourWork } from "@/data/ourwork";

import Text from "@/components/elements/Text";
import Button from "@/components/elements/Button";
import Heading from "@/components/elements/Heading";

import useEmblaCarousel from "embla-carousel-react";

// Reusable Card Component
// ---------------------------------------------
const WorkCard = ({
  card,
  number,
  isExpanded,
  onToggle,
}: {
  card: any;
  number: number;
  isExpanded: boolean;
  onToggle: () => void;
}) => {
  return (
    <div className="group flex  justify-between gap-10 mobile:gap-5 bg-white rounded-xl p-5 lg:p-10 transition-all duration-300 tablet:shadow-[0_14px_16px_rgba(12,37,65,0.16)] lg:hover:shadow-[0_14px_16px_rgba(12,37,65,0.16)] hover:flex-col-reverse md:mb-10 mobile:mb-0">
      <div>
        <Text size="xl" weight="bold" className="text-black">
          {number}. {card.title}
        </Text>
        <Text
          size="lg"
          weight="normal"
          className={`text-black/40 transition-all duration-300 overflow-hidden ${
            isExpanded ? "" : "line-clamp-2 max-h-24"
          }`}
        >
          {card.description}
        </Text>
        <button
          onClick={onToggle}
          className="text-lg font-semibold text-green flex items-center gap-4 leading-extra-tight md:pt-4 mobile:pt-2"
        >
          {isExpanded ? "Show less" : "Learn more"}{" "}
          <span className="translate-x-1">→</span>
        </button>
      </div>

      <div className="relative w-[150px] h-[132px] mobile:w-20 mobile:h-20 aspect-[3/1] shrink-0 group-hover:w-full group-hover:h-[200px]">
        <img
          src={card.image}
          alt="thumbnail"
          className="w-full h-full object-cover rounded-[10px] border-[3px] border-white"
        />
        {card.label && (
          <span className="hidden group-hover:block absolute left-2 top-3 text-sm text-white font-semibold">
            {card.label}
          </span>
        )}
        {card.labelRight && (
          <span className="hidden group-hover:block absolute left-1/2 top-3 text-sm text-white font-semibold">
            {card.labelRight}
          </span>
        )}
      </div>
    </div>
  );
};

// Tablet and Mobile Card Component
// ---------------------------------------------
const MobileSlider = ({
  cards,
  expandedStates,
  toggleExpand,
  startNumber = 1,
}: {
  cards: any[];
  expandedStates: boolean[];
  toggleExpand: (index: number) => void;
  startNumber?: number;
}) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false });

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <div className="relative">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex lg:hidden">
          {cards.map((card, index) => (
            <div
              key={index}
              className="min-w-0 flex-[0_0_100%] px-4 mobile:px-0"
            >
              <WorkCard
                card={card}
                number={startNumber + index}
                isExpanded={expandedStates[startNumber - 1 + index]}
                onToggle={() => toggleExpand(startNumber - 1 + index)}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center lg:hidden">
        <button
          onClick={scrollPrev}
          className="text-black/50 text-2xl px-3 py-1"
        >
          ‹
        </button>
        <button
          onClick={scrollNext}
          className="text-black/50 text-2xl px-3 py-1"
        >
          ›
        </button>
      </div>
    </div>
  );
};

// Main Component
// ---------------------------------------------
export default function OurWorkSection() {
  const [expandedStates, setExpandedStates] = useState<boolean[]>(
    ourWork.map(() => false)
  );

  const toggleExpand = (index: number) => {
    setExpandedStates((prev) =>
      prev.map((val, i) => (i === index ? !val : val))
    );
  };

  const leftSideCards = ourWork.filter((_, index) => (index + 1) % 2 !== 0);
  const rightSideCards = ourWork.filter((_, index) => (index + 1) % 2 === 0);

  return (
    <section className="bg-[#F8F8F8]" id="our-work">
      <div className="container mx-auto lg:max-w-screen-xl lg:py-20 tablet:py-[60px] mobile:py-[30px]">
        {/* Header */}
        <div>
          <Button
            color="dark"
            variant="contained"
            rounded="medium"
            size="normal"
            className="text-white md:py-4 mobile:py-2 border-none min-w-32 cursor-default"
          >
            Our Works
          </Button>
          <Heading
            variant="h2"
            weight="semibold"
            className="text-primaryBlack leading-extra-tight mt-2 mobile:text-4xl"
          >
            Our Works
          </Heading>
          <Text
            size="lg"
            weight="normal"
            className="text-black/40 leading-extra-tight mt-4"
          >
            Lorem ipsum dolor sit amet consectetur. Morbi purus tincidunt
            vestibulum id lectus nam at.
          </Text>
        </div>

        {/* Cards Grid */}
        <div className="flex justify-center mobile:flex-col gap-10 mobile:gap-5 lg:pt-[60px]  w-full tablet:hidden mobile:hidden">
          {/* Left Cards */}
          <div className="w-1/2 mobile:w-full">
            {leftSideCards.map((card) => {
              const originalIndex = ourWork.findIndex((c) => c.id === card.id);
              return (
                <WorkCard
                  key={card.id}
                  card={card}
                  number={originalIndex + 1}
                  isExpanded={expandedStates[originalIndex]}
                  onToggle={() => toggleExpand(originalIndex)}
                />
              );
            })}
          </div>

          {/* Right Cards */}
          <div className="w-1/2 mobile:w-full">
            {rightSideCards.map((card) => {
              const originalIndex = ourWork.findIndex((c) => c.id === card.id);
              return (
                <WorkCard
                  key={card.id}
                  card={card}
                  number={originalIndex + 1}
                  isExpanded={expandedStates[originalIndex]}
                  onToggle={() => toggleExpand(originalIndex)}
                />
              );
            })}
          </div>
        </div>
        {/* Mobile View */}
        <div className="tablet:pt-[30px]  mobile:pt-5">
          <MobileSlider
            cards={ourWork}
            expandedStates={expandedStates}
            toggleExpand={toggleExpand}
            startNumber={1}
          />
        </div>
      </div>
    </section>
  );
}
