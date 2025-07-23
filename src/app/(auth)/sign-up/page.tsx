import { authPageMetadata } from '@/constants/metadata';
import SignUpView from '@/components/view/(auth)/SignUpView';

export const metadata = authPageMetadata['sign-up'];

export default function Page() {
  return <SignUpView  />;
}
 