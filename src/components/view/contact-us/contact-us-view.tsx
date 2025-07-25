import ContactUsFormSection from "@/components/section/contact-us/contact-us-form-section";
import ContactUsGooglemapSection from "@/components/section/contact-us/contact-us-googlemap-section";

export default function ContactUsView() {
  return (
    <>
      <main className="relative z-10  lg:pt-24 tablet:pt-28  mobile:pt-20">
        <section className="container mx-auto lg:max-w-screen-xl lg:py-20 tablet:py-[60px] mobile:py-[30px]">
          <ContactUsFormSection />
          <ContactUsGooglemapSection />
        </section>
      </main>
    </>
  );
}
