import { BaseComponentProps } from "@/types/onboarding-steps-list";
import { OnboardingFooter } from "../../footer/onboarding-footer";
import { Container } from "@/ui/components/container/container";
import { OnboardingTabs } from "../../tabs/onboarding-tabs";
import { Typography } from "@/ui/design-system/typography/typography";
import { ProfileStepForm } from "./profile-step-form";
import { SubmitHandler, useForm } from "react-hook-form";
import { OnboardingProfileFormFieldsType } from "@/types/forms";
import { useToggle } from "@/hooks/use-toggle";
import { firesoreUpdateDocument } from "@/api/firestore";
import { useAuth } from "@/context/authUserContext";
import { toast } from "react-toastify";
import { useEffect } from "react";
import { updateShopIdentificationData } from "@/api/authentication";

export const ProfileStep = ({
        prev,
        next,
        isFirstStep,
        isFinalStep,
        stepList,
        getCurrentStep
}: BaseComponentProps) => {

    const { authUser } = useAuth();
    console.log('authUser', authUser);

    const {value: isLoading, setValue: setLoading} = useToggle();

    const {
        handleSubmit,
        control,
        formState: { errors },
        register,
        reset,
        setValue,
        trigger,
        
    } = useForm<OnboardingProfileFormFieldsType>();

    const { displayName, description, categories, adresse } = authUser.shopDocument;

    useEffect(() => {
        type key = "displayName" | "description" | "categories" | "adresse";
        const fieldsToUpdate: key[] = ["displayName", "description", "categories", "adresse"];

        for (const field of fieldsToUpdate) {
            const raw = (authUser.shopDocument as Record<key, string | string[] | undefined>)[field];

            const safe =
            field === "categories"
                ? ((raw as string[] | undefined) ?? [])
                : ((raw as string | undefined) ?? "");

            setValue(field as any, safe as any);
        }

    }, [authUser.shopDocument, setValue]);


    const handleUpdateUserDocument = async (
        formData: OnboardingProfileFormFieldsType
    ) => {
        const { error } = await firesoreUpdateDocument(
            "shops",
            authUser.uid,
            formData
        );

        if (error) {
            setLoading(false);
            toast.error(error.message);
            return;
        }

        setLoading(false);
        reset();
        next();
    }
   

    const onSubmit: SubmitHandler<OnboardingProfileFormFieldsType> = async (
        formData
    ) => {
        setLoading(true);

        if (
            displayName !== formData.displayName ||
            description !== formData.description ||
            categories !== formData.categories ||
            adresse !== formData.adresse
        ) {
            if (
                displayName !== formData.displayName || authUser.displayName !== formData.displayName
            ) {
                const data = {
                    displayName: formData.displayName
                };

                const { error } = await updateShopIdentificationData(
                    authUser.uid,
                    data
                );

                if (error) {
                    setLoading(false);
                    toast.error(error.message);
                    return;
                };
            }
            handleUpdateUserDocument(formData);
        }
        setLoading(false);
        next();
    }

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
                                Présente ta boutique !
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
                        <div className="flex justify-end w-full">
                            <ProfileStepForm 
                                form={{
                                    errors,
                                    control,
                                    register,
                                    handleSubmit,
                                    onSubmit,
                                    isLoading,
                                    setValue,
                                    trigger
                                }}

                            />
                        </div>
                    </div>
                </Container>
            </div>
            <OnboardingFooter
                prev={prev}
                next={handleSubmit(onSubmit)}
                isFirstStep={isFirstStep}
                isFinalStep={isFinalStep}
                isLoading={isLoading}
            />
        </div>
    )
};