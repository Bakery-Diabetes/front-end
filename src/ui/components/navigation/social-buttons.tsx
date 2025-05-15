// DESIGN SYSTEM
import { Button } from "@/ui/design-system/button/button";
// TYPES
import { footerSocialLinks } from "./app-links";
// ICONS
import { RiFacebookBoxFill } from "react-icons/ri";
// UTILS
import { v4 as uuidv4} from "uuid";
import clsx from "clsx";

interface Props {
    theme?: "primary" | "secondary";
    className?: string;
}

export const SocialButtons = ({ 
    className,
    theme = "primary",
}: Props) => {

    const icoList = footerSocialLinks.map((socialNetwork) => (
        <Button 
            key={uuidv4()}
            variant="ico"
            iconTheme={theme}
            icon={{ 
                icon: socialNetwork.icon ? socialNetwork.icon : RiFacebookBoxFill
            }}
            baseUrl={socialNetwork.baseUrl}
            linkType={socialNetwork.type}
        />
    ));

    return (
        <div className={clsx(className, "flex items-center gap-2.5")}>
            {icoList}
        </div>
    )
}