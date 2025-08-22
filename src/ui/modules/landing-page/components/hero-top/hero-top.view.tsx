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
                        className="max-w-lg "
                    >
                        Faites vous plaisir, sans compromis!
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
                        <Button baseUrl="/about">
                            En savoir plus 
                        </Button>
                    </div>
                </div>

                <div className="relative order-1 md:order-2">
                    <div className=" rounded border-2 border-primary overflow-hidden">
                        <div className="aspect-[4/3] md:aspect-[16/10]">

                            <Image
                                src="/assets/images/hero.jpg"
                                alt="image hero"
                                width={223}
                                height={340}
                                className="w-full rounded"
                            />
                        </div>

                        <Image
                            src="/assets/svg/ig_friendly.svg"
                            alt="sticker ig friendly"
                            width={100}
                            height={100}
                            aria-hidden
                            className="
                                absolute z-9
                                right-6 md:-left-2 -translate-x-1/2 -bottom-6 md:top-20
                                w-28 md:w-40
                            "
                        />

                        <Image
                            src="/assets/svg/croissant.svg"
                            alt="sticker croissant"
                            width={100}
                            height={100}
                            aria-hidden
                            className="
                                absolute z-10
                                left-3/4 -translate-x-1/2 top-16 md:top-10
                                w-28 md:w-32
                            "
                        />

                        <Image
                            src="/assets/svg/pain.svg"
                            alt="sticker pain"
                            width={100}
                            height={100}
                            aria-hidden
                            className="
                                absolute z-10
                                left-1/4 -translate-x-1/2 bottom-10 md:bottom-10
                                w-28 md:w-32
                            "
                        />
    
                    </div>
                </div>
           
            </div>

            {/* Sections d’information */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-0.5">
                <div className="box-hero">
                    <Image
                        src="/assets/svg/miseLumiere.svg"
                        alt="illustration mise en lumière"
                        width={80}
                        height={80}
                        className="inline-block"
                    />
                    <Typography variant="h5">
                        Mettez en lumière votre boutique
                    </Typography>
                    <Typography variant="body-sm">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </Typography>
                    <div>
                        <Button 
                            size="small" 
                            variant="secondary" 
                            icon={{ icon: BsArrowRight }}
                            baseUrl="/connexion/inscription"
                        >
                            S&apos;inscrire
                        </Button>    
                    </div>
                    
                </div>

                <div className="box-hero">
                    <Image
                        src="/assets/svg/boutique.svg"
                        alt="illustration mise en lumière"
                        width={100}
                        height={100}
                        className="inline-block -mt-2"
                    />
                    <Typography variant="h5">
                        Découvrez une multitude de boutiques à Bruxelles
                    </Typography>
                    <Typography variant="body-sm" className="mb-4">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </Typography>

                    <div>
                        <Button 
                            size="small" 
                            variant="secondary" 
                            icon={{ icon: BsArrowRight }}
                            baseUrl="/boutiques"
                        >
                            Les boutiques
                        </Button>    
                    </div>
                    
                </div>

                <div className="box-hero">
                    <Image
                        src="/assets/svg/article.svg"
                        alt="illustration mise en lumière"
                        width={80}
                        height={80}
                        className="inline-block -mt-2"
                    />
                    <Typography variant="h5">
                        Restez informé des dernières nouveautés
                    </Typography>
                    <Typography variant="body-sm">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </Typography>

                    <div>
                        <Button 
                            size="small" 
                            variant="secondary" 
                            icon={{ icon: BsArrowRight }}
                        >
                            Notre blog
                        </Button>    
                    </div>
                    
                </div>
            </div>
        
        </Container>
    );
}