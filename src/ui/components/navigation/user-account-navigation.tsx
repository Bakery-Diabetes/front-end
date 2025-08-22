// API'S
import { firebaseLogoutUser } from "@/api/authentication";
// DESIGN SYSTEM
import { Box } from "@/ui/design-system/box/box";
import { Button } from "@/ui/design-system/button/button";
import { Typography } from "@/ui/design-system/typography/typography";
// COMPONENTS
import { ActiveLink } from "./active-link";
// UTILS
import { toast } from "react-toastify";


export const UserAccountNavigation = () => {

    const handleLogOutUser = async () => {
        const { error } = await firebaseLogoutUser();
        if (error) {
            toast.error(error.message);
            return;
        }
        toast.success("À bientôt 👋");
    };

    return (
        <Box className="hidden md:flex flex-col gap-7">
            <div className="flex flex-col gap-3">
                <Typography variant="caption2" weight="medium">
                    <ActiveLink href="/mon-espace">
                        Mon compte
                    </ActiveLink>
                </Typography>
            </div>

            <Button onClick={handleLogOutUser} variant="danger">
                Déconnexion
            </Button>
        </Box>
    )
}