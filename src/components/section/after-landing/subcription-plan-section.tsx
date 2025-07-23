import React from "react";
import Text from "@/components/elements/Text";
import Button from "@/components/elements/Button";
import Heading from "@/components/elements/Heading";
import { pricingPlans } from "@/data/subcriptionplan";

// TitleContent
// ---------------------------------------------
const TitleContent = () => {
  return (
    <div>
      <Button
        color="dark"
        variant="contained"
        rounded="medium"
        size="normal"
        className="text-white md:py-4 mobile:py-2 border-none min-w-16 !h-10"
      >
        Plan
      </Button>
      <Heading
        variant="h2"
        weight="semibold"
        className="text-primaryBlack md:leading-extra-tight mt-2 mobile:text-4xl"
      >
        Subscription Plan
      </Heading>
      <Text
        size="lg"
        weight="normal"
        className="text-black/40 md:leading-extra-tight mt-4"
      >
        Lorem ipsum dolor sit amet consectetur. Morbi purus tincidunt vestibulum
        id lectus nam at.
      </Text>
    </div>
  );
};

// Main Component
// --------------------------------------------
export default function SubcriptionPlanSection() {
  return (
    <>
      <section className="container mx-auto lg:max-w-screen-xl lg:py-20 tablet:py-[60px] mobile:py-[30px]">
        <TitleContent/>
        <div className="lg:pt-20 tablet:pt-10 mobile:pt-5">
          <div className="overflow-x-auto scrollbar-hide">
            <div className="min-w-[900px] grid grid-cols-3 border-2 border-lightGray overflow-hidden w-full mx-auto">
              {pricingPlans.map((plan, idx) => (
                <div key={idx}>
                  <Heading
                    variant="h6"
                    weight="medium"
                    className={`text-primaryBlack leading-extra-tight py-6 text-center ${
                      idx !== pricingPlans.length - 1 ? "border-r-2" : ""
                    } border-lightGray mobile:text-2xl`}
                  >
                    {plan.title}
                  </Heading>

                  <div
                    className={`text-center py-6 border-t-2 ${
                      idx !== pricingPlans.length - 1 ? "border-r-2" : ""
                    } border-lightGray`}
                  >
                    <p className="md:text-[32px] mobile:text-xl font-semibold md:leading-extra-tight">
                      ${" "}
                      <span className="md:text-[70px] mobile:text-4xl font-bold leading-extra-tight">
                        {plan.price}
                      </span>
                    </p>
                    <p className="text-xl font-medium leading-extra-tight">
                      {plan.period}
                    </p>
                  </div>

                  {plan.features.map((feature, index) => (
                    <div key={index}>
                      <Text
                        size="xl"
                        weight="normal"
                        textAlign="center"
                        className={`text-[#333A54] border-t-2 ${
                          idx !== pricingPlans.length - 1 ? "border-r-2" : ""
                        } border-lightGray py-[33px] leading-extra-tight`}
                      >
                        {feature}
                      </Text>
                    </div>
                  ))}

                  <div
                    className={`text-center py-[22px] border-t-2 ${
                      idx !== pricingPlans.length - 1 ? "border-r-2" : ""
                    } border-lightGray`}
                  >
                    <button className="border border-green text-green rounded-full px-4 py-3 text-lg font-semibold hover:bg-green hover:text-white w-[168px] h-12 leading-extra-tight">
                      Subscribe Now
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
