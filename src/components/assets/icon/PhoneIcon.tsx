import React from "react";

interface SVGIconProps extends React.SVGProps<SVGSVGElement> {
  stroke?: string;
}

const PhoneIcon: React.FC<SVGIconProps> = ({ ...otherProps }) => {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        {...otherProps}
      >
        <path
          d="M18.0786 15.626C18.0785 16.914 16.9747 17.9844 15.6411 17.7754L15.5112 17.751C13.2794 17.2648 9.10634 16.0238 6.17334 13.0908C3.5333 10.4505 2.5457 6.87802 2.17432 4.73047L2.10791 4.32031C1.90413 2.97416 2.98636 1.91317 4.2417 1.91309H6.96826C7.30149 1.91309 7.60002 2.11973 7.71729 2.43164L8.7749 5.24414C8.82627 5.38076 8.83876 5.52937 8.81201 5.67285L8.29639 8.43555C8.91203 9.84134 9.91068 10.8073 11.5845 11.6865L14.3052 11.1602L14.4155 11.1465C14.5263 11.1407 14.6373 11.1585 14.7417 11.1982L17.564 12.2734C17.874 12.3917 18.0786 12.6887 18.0786 13.0205V15.626Z"
          stroke="#34216B"
          stroke-width="1.6"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </>
  );
};
export default PhoneIcon;
