import React from "react";

interface SVGIconProps extends React.SVGProps<SVGSVGElement> {
  stroke?: string;
}

const RentalIcon: React.FC<SVGIconProps> = ({ ...otherProps }) => {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="currentColor"        
        { ...otherProps }
      >
        <path
          d="M24.6526 19.4707L22.2894 15.2036C21.6408 14.0431 20.3299 13.3121 18.8976 13.3121H13.1057C11.6745 13.3121 10.3644 14.0421 9.71519 15.2012L7.36719 19.4331"
          stroke="currentColor"
          stroke-width="1.5"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M22.4449 27.1973V28.75H25.75V26.875H6.25V21.9664C6.25 20.1209 7.89619 18.625 9.92688 18.625H22.0731C24.1038 18.625 25.75 20.0921 25.75 21.9375V26.8125"
          stroke="currentColor"
          stroke-width="1.5"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M9.55512 27.0846V28.75H6.25V22.3618"
          stroke="currentColor"
          stroke-width="1.5"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M22.8125 22.8125C22.8125 23.5029 22.2529 24.0625 21.5625 24.0625C20.8721 24.0625 20.3125 23.5029 20.3125 22.8125C20.3125 22.1221 20.8721 21.5625 21.5625 21.5625C22.2529 21.5625 22.8125 22.1221 22.8125 22.8125Z"
          fill="currentColor"
        />
        <path
          d="M11.625 22.8125C11.625 23.5029 11.0654 24.0625 10.375 24.0625C9.68462 24.0625 9.125 23.5029 9.125 22.8125C9.125 22.1221 9.68462 21.5625 10.375 21.5625C11.0654 21.5625 11.625 22.1221 11.625 22.8125Z"
          fill="currentColor"
        />
        <path
          d="M28.9062 14.8008C28.9062 13.4717 28.3021 12.2147 27.2643 11.3845L19.8307 5.43763C18.7435 4.56777 17.3925 4.0939 16 4.0939C14.6076 4.0939 13.2566 4.56777 12.1693 5.43763L4.73574 11.3845C3.69794 12.2147 3.09375 13.4717 3.09375 14.8008"
          stroke="currentColor"
          stroke-width="1.5"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </>
  );
};
export default RentalIcon;
