import { useRouter } from "next/navigation";

export interface TitleContentProps {
  router: ReturnType<typeof useRouter>;
}
export interface UseRoleProps {
  userRole: string;
}

export interface PropertiesSectionProps {
  userRole: "buyer" | "seller" | "agency" | string;
  router: ReturnType<typeof useRouter>;
}

export interface  Property {
  id: number; 
  image: string;
  title: string;
  price?: string;
  location?: string;
  bedrooms?: number;
  bathrooms?: number;
  views?: number;
}

export interface PropertyCardProps {
  property: Property;
  isActive: boolean;
  userRole: string;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}