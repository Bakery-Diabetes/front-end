import clsx from "clsx";
import { Typography } from "../typography/typography";

interface Props {
    isLoading: boolean;
    placeholder: string;
    type?: "text" | "email" | "password";
    register: any;
    errors: any;
    errorMsg?: string;
    id: string;
    required?: boolean;
    isAutocompleted?: boolean;
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Input = ({
    isLoading,
    placeholder,
    type = "text",
    register,
    errors,
    errorMsg = "Tu dois renseigner ce champ",
    id,
    required = true,
    isAutocompleted = false,
    value,
    onChange,
}: Props) => {

    return (
        <div className="space-y-2">

            <input 
                type={type}  
                placeholder={placeholder} 
                className={clsx(
                    isLoading && "cursor-not-allowed",
                    errors[id] 
                        ? "placeholder-alert-danger text-alert-danger" 
                        : "placeholder-primary",
                    "w-full p-4 font-light bg-primary-beige border border-primary rounded focus:outline-none focus:ring-1 focus:ring-primary"
                )} 
                disabled={isLoading}
                {...register(id, {
                    required: {
                        value: required,
                        message: errorMsg,
                    },
                })}
                autoComplete={isAutocompleted ? "on" : "off "}
            />
            {errors[id] && (
                <Typography variant="caption4" component="div" theme="danger">
                    {errors[id]?.message}
                </Typography>
            )}

        </div>
    )
}