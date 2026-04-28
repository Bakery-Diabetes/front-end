// API'S
import { sendEmailToResetPassword } from "@/api/authentication";
// HOOKS
import { useToggle } from "@/hooks/use-toggle";
// TYPES
import { ForgetPasswordFormFieldType } from "@/types/forms";
// UTILS
import { useRouter } from "next/router";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { ForgetPasswordView } from "./forget-password.view";

export const ForgetPasswordContainer = () => {
    
    const router = useRouter();
    const { value: isLoading, setValue: setIsLoading, } = useToggle();
            
    const {
        handleSubmit,
        formState: { errors },
        register,
        reset
    } = useForm<ForgetPasswordFormFieldType>();

    const handleResetPassword = async ({email}: ForgetPasswordFormFieldType) => {
        const { error } = await sendEmailToResetPassword(email);

        if (error) {
            setIsLoading(false);
            toast.error(error.message);
            return;
        }
        toast.success(`Un e-mail a été expédié à l'adresse ${email}`);
        setIsLoading(false);
        reset();
        router.push("/connexion");
    }

    const onSubmit: SubmitHandler<ForgetPasswordFormFieldType> = async (formData) => {
        setIsLoading(true);
        handleResetPassword(formData);
    }

    return (
        <ForgetPasswordView 
            form={{
                errors,
                register,
                handleSubmit,
                onSubmit,
                isLoading,
            }}
        />
    )
}