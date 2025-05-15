import { Logo } from "@/ui/design-system/logo/logo"
import { Container } from "../container/container"
import { Typography } from "@/ui/design-system/typography/typography"
import { Button } from "@/ui/design-system/button/button"
import Link from "next/link"
import { ActiveLink } from "./active-link"

interface Props {}

export const Navigation = ({}: Props) => {
    return (
        <div className="border-b-2 border-primary bg-primary-beige">
            <Container className="flex items-center justify-between py-1.5 gap-7">
                {/* LOGO */}
                <Link href="/">
                    <div>
                        <Logo size="small" />
                    </div>
                </Link>
                
                <div className="flex items-center gap-7">
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
                </div>
            </Container>
        </div>
    )
}