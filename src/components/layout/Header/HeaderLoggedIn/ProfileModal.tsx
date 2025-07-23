/* eslint-disable @next/next/no-img-element */
"use client";

import { RefObject } from "react";

// FontAwsome Icon
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons/faUser";
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";

interface ProfileModalProps {
  isOpen: boolean; 
  onClose: () => void;
  onMyProfile: () => void;
  onLogoutClick: () => void;
  modalRef: RefObject<HTMLDivElement>;
}

const ProfileModal: React.FC<ProfileModalProps> = ({ isOpen, onMyProfile, modalRef, onLogoutClick }) => {

  return (
    <>
      <div
        ref={modalRef}
        className={`absolute right-0 mobile:right-[-40px] w-52  bg-white z-50 rounded-lg transition-all duration-300 ease-in-out ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        } top-16 laptop:top-12`}
        style={{
          boxShadow: "0px 12px 20px 4px rgba(0, 0, 0, 0.08)",
        }}
      >
        <ul className="flex flex-col p-5">
          <li>
            <button className="flex items-center gap-2 mb-2 px-4 py-2 w-full hover:bg-[#CEFFED] hover:text-green hover:rounded-3xl text-primaryBlack font-medium text-base leading-extra-tight" onClick={onMyProfile}>
              <FontAwesomeIcon icon={faUser} />
              My Profile
            </button>
          </li>
          <li>
            <button className="flex items-center gap-2 px-4 py-2 w-full hover:bg-[#CEFFED] hover:text-green hover:rounded-3xl text-primaryBlack font-medium text-base leading-extra-tight" onClick={onLogoutClick}>
              <FontAwesomeIcon icon={faRightFromBracket} />
              Logout
            </button>
          </li>
        </ul>
      </div>
    </>
  );
};

export default ProfileModal;
