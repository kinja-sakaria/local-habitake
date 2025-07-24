"use client";

import { useCallback, useEffect, useState } from "react";

import Text from "@/components/elements/Text";
import Button from "@/components/elements/Button";
import Heading from "@/components/elements/Heading";

import useEmblaCarousel from "embla-carousel-react";

import { AiImageIcon, TablerAiIcon } from "@/components/assets";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";



// ----------------------------------------------------------------------

const CORE_FEATURES = [
  {
    icon: <TablerAiIcon className="w-[32px] h-[32px] text-white" />,
    title: "Lorem ipsum dolor sit",
    description:
      "Lorem ipsum dolor sit amet consectetur. Tellus sed consectetur eu egestas. Egestas eget libero nulla tellus aliquam.",
  },
  {
    icon: <AiImageIcon className="w-[32px] h-[32px] text-white" />,
    title: "Lorem ipsum dolor sit",
    description:
      "Lorem ipsum dolor sit amet consectetur. Tellus sed consectetur eu egestas. Egestas eget libero nulla tellus aliquam.",
  },
  {
    icon: <TablerAiIcon className="w-[32px] h-[32px] text-white" />,
    title: "Lorem ipsum dolor sit",
    description:
      "Lorem ipsum dolor sit amet consectetur. Tellus sed consectetur eu egestas. Egestas eget libero nulla tellus aliquam.",
  },
  {
    icon: <TablerAiIcon className="w-[32px] h-[32px] text-white" />,
    title: "Lorem ipsum dolor sit",
    description:
      "Lorem ipsum dolor sit amet consectetur. Tellus sed consectetur eu egestas. Egestas eget libero nulla tellus aliquam.",
  },
  {
    icon: <TablerAiIcon className="w-[32px] h-[32px] text-white" />,
    title: "Lorem ipsum dolor sit",
    description:
      "Lorem ipsum dolor sit amet consectetur. Tellus sed consectetur eu egestas. Egestas eget libero nulla tellus aliquam.",
  },
  {
    icon: <TablerAiIcon className="w-[32px] h-[32px] text-white" />,
    title: "Lorem ipsum dolor sit",
    description:
      "Lorem ipsum dolor sit amet consectetur. Tellus sed consectetur eu egestas. Egestas eget libero nulla tellus aliquam.",
  },
  {
    icon: <TablerAiIcon className="w-[32px] h-[32px] text-white" />,
    title: "Lorem ipsum dolor sit",
    description:
      "Lorem ipsum dolor sit amet consectetur. Tellus sed consectetur eu egestas. Egestas eget libero nulla tellus aliquam.",
  },
  {
    icon: <TablerAiIcon className="w-[32px] h-[32px] text-white" />,
    title: "Lorem ipsum dolor sit",
    description:
      "Lorem ipsum dolor sit amet consectetur. Tellus sed consectetur eu egestas. Egestas eget libero nulla tellus aliquam.",
  },
  {
    icon: <TablerAiIcon className="w-[32px] h-[32px] text-white" />,
    title: "Lorem ipsum dolor sit",
    description:
      "Lorem ipsum dolor sit amet consectetur. Tellus sed consectetur eu egestas.ellus sed consectetur eu egestas.ellus sed consectetur eu egestas. Egestas eget libero nulla tellus aliquam.",
  },
];

// ----------------------------------------------------------------------

export default function CoreFeaturesSlider() {
  const options = { loop: false, align: "start" } as const;
  const [emblaRef, emblaApi] = useEmblaCarousel(options);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

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
    <section className="relative bg-primaryBlack overflow-hidden" id="features">
        {/* Title of Core */}
      <div className="container mx-auto lg:max-w-screen-xl lg:pt-[120px] tablet:pt-[60px] mobile:pt-[30px] lg:pb-[60px] tablet:pb-[30px] mobile:pb-6 relative">
        <div className="flex justify-between items-center">
          <div>
            <Button
              color="dark"
              variant="contained"
              rounded="medium"
              size="normal"
              className="text-white md:py-4 mobile:py-2 border-none min-w-32 cursor-default"
            >
              Core Highlights
            </Button>
            <Heading
              variant="h2"
              weight="semibold"
              className="text-white leading-extra-tight mt-2 mobile:text-4xl"
            >
              Core Features
            </Heading>
            <Text
              size="lg"
              weight="normal"
              className="text-white/40 leading-extra-tight mt-4"
            >
              Lorem ipsum dolor sit amet consectetur.
            </Text>
          </div>

          <div className="flex items-center gap-4 z-10">
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
      </div>

      {/* Slider aligned with heading but overflows */}
      <div className="relative w-full lg:pb-[120px] tablet:pb-[60px] mobile:pb-[30px] tablet:ml-3 mobile:ml-3">
        <div className="pl-[calc((100vw-1280px)/2)]">
          <div className="overflow-hidden " ref={emblaRef}>
            <div className="flex gap-10  items-stretch">
              {CORE_FEATURES.map((item, index) => (
                <div
                  key={index}
                  className="md:min-w-[443px] md:max-w-[443px] mobile:max-w-96 mobile:min-w-96 rounded-3xl border border-white/[12%] hover:border-2 hover:border-green  hover:bg-[#01A669]/20 bg-transparent md:p-10 mobile:p-5 flex flex-col justify-between h-full transition-colors duration-300 "
                >
                  <div className="w-12 h-12 rounded-xl bg-green flex items-center justify-center">
                    <div className="h-8 w-8">{item.icon}</div>
                  </div>
                  <Text
                    size="large"
                    weight="medium"
                    className="text-white md:pb-6 mobile:pb-4 pt-3"
                  >
                    {item.title}
                  </Text>
                  <Text
                    size="lg"
                    weight="normal"
                    className={`text-white/40  transition-all duration-300 overflow-hidden ${
                    //   expandedIndex === index ? "max-h-[500px]" : "max-h-[73px]"
                        expandedIndex === index ? "" : "line-clamp-3 max-h-24"

                    }`}
                  >
                    {item.description}
                  </Text>                 
                  <button
                    onClick={() =>
                      setExpandedIndex(expandedIndex === index ? null : index)
                    }
                    className="text-lg font-semibold text-green flex items-center gap-4 leading-extra-tight md:pt-6 mobile:pt-4"
                  >
                    {expandedIndex === index ? "Show less" : "Learn more"}{" "}
                    <span className="translate-x-1">→</span>
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
