"use client";
import React from "react";

import { useRouter } from "next/navigation";
import FaqSection from "@/components/section/Landing/faq-section";
import HeroSection from "@/components/section/Landing/hero-section";
import OurWorkSection from "@/components/section/Landing/our-work-section";
import FilterSection from "@/components/section/after-landing/filter-section";
import PropertiesSection from "@/components/section/Landing/properties-section";
import RaveReviewSection from "@/components/section/Landing/rave-review-section";
import ClientVideoSection from "@/components/section/Landing/client-video-section";
import CoreFeatureSection from "@/components/section/Landing/core-features-section";
import ImageComparisonSlider from "@/components/section/Landing/image-comparison-section";
import OurPropertiesSection from "@/components/section/after-landing/our-property-section";
import PublicPropertiesSection from "@/components/section/after-landing/pubilc-property-section";
import SubcriptionPlanSection from "@/components/section/after-landing/subcription-plan-section";

type UserRole = "buyer" | "seller" | "agency" | string;

export default function LandingPageView() {
  const isLogin = false;
  const router = useRouter();
  const userRole: UserRole = "seller";
  return (
    <>
      <HeroSection />

      {isLogin && (
        <>
          <FilterSection />

          <PublicPropertiesSection userRole={userRole} router={router} />

          <OurPropertiesSection userRole={userRole} router={router} />

          {userRole !== "buyer" && <SubcriptionPlanSection />}
        </>
      )}

      {!isLogin && (
        <>
          <ImageComparisonSlider />

          <CoreFeatureSection />

          <OurWorkSection />

          <PropertiesSection userRole={userRole} />

          <ClientVideoSection />

          <RaveReviewSection />

          <FaqSection />
        </>
      )}
    </>
  );
}
