/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { headerData } from "./Navigation/menuData";
import Logo from "./Logo/page";
import HeaderLink from "./Navigation/HeaderLink";
import MobileHeaderLink from "./Navigation/MobileHeaderLink";
import HeaderLoggedIn from "./HeaderLoggedIn/page";
import { paths } from "@/routes/paths";
import { usePathname } from "next/navigation";

const Header: React.FC = () => {
  const isLogin = true;
  const userRole = "agency";

  const [sticky, setSticky] = useState<boolean>(false);
  const [navbarOpen, setNavbarOpen] = useState<boolean>(false);
  const [activeSection, setActiveSection] = useState<string>("");

  const mobileMenuRef = useRef<HTMLDivElement>(null);

  const pathname = usePathname();

  const blackBgPaths = [
    paths.conversation,
    paths.addproperty,
    paths.propertyDetails,
    paths.propertyListing,
  ];

  const isBlackBg = blackBgPaths.includes(pathname) || sticky;

  const handleScroll = () => {
    setSticky(window.scrollY >= 80);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      mobileMenuRef.current &&
      !mobileMenuRef.current.contains(event.target as Node) &&
      navbarOpen
    ) {
      setNavbarOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [navbarOpen]);

  useEffect(() => {
    if (navbarOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [navbarOpen]);

  useEffect(() => {
    const sectionIds = ["main-banner", "features", "our-work"];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            setActiveSection(id);

            // Update the URL without reloading the page
            history.replaceState(null, "", `/#${id}`);
          }
        });
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.5,
      }
    );

    sectionIds.forEach((id) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* <header
        className={`fixed top-[-3px] z-[99] w-full transition-all duration-300 ${
          sticky ? "shadow-lg bg-primaryBlack" : "shadow-none bg-white/10"
        }`}
      > */}
      <header
        className={`fixed top-[-3px] z-[99] w-full transition-all duration-300 ${
          isBlackBg
            ? "shadow-[0px_4px_4px_0px_rgba(0,0,0,0.05)] backdrop-blur-[60px] bg-primaryBlack"
            : "shadow-none bg-white/10"
        }`}
      >
        {isLogin ? (
          <HeaderLoggedIn
            sticky={sticky}
            userRole={userRole}
            navbarOpen={navbarOpen}
            handleScroll={handleScroll}
            setNavbarOpen={setNavbarOpen}
            mobileMenuRef={mobileMenuRef}
          />
        ) : (
          <>
            <div className="container mx-auto  lg:max-w-screen-xl  px-4 py-4 flex items-center justify-between laptop:gap-3 ">
              <Logo sticky={sticky} />
              <nav className="hidden lg:flex flex-grow items-center gap-3 justify-center">
                {headerData.map((item, index) => (
                  <HeaderLink
                    key={index}
                    item={item}
                    activeSection={activeSection}
                  />
                ))}
              </nav>
              <div className="flex items-center gap-4">
                <Link
                  href={paths.propertyListing}
                  className="hidden lg:block text-white font-normal rounded-[20px] px-4 py-1.5 bg-[#EBE9F01A] cursor-pointer "
                  style={{
                    backgroundColor: "rgba(235, 233, 240, 0.1)",
                    border: "1px solid rgba(255, 255, 255, 0.08)",
                  }}
                >
                  Explore Listings
                </Link>

                <Link
                  href="/sign-in"
                  className="hidden lg:block text-white font-normal rounded-full px-4 py-1.5 bg-primaryBlue cursor-pointer "
                >
                  Login
                </Link>

                <button
                  onClick={() => setNavbarOpen(!navbarOpen)}
                  className="block lg:hidden p-2 rounded-lg"
                  aria-label="Toggle mobile menu"
                >
                  <span className="block w-6 h-0.5 bg-white"></span>
                  <span className="block w-6 h-0.5 bg-white mt-1.5"></span>
                  <span className="block w-6 h-0.5 bg-white mt-1.5"></span>
                </button>
              </div>
            </div>

            {navbarOpen && (
              <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-40" />
            )}
            <div
              ref={mobileMenuRef}
              className={`lg:hidden fixed top-0 right-0 h-full w-full bg-white shadow-lg transform transition-transform duration-300 max-w-xs ${
                navbarOpen ? "translate-x-0" : "translate-x-full"
              } z-50`}
            >
              <div className="flex items-center justify-between p-4">
                <h2 className="text-lg font-bold text-midnight_text dark:text-midnight_text">
                  <img
                    src="assets/images/habitake-logo.jpg"
                    className="h-full w-full max-w-[108px]"
                  />
                </h2>

                {/*  */}
                <button
                  onClick={() => setNavbarOpen(false)}
                  className="bg-[url('/images/closed.svg')] bg-no-repeat bg-contain w-5 h-5 absolute top-0 right-0 mr-8 mt-8 dark:invert"
                  aria-label="Close menu Modal"
                ></button>
              </div>
              <nav className="flex flex-col items-start p-4">
                {headerData.map((item, index) => (
                  <MobileHeaderLink
                    key={index}
                    item={item}
                    activeSection={activeSection}
                  />
                ))}
                <div className="mt-4 flex flex-col space-y-4 w-full">
                  <Link
                  href={paths.propertyListing}
                    className="border border-disableGray text-primaryBlack px-4 py-2 rounded-3xl hover:bg-primaryBlue hover:text-white"
                  >
                    Explore Listings
                  </Link>
                  <Link
                    href="/sign-in"
                    className="bg-primaryBlue text-white px-4 py-2 rounded-3xl"
                  >
                    Login
                  </Link>
                </div>
              </nav>
            </div>
          </>
        )}
      </header>
    </>
  );
};

export default Header;
