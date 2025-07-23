import { authPageMetadata } from '@/constants/metadata';
import ResetPasswrodView from '@/components/view/(auth)/ResetPasswordview';

export const metadata = authPageMetadata['reset-password'];

export default function Page() {
  return <ResetPasswrodView />;
}
