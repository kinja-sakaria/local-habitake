import React from "react";

interface SVGIconProps extends React.SVGProps<SVGSVGElement> {
  stroke?: string;
}

const BedRoomIcon: React.FC<SVGIconProps> = ({ ...otherProps }) => {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="30"
        height="22"
        viewBox="0 0 30 22"
        fill="none"
        { ...otherProps}
      >
        <path
          d="M25 4.7793H12V12.318H10.6154V9.75548C10.6138 8.30362 10.0363 6.91168 9.00971 5.88505C7.9831 4.85842 6.59117 4.28093 5.13931 4.2793H2V0.279297H0V21.7793H2V18.7954L28 19.0034V21.7793H30V9.7793C29.9985 8.45368 29.4712 7.18278 28.5339 6.24542C27.5965 5.30807 26.3256 4.7808 25 4.7793ZM2 6.2793H5.13931C6.0609 6.28034 6.94445 6.6469 7.59611 7.29856C8.24777 7.95022 8.61433 8.83377 8.61537 9.75536V12.3179H2V6.2793ZM28 17.0033L2 16.7953V14.318H28V17.0033ZM28 12.318H14V6.7793H25C25.7954 6.78021 26.5579 7.09657 27.1203 7.65898C27.6827 8.22139 27.9991 8.98393 28 9.7793V12.318Z"
          fill="#01A669"
        />
      </svg>
    </>
  );
};
export default BedRoomIcon;
