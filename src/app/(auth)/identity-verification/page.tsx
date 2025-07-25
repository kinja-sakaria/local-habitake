import { authPageMetadata } from '@/constants/metadata';
import IdentityVerificationView from '@/components/view/auth/IdentityVerificationView';

export const metadata = authPageMetadata['identity-verification'];

export default function Page() {
  return <IdentityVerificationView />;
}
 