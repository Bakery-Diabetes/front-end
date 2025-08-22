// CONTEXT
import { useAuth } from "@/context/authUserContext";
// LIBRARY
import { GUEST, REGISTERED } from "@/lib/session-status";
import { SessionStatusTypes } from "@/types/session-status-types";
// DESIGN SYSTEM
import { ScreenSpinner } from "@/ui/design-system/spinner/screen-spinner";
// UTILS
import { useRouter } from "next/router";

interface Props {
    children: React.ReactNode;
    sessionStatus?: SessionStatusTypes; 
}

export const Session = ({ children, sessionStatus }: Props) => {

    const router = useRouter();
    const { authUserIsLoading, authUser } = useAuth();
    const onboardingIsCompleted = authUser?.shopDocument?.onboardingIsCompleted;

    const shouldRedirectToOnboarding = () => {
        return (
            !authUserIsLoading && 
            authUser &&
            !onboardingIsCompleted &&
            router.asPath !== "/onboarding"
        )
    };

    const shouldNotRedirectToOnboarding = () => {
        return (
            !authUserIsLoading && 
            authUser &&
            onboardingIsCompleted &&
            router.asPath === "/onboarding"
        )
    };

    if (shouldRedirectToOnboarding()) {
        router.push("/onboarding");
        return <ScreenSpinner />;
    }

    if (shouldNotRedirectToOnboarding()) {
        router.push("/mon-espace");
        return <ScreenSpinner />;
    }

    if (sessionStatus === GUEST && !authUserIsLoading) {
        if (!authUser) {
            return <>{children}</>;
        } else {
            router.push("/mon-espace");
        }
    };

    if (sessionStatus === REGISTERED && !authUserIsLoading) {
        if (authUser) {
            return <>{children}</>;
        } else {
            router.push("/connexion");
        }
    };

    if (!sessionStatus && !authUserIsLoading) {
        return <>{children}</>;
    };

    return <ScreenSpinner />;
}