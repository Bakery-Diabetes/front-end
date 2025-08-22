// CONTEXT
import { useAuth } from "@/context/authUserContext";
// DESIGN SYSTEM
import { Button } from "@/ui/design-system/button/button";
import { Logo } from "@/ui/design-system/logo/logo";
import { Typography } from "@/ui/design-system/typography/typography";
// COMPONENTS
import { Container } from "../container/container";
import { AccountAvatarNavLink } from "./account-avatar-link";
import { ActiveLink } from "./active-link";
// NEXT
import Link from "next/link";
import { LogoSecondary } from "@/ui/design-system/logo/logoSecondary";
import { useState } from "react";
import { CiMenuBurger } from "react-icons/ci";
import { IoIosMenu } from "react-icons/io";
import { SlMenu } from "react-icons/sl";
import { firebaseLogoutUser } from "@/api/authentication";
import { toast } from "react-toastify";

export const Navigation = () => {

    const { authUser } = useAuth();
    const [open, setOpen] = useState(false);


    const authentificationSystem = (
        <div className="flex items-center gap-2">
            <Button 
                baseUrl="/connexion" 
                size="small" 
                variant="secondary"
            >
                Connexion
            </Button>
            <Button 
                baseUrl="/connexion/inscription" 
                size="small"
            >
                Rejoindre
            </Button>
        </div>
    );
    
    // Deconnexion
    const handleLogout = async () => {
        const { error } = await firebaseLogoutUser();
        if (error) {
            toast.error(error.message);
            return;
        }
        toast.success("À bientôt 👋");
        setOpen(false);
    };

    return (
        <div className="border-b-2 border-primary bg-primary-beige">
            <Container className="flex items-center justify-between py-1.5 gap-7">

                {/*==== Logo ====*/}
                <Link href="/">
                    <div>
                        <span className="hidden md:block">
                            <Logo size="large" />
                        </span>

                        {/*---- mobile ----*/}
                        <span className="block md:hidden">
                            <LogoSecondary size="small" />
                        </span>
                    </div>
                </Link>
                
                {/*==== Desktop ====*/}
                <div className="hidden md:flex items-center gap-7">
                    <Typography 
                        variant="caption3" 
                        component="div" 
                        className="flex items-center gap-7"
                    >
                        <ActiveLink href="/design-system" className="nav-link">Design System</ActiveLink>
                        <ActiveLink href="/about" className="nav-link">À Propos</ActiveLink>
                        <ActiveLink href="/boutiques" className="nav-link">Boutiques</ActiveLink>
                        <ActiveLink href="/contact" className="nav-link">Contact</ActiveLink>
                    </Typography>

                    {!authUser ? authentificationSystem : <AccountAvatarNavLink />}
                    
                </div>

                {/*==== Burger ====*/}
                <div className="md:hidden">
                    <Button
                        variant="secondary"
                        type="button"
                        onClick={() => setOpen(true)}
                        className="inline-flex items-center justify-center"
                        aria-label="Ouvrir le menu"
                        aria-controls="mobile-menu"
                        aria-expanded={open}
                    >
                        <SlMenu />
                    </Button>
                </div>
            </Container>

            {/* menu mobile open */}
            <div className={`md:hidden ${open ? "visible" : "invisible"}`}>
                <div
                    className={`fixed inset-0 z-40 bg-black/40 transition-opacity duration-500 ${open ? "opacity-100" : "opacity-0"}`}
                    onClick={() => setOpen(false)}
                />
                    <aside
                        id="mobile-menu"
                        className={`fixed top-0 right-0 z-50 h-full w-80 max-w-[85%] bg-primary-beige border-l-2 border-primary shadow-xl transition-transform duration-100 ${open ? "translate-x-0" : "translate-x-full"}`}
                    >
                        <div className="flex items-center justify-between p-4 border-b-2 border-primary">
                            <LogoSecondary size="small" />
                            <Button
                                onClick={() => setOpen(false)}
                                className="inline-flex items-center justify-center rounded-xl border border-primary px-3 py-2"
                                aria-label="Fermer le menu"
                            >
                                <SlMenu />
                            </Button>
                        </div>

                        <nav className="flex flex-col gap-4 p-4">
                            <Typography 
                                variant="caption1" 
                                component="div" 
                                className="flex flex-col gap-7"
                            >
                                <ActiveLink href="/design-system" className="nav-link" onClick={() => setOpen(false)}>Design System</ActiveLink>
                                <ActiveLink href="/about" className="nav-link" onClick={() => setOpen(false)}>À Propos</ActiveLink>
                                <ActiveLink href="/boutiques" className="nav-link" onClick={() => setOpen(false)}>Boutiques</ActiveLink>
                                <ActiveLink href="/contact" className="nav-link" onClick={() => setOpen(false)}>Contact</ActiveLink>
                            </Typography>
                        </nav>
                        <div className="p-4 mt-2 border-t-2 border-primary">
                            {!authUser ? (
                            <div className="grid gap-2">
                                <Button baseUrl="/connexion" variant="secondary" size="small" fullWidth>
                                    Connexion
                                </Button>
                                <Button baseUrl="/connexion/inscription" size="small" fullWidth>
                                    Rejoindre
                                </Button>
                            </div>
                            ) : (
                                <div className="flex flex-col gap-6">
                                    <AccountAvatarNavLink />
                                    <Button onClick={handleLogout} variant="danger" fullWidth>
                                        Déconnexion
                                    </Button>
                                </div>
                            )}
                        </div>
                    </aside>
                </div>
        </div>
    )
}