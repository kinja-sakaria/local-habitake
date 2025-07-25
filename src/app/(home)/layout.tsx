"use client";

import React, { useEffect, useState } from "react";
import Footer from "@/components/layout/Footer/page";
import Header from "@/components/layout/Header/page";

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <>
      {isClient && (
        <>
          <Header />
          {children}
          <Footer />
        </>
      )}
    </>
  );
}
