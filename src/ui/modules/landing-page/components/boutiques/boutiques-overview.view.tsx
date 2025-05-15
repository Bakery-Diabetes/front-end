// DESIGN SYSTEM
import { Typography } from "@/ui/design-system/typography/typography";
import { Button } from "@/ui/design-system/button/button";
import { CardBoutique } from "@/ui/design-system/card-boutique/cardBoutique";
// UTILS
import { useState, useEffect } from "react";
// ICONS
import { BsArrowRight, BsArrowLeft } from "react-icons/bs";
// COMPONENTS
import { Container } from "@/ui/components/container/container";
import { sanityFetch } from "@/lib/sanity";





const capitalize = (str: string) =>
  str.charAt(0).toUpperCase() + str.slice(1);

type Boutique = {
  _id: string;
  name: string;
  location: {
    address?: string;
    commune?: string;
    lat?: number;
    lng?: number;
  };
  categorie: string[];
  slug: { current: string };
  photos?: { asset: { url: string } }[];
};

export const BoutiquesOverviewView = () => {

  const [boutiques, setBoutiques] = useState<Boutique[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await sanityFetch(`*[_type == "boutique" && publie == true] | order(_createdAt desc)[0...4] {
          _id,
          name,
          location {
            address,
            commune,
            lat,
            lng
          },
          categorie,
          slug,
          photos[] {
            asset -> { url }
          }
        }`);        
        setBoutiques(data);
      } catch (err) {
        console.error("❌ Erreur de chargement des boutiques :", err);
      }
    };

    fetchData();
  }, []);

  


  const [index, setIndex] = useState(0);

  const prev = () => setIndex((prev) => (prev > 0 ? prev - 1 : boutiques.length - 1));
  const next = () => setIndex((prev) => (prev < boutiques.length - 1 ? prev + 1 : 0));

  return (
    <Container className="bg-primary-beige py-10" noPadding={true}>
      <div className="flex justify-between items-center mb-6">
        <Typography variant="h2" component="h2">
            Visitez les boutiques
        </Typography>
        <Button size="medium" variant="secondary" icon={{ icon: BsArrowRight }}>
            Voir les boutiques
        </Button>
      </div>

      {/* Grid des boutiques */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {boutiques.map((shop) => (
            <CardBoutique
              key={shop._id}
              name={shop.name}
              commune={shop.location?.commune}
              tags={shop.categorie?.map(c => capitalize(c))}
              image={shop.photos?.[0]?.asset?.url ?? "/assets/images/hero.jpg"}
              slug={shop.slug?.current}
            />
        ))}
      </div>

      {/* Navigation */}
      <div className="flex justify-end gap-3 mt-6">
        <Button variant="ico" iconTheme="secondary" iconPosition="right" icon={{ icon: BsArrowLeft }} />
        <Button variant="ico" iconTheme="secondary" iconPosition="right" icon={{ icon: BsArrowRight }} />
      </div>
    </Container>
  );
};
