import clsx from "clsx";
import Link from "next/link";
import { useRouter } from "next/router";
import { useMemo } from "react";

interface Props {
    href: string;
    children: React.ReactNode;
    className?: string;
}

export const ActiveLink = ({href, children, className}: Props) => {

    const router = useRouter();

    const isActive: boolean = useMemo(() => {
        return router.pathname === href
    }, [router.pathname, href])

    return (
        <Link href={href} className={clsx(
            className,
            isActive && "active"
        )}>
            {children}
        </Link>
    )
}