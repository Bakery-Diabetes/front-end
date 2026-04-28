// COMPONENTS
import { Seo } from "@/ui/components/seo/seo";
import { Session } from "@/ui/components/session/session";
// MODULES
import { OnboardingContainer } from "@/ui/modules/onboarding/onboarding.container";
// LIBRARY
import { REGISTERED } from "@/lib/session-status";

export default function Onboarding() {
  return (
    <>
      <Seo title="Onboarding" description="Onboarding" />

      <Session sessionStatus={REGISTERED}>
        <OnboardingContainer />
      </Session>
    </>
  );
}
