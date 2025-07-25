import React from "react";

interface SVGIconProps extends React.SVGProps<SVGSVGElement> {
  stroke?: string;
}

const LuxuryIcon: React.FC<SVGIconProps> = ({ ...otherProps }) => {
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
          d="M20.3021 24.6041V18.1875C20.3021 16.9793 19.3228 16 18.1146 16H13.8855C12.6773 16 11.698 16.9793 11.698 18.1875V24.6041H20.3021ZM16 3.09375C17.3925 3.09375 18.7435 3.56762 19.8308 4.43748L27.2643 10.3843C28.3021 11.2146 28.9062 12.4716 28.9062 13.8006V25.625C28.9062 27.4372 27.4372 28.9062 25.625 28.9062H6.375C4.56282 28.9062 3.09375 27.4372 3.09375 25.625V13.8006C3.09375 12.4716 3.69794 11.2146 4.73574 10.3843L12.1693 4.43748C13.2566 3.56762 14.6076 3.09375 16 3.09375Z"
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
export default LuxuryIcon;
