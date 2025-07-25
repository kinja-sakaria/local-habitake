import { authPageMetadata } from "@/constants/metadata";
import ConversationPageView from "@/components/view/conversation/ConversationView";

export const metadata = authPageMetadata["conversation"];

export default function Page() {
  return (
  
      <ConversationPageView />
 
  );
}
