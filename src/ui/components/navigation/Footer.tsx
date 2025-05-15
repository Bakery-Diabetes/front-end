// DESIGN SYSTEM
import { Logo } from "@/ui/design-system/logo/logo";
import { Typography } from "@/ui/design-system/typography/typography";
// LIBRARY
import Link from "next/link";
import { v4 as uuidv4 } from "uuid";
// COMPONENT
import { Container } from "../container/container";
import { ActiveLink } from "./active-link";
// DATA
import { footerApplicationLinks, footerLinks, footerUsersLinks } from "./app-links";
import { AppLinks, FooterLinks } from "@/types/app-links";
import { LinkTypes } from "@/lib/link-type";
import { SocialButtons } from "./social-buttons";


export const Footer = () => {

    const currentYear = new Date().getFullYear();

    // map data in footerLinks => @navigation/app-links.tsx
    const footerNavigationList = footerLinks.map((columnLinks) => (
        <FooterLink key={uuidv4()} data={columnLinks} />
    ))

    return (
        <Container className="bg-primary-beige border-2 border-primary mx-auto max-w-[92%] 2xl:max-w-screen-xl w-full rounded pt-16 mb-20">
            <div className="flex flex-col items-center gap-12 md:flex-row md:justify-between">
                <div className="flex flex-col items-center text-center gap-6 md:items-start md:text-left">
                    {/* LOGO */}
                    <Link href="/">
                        <div>
                            <Logo size="large" />
                        </div>
                    </Link>

                    <Typography variant="caption3" className="underline link ">
                        info@bakeryanddiabetes.be
                    </Typography>

                    <div className="">
                        <SocialButtons />
                    </div>
                </div>
                <div className="flex flex-col gap-12 md:flex-row md:gap-7">
                    {footerNavigationList}
                </div>
            </div>
            <div className="pt-9 pb-11 space-y-11">
                <hr className="text-primary border w-full"/>
                <div className="flex flex-col items-center gap-5 md:flex-row md:justify-between md:gap-0">
                    <Typography variant="body-sm" className="text-center md:text-left">
                        {`© ${currentYear} Bakery & Diabetes. Tous droits réservés.`}
                    </Typography>
                    <Typography variant="body-sm" weight="regular" className="text-center md:text-left">
                        {`Made with passion & ❤️ by `}  
                            <a href="https://hamzasenhaji.vercel.app/" target="_blank" className="underline link">
                                Hamza Senhaji    
                            </a>
                    </Typography>
                </div>
            </div>
        </Container>
    )
};


interface footerLinkProps {
    data: FooterLinks;
}

// Component list with title
const FooterLink = ({ data }: footerLinkProps) => {

    const LinksList = data.links.map((link) => (
        <div key={uuidv4()}>
            {link.type === LinkTypes.INTERNAL && (
                <ActiveLink  href={link.baseUrl} className="footer-link">
                    {link.label}
                </ActiveLink>    
            )}
            {link.type === LinkTypes.EXTERNAL && (
                <a 
                    href={link.baseUrl} 
                    target="_blank" 
                    className="footer-link"
                >
                    {link.label}
                </a>     
            )} 
        </div>
        
    ))

    return (
        <div className="min-w-[190px] w-full sm:w-auto flex flex-col items-center text-center md:items-start md:text-left">
            <Typography 
                variant="caption1" 
                weight="bold" 
                className="pb-5"
            >
                {data.label}
            </Typography>
            <Typography
                variant="caption3"
                weight="regular"
                className="space-y-4"
            >
                {LinksList}
            </Typography>
        </div>    
    )
    
}