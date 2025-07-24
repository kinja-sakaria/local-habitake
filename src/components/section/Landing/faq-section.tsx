"use client";
import React, { useState } from "react";

import { faqs, tags } from "@/data/faqs";

import Button from "@/components/elements/Button";
import Heading from "@/components/elements/Heading";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";


// FAQ Tags
// ---------------------------------------------
function FAQTags() {
  return (
    <div className="flex flex-wrap gap-3">
      {tags.map((tag, index) => (
        <span
          key={index}
          className="bg-[#DCDCDC] hover:bg-[#666666] px-4 py-2 rounded-[40px] text-sm font-normal text-primaryBlack hover:text-white cursor-pointer"
        >
          {tag}
        </span>
      ))}
    </div>
  );
}

// FAQ Accordion
// ---------------------------------------------
function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(1);

  return (
    <div className="space-y-5">
      {faqs.map((faq, index) => (
        <div
          key={index}
          className="border border-[#DCDCDC] rounded-3xl md:p-8 tablet:p-6 mobile:p-5 bg-white"
        >
          <button
            className="flex justify-between items-center w-full text-left text-[#181818] font-medium md:text-xl mobile:text-lg leading-6"
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
          >
            {faq.question}
            {openIndex === index ? (
              <FontAwesomeIcon icon={faChevronUp} className="w-5 h-5" />
            ) : (
              <FontAwesomeIcon icon={faChevronDown} className="w-5 h-5" />
            )}
          </button>
          {openIndex === index && faq.answer && (
            <p className="mt-3 text-[#666666] md:text-base mobile:text-sm font-normal leading-[22px] w-[388px] max-w-full break-words">
              {faq.answer}
            </p>
          )}
        </div>
      ))}
    </div>
  );
}

// Main Component
// ---------------------------------------------
export default function FaqSection() {
  return (
    <>
      <section className="container mx-auto lg:max-w-screen-xl lg:py-20 tablet:py-[60px] mobile:py-[30px]">
        <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Section */}
          <div className="space-y-5">
            <Button
              color="dark"
              variant="contained"
              rounded="medium"
              size="normal"
              className="text-white md:py-4 mobile:py-2 border-none min-w-32 cursor-default"
            >
              FAQ
            </Button>
            <Heading
              variant="h3"
              weight="medium"
              className="tablet:text-3xl  mobile:text-3xl "
            >
              Frequently<span className="text-black">Asked</span>
              <br />
              <span className="text-[#666666] ">Questions</span>
            </Heading>
            <FAQTags />
          </div>

          {/* Right Section */}
          <FAQAccordion />
        </div>
      </section>
    </>
  );
}
