// ui/modules/boutique/boutique-detail.view.tsx

import Image from "next/image";
import { Typography } from "@/ui/design-system/typography/typography";
import { Container } from "@/ui/components/container/container";
import { FaInstagram, FaFacebook, FaGlobe, FaFacebookF, FaTiktok, FaLinkedinIn } from "react-icons/fa";
import type { Boutique, Horaire, Photo, ReseauSocial } from "@/types/boutique-types"
import BoutiqueGalerie from "./boutiqueGalerie/boutiqueGelerie";
import { Button } from "@/ui/design-system/button/button";
import { FaXTwitter } from "react-icons/fa6";

const formatHeure = (val: string) =>
  new Date(val).toLocaleTimeString("fr-BE", {
    hour: "2-digit",
    minute: "2-digit",
  })


  const extraireAdresseLisible = (fullAddress: string) => {
    const parts = fullAddress.split(',').map(p => p.trim());
  
    const numero = parts[0] || "";
    const rue = parts[1] || "";
    const postalCode = parts[5] || "";
  
    return {
      rueEtNumero: `${numero}, ${rue}`,
      code: `${postalCode}`,
    };
  };
  

  

  export const BoutiqueDetailView = ({ boutique }: { boutique: Boutique }) => {
    return (
    <Container className="py-5">

    
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Colonne image principale */}
            {boutique.photos && boutique.photos.length > 0 && (
                <BoutiqueGalerie photos={boutique.photos} />
            )}

            {/* Colonne infos */}
            <div className="space-y-8 border-primary border p-6 rounded">

                <Typography variant="h3" component="h1">
                    {boutique.name}
                </Typography>

                <Typography variant="body-base">
                    {boutique.description}
                </Typography>

                <hr />

                {/* Infos pratiques */}
                <div>

                    <Typography variant="lead" component="h2">
                        Infos pratiques
                    </Typography>

                    <div className="mt-4 space-y-3">

                    {boutique.location?.address && (
                        <div className="space-y-1">
                            {(() => {
                            const { rueEtNumero, code } = extraireAdresseLisible(boutique.location.address);
                            return (
                                    <a
                                        href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(boutique.location.address)}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="underline text-primary block space-y-1"
                                    >
                                    
                                        <Typography variant="body-base">{rueEtNumero}</Typography>
                                        <Typography variant="body-base">
                                            {code} {boutique.location.commune}
                                        </Typography>
                                    
                                    </a>
                            );
                            })()}
                        </div>
                    )}

                        {boutique.email && 

                            <Typography variant="body-base">
                                <a 
                                    href={`mailto:${boutique.email}`} 
                                    className="underline"
                                >
                                    {boutique.email}
                                </a>
                            </Typography>

                        }

                        {boutique.siteWeb && (
                            <Typography variant="body-base">
                                <a 
                                    href={boutique.siteWeb} 
                                    target="_blank" 
                                    rel="noreferrer" 
                                    className="underline"
                                >
                                    {boutique.siteWeb.replace(/^https?:\/\//, "")}
                                </a>
                            </Typography>
                        )}

                        {boutique.reseauxSociaux && boutique.reseauxSociaux.length > 0 && (

                            <div className="flex gap-1 mt-2">
                                {boutique.reseauxSociaux.map((rs: ReseauSocial, i: number) => {
                                    const icons: any = {
                                        instagram: FaInstagram,
                                        facebook: FaFacebookF,
                                        twitter: FaXTwitter,
                                        tiktok: FaTiktok,
                                        linkedin: FaLinkedinIn,

                                    }

                                    const Icon = icons[rs.plateforme] || FaGlobe

                                    return (
                                        <Button
                                            key={i}
                                            baseUrl={rs.url}
                                            variant="ico"
                                            linkType="external"
                                            size="small"
                                        >
                                            <Icon />
                                        </Button>
                                    )
                                })}
                            </div>
                        )}    
                    </div>
                    
                </div>

                <hr />

                {/* Horaire */}
                {boutique.horaires && boutique.horaires?.length > 0 && (
                    <div>
                        <Typography variant="lead">
                            Horaire
                        </Typography>

                        <div className="mt-4 space-y-2">
                            {boutique.horaires.map((h: Horaire, i: number) => (


                                <div key={i} className="flex gap-4">
                                    <Typography variant="body-base" className="w-20 capitalize">
                                        {h.jour}
                                    </Typography>
                                    <Typography variant="body-base" className="w-30 capitalize">
                                        {h.ferme 
                                            ? "fermé"
                                            : h.ouverture && h.fermeture
                                            ? `${formatHeure(h.ouverture)} - ${formatHeure(h.fermeture)}`
                                            : "Horaire non défini"}
                                    </Typography>
                                </div>

                            ))}
                        </div>
                    </div>
                )}

                <hr />

                {/* Must */}
                <div>
                    {boutique.produitPhare && (
                        <div>
                            <Typography variant="lead">
                                Le Must
                            </Typography>

                            <div className="mt-4">
                                <Typography variant="body-base">
                                    {boutique.produitPhare}
                                </Typography>    
                            </div>
                            
                        </div>
        
                    )}    
                </div>
                

            </div>
        </div>
    </Container>
  )
}