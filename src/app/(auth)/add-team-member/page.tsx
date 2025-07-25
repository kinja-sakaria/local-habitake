import AddTeamMemberView from '@/components/view/auth/AddTeamMemberView';
import { authPageMetadata } from '@/constants/metadata';

export const metadata = authPageMetadata['add-team-member'];

export default function Page() {
  return <AddTeamMemberView />;
}
