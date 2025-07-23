import React from "react";

interface SVGIconProps extends React.SVGProps<SVGSVGElement> {
  stroke?: string;
}

const ViewerIcon: React.FC<SVGIconProps> = ({ ...otherProps }) => {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="25"
        viewBox="0 0 24 25"
        fill="none"
        { ...otherProps }
      >
        <path
          d="M12 19.6664C14.7 19.6664 16.8889 17.4776 16.8889 14.7776C16.8889 12.0775 14.7 9.88867 12 9.88867C9.29991 9.88867 7.11108 12.0775 7.11108 14.7776C7.11108 17.4776 9.29991 19.6664 12 19.6664Z"
          fill="#01A669"
        />
        <path
          d="M23 14.7778C23 14.7778 21.7778 5 12 5C2.22222 5 1 14.7778 1 14.7778"
          stroke="#01A669"
          stroke-width="1.66667"
        />
      </svg>
    </>
  );
};
export default ViewerIcon;
