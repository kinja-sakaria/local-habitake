"use client";

import { Fragment } from "react";
import { m } from "framer-motion";
import { Portal } from "react-portal";
import { HabitakeLogo } from "../assets";

interface SplashScreenProps {
  portal?: boolean;
  className?: string;
  wrapperClassName?: string;
}

export function SplashScreen({
  portal = true,
  className,
  wrapperClassName,
}: SplashScreenProps) {
  const PortalWrapper = portal ? Portal : Fragment;

  const renderLogo = () => (
    <m.div
      animate={{
        scale: [1, 0.96, 1, 0.96, 1],
        opacity: [1, 0.48, 1, 0.48, 1],
      }}
      transition={{
        duration: 2,
        repeatDelay: 1,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      <HabitakeLogo className="w-full h-full bg-black " />
    </m.div>
  );

  return (
    <PortalWrapper>
      <div className={`flex flex-col grow ${wrapperClassName ?? ""}`}>
        <div
          className={`fixed inset-0 z-[9998] flex items-center justify-center bg-black ${className ?? ""}`}
        >
          {renderLogo()}
        </div>
      </div>
    </PortalWrapper>
  );
}
