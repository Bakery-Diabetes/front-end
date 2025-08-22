import clsx from "clsx";

interface Props {
    variant?: 
        | "display" 
        | "h1" 
        | "h2" 
        | "h3" 
        | "h4" 
        | "h5" 
        | "h6" 
        | "lead" 
        | "body-lg" 
        | "body-base" 
        | "body-sm" 
        | "caption1" 
        | "caption2" 
        | "caption3" 
        | "caption4";
    component?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "div" | "p" | "span";
    theme?: "black" | "gray" | "white" | "primary" | "primary-beige" | "primary-300" | "secondary" | "danger" | "success" | "warning";
    weight?: "regular" | "medium" | "bold";
    className?: string;
    children: React.ReactNode;
}

export const Typography = ({
    variant = "h3",
    component: Component = "div",
    theme = "primary",
    weight = "regular",
    className,
    children, 
    
}: Props) => {

    let variantStyles: string = "", colorStyles: string = "";

    switch (variant) {
        case "display":
            variantStyles = "text-8xl";
            break;
        case "h1":
            variantStyles = "text-7xl";
            break;
        case "h2":
            variantStyles = "text-6xl";
            break;
        case "h3": // default
            variantStyles = "text-5xl";
            break;
        case "h4":
            variantStyles = "text-4xl";
            break;
        case "h5":
            variantStyles = "text-3xl";
            break;
        case "h6":
            variantStyles = "text-2xl";
            break;
        case "lead":
            variantStyles = "text-xl";
            break;
        case "body-lg":
            variantStyles = "text-lg";
            break;
        case "body-base":
            variantStyles = "text-base";
            break;
        case "body-sm":
            variantStyles = "text-sm";
            break;
        case "caption1":
            variantStyles = "text-caption1";
            break;
        case "caption2":
            variantStyles = "text-caption2";
            break;
        case "caption3":
            variantStyles = "text-caption3";
            break;
        case "caption4":
            variantStyles = "text-caption4";
            break;
    }

    switch (theme) {
        case "black": 
            colorStyles = "text-gray";
            break;
        case "gray":
            colorStyles = "text-gray-700";
            break;
        case "white":
            colorStyles = "text-white";
            break;
        case "primary": // Default
            colorStyles = "text-primary";
            break;
        case "primary-beige": 
            colorStyles = "text-primary-beige";
            break;
        case "primary-300": 
            colorStyles = "text-primary-300";
            break;
        case "secondary":
            colorStyles = "text-secondary";
            break;
        case "danger":
            colorStyles = "text-alert-danger";
            break;
        case "success":
            colorStyles = "text-alert-success";
            break;
        case "warning":
            colorStyles = "text-alert-warning";
            break;
    }

    return (
        <Component 
            className={clsx(
                variantStyles,
                colorStyles,
                weight === "medium" && "font-medium",
                weight === "bold" && "font-bold",
                className,
            )}
        >
            {children}
        </Component>
    );
}