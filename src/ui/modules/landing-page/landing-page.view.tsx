// COMPONENT
import { BoutiquesOverviewView } from "./components/boutiques/boutiques-overview.view"
import { HeroTopView } from "./components/hero-top/hero-top.view"

export const LandingPageView = () => {
    return (
        <>
            <HeroTopView />
            <BoutiquesOverviewView />
        </>
    )
}