import React from "react";
import Link from "next/link";
import { HabitakeLogo, HabitakeLogoTransparent } from "@/components/assets";

interface LogoProps {
  sticky: boolean;
  isBlackBg: boolean;
}

const Logo: React.FC<LogoProps> = ({ sticky, isBlackBg }) => {
  const showDefaultLogo = isBlackBg || sticky;

  return (
    <Link href="/">
      <div className="h-[54px] w-[108px] mobile:w-24">
        {showDefaultLogo ? (
          <HabitakeLogo className="w-full h-full" />
        ) : (
          <HabitakeLogoTransparent className="w-full h-full" />
        )}
      </div>
    </Link>
  );
};

export default Logo;
