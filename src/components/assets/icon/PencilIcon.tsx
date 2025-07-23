
import React from "react";


interface SVGIconProps extends React.SVGProps<SVGSVGElement> {
    stroke?: string;
}

const PencilIcon: React.FC<SVGIconProps> = ({ ...otherProps }) => {
    return (
        <>
            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none" {...otherProps}>
                <path d="M8.06066 4.10618L10.7832 6.82868M8.06066 4.10618L9.61716 2.55078L12.3391 5.27328L10.7832 6.82868L8.06066 4.10618ZM8.06066 4.10618L2.77736 9.39003C2.67421 9.49315 2.61624 9.63302 2.61621 9.77888V12.2737H5.11101C5.25687 12.2736 5.39674 12.2157 5.49986 12.1125L10.7832 6.82868L8.06066 4.10618Z" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
        </>
    );
};
export default PencilIcon;
