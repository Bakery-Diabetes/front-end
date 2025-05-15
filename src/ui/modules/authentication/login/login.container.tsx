import { useState } from "react";
import { LoginView } from "./login.view"
import { SubmitHandler, useForm } from "react-hook-form";
import { LoginFormFieldType } from "@/types/forms";

export const LoginContainer = () => {

    const [isLoading, setIsLoading] = useState<boolean>(false);
        
    const {
        handleSubmit,
        formState: { errors },
        register,
        setError,
        reset
    } = useForm<LoginFormFieldType>();

    const onSubmit: SubmitHandler<LoginFormFieldType> = async (formData) => {
        setIsLoading(true);
        console.log("formData", formData); 
    }


    return (
        <LoginView 
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