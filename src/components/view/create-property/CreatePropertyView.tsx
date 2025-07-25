import React from "react";
import ContactInfoForm from "@/components/section/create-property/contact-info-form";
import LocationForm from "@/components/section/create-property/location-form";
import PriceForm from "@/components/section/create-property/price-form";
import PropertyDetailsForm from "@/components/section/create-property/property-details-form";
import PropertyPhotoUploader from "@/components/section/create-property/property-photo-upload";
import PropertyType from "@/components/section/create-property/property-type-form";
import SubmitBtn from "@/components/section/create-property/submit-btn";

function CreatePropertyView() {
  return (
    <>
     <section className="container mx-auto lg:max-w-screen-xl lg:py-20 tablet:py-[60px] mobile:py-[30px]">
        <PropertyType />
        
        <LocationForm />

        <PropertyPhotoUploader />

        <PropertyDetailsForm />

        <PriceForm />

        <ContactInfoForm />

        <SubmitBtn/>
      </section>
    </>
  );
}

export default CreatePropertyView;


