// DESIGN SYSTEM
import { Typography } from "../typography/typography";
// UTILS
import clsx from "clsx";

interface Props {
    isLoading: boolean;
    placeholder: string;
    rows?: number;
    register: any;
    errors: any;
    errorMsg?: string;
    id: string;
    required?: boolean;
    isAutocompleted?: boolean;
    label?: string;
}

export const Textarea = ({
    isLoading,
    placeholder,
    rows = 5,
    register,
    errors,
    errorMsg = "Tu dois renseigner ce champ",
    id,
    required = true,
    isAutocompleted = false,
    label,
}: Props) => {
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
            <textarea 
                rows={rows}
                placeholder={placeholder}
                className={clsx(
                    isLoading 
                        ? "bg-gray-500 focus:ring-gray-700 cursor-not-allowed" 
                        : "bg-primary-beige",
                    errors[id] 
                        ? "placeholder-alert-danger text-alert-danger" 
                        : "placeholder-primary",
                    "w-full p-4 font-light border border-primary rounded focus:outline-none focus:ring-1 focus:ring-primary"
                )}
                disabled={isLoading}
                {...register(id, {
                    required: {
                        value: required,
                        message: errorMsg,
                    }
                })}
                autoComplete={isAutocompleted ? "on" : "off"}
            />
            {errors[id] && (
                <Typography variant="caption4" component="div" theme="danger">
                    {errors[id]?.message}
                </Typography>
            )}
        </div>
    );
}