"use client";
import Link from "next/link";
import { HeaderItem } from "@/types/menu";

const HeaderLink: React.FC<{ item: HeaderItem; activeSection: string }> = ({ item, activeSection }) => {
  const sectionId = item.href.replace("/#", "");

  const isActive = activeSection === sectionId;

  return (
    <div className="relative">
      <Link
        href={item.href}
        className={`px-4 py-2 rounded-3xl leading-extra-tight transition-colors duration-200
          ${isActive
            ? "bg-white/20 text-white font-bold"
            : "text-white/60 hover:text-white hover:bg-white/20 hover:font-bold"
          }`}
      >
        {item.label}
      </Link>
    </div>
  );
};

export default HeaderLink;
