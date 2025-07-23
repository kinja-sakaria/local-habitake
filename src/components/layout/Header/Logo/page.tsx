import React from "react";
import Link from "next/link";
import { HabitakeLogo, HabitakeLogoTransparent } from "@/components/assets";

interface LogoProps {
  sticky: boolean;
}

const Logo: React.FC<LogoProps> = ({ sticky }) => {
  return (
    <Link href="/">
      <div className="h-[54px] w-[108px] mobile:w-24">
        {sticky ? <HabitakeLogo  className="w-full h-full "/> : <HabitakeLogoTransparent className="w-full h-full "/>}
      </div>
    </Link>
  );
};

export default Logo;
