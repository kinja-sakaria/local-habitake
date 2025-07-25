import React from "react";

interface SVGIconProps extends React.SVGProps<SVGSVGElement> {
  stroke?: string;
}

const ResidentialIcon: React.FC<SVGIconProps> = ({ ...otherProps }) => {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="currentColor"
        {...otherProps}
      >
        <path
          d="M15.3686 30.1926H3.25V14.7226C3.25 13.3191 4.02519 12.0306 5.26456 11.3739L15.3686 6.02051V30.1926Z"
          stroke="currentColor"
          stroke-width="1.5"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M15.3699 30.1926H8.67969V20.7064C8.67969 18.6146 10.3754 16.9189 12.4671 16.9189H15.37L15.3699 30.1926Z"
          stroke="currentColor"
          stroke-width="1.5"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M20.6738 20.8262H23.4447"
          stroke="currentColor"
          stroke-width="1.5"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M20.6738 10.1475H23.4447"
          stroke="currentColor"
          stroke-width="1.5"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M20.6738 15.4863H23.4447"
          stroke="currentColor"
          stroke-width="1.5"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M22.0586 26.335V29.866"
          stroke="currentColor"
          stroke-width="1.5"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1.25 30.1924H30.75"
          stroke="currentColor"
          stroke-width="1.5"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M28.7498 23.943V9.19204C28.7498 7.73423 27.9141 6.40566 26.6006 5.77541L18.834 2.04854C17.2282 1.27804 15.3691 2.44935 15.3691 4.2316V30.1929H26.548"
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
export default ResidentialIcon;
