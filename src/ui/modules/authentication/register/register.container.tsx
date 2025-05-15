import { RegisterFormFieldType } from "@/types/forms";
import { RegisterView } from "./register.view";
import { SubmitHandler, useForm } from "react-hook-form"
import { useState } from "react";

export const RegisterContainer = () => {

    const [isLoading, setIsLoading] = useState<boolean>(false);
     
    const {
        handleSubmit,
        formState: { errors },
        register,
        setError,
        reset
    } = useForm<RegisterFormFieldType>();

    const onSubmit: SubmitHandler<RegisterFormFieldType> = async (formData) => {
        setIsLoading(true);
        console.log("formData", formData); 
    }

    return (
        <RegisterView 
            form={{
                errors,
                register,
                handleSubmit,
                onSubmit,
                isLoading,
            }}
        />
    );
}