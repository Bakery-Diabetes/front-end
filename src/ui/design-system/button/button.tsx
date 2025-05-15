// DESIGN SYSTEM
import { Spinner } from "../spinner/spinner";
// TYPES
import { IconProps } from "@/types/iconProps";
// UTILS
import clsx from "clsx";
import Link from "next/link";
// LIBRARY
import { LinkType, LinkTypes } from "@/lib/link-type";


interface Props {
    size?: "small" | "medium" | "large";
    variant?: "primary" | "secondary" | "disabled" | "ico";
    icon?: IconProps;
    iconTheme?: "primary" | "secondary" | "gray";
    iconPosition?: "left" | "right";
    disabled?: boolean;
    isLoading?: boolean;
    children?: React.ReactNode;
    baseUrl?: string;
    linkType?: LinkType;
    action?: Function;
    fullWidth?: boolean;
    type?: "button" | "submit";
    onClick?: () => void;
    
}

export const Button = ({
    size = "medium",
    variant = "primary",
    icon,
    iconTheme = "primary",
    iconPosition = "right",
    disabled,
    isLoading,
    children,
    baseUrl,
    linkType = "internal",
    action = () => {},
    fullWidth = false,
    type = "button",
    onClick,
}: Props) => {

    let variantStyles: string = "", sizeStyles: string = "", icoSize: number = 0;

    switch (variant) {
        case "primary": // Default
            variantStyles = "bg-primary hover:bg-secondary  hover:text-primary border text-white rounded";
            break;
        case "secondary":
            variantStyles = "bg-primary-beige hover:bg-secondary border text-primary rounded";
            break;
        case "disabled":
            variantStyles = "bg-gray-400 border border-gray-500 text-gray-600 rounded cursor-not-allowed";
            break;
        case "ico":
            if (iconTheme === "primary") { 
                // Default
                variantStyles = 
                    "bg-primary hover:bg-secondary border hover:text-primary text-white rounded"
            }
            if (iconTheme === "secondary") {
                variantStyles = 
                    "bg-primary-beige hover:bg-secondary border text-primary rounded"
            }
            if (iconTheme === "gray") {
                variantStyles = 
                    "bg-gray-700 hover:bg-gray-600 text-white rounded"
            }
            break;

    }

    switch (size) {
        case "small":
            sizeStyles = `text-caption3 font-medium ${
                variant === "ico" ? "flex items-center justify-center w-[40px] h-[40px]" : "px-[14px] py-[12px]"
            }`;
            icoSize = 18;
            break;
        case "medium": // Default
            sizeStyles = `text-caption2 font-medium ${
                variant === "ico" ? "flex items-center justify-center w-[50px] h-[50px]" : "px-[18px] py-[15px]"
            }`;
            icoSize = 20;
            break;
        case "large":
            sizeStyles = `text-caption1 font-medium ${
                variant === "ico" ? "flex items-center justify-center w-[60px] h-[60px]" : "px-[22px] py-[18px]"
            }`;
            icoSize = 24;
            break;
    
    }


    const handleClick = () => {
        if (!disabled && !isLoading && onClick) {
          onClick();
        }
    };
      


    const buttonContent = (
        <>
            {isLoading && (
                <div className="absolute inset-0 flex items-center justify-center">
                    {(variant === "primary" || (variant === "ico" && (iconTheme === "primary" || iconTheme === "gray"))) ? (
                        <Spinner size="small" variant="white" />
                    ) : (
                        <Spinner size="small" />
                    )}
                </div>
            )}

            <div className={clsx(isLoading && "invisible")}>

                {icon && variant === "ico" ? (
                    <icon.icon size={icoSize} /> 
                ) : ( 

                    


                    <div className={clsx(icon && "flex items-center gap-2")}>

                        
                        {icon && iconPosition === "left" && (
                            <icon.icon size={icoSize} /> 
                        )}
                        {children}
                        {icon && iconPosition === "right" && (
                            <icon.icon size={icoSize} /> 
                        )}
                    </div>
                )}

            </div>
        </>
    );

    const buttonElement = (
        <button
            type={type}
            className={clsx(
                variantStyles, 
                sizeStyles, 
                icoSize,
                fullWidth && "w-full", 
                isLoading && "cursor-not-allowed",
                "relative animate"
            )} 
            onClick={handleClick} 
            disabled={disabled || isLoading ? true :  false}
        > 
            {buttonContent}
        </button>
    );


    if (baseUrl) {
        return linkType === LinkTypes.EXTERNAL ? (
            <a 
                href={baseUrl}
                target="_blank" 
                className={clsx(fullWidth && "w-full")}
            >
                {buttonElement}
            </a>
        ) : (
            <Link href={baseUrl} className={clsx(fullWidth && "w-full")}>
                {buttonElement}
            </Link>
        );
    };

    return buttonElement;
}