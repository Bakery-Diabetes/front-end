import { SubmitHandler, useForm } from "react-hook-form";
import { ForgetPasswordView } from "./forget-password.view"
import { useState } from "react";
import { ForgetPasswordFormFieldType } from "@/types/forms";

export const ForgetPasswordContainer = () => {

    const [isLoading, setIsLoading] = useState<boolean>(false);
            
    const {
        handleSubmit,
        formState: { errors },
        register,
        setError,
        reset
    } = useForm<ForgetPasswordFormFieldType>();

    const onSubmit: SubmitHandler<ForgetPasswordFormFieldType> = async (formData) => {
        setIsLoading(true);
        console.log("formData", formData); 
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