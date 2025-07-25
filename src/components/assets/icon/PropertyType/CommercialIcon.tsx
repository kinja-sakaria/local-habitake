import React from "react";

interface SVGIconProps extends React.SVGProps<SVGSVGElement> {
  stroke?: string;
}

const CommercialIcon: React.FC<SVGIconProps> = ({ ...otherProps }) => {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="current"
        { ...otherProps }
      >
        <path
          d="M30.4076 8.18231L29.2548 5.68062C28.6423 4.35144 27.3126 3.5 25.849 3.5H6.151C4.6875 3.5 3.35769 4.35144 2.74519 5.68062L1.59244 8.18231C1.3725 8.65931 1.25 9.19031 1.25 9.75C1.25 11.8211 2.67894 13.5 4.75 13.5C6.82106 13.5 8.5 11.8211 8.5 9.75C8.5 11.8211 10.1789 13.5 12.25 13.5C14.3211 13.5 16 11.8211 16 9.75C16 11.8211 17.6789 13.5 19.75 13.5C21.8211 13.5 23.5 11.8211 23.5 9.75C23.5 11.8211 25.1789 13.5 27.25 13.5C29.3211 13.5 30.75 11.8211 30.75 9.75C30.75 9.19031 30.6275 8.65931 30.4076 8.18231Z"
          stroke="currentColor"
          stroke-width="1.5"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M3.75 13.2871V28.5005"
          stroke="currentColor"
          stroke-width="1.5"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1.25 28.5H30.75"
          stroke="currentColor"
          stroke-width="1.5"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M28.25 13.2871V23.5005V28.5005"
          stroke="currentColor"
          stroke-width="1.5"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M8.75 28.5V21C8.75 19.6193 9.86931 18.5 11.25 18.5H13.75C15.1307 18.5 16.25 19.6193 16.25 21V28.5"
          stroke="currentColor"
          stroke-width="1.5"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M21 21H23.5"
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
export default CommercialIcon;
