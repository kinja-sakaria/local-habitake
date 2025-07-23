'use client';

import { Fragment } from 'react';
import { Portal } from 'react-portal';

interface LoadingScreenProps {
  portal?: boolean;
  className?: string;
}

export function LoadingScreen({ portal, className }: LoadingScreenProps) {
  const PortalWrapper = portal ? Portal : Fragment;

  return (
    <PortalWrapper>
      <div
        className={`
          flex w-full min-h-screen items-center justify-center px-5
          ${className}
        `}
      >
        <div className="w-full max-w-[360px]">
          <div className="h-1 w-full bg-gray-200 relative overflow-hidden rounded">
            <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/50 to-transparent animate-[loading_1.2s_infinite_linear]"></div>
          </div>
        </div>
      </div>
    </PortalWrapper>
  );
}
