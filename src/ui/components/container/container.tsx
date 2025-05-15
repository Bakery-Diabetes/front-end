// UTILS
import clsx from "clsx";

interface Props {
    children: React.ReactNode;
    className?: string;
    noPadding?: boolean;
}

export const Container = ({children, className, noPadding}: Props) => {



    return (
        <div className={clsx(
            "w-full max-w-7xl mx-auto", 
            !noPadding && "px-5 lg:px-10",
            className
        )}>
            {children}
        </div>

    )
}