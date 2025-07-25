import PropertyTypeView from '@/components/view/auth/PropertyTypeView';
import { authPageMetadata } from '@/constants/metadata';

export const metadata = authPageMetadata['property-type'];

export default function Page() {
  return <PropertyTypeView />;
}
