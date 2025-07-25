/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef, SetStateAction, Dispatch } from "react";

// FontAwesome Icons
import { faChevronDown, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBell,
  faCommentDots,
  faHeart,
} from "@fortawesome/free-regular-svg-icons";

//Modals
import NotificationModal from "./NotificationModal";

// Assets
import { LocationIcon } from "@/components/assets";

import Logo from "../Logo/page";

// Modals
import ProfileModal from "./ProfileModal";
import LogoutModal from "@/components/modal/LogoutModal";
import MyProfileModal from "@/components/modal/MyProfileModal";
import TeamMembersModal from "@/components/modal/TeamMemebersModal";
import { useRouter } from "next/navigation";
import { paths } from "@/routes/paths";

interface HeaderLoggedInProps {
  sticky: boolean;
  pathname: string | null;
  isBlackBg: boolean;
  navbarOpen: boolean;
  handleScroll: () => void;
  userRole: "buyer" | "seller" | "agency" | string;
  setNavbarOpen: Dispatch<SetStateAction<boolean>>;
  setIsModalOpen: Dispatch<SetStateAction<boolean>>;
  mobileMenuRef: React.RefObject<HTMLDivElement>;
}

const HeaderLoggedIn = ({
  sticky,
  pathname,
  userRole,
  isBlackBg,
  handleScroll,
  navbarOpen,
  setNavbarOpen,
  mobileMenuRef,
  setIsModalOpen,
}: HeaderLoggedInProps) => {
  const router = useRouter();
  const [editMode, setEditMode] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const [mobileSearchValue, setMobileSearchValue] = useState("");
  const [showMobileSearch, setShowMobileSearch] = useState(false);
  const [showProfileModal, setShowProfileModal] = useState(false);
  const [isTeamMembersOpen, setIsTeamMembersOpen] = useState(false);
  const [showNotificationModal, setShowNotificationModal] = useState(false);

  const profileRef = useRef<HTMLDivElement>(null);
  const mobileSearchRef = useRef<HTMLDivElement>(null);
  const notificationRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: MouseEvent) => {
    const target = event.target as Node;

    if (
      mobileMenuRef.current &&
      !mobileMenuRef.current.contains(target) &&
      navbarOpen
    ) {
      setNavbarOpen(false);
    }

    if (
      mobileSearchRef.current &&
      !mobileSearchRef.current.contains(target) &&
      showMobileSearch
    ) {
      setShowMobileSearch(false);
    }

    if (
      notificationRef.current &&
      !notificationRef.current.contains(target) &&
      showNotificationModal
    ) {
      setShowNotificationModal(false);
    }
    if (
      profileRef.current &&
      !profileRef.current.contains(target) &&
      showProfileModal
    ) {
      setShowProfileModal(false);
    }
  };

  const handleEditmode = () => {
    setEditMode(!editMode);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [navbarOpen, showMobileSearch, showProfileModal, showNotificationModal]);

  useEffect(() => {
    const isModalOpen =
      showProfile ||
      showLogoutModal ||
      showProfileModal ||
      isTeamMembersOpen ||
      showNotificationModal;

    if (isModalOpen) {
      const scrollY = window.scrollY;
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollY}px`;
      document.body.style.left = "0";
      document.body.style.right = "0";
      document.body.style.overflow = "hidden";
      document.body.style.width = "100%";
      setIsModalOpen?.(isModalOpen);
    } else {
      const scrollY = document.body.style.top;
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.left = "";
      document.body.style.right = "";
      document.body.style.overflow = "";
      document.body.style.width = "";
      window.scrollTo(0, parseInt(scrollY || "0") * -1);
    }

    return () => {
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.left = "";
      document.body.style.right = "";
      document.body.style.overflow = "";
      document.body.style.width = "";
    };
  }, [
    showProfile,
    showLogoutModal,
    showProfileModal,
    isTeamMembersOpen,
    showNotificationModal,
  ]);

  return (
    <>
      <div className="container mx-auto  lg:max-w-screen-xl px-4 py-4 flex items-center justify-between laptop:gap-3 ">
        {/* Logo */}
        <div className="flex items-center gap-14 laptop:gap-6">
          <Logo sticky={sticky} isBlackBg={isBlackBg} />

          {/* Menu Buttons */}
          {userRole === "buyer" ? (
            <>
              <div
                className={`hidden lg:flex items-center bg-[#F4F4F433]/20 rounded-[30px] px-4 py-2.5 w-80 gap-2 ${sticky ? "border border-[#E6E6EA1A]/10" : ""}`}
              >
                <LocationIcon fill="#FFFFF" />
                <input
                  type="text"
                  placeholder="Enter Location"
                  className="bg-transparent border-none outline-none text-white placeholder-white placeholder:text-base text-lg font-normal lg:leading-extra-tight w-full"
                />
                <FontAwesomeIcon
                  icon={faChevronDown}
                  className="w-3 h-3 text-white"
                />
              </div>
            </>
          ) : (
            <>
              <div
                className={`hidden lg:flex items-center justify-between bg-[#F4F4F433]/20 rounded-[30px] px-[18px] py-1.5 gap-4 menu-btn ${
                  sticky ? "border border-[#E6E6EA1A]/10" : ""
                }`}
              >
                <Link
                  href={paths.propertyListing}
                  className="text-white text-lg font-normal lg:leading-extra-tight p-2 hover:bg-green hover:rounded-[20px] laptop:text-sm"
                >
                  Explore Listings
                </Link>
                <div className="w-[1px] h-4 bg-disableGray" />
                <Link
                  href={paths.addproperty}
                  className={`text-white text-lg font-normal lg:leading-extra-tight px-2 py-1.5 hover:bg-green hover:rounded-[20px] laptop:text-sm 
                      ${
                        pathname === paths.addproperty
                          ? "text-white bg-green rounded-[20px]"
                          : "text-white"
                      }`}
                >
                  Add Property
                </Link>
              </div>
            </>
          )}
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-3 mobile:gap-2">
          {/* Search */}
          <div
            className={`hidden lg:flex items-center bg-[#F4F4F433]/20 rounded-[20px] px-4 py-2.5 w-72 ${sticky ? "border border-[#E6E6EA1A]/10" : ""}`}
          >
            <FontAwesomeIcon
              icon={faSearch}
              className="text-white text-sm mr-1.5 w-5 h-5"
            />
            <input
              type="text"
              placeholder="Search"
              className="bg-transparent border-none outline-none text-white placeholder-white text-base font-normal lg:leading-extra-tight w-full"
            />
          </div>

          <div className="flex gap-3  lg:flex-wrap justify-end laptop:flex-col-reverse">
            {/* Icon-only on mobile/tablet */}
            <div className="flex items-center justify-end gap-3 mobile:gap-2">
              <button
                onClick={() => setShowMobileSearch(!showMobileSearch)}
                className="lg:hidden text-white w-5 h-5 cursor-pointer"
                aria-label="Search"
              >
                <FontAwesomeIcon icon={faSearch} />
              </button>
              {userRole === "buyer" && (
                <>
                  <div className="w-[1px] h-4 bg-disableGray laptop:hidden" />
                  <FontAwesomeIcon
                    icon={faHeart}
                    className="text-white   w-5 h-5 cursor-pointer"
                  />
                </>
              )}
              <div className="w-[1px] h-4 bg-disableGray " />
              {/* Messages */}
              <div
                className={` cursor-pointer ${
                  pathname === paths.conversation
                    ? "text-black bg-white w-6 h-6 rounded-full flex justify-center items-center"
                    : "text-white"
                }`}
              >
                <FontAwesomeIcon
                  icon={faCommentDots}
                  className={` ${
                    pathname === paths.conversation
                      ? "w-4 h-4 text-secondaryGreen"
                      : "text-white w-5 h-5"
                  }`}
                  onClick={() => router.push(paths.conversation)}
                />
              </div>

              <div className="w-[1px] h-4 bg-disableGray" />
              {/* Notifications */}
              <FontAwesomeIcon
                icon={faBell}
                className="text-white hidden md:inline-block mobile:inline-block w-5 h-5 cursor-pointer"
                onClick={() => setShowNotificationModal(true)}
              />
              <div className="w-[1px] h-4 bg-disableGray laptop:hidden" />
            </div>

            {/* Profile */}
            <div className="relative" ref={profileRef}>
              <div
                className="flex items-center gap-2 cursor-pointer"
                onClick={() => setShowProfileModal(!showProfileModal)}
              >
                <Image
                  src="/assets/images/avatar.jpg"
                  alt="User"
                  width={36}
                  height={36}
                  className="rounded-full w-9 h-9"
                />
                <div className="hidden lg:flex flex-col text-white leading-tight">
                  <span className="font-semibold text-base">Vetrick W.</span>
                  <span className="text-xs text-white/80">
                    vetrick@mail.com
                  </span>
                </div>
                <span className="hidden lg:inline-block text-white">
                  <FontAwesomeIcon icon={faChevronDown} className="w-4 h-4" />
                </span>
              </div>

              <ProfileModal
                modalRef={profileRef}
                isOpen={showProfileModal}
                onMyProfile={() => {
                  setShowProfile(true);
                  setShowProfileModal(false);
                }}
                onLogoutClick={() => {
                  setShowLogoutModal(true);
                  setShowProfileModal(false);
                }}
                onClose={() => setShowProfileModal(false)}
              />
              <LogoutModal
                title="Do you want to log out?"
                isOpen={showLogoutModal}
                onConfirm={() => {
                  setShowLogoutModal(false);
                  setShowProfileModal(false);
                  router.push(paths.home)
                  localStorage.setItem("isLogin", "false");
                }}
                onCancel={() => setShowLogoutModal(false)}
              />
              <MyProfileModal
                role={userRole}
                isOpen={showProfile}
                editMode={editMode}
                handleEditmode={handleEditmode}
                onViewAll={() => {
                  setIsTeamMembersOpen(true);
                  setShowProfile(false);
                }}
                onClose={() => setShowProfile(false)}
              />
              <TeamMembersModal
                isOpen={isTeamMembersOpen}
                editMode={editMode}
                backToProfile={() => {
                  setShowProfile(true);
                  setIsTeamMembersOpen(false);
                }}
                onClose={() => setIsTeamMembersOpen(false)}
              />
            </div>
          </div>

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
        <div className="fixed top-0 left-0 w-full h-screen bg-black bg-opacity-50 z-40" />
      )}

      <div
        ref={mobileMenuRef}
        className={`lg:hidden fixed top-0 right-0 h-screen w-full bg-white shadow-lg transform transition-transform duration-300 max-w-xs ${
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
          <div className="mt-4 flex flex-col space-y-4 w-full">
            <Link
              href={paths.propertyListing}
              className="border border-disableGray text-primaryBlack px-4 py-2 rounded-3xl hover:bg-green hover:text-white"
            >
              Explore Listings
            </Link>
            <Link
              href={paths.addproperty}
              className={` text-primaryBlack px-4 py-2 rounded-3xl hover:bg-green hover:text-white
                ${
                  pathname === paths.addproperty
                    ? "text-white bg-green "
                    : "text-primaryBlack border border-disableGray"
                }`}
            >
              Add Property
            </Link>
          </div>
        </nav>
      </div>

      {/* Optional: Mobile search overlay */}
      <div
        ref={mobileSearchRef}
        className={`lg:hidden bg-white overflow-hidden transition-all duration-300 ease-in-out ${
          showMobileSearch
            ? "max-h-[100px] opacity-100 py-3 px-4"
            : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex items-center bg-white rounded-full px-4 py-1.5 border border-disableGray relative">
          <FontAwesomeIcon
            icon={faSearch}
            className="text-primaryBlack text-sm mr-2"
          />
          <input
            type="text"
            placeholder="Search"
            value={mobileSearchValue}
            onChange={(e) => setMobileSearchValue(e.target.value)}
            className="bg-transparent border-none outline-none text-primaryBlack placeholder-disableGray text-sm w-full"
          />
          {mobileSearchValue && (
            <button
              onClick={() => setMobileSearchValue("")}
              className="absolute right-4 text-primaryBlack"
              aria-label="Clear search"
            >
              ✕
            </button>
          )}
        </div>
      </div>

      {/* Nofitication Modal */}
      <NotificationModal
        isOpen={showNotificationModal}
        onClose={() => setShowNotificationModal(false)}
        modalRef={notificationRef}
      />
    </>
  );
};

export default HeaderLoggedIn;
