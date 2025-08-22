// DESIGN SYSTEM
import { Typography } from "@/ui/design-system/typography/typography";
// UTILS
import clsx from "clsx";

interface Props {
    label: string;
    className?: string;
}

export const Tag = ({ label, className }: Props) => {
    return (
        <span className={clsx("bg-secondary text-primary text-xs px-2 py-1 rounded-full", className)}>
            <Typography variant="caption4">{label}</Typography>
        </span>
    );
};
