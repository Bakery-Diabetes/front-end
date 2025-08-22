// TYPES
import type { Boutique, Horaire } from "@/types/boutique-types"
// COMPONENTS
import { Container } from "@/ui/components/container/container";
// DESIGN SYSTEM
import { Button } from "@/ui/design-system/button/button";
import { Typography } from "@/ui/design-system/typography/typography";
// UTILS
import BoutiqueGalerie from "./boutiqueGalerie/boutiqueGalerie";
// ICONS
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram, FaFacebookF, FaTiktok } from "react-icons/fa";


const formatHeure = (val: string) => val;


    const ligneAdresse = (full: string) => {
        const parts = full.split(",").map(p => p.trim()).filter(Boolean);
        return {
            line1: parts[0] || full,
            line2: parts[1] || "",
        };
    };

    const DAYS = [
        "Lundi",
        "Mardi",
        "Mercredi",
        "Jeudi",
        "Vendredi",
        "Samedi",
        "Dimanche",
    ] as const;
  

  

  export const BoutiqueDetailView = ({ boutique }: { boutique: Boutique }) => {

    const adresse = boutique.adresse ?? "";
    const adresseLines = boutique.adresse ? ligneAdresse(adresse) : null;

    return (
    <Container className="py-5">

    
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* principale */}
            {boutique.photoURL && (
                <BoutiqueGalerie photos={[boutique.photoURL]} />
            )}

            {/* infos */}
            <div className="space-y-8 border-primary border p-6 rounded">

                <Typography variant="h3" component="h1">
                    {boutique.displayName}
                </Typography>

                <Typography variant="body-base">
                    {boutique.description}
                </Typography>

                <hr />

                {/*---- Infos pratiques ----*/}
                <div>

                    <Typography variant="lead" component="h2">
                        Infos pratiques
                    </Typography>

                    <div className="mt-4 space-y-3">


                        {/*==== Adresse ====*/}
                        {adresseLines && (
                            <div className="space-y-1">
                                <a
                                    href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(adresse)}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="underline text-primary block space-y-1"
                                >
                                    <Typography variant="body-base">{adresseLines.line1}</Typography>

                                    {adresseLines.line2 && (
                                        <Typography variant="body-base">{adresseLines.line2}</Typography>
                                    )}
                                </a>
                            </div>
                        )}


                        {/*==== téléphone ====*/}
                        {boutique.phoneNumber && (
                            <Typography variant="body-base">
                                <a 
                                href={`tel:${boutique.phoneNumber.replace(/\s+/g, "")}`} 
                                className="underline"
                                >
                                {boutique.phoneNumber}
                                </a>
                            </Typography>
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

                        {/*---- website ----*/}
                        {boutique.website && (
                            <Typography variant="body-base">
                                <a 
                                    href={boutique.website} 
                                    target="_blank" 
                                    rel="noreferrer" 
                                    className="underline"
                                >
                                    {boutique.website.replace(/^https?:\/\//, "")}
                                </a>
                            </Typography>
                        )}

                        {/*---- socials medias ----*/}
                        <div className="flex gap-1 mt-2">
                            {boutique.instagram && (
                                <Button
                                    baseUrl={boutique.instagram}
                                    variant="ico"
                                    linkType="external"
                                    size="small"
                                >
                                    <FaInstagram />
                                </Button>
                            )}
                            {boutique.facebook && (
                                <Button
                                    baseUrl={boutique.facebook}
                                    variant="ico"
                                    linkType="external"
                                    size="small"
                                >
                                    <FaFacebookF />
                                </Button>
                            )}
                            {boutique.twitter && (
                                <Button
                                    baseUrl={boutique.twitter}
                                    variant="ico"
                                    linkType="external"
                                    size="small"
                                >
                                    <FaXTwitter />
                                </Button>
                            )}
                            {boutique.tiktok && (
                                <Button
                                    baseUrl={boutique.tiktok}
                                    variant="ico"
                                    linkType="external"
                                    size="small"
                                >
                                    <FaTiktok />
                                </Button>
                            )}
                        </div>
                    </div>
                    
                </div>

                <hr />

                {/*---- Horaire ----*/}
                {boutique.horaires && boutique.horaires.length > 0 && (
                    <div>
                        <Typography variant="lead">Horaire</Typography>

                        <div className="mt-4 space-y-2">
                            {boutique.horaires.map((h: Horaire, i: number) => (
                                <div key={i} className="flex gap-4">
                                    <Typography variant="body-base" className="w-20 capitalize">
                                        {h.jour ?? DAYS[i]}
                                    </Typography>
                                    <Typography variant="body-base" className="w-30 capitalize">
                                        {h.ferme
                                        ? "Fermé"
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
                    {boutique.must && (
                        <div>
                            <Typography variant="lead">
                                Le Must
                            </Typography>

                            <div className="mt-4">
                                <Typography variant="body-base">
                                    {boutique.must}
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