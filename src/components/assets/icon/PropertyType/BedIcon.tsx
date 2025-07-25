import React from "react";

interface SVGIconProps extends React.SVGProps<SVGSVGElement> {
  stroke?: string;
}

const BedIcon: React.FC<SVGIconProps> = ({ ...otherProps }) => {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="currentColor"
        { ...otherProps }
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M0.666504 5.10909C0.666504 3.02415 2.35667 1.33398 4.4416 1.33398H12.1524C14.2374 1.33398 15.9275 3.02415 15.9275 5.10909V14.1051C15.9275 14.4156 15.6758 14.6673 15.3653 14.6673C15.0548 14.6673 14.8031 14.4156 14.8031 14.1051V12.097H1.791V14.1051C1.791 14.4156 1.53927 14.6673 1.22875 14.6673C0.918231 14.6673 0.666504 14.4156 0.666504 14.1051V5.10909ZM1.791 10.9725H14.8031V9.52676H1.791V10.9725ZM1.791 8.40226H3.23678C3.23678 3.06098 13.3573 3.06098 13.3573 8.40226H14.8031V5.10909C14.8031 3.6452 13.6163 2.45848 12.1524 2.45848H4.4416C2.97772 2.45848 1.791 3.6452 1.791 5.10909V8.40226ZM4.36128 8.40226C4.36128 4.3818 12.2328 5.01198 12.2328 8.40226H4.36128Z"
          fill="currentColor"
        />
      </svg>
    </>
  );
};
export default BedIcon;
