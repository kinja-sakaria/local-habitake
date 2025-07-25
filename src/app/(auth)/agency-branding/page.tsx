import { authPageMetadata } from '@/constants/metadata';
import AgencyBrandView from '@/components/view/auth/AgencyBrandView';

export const metadata = authPageMetadata['agency-branding'];

export default function Page() {
  return <AgencyBrandView />;
}
