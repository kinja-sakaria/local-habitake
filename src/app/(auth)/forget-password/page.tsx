import { authPageMetadata } from '@/constants/metadata';
import ForgetPasswordView from '@/components/view/auth/ForgetPasswordView';

export const metadata = authPageMetadata['forget-password'];

export default function Page() {
  return <ForgetPasswordView />;
}
