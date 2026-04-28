import clsx from "clsx";
import Link from "next/link";
import { useRouter } from "next/router";
import { MouseEventHandler, useMemo } from "react";

interface Props {
    href: string;
    children: React.ReactNode;
    className?: string;
    onClick?: MouseEventHandler<HTMLAnchorElement>;
}

export const ActiveLink = ({href, children, className, onClick}: Props) => {

    const router = useRouter();

    const isActive: boolean = useMemo(() => {
        return router.pathname === href
    }, [router.pathname, href])

    return (
        <Link 
            href={href} 
            onClick={onClick}
            className={clsx(
                className,
                isActive && "active"
        )}>
            {children}
        </Link>
    )
}