import { authPageMetadata } from '@/constants/metadata';
import SignUpView from '../../../components/view/(auth)/SignInView';

export const metadata = authPageMetadata['sign-up'];

export default function Page() {
  return <SignUpView  />;
}
 