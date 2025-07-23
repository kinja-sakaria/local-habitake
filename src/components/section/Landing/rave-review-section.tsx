/* eslint-disable @next/next/no-img-element */
"use client";

import { useCallback, useEffect, useState } from "react";

import { REVIEWS } from "@/data/reviews";
import { ReviewsCardProps } from "@/types/menu";

import Text from "@/components/elements/Text";
import Button from "@/components/elements/Button";
import Heading from "@/components/elements/Heading";
import useEmblaCarousel from "embla-carousel-react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faArrowRight,
  faStar,
} from "@fortawesome/free-solid-svg-icons";


//  Title Component
// ---------------------------------------------
const TitleContent = () => {
  return (
    <div className="container mx-auto lg:max-w-screen-xl lg:pt-[120px] tablet:pt-[60px] mobile:pt-[30px] lg:pb-[60px] tablet:pb-[30px] mobile:pb-6 relative">
      <div className="flex flex-col justify-center items-center text-center ">
        <div>
          <Button
            color="dark"
            variant="contained"
            rounded="medium"
            size="normal"
            className="text-white md:py-4 mobile:py-2 border-none min-w-32"
          >
            Testimonial
          </Button>
        </div>

        <Heading
          variant="h2"
          weight="semibold"
          className="text-white leading-extra-tight mt-2 mobile:text-4xl"
        >
          Rave Reviews
        </Heading>

        <Text
          size="lg"
          weight="normal"
          textAlign="center"
          className="text-white lg:leading-extra-tight mt-4 max-w-xl"
        >
          Lorem ipsum dolor sit amet consectetur. Imperdiet euismod iaculis
          porta sed adipiscing vestibulum.
        </Text>
      </div>
    </div>
  );
};

//  Review Component
// ---------------------------------------------
function ReviewCard({
  rating,
  currentSlide,
  message,
  name,
  role,
  image,
  index,
  showMoreIndex,
  setShowMoreIndex,
}: ReviewsCardProps & {
  index: number;
  showMoreIndex: number | null;
  setShowMoreIndex: (index: number | null) => void;
}) {
  const isExpanded = showMoreIndex === index;
  const shortMessage = message.slice(0, 100);

  return (
    <div className="md:min-w-[613px] md:max-w-[613px] mobile:max-w-64 mobile:min-w-64 rounded-3xl border border-white/10 hover:border hover:border-white/[30%]  hover:bg-white/[12%] bg-white/[6%] md:p-10 mobile:p-5 flex flex-col justify-between h-full transition-colors duration-300 ">
      <div className="flex justify-between items-center text-sm text-white/80">
        <div className="flex items-center gap-3 lg:pb-12 tablet:pb-6 mobile:pb-6">
          <FontAwesomeIcon icon={faStar} className="text-[#FFD900]" />
          <span className="text-lg leading-extra-tight font-normal">
            {rating}
          </span>
        </div>
        <Text size="lg" weight="normal" className="leading-extra-tight self-baseline">
          {currentSlide}
        </Text>
      </div>
      <Text
        size="lg"
        weight="normal"
        className="leading-7 text-white mobile:text-base"
      >
        {isExpanded
          ? message
          : shortMessage + (message.length > 100 ? "..." : "")}
        {message.length > 100 && (
          <button
            onClick={() =>
              isExpanded ? setShowMoreIndex(null) : setShowMoreIndex(index)
            }
            className="text-white text-sm mt-2 underline"
          >
            {isExpanded ? "Show Less" : "Show More"}
          </button>
        )}
      </Text>
      <div className="flex items-center md:gap-6 mobile:gap-3 lg:pt-12 tablet:pt-6 mobile:pt-6">
        <div className="md:w-[72px] md:h-[72px] mobile:w-11 mobile:h-11">
          <img
            src={image}
            alt={name}
            className="rounded-full w-full h-full object-cover"
          />
        </div>
        <div className="flex flex-col md:gap-y-2 mobile:gap-y-1">
          <span className="font-semibold md:text-xl mobile:text-lg text-white leading-extra-tight">
            {name}
          </span>
          <span className="text-white md:text-base mobile:text-sm font-normal">
            {role}
          </span>
        </div>
      </div>
    </div>
  );
}

// Main Component
// ---------------------------------------------
export default function RaveReviewSection() {
  const options = { loop: false, align: "center" } as const;
  const [emblaRef, emblaApi] = useEmblaCarousel(options);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);
  const [showMoreIndex, setShowMoreIndex] = useState<number | null>(null);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("reInit", onSelect);
    emblaApi.on("select", onSelect);
  }, [emblaApi, onSelect]);

  return (
    <section className="relative bg-primaryBlack overflow-hidden">
      <TitleContent />

      {/* Slider aligned with heading but overflows */}
      <div className="relative w-full lg:pb-[120px] tablet:pb-[60px] mobile:pb-[30px] tablet:ml-3 mobile:ml-3">
        <div>
          <div className="overflow-hidden " ref={emblaRef}>
            <div className="flex md:gap-10 mobile:gap-5 items-stretch">
              {REVIEWS.map((item, index) => (
                <ReviewCard
                  key={item.id}
                  index={index}
                  rating={item.rating}
                  currentSlide={`${index + 1} / ${REVIEWS.length}`}
                  message={item.message}
                  name={item.name}
                  role={item.role}
                  image={item.image}
                  showMoreIndex={showMoreIndex}
                  setShowMoreIndex={setShowMoreIndex}
                />
              ))}
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center gap-4 z-10 lg:pt-[60px] tablet:pt-[30px] mobile:pt-5">
          <button
            onClick={() => emblaApi && emblaApi.scrollPrev()}
            disabled={!canScrollPrev}
            className={`w-10 h-10 flex items-center justify-center  ${
              canScrollPrev
                ? "border-white text-white"
                : "border-white/20 text-white/20"
            } transition`}
          >
            <FontAwesomeIcon icon={faArrowLeft} className="w-5 h-5" />
          </button>
          <button
            onClick={() => emblaApi && emblaApi.scrollNext()}
            disabled={!canScrollNext}
            className={`w-10 h-10 flex items-center justify-center  ${
              canScrollNext
                ? "border-white text-white"
                : "border-white/20 text-white/20"
            } transition`}
          >
            <FontAwesomeIcon icon={faArrowRight} className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
