/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */

"use client";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { HabitakeLogoTransparent } from "@/components/assets";

export default function Footer() {
  return (
    <footer
      className="text-white bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('assets/images/footer-img.jpg')",
      }}
    >
      <div
        className="w-full"
        style={{ backgroundColor: "rgba(0, 9, 41, 0.9)" }}
      >
        <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md 2xl:py-[100px] lg:py-12 mobile:py-6">
          <div className="md:py-9 flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Left: Logo */}
            <div className="flex-shrink-0">
              <HabitakeLogoTransparent />
            </div>

            {/* Center: Menu */}
            <ul className="flex flex-wrap justify-center gap-[32px] mobile:gap-4 text-lg  leading-extra-tight font-medium mobile:pb-6">
              <li>
                <Link href="/#main-banner">Home</Link>
              </li>
              <li>
                <Link href="/property">Property</Link>
              </li>
              <li>
                <Link href="/contact">Contact us</Link>
              </li>
              <li>
                <Link href="/support">Support</Link>
              </li>
              <li>
                <Link href="/faq">FAQ</Link>
              </li>
            </ul>
          </div>

          {/* Bottom Line */}
          <div className="flex flex-col md:flex-row mobile:flex-col-reverse items-center justify-between border-t border-white/20 pt-11 mobile:pt-4">
            {/* Copyright */}
            <div className="text-center text-lg font-normal leading-extra-tight md:text-sm  mobile:pt-7">
              © 2025 Copyright by Habitake
            </div>

            {/* Right: Socials */}
            <div className="flex gap-4">
              <a
                href="#"
                aria-label="Facebook"
                className="flex items-center justify-center  w-10 h-10  rounded-full border border-[#475569] hover:bg-white hover:text-primaryBlue transition cursor-pointer"
              >
                <FontAwesomeIcon icon={faFacebookF} />
              </a>
              <a
                href="#"
                aria-label="Twitter"
                className="flex items-center justify-center  w-10 h-10  rounded-full border border-[#475569] hover:bg-white hover:text-primaryBlue transition cursor-pointer"
              >
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a
                href="#"
                aria-label="Close"
                className="flex items-center justify-center  w-10 h-10  rounded-full border border-[#475569] hover:bg-white hover:text-primaryBlue transition cursor-pointer"
              >
                <FontAwesomeIcon icon={faTimes} />
              </a>
              <a
                href="#"
                aria-label="LinkedIn"
                className="flex items-center justify-center  w-10 h-10  rounded-full border border-[#475569] hover:bg-white hover:text-primaryBlue transition cursor-pointer"
              >
                <FontAwesomeIcon icon={faLinkedinIn} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
