import React from "react";

interface SVGIconProps extends React.SVGProps<SVGSVGElement> {
  stroke?: string;
}

const TablerAiIcon: React.FC<SVGIconProps> = ({ ...otherProps }) => {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="52"
        height="52"
        viewBox="0 0 52 52"
        fill="none"
        {...otherProps}
      >
        <path
          d="M32.4996 17.3333H32.5213M21.6663 45.5H12.9996C11.2757 45.5 9.62243 44.8152 8.40344 43.5962C7.18445 42.3772 6.49963 40.7239 6.49963 39V13C6.49963 11.2761 7.18445 9.62279 8.40344 8.40381C9.62243 7.18482 11.2757 6.5 12.9996 6.5H38.9996C40.7235 6.5 42.3768 7.18482 43.5958 8.40381C44.8148 9.62279 45.4996 11.2761 45.4996 13V23.8333"
          stroke="white"
          stroke-width="4"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M6.49963 34.6663L17.333 23.833C19.3436 21.8981 21.8223 21.8981 23.833 23.833L25.9996 25.9996M30.333 45.4996V36.833C30.333 35.6837 30.7895 34.5815 31.6022 33.7688C32.4148 32.9562 33.517 32.4996 34.6663 32.4996C35.8156 32.4996 36.9178 32.9562 37.7304 33.7688C38.5431 34.5815 38.9996 35.6837 38.9996 36.833V45.4996M30.333 41.1663H38.9996M45.4996 32.4996V45.4996"
          stroke="white"
          stroke-width="4"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </>
  );
};
export default TablerAiIcon;
