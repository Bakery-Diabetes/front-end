import { useAuth } from "@/context/authUserContext";
import { useToggle } from "@/hooks/use-toggle";
import { BaseComponentProps } from "@/types/onboarding-steps-list";
import { OnboardingFooter } from "../../footer/onboarding-footer";
import { Container } from "@/ui/components/container/container";
import { Typography } from "@/ui/design-system/typography/typography";
import { Logo } from "@/ui/design-system/logo/logo";
import { useCallback, useEffect, useRef } from "react";
import ReactCanvasConfetti from 'react-canvas-confetti';
import { firesoreUpdateDocument } from "@/api/firestore";
import { toast } from "react-toastify";


export const FinalStep = ({ isFinalStep}: BaseComponentProps) => {

    const { authUser, reloadAuthUserData } = useAuth();
    const { value: isLoading, toggle } = useToggle();

    // animation confetti
    const refAnimationInstance = useRef<((opts: any) => void) | null>(null);

    const getInstance = useCallback((instance: any) => {
        refAnimationInstance.current = instance;
    }, []);
    
    const makeShot = useCallback((particleRatio: number, opts: any) => {
        if (refAnimationInstance.current !== null) {
            refAnimationInstance.current({
                ...opts,
                origin: { y: 0.7 },
                particleCount: Math.floor(200 * particleRatio)
            })
        } 
    }, []);


    const fire = useCallback(() => {
        makeShot(0.25, {
            spread: 26,
            startVelocity: 55,

        });
        makeShot(0.2, {
            spread: 60,

        });
        makeShot(0.35, {
            spread: 100,
            delay: 0.91,
            scalar: 0.8

        });
        makeShot(0.1, {
            spread: 120,
            startVelocity: 25,
            delay: 0.92,
            scalar: 1.2,

        });
        makeShot(0.1, {
            spread: 120,
            startVelocity: 45,
        });
    }, [makeShot]);
    
    useEffect(() => {
        setTimeout(() => {
            fire()
        }, 50)
    }, [fire]);

    const handleCloseOnboarding = async () => {
        toggle();
        const { error } = await firesoreUpdateDocument("shops", authUser.uid, {
            onboardingIsCompleted: true
        });

        if (error) {
            toggle();
            toast.error(error.message);
            return;
        }
        reloadAuthUserData();
        toggle();
    };

    return (
        <>
        <ReactCanvasConfetti 
            onInit={({ confetti }) => getInstance(confetti)}
            style={{
                zIndex: 999,
                position: "fixed",
                width: "100%",
                height: "100%",
                top: -80,
                left: -0,
            }}
        />
            <div className="relative h-screen pb-[91px]">
                <div className="h-full overflow-auto ">
                    <Container className="h-full">
                        <div className="relative z-10 flex items-center h-full py-10">
                            <div className="w-full max-w-xl mx-auto space-y-5 pb-4.5">
                                <div className="flex justify-center">
                                    <Logo size="large" />
                                </div>
                                <Typography variant="h1" component="h1" className="text-center">
                                    Félicitations!
                                </Typography>
                                <Typography variant="body-base" component="p" className="text-center">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Suspendisse varius enim in eros elementum tristique. Duis
                                    cursus, mi quis viverra ornare, eros dolor interdum nulla, ut
                                    commodo diam libero vitae erat.
                                </Typography>
                            </div>    
                        </div>
                        
                    </Container>
                </div>
                <OnboardingFooter
                    next={handleCloseOnboarding}
                    isFinalStep={isFinalStep}
                    isLoading={isLoading}
                />
            </div>
        </>
    )
}