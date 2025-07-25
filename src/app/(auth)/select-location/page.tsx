import SelectLocationView from '@/components/view/auth/SelectLocationView';
import { authPageMetadata } from '@/constants/metadata';

export const metadata = authPageMetadata['select-location'];

export default function Page() {
  return <SelectLocationView />;
}
