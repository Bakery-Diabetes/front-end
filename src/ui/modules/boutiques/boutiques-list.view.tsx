// TYPES
import { Boutique } from "@/types/boutique-types";
// COMPONENTS
import { Container } from "@/ui/components/container/container";
// DESIGN SYSTEM
import { CardBoutique } from "@/ui/design-system/card-boutique/cardBoutique";
import { Typography } from "@/ui/design-system/typography/typography";
// UTILS
import dynamic from "next/dynamic";
import { useState } from "react";
import FilterBar from "./filterBar/filterBar";

const Map = dynamic(() => import("@/ui/components/maps/maps"), { ssr: false });

interface Props {
  boutiques: Boutique[]
  filtered: Boutique[]
  onFilter: (filtered: Boutique[]) => void
}

const extractCommune = (adresse?: string) => {
  if (!adresse) return "";
  const part = adresse.split(",").map(s => s.trim()).filter(Boolean);
  const communePart = part.length >= 2 ? part[part.length - 2] : part[0];
  return communePart.replace(/^\d{3,5}\s*/, "");
};

export const BoutiquesListView = ({ boutiques, filtered, onFilter }: Props) => {

    const [showMap, setShowMap] = useState(false);

    const toggleMap = () => setShowMap((prev) => !prev);
    
  return (
    <Container className="bg-primary-beige min-h-screen py-5 px-4 md:px-10">

        <FilterBar 
            allBoutiques={boutiques} 
            onFilter={onFilter} 
            setShowMap={setShowMap}
            showMap={showMap}
        
        />

        {showMap ? (
            <div className="mt-6">
                <Map 
                    boutiques={filtered}
                />
            </div>
        ) : filtered.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 mt-8">
                {filtered.map((boutique) => (
                    <CardBoutique
                        key={boutique.uid ?? boutique.displayName}
                        uid={boutique.uid}
                        name={boutique.displayName ?? "Boutique"}
                        image={boutique.photoURL ?? "https://placehold.co/600x400"}
                        tags={boutique.categories ?? []}
                        commune={extractCommune(boutique.adresse)}
                    />
                ))}
            </div>
        ) : (
            <div className="mt-10 text-center text-gray-600">
                <Typography variant="body-base">
                    Aucune boutique ne correspond à vos critères.
                </Typography>
            </div>
        )}

    </Container>
  )
}
