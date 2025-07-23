/* eslint-disable @next/next/no-img-element */
import React, { ReactNode } from "react";

// Compoments of the elements folder
import Button from "../elements/Button";

interface LogoutModalProps {
  isOpen: boolean;
  onConfirm: () => void;
  onCancel: () => void;
  title: string | ReactNode;
}

const LogoutModal: React.FC<LogoutModalProps> = ({
  title,
  isOpen,
  onCancel,
  onConfirm,
}) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40 transition-opacity duration-300 ease-in-out"
      style={{ backdropFilter: "blur(3px)" }}
    >
      <div
        className={`
          bg-white px-[100px] py-10 tablet:p-8 mobile:px-11 mobile:py-7 tablet:w-auto mobile:w-auto rounded-[20px] flex flex-col items-center
          transform transition-all duration-300 ease-out
          opacity-0 scale-95 animate-fadeInScale
        `}
        style={{
          boxShadow: "0px 12px 20px 4px rgba(0, 0, 0, 0.08)",
        }}
      >
        {/* Title and Content */}
        <p className="text-center lg:text-[32px] font-medium  text-primaryBlack leading-10 tablet:text-3xl !mobile:text-2xl !mobile:leading-8">
          {title}
        </p>

        {/* Buttons */}

        <div className="flex justify-center items-center mobile:flex-col mobile:gap-2 gap-5 w-full lg:pt-20 tablet:pt-10 mobile:pt-6">
          <Button
            color="black"
            rounded="full"
            className="w-full cursor-pointer !h-[53px] mobile:!h-12 hover:bg-secondaryGreen hover:text-white hover:border-none text-xl font-medium leading-extra-tight"
            variant="outlined"
            type="submit"
            onClick={onConfirm}
          >
            yes
          </Button>
          <Button
            color="black"
            rounded="full"
            className="w-full cursor-pointer !h-[53px]  mobile:!h-12  hover:bg-secondaryGreen hover:text-white hover:border-none text-xl font-medium leading-extra-tight"
            variant="outlined"
            type="submit"
            onClick={onCancel}
          >
            No
          </Button>
        </div>
      </div>
    </div>
  );
};

export default LogoutModal;
