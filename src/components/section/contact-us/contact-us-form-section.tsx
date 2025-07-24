"use client";
import React from "react";
import Heading from "@/components/elements/Heading";
import TextField from "@/components/elements/TextField";
import Button from "@/components/elements/Button";

export default function ContactUsFormSection() {
  return (
    <>
      <div>
        <Heading
          variant="h6"
          weight="bold"
          className="text-start lg:pb-20 tablet:pb-[60px] mobile:pb-[30px] mobile:text-2xl text-primaryBlack"
        >
          Let&lsquo;s Connect and get to know each other
        </Heading>

        {/* Contact Form Box */}
        <div
          className="bg-white rounded-3xl p-10 mobile:p-5"
          style={{ boxShadow: "0px 0px 20px 0px rgba(12, 37, 65, 0.1)" }}
        > 
          <div className="flex justify-between items-center mb-8 ">
            <h3 className="text-[28px] font-semibold leading-extra-tight text-primaryBlack">
              Send us a message
            </h3>
            <Button
              size="large"
              rounded="full"
              color="dark"
              variant="contained"
              className="mobile:hidden mobile:px-2 border-none md:min-w-40 mobile:min-w-6 md:min-h-12 mobile:min-h-9 transition-all duration-500 mobile:text-base mobile:self-end mobile:mt-4"
            >
              Send Message
            </Button>
          </div>

          <form className="">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8 mobile:mb-4">
              <TextField label="Full Name" placeholder="Full Name" />
              <TextField label="Email" placeholder="Email" />
              <TextField
                label="Phone Number"
                placeholder="Phone Number"
                numericOnly
                inputProps={{ maxLength: 10 }}
              />
            </div>

            {/* Message */}
            <div className="w-full flex flex-col gap-1">
              <label
                htmlFor="message"
                className="text-base font-medium text-primaryBlack leading-extra-tight pb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={6}
                placeholder="Message"
                className="w-full py-[14px] px-[18px] border-[2px] rounded-lg border-lightGray bg-white text-base text-primaryBlack font-medium leading-extra-tight focus:outline-none focus:ring-0 placeholder-text-darkGray placeholder:font-normal placeholder:leading-extra-tight resize-none"
              ></textarea>
             <Button
              size="large"
              rounded="full"
              color="dark"
              variant="contained"
              className="md:hidden mobile:px-2 border-none md:min-w-40 mobile:min-w-6 md:min-h-12 mobile:min-h-9 transition-all duration-500 mobile:text-base mobile:mt-4"
            >
              Send Message
            </Button>       
            </div>   
          </form>
        </div>
      </div>
    </>
  );
}
