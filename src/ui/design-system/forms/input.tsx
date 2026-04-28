// DESIGN SYSTEM
import { Typography } from "../typography/typography";
// UTILS
import clsx from "clsx";
import { forwardRef } from "react";

interface Props {
    isLoading: boolean;
    placeholder: string;
    type?: "text" | "email" | "password" | "url" | "time";
    register: any;
    errors: any;
    errorMsg?: string;
    id: string;
    required?: boolean;
    isAutocompleted?: boolean;
    label?: string;
    value?: string;
    defaultValue?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;

}

export const Input = forwardRef<HTMLInputElement, Props>(({
    isLoading,
    placeholder,
    type = "text",
    register,
    errors,
    errorMsg = "Tu dois renseigner ce champ",
    id,
    required = true,
    isAutocompleted = false,
    label,
    value,
    onChange,
}, ref) => {

    return (
        <div className="space-y-2">
            {label && (
                <Typography 
                    variant="caption3" 
                    component="div"
                    theme={errors[id] ? "danger" : "primary"}
                >
                    {label}
                </Typography>
            )}

            <div className="flex items">
                {type === "url" && (
                    <div className="p-4 text-primary-500 border-l border-primary rounded-l bg-primary-500/25 border-y">
                        https://
                    </div>
                )}

                <input 
                    id={id}
                    name={id}
                    ref={ref} 
                    type={type}  
                    placeholder={placeholder} 
                    className={clsx(
                        type === "url" ? "rounded-r" : "rounded",
                        isLoading && "cursor-not-allowed",
                        errors[id] 
                            ? "placeholder-alert-danger text-alert-danger" 
                            : "placeholder-primary-500",
                        "w-full p-4 font-light bg-primary-beige border border-primary focus:outline-none focus:ring-1 focus:ring-primary"
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
            </div>

            {errors[id] && (
                <Typography variant="caption4" component="div" theme="danger">
                    {errors[id]?.message}
                </Typography>
            )}

        </div>
    );
});

Input.displayName = "Input";