// COMPONENTS
import { Pattern } from "@/ui/components/decoration/pattern"
import { BoutiquesOverviewView } from "./components/boutiques/boutiques-overview.view"
import { FaqApercu } from "./components/faq/faq-apercu"
import { HeroTopView } from "./components/hero-top/hero-top.view"

export const LandingPageView = () => {
    return (
        <>
            <HeroTopView />
            <BoutiquesOverviewView />
            <Pattern 
                src="/assets/svg/pattern.svg"
                repeat="repeat-x"
                className="h-32 md:h-28 w-full"
            />
            <FaqApercu />
        </>
    )
}