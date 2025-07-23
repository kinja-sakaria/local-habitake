import React from "react";
import Footer from "@/components/layout/Footer/page";
import Header from "@/components/layout/Header/page";

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
