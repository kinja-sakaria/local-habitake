
import React from "react";


interface SVGIconProps extends React.SVGProps<SVGSVGElement> {
  stroke?: string;
}

const UploadPhoto: React.FC<SVGIconProps> = ({ ...otherProps }) => {
  return (
    <>
      
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" {...otherProps}>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M12 2.875C6.9604 2.875 2.875 6.9604 2.875 12C2.875 17.0396 6.9604 21.125 12 21.125C17.0396 21.125 21.125 17.0396 21.125 12C21.125 6.9604 17.0396 2.875 12 2.875ZM1.125 12C1.125 5.9939 5.9939 1.125 12 1.125C18.0061 1.125 22.875 5.9939 22.875 12C22.875 18.0061 18.0061 22.875 12 22.875C5.9939 22.875 1.125 18.0061 1.125 12Z" fill="#545A70" />
        <path fill-rule="evenodd" clip-rule="evenodd" d="M12 7.125C12.4832 7.125 12.875 7.51675 12.875 8V16C12.875 16.4832 12.4832 16.875 12 16.875C11.5168 16.875 11.125 16.4832 11.125 16V8C11.125 7.51675 11.5168 7.125 12 7.125Z" fill="#545A70" />
        <path fill-rule="evenodd" clip-rule="evenodd" d="M7.125 12C7.125 11.5168 7.51675 11.125 8 11.125H16C16.4832 11.125 16.875 11.5168 16.875 12C16.875 12.4832 16.4832 12.875 16 12.875H8C7.51675 12.875 7.125 12.4832 7.125 12Z" fill="#545A70" />
      </svg>
    </>
  );
};
export default UploadPhoto;
