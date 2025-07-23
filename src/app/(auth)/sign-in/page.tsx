import { authPageMetadata } from '@/constants/metadata';
import SignInView from '@/components/view/(auth)/SignInView';

export const metadata = authPageMetadata['sign-in'];

export default function Page() {
  return <SignInView />;
}
