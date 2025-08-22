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
            <Pattern />
            <FaqApercu />
        </>
    )
}