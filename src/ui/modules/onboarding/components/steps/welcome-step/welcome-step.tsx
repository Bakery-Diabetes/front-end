import { BaseComponentProps } from "@/types/onboarding-steps-list";
import { OnboardingFooter } from "../../footer/onboarding-footer";
import { Container } from "@/ui/components/container/container";
import { Typography } from "@/ui/design-system/typography/typography";
import Image from "next/image";
import { OnboardingTabs } from "../../tabs/onboarding-tabs";

export const WelcomeStep = ({
    next,
    isFirstStep,
    isFinalStep,
    stepList,
    getCurrentStep
}: BaseComponentProps) => {
  return (
    <div className="relative h-screen pb-[91px]">
      <div className="h-full overflow-auto ">
        <Container className="grid h-full grid-cols-12">
          <div className="relative z-10 flex items-center h-full col-span-6 py-10">
            <div className="w-full space-y-5 pb-4.5">
              <OnboardingTabs 
                tabs={stepList}
                getCurrentStep={getCurrentStep}
              />
              <Typography variant="h1" component="h1">
                Bienvenue sur Bakery & Diabetes
              </Typography>
              <Typography variant="body-base" component="p">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique. Duis
                cursus, mi quis viverra ornare, eros dolor interdum nulla, ut
                commodo diam libero vitae erat.
              </Typography>
            </div>
          </div>
          <div className="flex items-center h-full col-span-6">
            <div className="w-full">
                <Image 
                    src="/assets/images/hero.jpg"
                    alt="illu"
                    width={811}
                    height={596}
                />
            </div>
          </div>
        </Container>
      </div>
      <OnboardingFooter
        next={next}
        isFirstStep={isFirstStep}
        isFinalStep={isFinalStep}
      />
    </div>
  );
};
