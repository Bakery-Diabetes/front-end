import { Button } from "@/ui/design-system/button/button";
import clsx from "clsx";

interface Props {
    next?: () => void;
    prev?: () => void;
    isFirstStep?: () => boolean;
    isFinalStep?: () => boolean;
    isLoading?: boolean;
}

export const OnboardingFooter = ({
    prev,
    next,
    isFirstStep,
    isFinalStep,
    isLoading
}: Props) => {

    let actionButtonTitle: string;

    if (isFirstStep && isFirstStep()) {
        actionButtonTitle = "Démarrer"
    } else if (isFinalStep && isFinalStep()) {
        actionButtonTitle = "Terminer"
    } else {
        actionButtonTitle = "Continuer"
    }

    return (
        <div className="absolute bottom-0 left-0 w-full p-5 bg-primary-beige border-t border-x-gray-400">
            <div className={clsx(
                prev && !next && "justify-start",
                !prev && next && "justify-end",
                prev && next && "justify-between",
                "flex items-center gap-5"
            )}>
                {prev && (
                    <Button
                        disabled={isLoading}
                        variant={!isLoading ? "secondary" : "disabled"}
                        onClick={prev}
                    >
                        Retour
                    </Button>
                )}

                {next && (
                    <Button isLoading={isLoading} onClick={next}>
                        {actionButtonTitle}
                    </Button>
                )}
            </div>
        </div>
    )
}