import { authPageMetadata } from "@/constants/metadata";
import ConversationPageView from "@/components/view/(conversation)/ConversationView";

export const metadata = authPageMetadata["conversation"];

export default function Page() {
  return (
    <section className="relative z-10  lg:pt-32 tablet:pt-28  mobile:pt-28">
      <ConversationPageView />
    </section>
  );
}
