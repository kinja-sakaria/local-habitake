import React from "react";

interface SVGIconProps extends React.SVGProps<SVGSVGElement> {
  stroke?: string;
}

const ShareIcon: React.FC<SVGIconProps> = ({ ...otherProps }) => {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="15"
        viewBox="0 0 18 15"
        fill="none"
        { ...otherProps }
      >
        <path
          d="M11 0V4C4 5 1 10 0 15C2.5 11.5 6 9.9 11 9.9V14L18 7L11 0ZM13 4.83L15.17 7L13 9.17V7.9H11C8.93 7.9 7.07 8.28 5.34 8.85C6.74 7.46 8.54 6.37 11.28 6L13 5.73V4.83Z"
          fill="white"
        />
      </svg>
    </>
  );
};
export default ShareIcon;
