// COMPONENTS
import { Container } from "@/ui/components/container/container"
// DESIGN SYSTEM
import { Button } from "@/ui/design-system/button/button";
import { Typography } from "@/ui/design-system/typography/typography"
import Image from "next/image"
// ICONS
import { BsArrowRight, BsShop } from "react-icons/bs";
import { FaRegStar } from "react-icons/fa";
import { IoNewspaperOutline } from "react-icons/io5";


export const HeroTopView = () => {
    return (
        <Container className="relative overflow-hidden bg-primary p-0.5 rounded my-10 flex flex-col gap-0.5" noPadding={true}>
            <div className="grid grid-cols-1 md:grid-cols-2 items-center w-full gap-0.5">
                <div className="flex flex-col justify-center space-y-6 bg-primary-beige w-full h-full rounded p-5 lg:p-10 order-2 md:order-1">
                    <Typography 
                        variant="h1" 
                        component="h1" 
                        className="max-w-lg"
                    >
                        <span className="text-secondary">0%</span> de sucre,<br/>
                        <span className="text-secondary">100%</span> de plaisir!
                    </Typography>
                    <Typography 
                        variant="body-lg" 
                        component="p" 
                        className="max-w-xl"
                    >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                        varius enim in eros elementum tristique. Duis cursus, mi quis
                        viverra ornare, eros dolor interdum nulla, ut commodo diam libero
                        vitae erat.
                    </Typography>
                    <div>
                        <Button baseUrl="">
                            En savoir plus 
                        </Button>
                    </div>
                </div>

                <div className="relative order-1 md:order-2">
                    <Image
                        src="/assets/images/hero.jpg"
                        alt="image hero"
                        width={223}
                        height={340}
                        className="w-full rounded"
                    />
                </div>
           
            </div>

            {/* Sections d’information */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-0.5">
                <div className="box-hero">
                    <FaRegStar className="text-4xl text-primary" />
                    <Typography variant="h5">
                        Mettez en lumière votre boutique
                    </Typography>
                    <Typography variant="body-sm">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </Typography>
                    <Button 
                        size="small" 
                        variant="secondary" 
                        icon={{ icon: BsArrowRight }}
                    >
                        S'inscrire
                    </Button>
                </div>

                <div className="box-hero">
                    <BsShop className="text-4xl text-primary" />
                    <Typography variant="h5">
                        Découvrez une multitude de boutiques à Bruxelles
                    </Typography>
                    <Typography variant="body-sm">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </Typography>
                    <Button 
                        size="small" 
                        variant="secondary" 
                        icon={{ icon: BsArrowRight }}
                    >
                        Les boutiques
                    </Button>
                </div>

                <div className="box-hero">
                    <IoNewspaperOutline className="text-4xl text-primary" />
                    <Typography variant="h5">
                        Restez informé des dernières nouveautés
                    </Typography>
                    <Typography variant="body-sm">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </Typography>
                    <Button 
                        size="small" 
                        variant="secondary" 
                        icon={{ icon: BsArrowRight }}
                    >
                        Notre blog
                    </Button>
                </div>
            </div>
        
        </Container>
    );
}