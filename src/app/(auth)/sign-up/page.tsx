import dynamic from 'next/dynamic';
import { authPageMetadata } from '@/constants/metadata';

const SignUpView = dynamic(() => import('../../../components/view/auth/SignUpView'), {
  ssr: false,
});

export const metadata = authPageMetadata['sign-up'];

export default function Page() {
  return <SignUpView  />;
}
 