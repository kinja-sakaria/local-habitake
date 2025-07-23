import Link from "next/link";
import { HeaderItem } from "@/types/menu";

const MobileHeaderLink: React.FC<{ item: HeaderItem; activeSection: string }> = ({ item, activeSection }) => {
  const sectionId = item.href.replace("/#", "");

  const isActive = activeSection === sectionId;

  return (
    <div className="relative w-full">
      <Link
        href={item.href}
        className={`flex items-center justify-between py-2 px-2 mb-2 rounded-3xl focus:outline-none
            ${isActive
            ? "bg-primaryBlue text-white font-bold "
            : "text-primaryBlack hover:bg-primaryBlue hover:text-white hover:font-bold"
          }`}
      >
        {item.label}
      </Link>
    </div>
  );
};

export default MobileHeaderLink;
